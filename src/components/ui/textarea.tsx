import { cn } from "@/lib/utils";
import type { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  correctionHighlight?: boolean;
  correction?: boolean;
}

export function Textarea({
  label,
  error,
  correctionHighlight = false,
  correction = false,
  className,
  id,
  ...props
}: TextareaProps) {
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
        </label>
      )}
      <textarea
        id={id}
        className={cn(
          "w-full rounded-xl border px-3.5 py-3 text-sm bg-white transition-colors resize-none",
          "focus:outline-none focus:ring-2 focus:ring-offset-1",
          isHighlighted
            ? "border-amber-400 focus:ring-amber-400/40"
            : "border-gray-200 focus:ring-[#1a3a6b]/25 focus:border-[#1a3a6b]",
          error ? "border-red-400" : "",
          className
        )}
        rows={props.rows ?? 3}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
