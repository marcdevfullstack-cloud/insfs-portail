import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95";

  const variants = {
    primary:   "bg-[#1a3a6b] text-white hover:bg-[#15306b] focus:ring-[#1a3a6b]/40",
    secondary: "bg-[#009A44] text-white hover:bg-[#007a36] focus:ring-[#009A44]/40",
    outline:   "border-2 border-[#1a3a6b] text-[#1a3a6b] hover:bg-[#1a3a6b]/5 focus:ring-[#1a3a6b]/40",
    ghost:     "text-[#1a3a6b] hover:bg-[#1a3a6b]/8 focus:ring-[#1a3a6b]/20",
    destructive: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500/40",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2.5 text-sm",
    lg: "px-6 py-3.5 text-base w-full",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
      {children}
    </button>
  );
}
