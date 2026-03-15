import { cn } from "@/lib/utils";
import type { ApplicationStatus } from "@/types";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "danger" | "info" | "muted";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-gray-100 text-gray-700",
    success: "bg-emerald-100 text-emerald-700",
    warning: "bg-amber-100 text-amber-700",
    danger:  "bg-red-100 text-red-700",
    info:    "bg-blue-100 text-blue-700",
    muted:   "bg-gray-50 text-gray-500",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

export function StatusBadge({ status }: { status: ApplicationStatus }) {
  const config: Record<ApplicationStatus, { label: string; variant: BadgeProps["variant"] }> = {
    BROUILLON:           { label: "Brouillon",           variant: "muted" },
    SOUMIS:              { label: "Soumis",               variant: "info" },
    EN_TRAITEMENT:       { label: "En traitement",        variant: "info" },
    CORRECTION_DEMANDEE: { label: "Correction demandée",  variant: "warning" },
    VALIDE:              { label: "Validé",               variant: "success" },
    REJETE:              { label: "Rejeté",               variant: "danger" },
    COMPLET:             { label: "Complet ✓",            variant: "success" },
  };

  const { label, variant } = config[status];
  return <Badge variant={variant}>{label}</Badge>;
}
