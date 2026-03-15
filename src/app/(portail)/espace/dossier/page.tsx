"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  ArrowLeft, ArrowRight, CheckCircle, Upload, X, Loader2,
  FileImage, AlertCircle, Send, Lock
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SignaturePad } from "@/components/signature/SignaturePad";
import { usePortalAuth } from "@/hooks/usePortalAuth";
import api from "@/lib/api";
import type { EnrollmentApplication, CorrectionField } from "@/types";

// ── Helpers ────────────────────────────────────────────────────────────────
function isCF(cf: CorrectionField[] | null | undefined, name: string) {
  return cf?.some((c) => c.field === name) ?? false;
}

function CorrectionNote({ field, cf }: { field: string; cf?: CorrectionField[] | null }) {
  const found = cf?.find((c) => c.field === field);
  if (!found) return null;
  return (
    <div className="flex items-start gap-1.5 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-2.5 py-1.5">
      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
      <span>{found.message}</span>
    </div>
  );
}

// ── Schema ────────────────────────────────────────────────────────────────
const renseignementsSchema = z.object({
  // Section I
  gender:         z.enum(["M", "F"], { required_error: "Civilité requise" }),
  last_name:      z.string().min(2, "Nom requis"),
  first_name:     z.string().min(2, "Prénom requis"),
  date_of_birth:  z.string().min(1, "Date de naissance requise"),
  place_of_birth: z.string().min(2, "Lieu de naissance requis"),
  nationality:    z.string().min(2, "Nationalité requise"),
  father_name:    z.string().optional(),
  mother_name:    z.string().optional(),
  marital_status: z.enum(["Célibataire", "Marié(e)", "Veuf(ve)", "Divorcé(e)"]).optional(),
  children_count: z.coerce.number().int().min(0).optional(),
  phone:          z.string().min(8, "Téléphone requis"),
  email:          z.string().email("Email invalide").optional().or(z.literal("")),
  // Statut
  status_type:            z.enum(["Fonctionnaire", "Boursier national", "Boursier étranger", "Non-boursier"], { required_error: "Statut requis" }),
  emploi:                 z.string().optional(),
  matricule_fonctionnaire:z.string().optional(),
  echelon:                z.string().optional(),
  categorie:              z.string().optional(),
  classe:                 z.string().optional(),
  // Diplômes
  diploma_cepe:     z.boolean().optional(),
  diploma_bepc:     z.boolean().optional(),
  diploma_bac:      z.boolean().optional(),
  diploma_bac_serie:z.string().optional(),
  other_diplomas:   z.string().optional(),
  // Entrée
  entry_date:       z.string().optional(),
  // Adresse
  address_quarter:  z.string().min(2, "Quartier requis"),
  address_apartment:z.string().optional(),
  address_phone:    z.string().min(8, "Téléphone requis"),
  postal_box:       z.string().optional(),
  vacation_address: z.string().optional(),
  tutor_name:       z.string().optional(),
  tutor_address:    z.string().optional(),
  tutor_phone:      z.string().optional(),
  // Santé
  has_health_issues:z.boolean().optional(),
  health_condition: z.string().optional(),
  doctor_info:      z.string().optional(),
});

type RenseignementsForm = z.infer<typeof renseignementsSchema>;

const STEP_LABELS = ["Identité", "État civil", "Statut", "Diplômes", "Adresse", "Santé", "Photo & Pièces", "Engagement"];

const DOC_TYPES: Record<string, string> = {
  CNI_PASSEPORT:      "CNI ou Passeport",
  EXTRAIT_NAISSANCE:  "Extrait de naissance",
  DIPLOME_BEPC:       "Diplôme BEPC",
  DIPLOME_BAC:        "Diplôme BAC",
  CERTIFICAT_TRAVAIL: "Certificat de travail",
  ATTESTATION_BOURSE: "Attestation de bourse",
  AUTRE_DIPLOME:      "Autre diplôme",
};

