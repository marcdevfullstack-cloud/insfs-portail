"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowLeft, ArrowRight, CheckCircle, GraduationCap, Eye, EyeOff, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { usePortalAuth, storeAuth } from "@/hooks/usePortalAuth";
import type { EligibilityResult } from "@/types";
import api from "@/lib/api";

// ── Step 1: Eligibility check ────────────────────────────
const eligibilitySchema = z.object({
  last_name:     z.string().min(2, "Nom requis"),
  first_name:    z.string().min(2, "Prénom requis"),
  date_of_birth: z.string().min(1, "Date de naissance requise"),
});

// ── Step 2: Account creation ─────────────────────────────
const registerSchema = z.object({
  email:            z.string().email("Email invalide"),
  phone:            z.string().min(8, "Numéro requis (min 8 chiffres)"),
  password:         z.string().min(8, "Minimum 8 caractères"),
  password_confirmation: z.string(),
}).refine((d) => d.password === d.password_confirmation, {
  message: "Les mots de passe ne correspondent pas",
  path: ["password_confirmation"],
});

type EligibilityForm  = z.infer<typeof eligibilitySchema>;
type RegisterForm     = z.infer<typeof registerSchema>;

export default function InscriptionPage() {
  const router = useRouter();
  const { setUser, setApplication } = usePortalAuth();

  const [step, setStep] = useState<1 | 2>(1);
  const [eligibility, setEligibility] = useState<EligibilityResult | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState("");

  // Step 1 form
  const eligibilityForm = useForm<EligibilityForm>({
    resolver: zodResolver(eligibilitySchema),
  });

  // Step 2 form
  const registerForm = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  // ── Step 1: Check eligibility ──────────────────────────
  const checkEligibility = async (data: EligibilityForm) => {
    setApiError("");
    try {
      const res = await api.post("/portal/check-eligibility", data);
      const result: EligibilityResult = res.data;
      setEligibility(result);

      if (result.found && !result.already_registered) {
        setStep(2);
      }
    } catch {
      setApiError("Erreur lors de la vérification. Réessayez.");
    }
  };

  // ── Step 2: Register ───────────────────────────────────
  const register = async (data: RegisterForm) => {
    if (!eligibility?.admitted_student_id) return;
    setApiError("");
    try {
      const res = await api.post("/portal/register", {
        admitted_student_id: eligibility.admitted_student_id,
        ...data,
      });
      storeAuth(res.data.token, res.data.user);
      setUser(res.data.user);
      setApplication(res.data.application);
      router.push("/espace");
    } catch (err: unknown) {
      const e = err as { response?: { data?: { message?: string; errors?: Record<string, string[]> } } };
      const errs = e.response?.data?.errors;
      if (errs) {
        const first = Object.values(errs)[0]?.[0];
        setApiError(first || "Une erreur est survenue.");
      } else {
        setApiError(e.response?.data?.message || "Une erreur est survenue.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-[#1a3a6b] text-white px-4 pt-12 pb-8">
        <div className="max-w-sm mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-white/70 text-sm mb-6 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-xs text-white/60">Portail Étudiant INSFS</p>
              <p className="font-bold text-lg">Créer mon compte</p>
            </div>
          </div>

          {/* Progress */}
          <div className="flex items-center gap-2 mt-4">
            {[1, 2].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                    s < step
                      ? "bg-[#009A44] text-white"
                      : s === step
                      ? "bg-white text-[#1a3a6b]"
                      : "bg-white/20 text-white/60"
                  }`}
                >
                  {s < step ? <CheckCircle className="w-4 h-4" /> : s}
                </div>
                <span className={`text-xs ${s === step ? "text-white font-medium" : "text-white/50"}`}>
                  {s === 1 ? "Éligibilité" : "Compte"}
                </span>
                {s < 2 && <div className="w-8 h-px bg-white/30 mx-1" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-8">
        <div className="max-w-sm mx-auto">

          {/* ── STEP 1 ── */}
          {step === 1 && (
            <form onSubmit={eligibilityForm.handleSubmit(checkEligibility)} className="flex flex-col gap-4">
              <div>
                <h2 className="text-lg font-bold text-gray-800 mb-1">Vérification d'éligibilité</h2>
                <p className="text-sm text-gray-500">
                  Renseignez vos informations exactement comme sur votre acte de naissance pour vérifier que vous êtes dans la liste des admis.
                </p>
              </div>

              <Input
                id="last_name"
                label="Nom de famille"
                placeholder="Ex: KOUAME"
                required
                error={eligibilityForm.formState.errors.last_name?.message}
                {...eligibilityForm.register("last_name")}
              />
              <Input
                id="first_name"
                label="Prénom(s)"
                placeholder="Ex: Jean-Baptiste"
                required
                error={eligibilityForm.formState.errors.first_name?.message}
                {...eligibilityForm.register("first_name")}
              />
              <Input
                id="date_of_birth"
                label="Date de naissance"
                type="date"
                required
                error={eligibilityForm.formState.errors.date_of_birth?.message}
                {...eligibilityForm.register("date_of_birth")}
              />

              {/* Results */}
              {eligibility && !eligibility.found && (
                <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 flex gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-red-700">Non trouvé</p>
                    <p className="text-xs text-red-600 mt-0.5">
                      {eligibility.message || "Vos informations ne correspondent pas à notre liste. Vérifiez l'orthographe et la date de naissance."}
                    </p>
                  </div>
                </div>
              )}

              {eligibility?.found && eligibility.already_registered && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 flex gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-amber-700">Compte déjà créé</p>
                    <p className="text-xs text-amber-600 mt-0.5">
                      Un compte existe déjà pour cet admis.{" "}
                      <Link href="/connexion" className="underline font-medium">
                        Connectez-vous
                      </Link>
                    </p>
                  </div>
                </div>
              )}

              {apiError && (
                <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                  <p className="text-sm text-red-600">{apiError}</p>
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                loading={eligibilityForm.formState.isSubmitting}
                className="mt-2"
              >
                Vérifier mon éligibilité
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          )}

          {/* ── STEP 2 ── */}
          {step === 2 && eligibility?.found && (
            <form onSubmit={registerForm.handleSubmit(register)} className="flex flex-col gap-4">
              <div>
                <h2 className="text-lg font-bold text-gray-800 mb-1">Créer mon compte</h2>
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3 flex gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-emerald-700">Éligibilité confirmée</p>
                    <p className="text-xs text-emerald-600 mt-0.5">
                      {eligibility.school} — {eligibility.academic_year} — Année {eligibility.year_of_study}
                    </p>
                  </div>
                </div>
              </div>

              <Input
                id="email"
                label="Adresse email"
                type="email"
                placeholder="votre@email.com"
                required
                hint="Vous recevrez vos notifications sur cet email"
                error={registerForm.formState.errors.email?.message}
                {...registerForm.register("email")}
              />
              <Input
                id="phone"
                label="Numéro de téléphone"
                type="tel"
                placeholder="07 00 00 00 00"
                required
                error={registerForm.formState.errors.phone?.message}
                {...registerForm.register("phone")}
              />

              <div className="flex flex-col gap-1.5">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Mot de passe <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Min. 8 caractères"
                    className="h-11 w-full rounded-xl border border-gray-200 px-3.5 pr-11 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#1a3a6b]/25 focus:border-[#1a3a6b]"
                    {...registerForm.register("password")}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {registerForm.formState.errors.password && (
                  <p className="text-xs text-red-500">{registerForm.formState.errors.password.message}</p>
                )}
              </div>

              <Input
                id="password_confirmation"
                label="Confirmer le mot de passe"
                type="password"
                placeholder="Répétez votre mot de passe"
                required
                error={registerForm.formState.errors.password_confirmation?.message}
                {...registerForm.register("password_confirmation")}
              />

              {apiError && (
                <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                  <p className="text-sm text-red-600">{apiError}</p>
                </div>
              )}

              <div className="flex gap-3 mt-2">
                <Button
                  type="button"
                  variant="outline"
                  size="md"
                  onClick={() => { setStep(1); setApiError(""); setEligibility(null); }}
                  className="flex-1"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Retour
                </Button>
                <Button
                  type="submit"
                  size="md"
                  loading={registerForm.formState.isSubmitting}
                  className="flex-[2]"
                >
                  Créer mon compte
                </Button>
              </div>
            </form>
          )}

          <p className="text-center text-sm text-gray-500 mt-6">
            Déjà un compte ?{" "}
            <Link href="/connexion" className="text-[#1a3a6b] font-semibold hover:underline">
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
