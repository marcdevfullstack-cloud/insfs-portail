"use client";

import { useEffect, useState } from "react";
import { Download, FileText, Loader2, Lock, CheckCircle } from "lucide-react";
import { usePortalAuth } from "@/hooks/usePortalAuth";
import api from "@/lib/api";
import type { GeneratedDocument } from "@/types";

const DOC_LABELS: Record<string, { label: string; desc: string; icon: React.ReactNode }> = {
  fiche_identification: {
    label: "Fiche d'identification",
    desc: "Votre fiche personnelle complétée et validée par la scolarité",
    icon: <FileText className="w-5 h-5 text-[#1a3a6b]" />,
  },
  fiche_inscription: {
    label: "Fiche d'inscription",
    desc: "Votre fiche d'inscription officielle signée",
    icon: <FileText className="w-5 h-5 text-[#009A44]" />,
  },
  certificat_inscription: {
    label: "Certificat d'inscription",
    desc: "Votre certificat d'inscription officiel avec QR code de vérification",
    icon: <FileText className="w-5 h-5 text-amber-600" />,
  },
};

export default function DocumentsPage() {
  const { application } = usePortalAuth();
  const [documents, setDocuments] = useState<GeneratedDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState<string | null>(null);
  const [error, setError] = useState("");

  const isComplete = application?.status === "COMPLET";

  useEffect(() => {
    if (!isComplete) {
      setLoading(false);
      return;
    }
    api.get("/portal/documents")
      .then((res) => setDocuments(res.data.documents))
      .catch(() => setError("Impossible de charger les documents."))
      .finally(() => setLoading(false));
  }, [isComplete]);

  const handleDownload = async (docType: string) => {
    setDownloading(docType);
    setError("");
    try {
      const res = await api.get(`/portal/documents/${docType}/download`, {
        responseType: "blob",
      });
      const blob = new Blob([res.data], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${docType.replace("_", "-")}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      setError("Erreur lors du téléchargement. Réessayez.");
    } finally {
      setDownloading(null);
    }
  };

  return (
    <div className="px-4 py-6 max-w-lg mx-auto">
      <h1 className="text-xl font-bold text-gray-900 mb-1">Mes documents</h1>
      <p className="text-sm text-gray-500 mb-6">
        Téléchargez vos documents officiels d'inscription.
      </p>

      {loading && (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-6 h-6 text-[#1a3a6b] animate-spin" />
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 mb-4">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      {!loading && !isComplete && (
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col items-center gap-3 text-center">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
            <Lock className="w-6 h-6 text-gray-400" />
          </div>
          <div>
            <p className="font-semibold text-gray-700">Documents non disponibles</p>
            <p className="text-sm text-gray-500 mt-1">
              Vos documents officiels seront disponibles une fois votre dossier completement traité et validé par la scolarité.
            </p>
          </div>
          <div className="mt-2 flex flex-col gap-2 w-full">
            {Object.entries(DOC_LABELS).map(([key, { label, desc, icon }]) => (
              <div key={key} className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-3 opacity-50">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  {icon}
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <p className="text-sm font-medium text-gray-700">{label}</p>
                  <p className="text-xs text-gray-500 truncate">{desc}</p>
                </div>
                <Lock className="w-4 h-4 text-gray-300 flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      )}

      {!loading && isComplete && (
        <div className="flex flex-col gap-4">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <p className="text-sm text-emerald-700 font-medium">
              Inscription complète — vos documents sont disponibles
            </p>
          </div>

          {Object.entries(DOC_LABELS).map(([key, { label, desc, icon }]) => {
            const doc = documents.find((d) => d.document_type === key);
            const isAvailable = !!doc;
            const isDownloading = downloading === key;

            return (
              <div
                key={key}
                className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl p-4 shadow-sm"
              >
                <div className="w-11 h-11 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-100">
                  {icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-800">{label}</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{desc}</p>
                </div>
                {isAvailable ? (
                  <button
                    type="button"
                    disabled={isDownloading}
                    onClick={() => handleDownload(key)}
                    className="flex items-center gap-1.5 bg-[#1a3a6b] text-white text-xs font-semibold px-3 py-2 rounded-xl hover:bg-[#1a3a6b]/90 transition-colors disabled:opacity-50 flex-shrink-0"
                  >
                    {isDownloading ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Download className="w-3.5 h-3.5" />
                    )}
                    {isDownloading ? "..." : "PDF"}
                  </button>
                ) : (
                  <span className="text-xs text-gray-400 flex-shrink-0">En préparation</span>
                )}
              </div>
            );
          })}

          <p className="text-xs text-gray-400 text-center mt-2">
            Conservez précieusement ces documents. Ils vous seront demandés lors de votre arrivée à l'INSFS.
          </p>
        </div>
      )}
    </div>
  );
}
