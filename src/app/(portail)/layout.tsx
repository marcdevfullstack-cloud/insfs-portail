"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { GraduationCap, LogOut, FileText, Home, Download } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePortalAuth, clearAuth } from "@/hooks/usePortalAuth";
import { cn } from "@/lib/utils";

export default function PortailLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, isLoading, setUser, setApplication } = usePortalAuth();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/connexion");
    }
  }, [user, isLoading, router]);

  const handleLogout = () => {
    clearAuth();
    setUser(null);
    setApplication(null);
    router.replace("/connexion");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-3 border-[#1a3a6b] border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-gray-500">Chargement...</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  const navItems = [
    { href: "/espace", icon: Home, label: "Accueil" },
    { href: "/espace/dossier", icon: FileText, label: "Mon dossier" },
    { href: "/espace/documents", icon: Download, label: "Documents" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Header */}
      <header className="bg-[#1a3a6b] text-white px-4 h-14 flex items-center justify-between sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
            <GraduationCap className="w-4.5 h-4.5 text-white" />
          </div>
          <div className="leading-tight">
            <p className="text-[10px] text-white/60 leading-none">Portail Étudiant</p>
            <p className="text-sm font-bold leading-none mt-0.5">INSFS</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-1.5 text-white/70 text-sm hover:text-white transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span className="hidden sm:inline">Déconnexion</span>
        </button>
      </header>

      {/* Main content */}
      <main className="flex-1 pb-20">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex z-50">
        {navItems.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href || (href !== "/espace" && pathname.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex-1 flex flex-col items-center justify-center py-2.5 gap-1 text-xs transition-colors",
                isActive
                  ? "text-[#1a3a6b] font-semibold"
                  : "text-gray-400 hover:text-gray-600"
              )}
            >
              <Icon className={cn("w-5 h-5", isActive && "text-[#1a3a6b]")} />
              <span>{label}</span>
              {isActive && (
                <span className="absolute bottom-0 h-0.5 w-12 bg-[#1a3a6b] rounded-t-full" />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
