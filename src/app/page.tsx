import Link from "next/link";
import { BookOpen, FileText, CheckCircle, Shield, ArrowRight, GraduationCap } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* ── Header ───────────────────────────────────────── */}
      <header className="bg-[#1a3a6b] text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <p className="text-xs text-white/70">Portail Étudiant INSFS - Abidjan </p>
              <p className="text-sm font-bold">INSFS</p>
            </div>
          </div>
          <Link
            href="/connexion"
            className="bg-white text-[#1a3a6b] text-sm font-semibold px-4 py-2 rounded-lg hover:bg-white/90 transition-colors"
          >
            Se connecter
          </Link>
        </div>
      </header>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-[#1a3a6b] to-[#1a3a6b]/90 text-white px-4 pt-12 pb-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Drapeau CI */}
          <div className="flex justify-center gap-1 mb-6">
            <span className="w-5 h-5 rounded-full bg-orange-500 block" />
            <span className="w-5 h-5 rounded-full bg-white block" />
            <span className="w-5 h-5 rounded-full bg-[#009A44] block" />
          </div>
          <p className="text-white/70 text-sm mb-2">République de Côte d'Ivoire</p>
          <h1 className="text-3xl font-bold mb-3 leading-tight">
            Institut National Supérieur<br />de Formation Sociale
          </h1>
          <p className="text-white/80 text-lg mb-8">
            Portail d'Inscription en Ligne
          </p>
          <p className="text-white/60 text-sm mb-8 max-w-sm mx-auto">
            Constituez et soumettez votre dossier d'inscription entièrement en ligne, depuis votre téléphone ou ordinateur.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/inscription"
              className="bg-[#009A44] text-white font-semibold px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-[#007a36] transition-colors text-sm"
            >
              Créer mon compte
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/connexion"
              className="border-2 border-white/30 text-white font-semibold px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-colors text-sm"
            >
              J'ai déjà un compte
            </Link>
          </div>
        </div>
      </section>

      {/* ── Process steps ────────────────────────────────── */}
      <section className="px-4 py-12 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-center text-gray-800 mb-2">
            Comment ça fonctionne ?
          </h2>
          <p className="text-sm text-gray-500 text-center mb-8">
            Votre inscription en 5 étapes simples
          </p>
          <div className="flex flex-col gap-4">
            {[
              { step: 1, icon: Shield, title: "Vérification d'éligibilité", desc: "Confirmez que vous êtes dans la liste des admis au concours." },
              { step: 2, icon: BookOpen, title: "Création de compte", desc: "Créez votre espace personnel avec votre email et mot de passe." },
              { step: 3, icon: FileText, title: "Remplissage des fiches", desc: "Remplissez la fiche de renseignements et la fiche d'engagement." },
              { step: 4, icon: CheckCircle, title: "Validation par la Scolarité", desc: "Le service scolarité examine et valide votre dossier." },
              { step: 5, icon: GraduationCap, title: "Dossier complet", desc: "Recevez vos documents officiels d'inscription directement sur votre espace." },
            ].map(({ step, icon: Icon, title, desc }) => (
              <div key={step} className="flex gap-4 bg-white rounded-xl p-4 shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#1a3a6b]/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#1a3a6b]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-bold text-[#1a3a6b]/50">Étape {step}</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-800">{title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Schools ──────────────────────────────────────── */}
      <section className="px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-center text-gray-800 mb-8">
            Nos Écoles
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { code: "EES", name: "École des Éducateurs Spécialisés", color: "bg-emerald-50 border-emerald-200 text-emerald-700" },
              { code: "EEP", name: "École des Éducateurs Préscolaires", color: "bg-sky-50 border-sky-200 text-sky-700" },
              { code: "EAS", name: "École des Assistants Sociaux", color: "bg-orange-50 border-orange-200 text-orange-700" },
              { code: "CPPE", name: "Centre de Perfectionnement", color: "bg-violet-50 border-violet-200 text-violet-700" },
            ].map(({ code, name, color }) => (
              <div key={code} className={`border rounded-xl p-3 ${color}`}>
                <p className="text-base font-bold">{code}</p>
                <p className="text-xs mt-0.5 opacity-80">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="px-4 py-10 bg-[#1a3a6b] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-3">Prêt à commencer ?</h2>
          <p className="text-white/60 text-sm mb-6">
            Si vous avez été admis au concours, vous pouvez dès maintenant créer votre espace et constituer votre dossier.
          </p>
          <Link
            href="/inscription"
            className="inline-flex items-center gap-2 bg-[#009A44] text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-[#007a36] transition-colors text-sm"
          >
            Commencer mon inscription
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer className="px-4 py-6 bg-gray-900 text-gray-400 text-xs text-center">
        <p className="font-medium text-white mb-1">Institut National Supérieur de Formation Sociale</p>
        <p>Cocody Boulevard de l'Université — Tél : 27 22 44 16 75</p>
        <p>infsofficiel@gmail.com — 01 BP 2625 ABJ 01</p>
      </footer>
    </div>
  );
}
