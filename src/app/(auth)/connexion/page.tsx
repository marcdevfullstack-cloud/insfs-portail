"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { GraduationCap, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { usePortalAuth, storeAuth } from "@/hooks/usePortalAuth";
import api from "@/lib/api";

const schema = z.object({
  email: z.string().email("Email invalide"),
  password: z.string().min(1, "Mot de passe requis"),
});

type FormData = z.infer<typeof schema>;

export default function ConnexionPage() {
  const router = useRouter();
  const { setUser, setApplication } = usePortalAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setApiError("");
    try {
      const res = await api.post("/portal/login", data);
      storeAuth(res.data.token, res.data.user);
      setUser(res.data.user);
      setApplication(res.data.application);
      router.push("/espace");
    } catch (err: unknown) {
      const e = err as { response?: { data?: { message?: string; errors?: Record<string, string[]> } } };
      const msg =
        e.response?.data?.errors?.email?.[0] ||
        e.response?.data?.message ||
        "Connexion impossible. Vérifiez vos identifiants.";
      setApiError(msg);
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
              <p className="text-xs text-white/60">Portail Étudiant</p>
              <p className="font-bold text-lg">INSFS</p>
            </div>
          </div>
          <h1 className="text-2xl font-bold">Connexion</h1>
          <p className="text-white/60 text-sm mt-1">
            Accédez à votre espace d'inscription
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="flex-1 px-4 py-8">
        <div className="max-w-sm mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <Input
              id="email"
              label="Adresse email"
              type="email"
              placeholder="votre@email.com"
              autoComplete="email"
              error={errors.email?.message}
              {...register("email")}
            />

            <div className="flex flex-col gap-1.5">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Mot de passe <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="h-11 w-full rounded-xl border border-gray-200 px-3.5 pr-11 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#1a3a6b]/25 focus:border-[#1a3a6b] transition-colors"
                  {...register("password")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-xs text-red-500">{errors.password.message}</p>
              )}
            </div>

            {apiError && (
              <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                <p className="text-sm text-red-600">{apiError}</p>
              </div>
            )}

            <Button type="submit" size="lg" loading={isSubmitting} className="mt-2">
              Se connecter
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Pas encore de compte ?{" "}
              <Link href="/inscription" className="text-[#1a3a6b] font-semibold hover:underline">
                Créer mon compte
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