export default function DossierPage() {
  const router = useRouter();
  const { application, setApplication, user } = usePortalAuth();
  const app = application as EnrollmentApplication | null;

  const [step, setStep] = useState(1);
  const [apiError, setApiError] = useState("");
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Photo
  const photoInputRef = useRef<HTMLInputElement>(null);
  const [photoUploading, setPhotoUploading] = useState(false);
  const [photoUrl, setPhotoUrl] = useState<string | null>(app?.photo_url ?? null);

  // Documents
  const [docUploading, setDocUploading] = useState<string | null>(null);

  const cf = app?.correction_fields ?? null;
  const isReadOnly = !["BROUILLON", "CORRECTION_DEMANDEE"].includes(app?.status ?? "");
  const isCorrectionMode = app?.status === "CORRECTION_DEMANDEE";

  // ── Signatures ────────────────────────────────────────────────────────────
  const [sigRenseignements, setSigRenseignements] = useState<string | null>(
    app?.signatures?.find(s => s.signature_type === "ETUDIANT_RENSEIGNEMENTS")?.signature_image ?? null
  );
  const [sigEngagement, setSigEngagement] = useState<string | null>(
    app?.signatures?.find(s => s.signature_type === "ETUDIANT_ENGAGEMENT")?.signature_image ?? null
  );

  // ── Form ──────────────────────────────────────────────────────────────────
  const form = useForm<RenseignementsForm>({
    resolver: zodResolver(renseignementsSchema),
    defaultValues: {
      gender:         (app?.gender as "M" | "F" | undefined) ?? undefined,
      last_name:      app?.last_name ?? "",
      first_name:     app?.first_name ?? "",
      date_of_birth:  app?.date_of_birth?.substring(0, 10) ?? "",
      place_of_birth: app?.place_of_birth ?? "",
      nationality:    app?.nationality ?? "Ivoirienne",
      father_name:    app?.father_name ?? "",
      mother_name:    app?.mother_name ?? "",
      marital_status: (app?.marital_status as "Célibataire" | "Marié(e)" | "Veuf(ve)" | "Divorcé(e)" | undefined) ?? undefined,
      children_count: app?.children_count ?? 0,
      phone:          app?.phone ?? "",
      email:          app?.email ?? "",
      status_type:    (app?.status_type as "Fonctionnaire" | "Boursier national" | "Boursier étranger" | "Non-boursier" | undefined) ?? undefined,
      emploi:                  app?.emploi ?? "",
      matricule_fonctionnaire: app?.matricule_fonctionnaire ?? "",
      echelon:                 app?.echelon ?? "",
      categorie:               app?.categorie ?? "",
      classe:                  app?.classe ?? "",
      diploma_cepe:      app?.diploma_cepe ?? false,
      diploma_bepc:      app?.diploma_bepc ?? false,
      diploma_bac:       app?.diploma_bac ?? false,
      diploma_bac_serie: app?.diploma_bac_serie ?? "",
      other_diplomas:    app?.other_diplomas ?? "",
      entry_date:        app?.entry_date?.substring(0, 10) ?? "",
      address_quarter:   app?.address_quarter ?? "",
      address_apartment: app?.address_apartment ?? "",
      address_phone:     app?.address_phone ?? "",
      postal_box:        app?.postal_box ?? "",
      vacation_address:  app?.vacation_address ?? "",
      tutor_name:        app?.tutor_name ?? "",
      tutor_address:     app?.tutor_address ?? "",
      tutor_phone:       app?.tutor_phone ?? "",
      has_health_issues: app?.has_health_issues ?? false,
      health_condition:  app?.health_condition ?? "",
      doctor_info:       app?.doctor_info ?? "",
    },
  });

  const statusType = form.watch("status_type");
  const diplomaBac = form.watch("diploma_bac");
  const hasHealthIssues = form.watch("has_health_issues");

  // ── API calls ─────────────────────────────────────────────────────────────
  const showOk = () => { setSaveSuccess(true); setTimeout(() => setSaveSuccess(false), 2000); };

  const saveRenseignements = async () => {
    const data = form.getValues();
    setApiError("");
    try {
      const res = await api.put("/portal/application/renseignements", data);
      setApplication(res.data);
      showOk();
      return true;
    } catch (err: unknown) {
      const e = err as { response?: { data?: { message?: string; errors?: Record<string, string[]> } } };
      const errs = e.response?.data?.errors;
      setApiError(errs ? Object.values(errs).flat()[0]! : (e.response?.data?.message || "Erreur de sauvegarde."));
      return false;
    }
  };

  const saveEngagementWithSignature = async (sigDataUrl: string) => {
    setSigEngagement(sigDataUrl);
    setApiError("");
    try {
      const res = await api.put("/portal/application/engagement", {
        signature_image: sigDataUrl,
      });
      setApplication(res.data);
      showOk();
    } catch (err: unknown) {
      const e = err as { response?: { data?: { message?: string } } };
      setApiError(e.response?.data?.message || "Erreur lors de l'enregistrement.");
    }
  };

  const saveSignatureRenseignements = async (dataUrl: string) => {
    setSigRenseignements(dataUrl);
    try {
      await api.put("/portal/application/signature-renseignements", { signature_image: dataUrl });
    } catch {
      // silent — requis à la soumission
    }
  };

  // ── Navigation ─────────────────────────────────────────────────────────────
  const handleNext = async () => {
    setApiError("");
    const trigger = async (fields: (keyof RenseignementsForm)[]) => form.trigger(fields);

    if (step === 1) {
      const ok = await trigger(["gender", "last_name", "first_name", "date_of_birth", "place_of_birth", "nationality", "phone"]);
      if (!ok) return;
    } else if (step === 3) {
      const ok = await trigger(["status_type"]);
      if (!ok) return;
    } else if (step === 5) {
      const ok = await trigger(["address_quarter", "address_phone"]);
      if (!ok) return;
      // Auto-save sections 1-5 at step 5
      const saved = await saveRenseignements();
      if (!saved) return;
    }
    setStep((s) => Math.min(s + 1, 8));
    window.scrollTo(0, 0);
  };

  const handleBack = () => { setApiError(""); setStep((s) => Math.max(s - 1, 1)); window.scrollTo(0, 0); };

  // ── Photo ─────────────────────────────────────────────────────────────────
  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhotoUploading(true);
    setApiError("");
    try {
      const fd = new FormData();
      fd.append("photo", file);
      const res = await api.post("/portal/application/photo", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setPhotoUrl(res.data.photo_url);
    } catch (err: unknown) {
      const e = err as { response?: { data?: { message?: string } } };
      setApiError(e.response?.data?.message || "Erreur lors du téléchargement.");
    } finally {
      setPhotoUploading(false);
    }
  };

  // ── Documents ─────────────────────────────────────────────────────────────
  const handleDocUpload = async (type: string, file: File) => {
    setDocUploading(type);
    setApiError("");
    try {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("document_type", type);
      const res = await api.post("/portal/application/documents", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      // Refresh application to get updated documents list
      const fresh = await api.get("/portal/me");
      setApplication(fresh.data.application);
      void res;
    } catch (err: unknown) {
      const e = err as { response?: { data?: { message?: string } } };
      setApiError(e.response?.data?.message || "Erreur lors du téléchargement.");
    } finally {
      setDocUploading(null);
    }
  };

  const handleDocDelete = async (docId: string) => {
    setApiError("");
    try {
      await api.delete(`/portal/application/documents/${docId}`);
      const fresh = await api.get("/portal/me");
      setApplication(fresh.data.application);
    } catch {
      setApiError("Erreur lors de la suppression.");
    }
  };

  // ── Submit ────────────────────────────────────────────────────────────────
  const handleSubmit = async () => {
    setSubmitting(true);
    setApiError("");
    try {
      const res = await api.post("/portal/application/submit");
      setApplication(res.data);
      router.push("/espace");
    } catch (err: unknown) {
      const e = err as { response?: { data?: { message?: string; errors?: Record<string, string[]> } } };
      const errs = e.response?.data?.errors;
      setApiError(errs ? Object.values(errs).flat()[0]! : (e.response?.data?.message || "Erreur lors de la soumission."));
    } finally {
      setSubmitting(false);
    }
  };

  if (!app) return null;

  const dis = (field: string) => isReadOnly || (isCorrectionMode && !isCF(cf, field));

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="bg-[#1a3a6b] text-white px-4 pt-4 pb-5 sticky top-14 z-40">
        <div className="max-w-lg mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <button onClick={() => router.push("/espace")} className="text-white/70 hover:text-white">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="font-bold text-base flex-1">Mon dossier</h1>
            {isReadOnly && (
              <div className="flex items-center gap-1 text-white/60 text-xs">
                <Lock className="w-3.5 h-3.5" /> Lecture seule
              </div>
            )}
          </div>
          <div className="flex gap-1">
            {STEP_LABELS.map((_, i) => (
              <div key={i} className={`flex-1 h-1.5 rounded-full transition-colors ${i + 1 < step ? "bg-[#009A44]" : i + 1 === step ? "bg-white" : "bg-white/20"}`} />
            ))}
          </div>
          <p className="text-white/70 text-xs mt-1.5">Étape {step}/{STEP_LABELS.length} — {STEP_LABELS[step - 1]}</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-6 max-w-lg mx-auto w-full">
        {isCorrectionMode && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex gap-2 mb-4">
            <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-amber-700">Mode correction — seuls les champs signalés sont modifiables.</p>
          </div>
        )}

        {/* ── STEP 1 — Identité ── */}
        {step === 1 && (
          <div className="flex flex-col gap-4">
            <h2 className="text-base font-bold text-gray-800">Informations personnelles</h2>
            <Select id="gender" label="Civilité" required correction={isCF(cf, "gender")} disabled={dis("gender")}
              error={form.formState.errors.gender?.message} {...form.register("gender")}>
              <option value="">— Choisir —</option>
              <option value="M">Monsieur</option>
              <option value="F">Madame / Mademoiselle</option>
            </Select>
            <CorrectionNote field="gender" cf={cf} />

            <Input id="last_name" label="Nom de famille" required correction={isCF(cf, "last_name")} disabled={dis("last_name")}
              error={form.formState.errors.last_name?.message} {...form.register("last_name")} />
            <CorrectionNote field="last_name" cf={cf} />

            <Input id="first_name" label="Prénom(s)" required correction={isCF(cf, "first_name")} disabled={dis("first_name")}
              error={form.formState.errors.first_name?.message} {...form.register("first_name")} />
            <CorrectionNote field="first_name" cf={cf} />

            <Input id="date_of_birth" label="Date de naissance" type="date" required correction={isCF(cf, "date_of_birth")} disabled={dis("date_of_birth")}
              error={form.formState.errors.date_of_birth?.message} {...form.register("date_of_birth")} />
            <CorrectionNote field="date_of_birth" cf={cf} />

            <Input id="place_of_birth" label="Lieu de naissance" required correction={isCF(cf, "place_of_birth")} disabled={dis("place_of_birth")}
              error={form.formState.errors.place_of_birth?.message} {...form.register("place_of_birth")} />
            <CorrectionNote field="place_of_birth" cf={cf} />

            <Input id="nationality" label="Nationalité" required correction={isCF(cf, "nationality")} disabled={dis("nationality")}
              error={form.formState.errors.nationality?.message} {...form.register("nationality")} />
            <CorrectionNote field="nationality" cf={cf} />

            <Input id="phone" label="Téléphone" type="tel" required correction={isCF(cf, "phone")} disabled={dis("phone")}
              error={form.formState.errors.phone?.message} {...form.register("phone")} />
            <CorrectionNote field="phone" cf={cf} />

            <Input id="email" label="Email (optionnel)" type="email" correction={isCF(cf, "email")} disabled={dis("email")}
              {...form.register("email")} />
          </div>
        )}

        {/* ── STEP 2 — État civil ── */}
        {step === 2 && (
          <div className="flex flex-col gap-4">
            <h2 className="text-base font-bold text-gray-800">État civil & famille</h2>
            <Select id="marital_status" label="Situation matrimoniale" correction={isCF(cf, "marital_status")} disabled={dis("marital_status")}
              {...form.register("marital_status")}>
              <option value="">— Choisir —</option>
              <option value="Célibataire">Célibataire</option>
              <option value="Marié(e)">Marié(e)</option>
              <option value="Veuf(ve)">Veuf(ve)</option>
              <option value="Divorcé(e)">Divorcé(e)</option>
            </Select>
            <CorrectionNote field="marital_status" cf={cf} />

            <Input id="children_count" label="Nombre d'enfants" type="number" min={0} correction={isCF(cf, "children_count")} disabled={dis("children_count")}
              {...form.register("children_count")} />
            <CorrectionNote field="children_count" cf={cf} />

            <Input id="father_name" label="Nom du père" correction={isCF(cf, "father_name")} disabled={dis("father_name")}
              {...form.register("father_name")} />
            <CorrectionNote field="father_name" cf={cf} />

            <Input id="mother_name" label="Nom de la mère" correction={isCF(cf, "mother_name")} disabled={dis("mother_name")}
              {...form.register("mother_name")} />
            <CorrectionNote field="mother_name" cf={cf} />
          </div>
        )}

        {/* ── STEP 3 — Statut ── */}
        {step === 3 && (
          <div className="flex flex-col gap-4">
            <h2 className="text-base font-bold text-gray-800">Statut professionnel</h2>
            <Select id="status_type" label="Statut" required correction={isCF(cf, "status_type")} disabled={dis("status_type")}
              error={form.formState.errors.status_type?.message} {...form.register("status_type")}>
              <option value="">— Choisir —</option>
              <option value="Fonctionnaire">Fonctionnaire / Agent de l'État</option>
              <option value="Boursier national">Boursier national</option>
              <option value="Boursier étranger">Boursier étranger</option>
              <option value="Non-boursier">Non-boursier / Privé</option>
            </Select>
            <CorrectionNote field="status_type" cf={cf} />

            {statusType === "Fonctionnaire" && (
              <>
                <Input id="emploi" label="Emploi / Poste" correction={isCF(cf, "emploi")} disabled={dis("emploi")} {...form.register("emploi")} />
                <CorrectionNote field="emploi" cf={cf} />
                <Input id="matricule_fonctionnaire" label="Matricule" correction={isCF(cf, "matricule_fonctionnaire")} disabled={dis("matricule_fonctionnaire")} {...form.register("matricule_fonctionnaire")} />
                <CorrectionNote field="matricule_fonctionnaire" cf={cf} />
                <Input id="echelon" label="Échelon" correction={isCF(cf, "echelon")} disabled={dis("echelon")} {...form.register("echelon")} />
                <Input id="categorie" label="Catégorie" correction={isCF(cf, "categorie")} disabled={dis("categorie")} {...form.register("categorie")} />
                <Input id="classe" label="Classe" correction={isCF(cf, "classe")} disabled={dis("classe")} {...form.register("classe")} />
              </>
            )}
          </div>
        )}

        {/* ── STEP 4 — Diplômes ── */}
        {step === 4 && (
          <div className="flex flex-col gap-4">
            <h2 className="text-base font-bold text-gray-800">Diplômes obtenus</h2>
            <div className="flex flex-col gap-3 bg-white border border-gray-200 rounded-xl p-4">
              <CheckboxField id="diploma_cepe" label="CEPE" disabled={dis("diploma_cepe")} {...form.register("diploma_cepe")} />
              <CheckboxField id="diploma_bepc" label="BEPC" disabled={dis("diploma_bepc")} {...form.register("diploma_bepc")} />
              <CheckboxField id="diploma_bac" label="Baccalauréat" disabled={dis("diploma_bac")} {...form.register("diploma_bac")} />
            </div>

            {diplomaBac && (
              <>
                <Input id="diploma_bac_serie" label="Série du BAC" placeholder="Ex: D, C, A..." correction={isCF(cf, "diploma_bac_serie")} disabled={dis("diploma_bac_serie")}
                  {...form.register("diploma_bac_serie")} />
                <CorrectionNote field="diploma_bac_serie" cf={cf} />
              </>
            )}

            <Textarea id="other_diplomas" label="Autres diplômes (optionnel)" rows={3} correction={isCF(cf, "other_diplomas")} disabled={dis("other_diplomas")}
              placeholder="Ex: Licence en Psychologie — Université FHB — 2022"
              {...form.register("other_diplomas")} />
            <CorrectionNote field="other_diplomas" cf={cf} />

            <Input id="entry_date" label="Date d'entrée à l'INSFS" type="date" correction={isCF(cf, "entry_date")} disabled={dis("entry_date")}
              {...form.register("entry_date")} />
          </div>
        )}

        {/* ── STEP 5 — Adresse ── */}
        {step === 5 && (
          <div className="flex flex-col gap-4">
            <h2 className="text-base font-bold text-gray-800">Adresse & contacts</h2>
            <Input id="address_quarter" label="Quartier / Secteur" required correction={isCF(cf, "address_quarter")} disabled={dis("address_quarter")}
              error={form.formState.errors.address_quarter?.message} {...form.register("address_quarter")} />
            <CorrectionNote field="address_quarter" cf={cf} />

            <Input id="address_apartment" label="N° appartement / Lot" correction={isCF(cf, "address_apartment")} disabled={dis("address_apartment")}
              {...form.register("address_apartment")} />

            <Input id="address_phone" label="Téléphone (résidence)" type="tel" required correction={isCF(cf, "address_phone")} disabled={dis("address_phone")}
              error={form.formState.errors.address_phone?.message} {...form.register("address_phone")} />
            <CorrectionNote field="address_phone" cf={cf} />

            <Input id="postal_box" label="Boîte postale" correction={isCF(cf, "postal_box")} disabled={dis("postal_box")}
              {...form.register("postal_box")} />

            <Textarea id="vacation_address" label="Adresse de vacances (optionnel)" rows={2} correction={isCF(cf, "vacation_address")} disabled={dis("vacation_address")}
              {...form.register("vacation_address")} />

            <div className="border-t border-gray-100 pt-3 mt-1">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Personne à contacter / Tuteur</p>
              <div className="flex flex-col gap-3">
                <Input id="tutor_name" label="Nom" correction={isCF(cf, "tutor_name")} disabled={dis("tutor_name")} {...form.register("tutor_name")} />
                <Input id="tutor_address" label="Adresse" correction={isCF(cf, "tutor_address")} disabled={dis("tutor_address")} {...form.register("tutor_address")} />
                <Input id="tutor_phone" label="Téléphone" type="tel" correction={isCF(cf, "tutor_phone")} disabled={dis("tutor_phone")} {...form.register("tutor_phone")} />
              </div>
            </div>
          </div>
        )}

        {/* ── STEP 6 — Santé ── */}
        {step === 6 && (
          <div className="flex flex-col gap-4">
            <h2 className="text-base font-bold text-gray-800">Situation de santé</h2>
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <CheckboxField id="has_health_issues" label="J'ai une condition médicale particulière" disabled={dis("has_health_issues")}
                {...form.register("has_health_issues")} />
            </div>

            {hasHealthIssues && (
              <>
                <Textarea id="health_condition" label="Nature de la condition médicale" rows={3} correction={isCF(cf, "health_condition")} disabled={dis("health_condition")}
                  {...form.register("health_condition")} />
                <CorrectionNote field="health_condition" cf={cf} />
                <Textarea id="doctor_info" label="Médecin traitant (nom & téléphone)" rows={2} correction={isCF(cf, "doctor_info")} disabled={dis("doctor_info")}
                  {...form.register("doctor_info")} />
              </>
            )}

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-xs text-blue-700">
              Ces informations nous permettent de vous accompagner en cas d'urgence médicale.
            </div>
          </div>
        )}

        {/* ── STEP 7 — Photo & Pièces ── */}
        {step === 7 && (
          <div className="flex flex-col gap-5">
            <h2 className="text-base font-bold text-gray-800">Photo & Pièces justificatives</h2>

            {/* Photo */}
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-gray-700">Photo d'identité <span className="text-red-500">*</span></p>
              {photoUrl ? (
                <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-3">
                  <img src={photoUrl} alt="Photo" className="w-16 h-20 object-cover rounded-lg border border-gray-200" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-700">Photo téléchargée</p>
                    <p className="text-xs text-gray-500">JPEG/PNG, fond blanc</p>
                  </div>
                  {!isReadOnly && (
                    <button type="button" onClick={() => photoInputRef.current?.click()} className="text-xs text-[#1a3a6b] underline">
                      Changer
                    </button>
                  )}
                </div>
              ) : (
                <button type="button" disabled={isReadOnly || photoUploading} onClick={() => photoInputRef.current?.click()}
                  className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center gap-2 hover:border-[#1a3a6b]/40 transition-colors disabled:opacity-50">
                  {photoUploading ? <Loader2 className="w-6 h-6 text-[#1a3a6b] animate-spin" /> : <FileImage className="w-8 h-8 text-gray-400" />}
                  <p className="text-sm text-gray-500">{photoUploading ? "Téléchargement..." : "Appuyer pour ajouter"}</p>
                  <p className="text-xs text-gray-400">JPEG ou PNG, fond blanc, format portrait</p>
                </button>
              )}
              <input ref={photoInputRef} type="file" accept="image/jpeg,image/png" className="hidden" onChange={handlePhotoChange} />
            </div>

            {/* Documents */}
            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium text-gray-700">Pièces justificatives</p>
              {Object.entries(DOC_TYPES).map(([type, label]) => {
                const existing = app.documents?.find((d) => d.document_type === type);
                return (
                  <DocUploadRow key={type} type={type} label={label} doc={existing}
                    uploading={docUploading === type} readOnly={isReadOnly}
                    onUpload={(file) => handleDocUpload(type, file)}
                    onDelete={() => existing && handleDocDelete(existing.id)}
                  />
                );
              })}
            </div>
          </div>
        )}

        {/* ── STEP 8 — Engagement ── */}
        {step === 8 && (
          <div className="flex flex-col gap-5">
            <h2 className="text-base font-bold text-gray-800">Engagement & Signature</h2>

            {/* Règlement */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-xs text-gray-700 leading-relaxed">
              <p className="font-semibold mb-2">Règlement intérieur — Points essentiels</p>
              <p className="mb-1">1. L'étudiant s'engage à respecter les horaires et le calendrier académique.</p>
              <p className="mb-1">2. Toute absence non justifiée peut entraîner des pénalités.</p>
              <p className="mb-1">3. Les frais de scolarité doivent être réglés selon l'échéancier établi.</p>
              <p className="mb-1">4. Le comportement doit être conforme aux valeurs de l'institution.</p>
              <p>5. Tout manquement grave peut entraîner une exclusion définitive.</p>
            </div>

            {/* Signature fiche engagement */}
            <SignaturePad
              label="Signature — Fiche d'engagement"
              subLabel="Signez pour valider votre engagement"
              existingSignature={sigEngagement}
              disabled={isReadOnly}
              onSave={saveEngagementWithSignature}
            />

            {/* Signature fiche de renseignements */}
            <SignaturePad
              label="Signature — Fiche de renseignements"
              subLabel="Cette signature sera apposée sur votre fiche de renseignements"
              existingSignature={sigRenseignements}
              disabled={isReadOnly}
              onSave={saveSignatureRenseignements}
            />

            {/* Récap */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col gap-2">
              <p className="text-sm font-semibold text-gray-800 mb-1">Récapitulatif</p>
              <RecapRow label="Nom" value={`${app.last_name ?? "—"} ${app.first_name ?? "—"}`} />
              <RecapRow label="Naissance" value={app.date_of_birth?.substring(0, 10) ?? "—"} />
              <RecapRow label="École" value={user?.admitted_student?.school ?? "—"} />
              <RecapRow label="Statut" value={app.status_type ?? "—"} />
              <RecapRow label="Photo" value={photoUrl ? "✓ Fournie" : "✗ Manquante"} />
              <RecapRow label="Signature engagement" value={sigEngagement ? "✓ Signée" : "✗ Manquante"} />
              <RecapRow label="Signature renseignements" value={sigRenseignements ? "✓ Signée" : "✗ Manquante"} />
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-xs text-blue-700">
              En soumettant ce dossier, vous confirmez que toutes les informations fournies sont exactes. Vous ne pourrez plus les modifier après soumission.
            </div>

            {!isReadOnly && (
              <Button type="button" size="lg" loading={submitting} onClick={handleSubmit}
                className="bg-[#009A44] hover:bg-[#007a36]">
                <Send className="w-4 h-4" />
                Soumettre mon dossier
              </Button>
            )}
          </div>
        )}

        {/* Error / Success */}
        {apiError && (
          <div className="mt-4 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
            <p className="text-sm text-red-600">{apiError}</p>
          </div>
        )}
        {saveSuccess && (
          <div className="mt-4 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <p className="text-sm text-emerald-700">Sauvegardé</p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex gap-3 mt-6">
          {step > 1 && (
            <Button type="button" variant="outline" size="md" onClick={handleBack} className="flex-1">
              <ArrowLeft className="w-4 h-4" /> Précédent
            </Button>
          )}
          {step < 8 && (
            <Button type="button" size="md" onClick={handleNext} className="flex-[2]"
              loading={form.formState.isSubmitting}>
              {step === 5 ? "Sauvegarder" : "Suivant"}
              <ArrowRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────

function RecapRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-xs">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium text-gray-800">{value}</span>
    </div>
  );
}

interface CheckboxFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  error?: string;
}

const CheckboxField = ({ id, label, error, disabled, ...props }: CheckboxFieldProps) => (
  <div className="flex flex-col gap-1">
    <label htmlFor={id} className={`flex items-center gap-3 cursor-pointer ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}>
      <input type="checkbox" id={id} disabled={disabled}
        className="w-4 h-4 rounded border-gray-300 text-[#1a3a6b] focus:ring-[#1a3a6b] flex-shrink-0"
        {...props} />
      <span className="text-sm text-gray-700">{label}</span>
    </label>
    {error && <p className="text-xs text-red-500 ml-7">{error}</p>}
  </div>
);

interface DocUploadRowProps {
  type: string;
  label: string;
  doc?: { id: string; document_type: string; file_url?: string; status: string } | undefined;
  uploading: boolean;
  readOnly: boolean;
  onUpload: (file: File) => void;
  onDelete: () => void;
}

function DocUploadRow({ label, doc, uploading, readOnly, onUpload, onDelete }: DocUploadRowProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-3">
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-700 truncate">{label}</p>
        {doc && (
          <p className="text-xs text-emerald-600 mt-0.5 flex items-center gap-1">
            <CheckCircle className="w-3 h-3" /> Fourni
          </p>
        )}
      </div>
      <input ref={fileInputRef} type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden"
        onChange={(e) => { const f = e.target.files?.[0]; if (f) onUpload(f); e.target.value = ""; }} />
      <div className="flex gap-1.5 flex-shrink-0">
        {doc ? (
          <>
            {doc.file_url && <a href={doc.file_url} target="_blank" rel="noreferrer" className="text-xs text-[#1a3a6b] underline">Voir</a>}
            {!readOnly && <button type="button" onClick={onDelete} className="text-red-500 hover:text-red-700"><X className="w-4 h-4" /></button>}
          </>
        ) : (
          <button type="button" disabled={readOnly || uploading} onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-1 bg-[#1a3a6b]/10 text-[#1a3a6b] text-xs font-medium px-2.5 py-1.5 rounded-lg hover:bg-[#1a3a6b]/20 disabled:opacity-50">
            {uploading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Upload className="w-3.5 h-3.5" />}
            Ajouter
          </button>
        )}
      </div>
    </div>
  );
}