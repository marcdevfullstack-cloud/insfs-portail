"use client";

import Link from "next/link";
import { usePortalAuth } from "@/hooks/usePortalAuth";
import { StatusBadge } from "@/components/ui/badge";
import {
  FileText,
  Download,
  ArrowRight,
  CheckCircle,
  Clock,
  AlertCircle,
  XCircle,
  ChevronRight,
  User,
} from "lucide-react";
import type { ApplicationStatus } from "@/types";

const STATUS_INFO: Record<ApplicationStatus, { icon: React.ReactNode; title: string; desc: string; color: string }> = {
  BROUILLON: {
    icon: <Clock className="w-5 h-5 text-gray-500" />,
    title: "Dossier en cours",
    desc: "Complétez et soumettez votre dossier pour commencer le traitement.",
    color: "bg-gray-50 border-gray-200",
  },
  SOUMIS: {
    icon: <Clock className="w-5 h-5 text-blue-500" />,
    title: "Dossier soumis",
    desc: "Votre dossier a été reçu. La scolarité va commencer l'examen.",
    color: "bg-blue-50 border-blue-200",
  },
  EN_TRAITEMENT: {
    icon: <Clock className="w-5 h-5 text-blue-500" />,
    title: "En cours de traitement",
    desc: "La scolarité examine actuellement votre dossier.",
    color: "bg-blue-50 border-blue-200",
  },
  CORRECTION_DEMANDEE: {
    icon: <AlertCircle className="w-5 h-5 text-amber-500" />,
    title: "Correction demandée",
    desc: "Des modifications sont requises sur votre dossier.",
    color: "bg-amber-50 border-amber-200",
  },
  VALIDE: {
    icon: <CheckCircle className="w-5 h-5 text-emerald-500" />,
    title: "Dossier validé",
    desc: "Votre dossier a été validé. La finalisation est en cours.",
    color: "bg-emerald-50 border-emerald-200",
  },
  REJETE: {
    icon: <XCircle className="w-5 h-5 text-red-500" />,
    title: "Dossier rejeté",
    desc: "Votre dossier n'a pas été accepté. Contactez la scolarité.",
    color: "bg-red-50 border-red-200",
  },
  COMPLET: {
    icon: <CheckCircle className="w-5 h-5 text-emerald-500" />,
    title: "Inscription complète",
    desc: "Votre inscription est finalisée. Téléchargez vos documents officiels.",
    color: "bg-emerald-50 border-emerald-200",
  },
};

function ProgressBar({ application }: { application: NonNullable<ReturnType<typeof usePortalAuth>["application"]> }) {
  const steps: ApplicationStatus[] = ["BROUILLON", "SOUMIS", "EN_TRAITEMENT", "VALIDE", "COMPLET"];
  const currentIndex = steps.indexOf(application.status as ApplicationStatus);
  const progress = currentIndex === -1 ? 0 : Math.round((currentIndex / (steps.length - 1)) * 100);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between text-xs text-gray-500">
        <span>Progression</span>
        <span>{progress}%</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#009A44] rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default function EspacePage() {
  const { user, application } = usePortalAuth();

  if (!application) return null;

  const status = application.status as ApplicationStatus;
  const info = STATUS_INFO[status];
  const needsCorrection = status === "CORRECTION_DEMANDEE";
  const isComplete = status === "COMPLET";
  const canEdit = ["BROUILLON", "CORRECTION_DEMANDEE"].includes(status);

  return (
    <div className="px-4 py-6 max-w-lg mx-auto flex flex-col gap-5">
      {/* Greeting */}
      <div>
        <p className="text-xs text-gray-500">Bienvenue,</p>
        <h1 className="text-xl font-bold text-gray-900">
          {user?.admitted_student?.first_name} {user?.admitted_student?.last_name}
        </h1>
        <p className="text-sm text-gray-500 mt-0.5">
          {user?.admitted_student?.school} — Année {user?.admitted_student?.year_of_study} — {user?.admitted_student?.academic_year}
        </p>
      </div>

      {/* Status card */}
      <div className={`rounded-2xl border p-4 flex gap-3 ${info.color}`}>
        <div className="flex-shrink-0 mt-0.5">{info.icon}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <p className="text-sm font-semibold text-gray-800">{info.title}</p>
            <StatusBadge status={status} />
          </div>
          <p className="text-xs text-gray-600 mt-1">{info.desc}</p>

          {needsCorrection && application.correction_fields && application.correction_fields.length > 0 && (
            <div className="mt-2 flex flex-col gap-1">
              <p className="text-xs font-semibold text-amber-700">Champs à corriger :</p>
              {application.correction_fields.map((cf, i) => (
                <div key={i} className="text-xs text-amber-700 bg-amber-100 rounded-lg px-2 py-1">
                  <span className="font-medium">{cf.field}</span> — {cf.message}
                </div>
              ))}
            </div>
          )}

          {application.rejection_reason && (
            <p className="text-xs text-red-700 mt-2 bg-red-100 rounded-lg px-2 py-1">
              {application.rejection_reason}
            </p>
          )}
        </div>
      </div>

      {/* Progress */}
      {!["REJETE"].includes(status) && (
        <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
          <ProgressBar application={application} />
        </div>
      )}

      {/* Quick actions */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Actions</h2>

        {canEdit && (
          <Link
            href="/espace/dossier"
            className="bg-[#1a3a6b] text-white rounded-2xl p-4 flex items-center gap-3 shadow-sm hover:bg-[#1a3a6b]/90 transition-colors"
          >
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm">
                {needsCorrection ? "Corriger mon dossier" : "Compléter mon dossier"}
              </p>
              <p className="text-xs text-white/70 mt-0.5">
                {needsCorrection ? "Modifiez les champs signalés" : "Remplissez toutes les sections requises"}
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-white/70 flex-shrink-0" />
          </Link>
        )}

        {!canEdit && !isComplete && (
          <Link
            href="/espace/dossier"
            className="bg-white rounded-2xl border border-gray-100 p-4 flex items-center gap-3 shadow-sm hover:bg-gray-50 transition-colors"
          >
            <div className="w-10 h-10 bg-[#1a3a6b]/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-[#1a3a6b]" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm text-gray-800">Consulter mon dossier</p>
              <p className="text-xs text-gray-500 mt-0.5">Voir les informations soumises</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
          </Link>
        )}

        {isComplete && (
          <Link
            href="/espace/documents"
            className="bg-[#009A44] text-white rounded-2xl p-4 flex items-center gap-3 shadow-sm hover:bg-[#007a36] transition-colors"
          >
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Download className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm">Télécharger mes documents</p>
              <p className="text-xs text-white/70 mt-0.5">Fiche d'inscription, certificat d'inscription</p>
            </div>
            <ArrowRight className="w-5 h-5 text-white/70 flex-shrink-0" />
          </Link>
        )}

        {/* Profile summary */}
        <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1a3a6b]/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <User className="w-5 h-5 text-[#1a3a6b]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-800">Mon compte</p>
              <p className="text-xs text-gray-500 truncate">{user?.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Info note */}
      <p className="text-xs text-gray-400 text-center">
        Pour toute question, contactez la scolarité à{" "}
        <span className="text-[#1a3a6b] font-medium">infsofficiel@gmail.com</span>
      </p>
    </div>
  );
}
