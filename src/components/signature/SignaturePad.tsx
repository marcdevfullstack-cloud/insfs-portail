"use client";

import { useRef, useState } from "react";
import ReactSignatureCanvas from "react-signature-canvas";
import { RotateCcw, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SignaturePadProps {
  onSave: (dataUrl: string) => void;
  existingSignature?: string | null;
  label?: string;
  subLabel?: string;
  disabled?: boolean;
}

export function SignaturePad({
  onSave,
  existingSignature,
  label = "Signature",
  subLabel,
  disabled = false,
}: SignaturePadProps) {
  const sigRef = useRef<ReactSignatureCanvas>(null);
  const [saved, setSaved] = useState(!!existingSignature);
  const [isEmpty, setIsEmpty] = useState(true);

  const handleClear = () => {
    sigRef.current?.clear();
    setSaved(false);
    setIsEmpty(true);
  };

  const handleSave = () => {
    if (!sigRef.current || sigRef.current.isEmpty()) return;
    const dataUrl = sigRef.current.toDataURL("image/png");
    onSave(dataUrl);
    setSaved(true);
  };

  const handleBegin = () => {
    setSaved(false);
    setIsEmpty(false);
  };

  if (saved && existingSignature) {
    return (
      <div className="flex flex-col gap-3">
        {label && <p className="text-sm font-medium text-gray-700">{label}</p>}
        <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 text-emerald-700">
            <CheckCircle className="w-5 h-5" />
            <span className="text-sm font-medium">Signature enregistrée</span>
          </div>
          <img
            src={existingSignature}
            alt="Signature"
            className="max-h-20 object-contain"
          />
          {!disabled && (
            <button
              type="button"
              onClick={() => setSaved(false)}
              className="text-xs text-gray-500 underline hover:text-gray-700"
            >
              Modifier la signature
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {label && (
        <p className="text-sm font-medium text-gray-700">
          {label} <span className="text-red-500">*</span>
        </p>
      )}
      {subLabel && <p className="text-xs text-gray-500 -mt-1">{subLabel}</p>}

      <div
        className={cn(
          "rounded-xl border-2 border-dashed overflow-hidden bg-white",
          "transition-colors",
          isEmpty ? "border-gray-200" : "border-[#1a3a6b]/40"
        )}
      >
        <ReactSignatureCanvas
          ref={sigRef}
          penColor="#1a3a6b"
          onBegin={handleBegin}
          canvasProps={{
            className: "signature-canvas w-full",
            style: { height: 160, display: "block", width: "100%" },
          }}
        />
      </div>

      <p className="text-xs text-gray-400 text-center">
        Utilisez votre doigt ou la souris pour signer dans le cadre
      </p>

      <div className="flex gap-2">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={handleClear}
          className="flex-1"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Effacer
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="sm"
          onClick={handleSave}
          disabled={isEmpty}
          className="flex-1"
        >
          <CheckCircle className="w-3.5 h-3.5" />
          Valider la signature
        </Button>
      </div>
    </div>
  );
}
