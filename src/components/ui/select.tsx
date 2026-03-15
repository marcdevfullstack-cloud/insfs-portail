import { cn } from "@/lib/utils";
import type { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  hint?: string;
  correctionHighlight?: boolean;
  correction?: boolean;
  children?: React.ReactNode;
}

export function Select({
  label,
  error,
  hint,
  correctionHighlight = false,
  correction = false,
  className,
  id,
  children,
  ...props
}: SelectProps) {
  const isHighlighted = correctionHighlight || correction;

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={id}
          className={cn(
            "text-sm font-medium",
            isHighlighted ? "text-amber-600" : "text-gray-700"
          )}
        >
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
          {isHighlighted && (
            <span className="ml-2 text-xs bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-md">
              À corriger
            </span>
          )}
        </label>
      )}
      <select
        id={id}
        className={cn(
          "h-11 w-full rounded-xl border px-3.5 text-sm bg-white transition-colors appearance-none",
          "focus:outline-none focus:ring-2 focus:ring-offset-1",
          isHighlighted
            ? "border-amber-400 focus:ring-amber-400/40 bg-amber-50/30"
            : "border-gray-200 focus:ring-[#1a3a6b]/25 focus:border-[#1a3a6b]",
          error ? "border-red-400 focus:ring-red-400/30" : "",
          "disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed",
          className
        )}
        {...props}
      >
        {children}
      </select>
      {error && <p className="text-xs text-red-500">{error}</p>}
      {hint && !error && <p className="text-xs text-gray-400">{hint}</p>}
    </div>
  );
}
