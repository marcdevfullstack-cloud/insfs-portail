(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/INSFS-Projet/insfs-portail/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/INSFS-Projet/insfs-portail/src/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ label, error, hint, correctionHighlight = false, correction = false, className, id, ...props }) {
    const isHighlighted = correctionHighlight || correction;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-1.5",
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: id,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-medium", isHighlighted ? "text-amber-600" : "text-gray-700"),
                children: [
                    label,
                    props.required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-red-500 ml-1",
                        children: "*"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/components/ui/input.tsx",
                        lineNumber: 34,
                        columnNumber: 30
                    }, this),
                    isHighlighted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-2 text-xs bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-md",
                        children: "À corriger"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/components/ui/input.tsx",
                        lineNumber: 36,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/components/ui/input.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: id,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-11 w-full rounded-xl border px-3.5 text-sm bg-white transition-colors", "focus:outline-none focus:ring-2 focus:ring-offset-1", isHighlighted ? "border-amber-400 focus:ring-amber-400/40 bg-amber-50/30" : "border-gray-200 focus:ring-[#1a3a6b]/25 focus:border-[#1a3a6b]", error ? "border-red-400 focus:ring-red-400/30" : "", "disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed", className),
                ...props
            }, void 0, false, {
                fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/components/ui/input.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-red-500",
                children: error
            }, void 0, false, {
                fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/components/ui/input.tsx",
                lineNumber: 56,
                columnNumber: 17
            }, this),
            hint && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-gray-400",
                children: hint
            }, void 0, false, {
                fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/components/ui/input.tsx",
                lineNumber: 57,
                columnNumber: 26
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/components/ui/input.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = Input;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/INSFS-Projet/insfs-portail/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
;
;
function Button({ variant = "primary", size = "md", loading = false, children, className, disabled, ...props }) {
    const base = "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95";
    const variants = {
        primary: "bg-[#1a3a6b] text-white hover:bg-[#15306b] focus:ring-[#1a3a6b]/40",
        secondary: "bg-[#009A44] text-white hover:bg-[#007a36] focus:ring-[#009A44]/40",
        outline: "border-2 border-[#1a3a6b] text-[#1a3a6b] hover:bg-[#1a3a6b]/5 focus:ring-[#1a3a6b]/40",
        ghost: "text-[#1a3a6b] hover:bg-[#1a3a6b]/8 focus:ring-[#1a3a6b]/20",
        destructive: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500/40"
    };
    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2.5 text-sm",
        lg: "px-6 py-3.5 text-base w-full"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(base, variants[variant], sizes[size], className),
        disabled: disabled || loading,
        ...props,
        children: [
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "w-4 h-4 animate-spin"
            }, void 0, false, {
                fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/components/ui/button.tsx",
                lineNumber: 43,
                columnNumber: 19
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/components/ui/button.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InscriptionPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/node_modules/zod/v3/external.js [app-client] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$hooks$2f$usePortalAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/src/hooks/usePortalAuth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/src/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
// ── Step 1: Eligibility check ────────────────────────────
const eligibilitySchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    last_name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "Nom requis"),
    first_name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "Prénom requis"),
    date_of_birth: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Date de naissance requise")
});
// ── Step 2: Account creation ─────────────────────────────
const registerSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email("Email invalide"),
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(8, "Numéro requis (min 8 chiffres)"),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(8, "Minimum 8 caractères"),
    password_confirmation: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
}).refine((d)=>d.password === d.password_confirmation, {
    message: "Les mots de passe ne correspondent pas",
    path: [
        "password_confirmation"
    ]
});
function InscriptionPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { setUser, setApplication } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$hooks$2f$usePortalAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePortalAuth"])();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [eligibility, setEligibility] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [apiError, setApiError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Step 1 form
    const eligibilityForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(eligibilitySchema)
    });
    // Step 2 form
    const registerForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(registerSchema)
    });
    // ── Step 1: Check eligibility ──────────────────────────
    const checkEligibility = async (data)=>{
        setApiError("");
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/portal/check-eligibility", data);
            const result = res.data;
            setEligibility(result);
            if (result.found && !result.already_registered) {
                setStep(2);
            }
        } catch  {
            setApiError("Erreur lors de la vérification. Réessayez.");
        }
    };
    // ── Step 2: Register ───────────────────────────────────
    const register = async (data)=>{
        if (!eligibility?.admitted_student_id) return;
        setApiError("");
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/portal/register", {
                admitted_student_id: eligibility.admitted_student_id,
                ...data
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$hooks$2f$usePortalAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storeAuth"])(res.data.token, res.data.user);
            setUser(res.data.user);
            setApplication(res.data.application);
            router.push("/espace");
        } catch (err) {
            const e = err;
            const errs = e.response?.data?.errors;
            if (errs) {
                const first = Object.values(errs)[0]?.[0];
                setApiError(first || "Une erreur est survenue.");
            } else {
                setApiError(e.response?.data?.message || "Une erreur est survenue.");
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#1a3a6b] text-white px-4 pt-12 pb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-sm mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "inline-flex items-center gap-1.5 text-white/70 text-sm mb-6 hover:text-white transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                "Retour"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                        className: "w-6 h-6 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-white/60",
                                            children: "Portail Étudiant INSFS"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-bold text-lg",
                                            children: "Créer mon compte"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 mt-4",
                            children: [
                                1,
                                2
                            ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${s < step ? "bg-[#009A44] text-white" : s === step ? "bg-white text-[#1a3a6b]" : "bg-white/20 text-white/60"}`,
                                            children: s < step ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                                lineNumber: 132,
                                                columnNumber: 31
                                            }, this) : s
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                            lineNumber: 123,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-xs ${s === step ? "text-white font-medium" : "text-white/50"}`,
                                            children: s === 1 ? "Éligibilité" : "Compte"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                            lineNumber: 134,
                                            columnNumber: 17
                                        }, this),
                                        s < 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-px bg-white/30 mx-1"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                            lineNumber: 137,
                                            columnNumber: 27
                                        }, this)
                                    ]
                                }, s, true, {
                                    fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 px-4 py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-sm mx-auto",
                    children: [
                        step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: eligibilityForm.handleSubmit(checkEligibility),
                            className: "flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-bold text-gray-800 mb-1",
                                            children: "Vérification d'éligibilité"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                            lineNumber: 152,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500",
                                            children: "Renseignez vos informations exactement comme sur votre acte de naissance pour vérifier que vous êtes dans la liste des admis."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                            lineNumber: 153,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "last_name",
                                    label: "Nom de famille",
                                    placeholder: "Ex: KOUAME",
                                    required: true,
                                    error: eligibilityForm.formState.errors.last_name?.message,
                                    ...eligibilityForm.register("last_name")
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                    lineNumber: 158,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "first_name",
                                    label: "Prénom(s)",
                                    placeholder: "Ex: Jean-Baptiste",
                                    required: true,
                                    error: eligibilityForm.formState.errors.first_name?.message,
                                    ...eligibilityForm.register("first_name")
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "date_of_birth",
                                    label: "Date de naissance",
                                    type: "date",
                                    required: true,
                                    error: eligibilityForm.formState.errors.date_of_birth?.message,
                                    ...eligibilityForm.register("date_of_birth")
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                    lineNumber: 174,
                                    columnNumber: 15
                                }, this),
                                eligibility && !eligibility.found && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-red-50 border border-red-200 rounded-xl px-4 py-3 flex gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                            className: "w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                            lineNumber: 186,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-red-700",
                                                    children: "Non trouvé"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-red-600 mt-0.5",
                                                    children: eligibility.message || "Vos informations ne correspondent pas à notre liste. Vérifiez l'orthographe et la date de naissance."
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                            lineNumber: 187,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                    lineNumber: 185,
                                    columnNumber: 17
                                }, this),
                                eligibility?.found && eligibility.already_registered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 flex gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                            className: "w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                            lineNumber: 198,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-amber-700",
                                                    children: "Compte déjà créé"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-amber-600 mt-0.5",
                                                    children: [
                                                        "Un compte existe déjà pour cet admis.",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/connexion",
                                                            className: "underline font-medium",
                                                            children: "Connectez-vous"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                                            lineNumber: 203,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                            lineNumber: 199,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                    lineNumber: 197,
                                    columnNumber: 17
                                }, this),
                                apiError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-red-50 border border-red-200 rounded-xl px-4 py-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-red-600",
                                        children: apiError
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                        lineNumber: 213,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                    lineNumber: 212,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "submit",
                                    size: "lg",
                                    loading: eligibilityForm.formState.isSubmitting,
                                    className: "mt-2",
                                    children: [
                                        "Vérifier mon éligibilité",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                            lineNumber: 224,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                    lineNumber: 217,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, this),
                        step === 2 && eligibility?.found && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: registerForm.handleSubmit(register),
                            className: "flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-bold text-gray-800 mb-1",
                                            children: "Créer mon compte"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                            lineNumber: 233,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3 flex gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                    className: "w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium text-emerald-700",
                                                            children: "Éligibilité confirmée"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                                            lineNumber: 237,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-emerald-600 mt-0.5",
                                                            children: [
                                                                eligibility.school,
                                                                " — ",
                                                                eligibility.academic_year,
                                                                " — Année ",
                                                                eligibility.year_of_study
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                                            lineNumber: 238,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                            lineNumber: 234,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                    lineNumber: 232,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "email",
                                    label: "Adresse email",
                                    type: "email",
                                    placeholder: "votre@email.com",
                                    required: true,
                                    hint: "Vous recevrez vos notifications sur cet email",
                                    error: registerForm.formState.errors.email?.message,
                                    ...registerForm.register("email")
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                    lineNumber: 245,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "phone",
                                    label: "Numéro de téléphone",
                                    type: "tel",
                                    placeholder: "07 00 00 00 00",
                                    required: true,
                                    error: registerForm.formState.errors.phone?.message,
                                    ...registerForm.register("phone")
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                    lineNumber: 255,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "password",
                                            className: "text-sm font-medium text-gray-700",
                                            children: [
                                                "Mot de passe ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 32
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                            lineNumber: 266,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "password",
                                                    type: showPassword ? "text" : "password",
                                                    placeholder: "Min. 8 caractères",
                                                    className: "h-11 w-full rounded-xl border border-gray-200 px-3.5 pr-11 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#1a3a6b]/25 focus:border-[#1a3a6b]",
                                                    ...registerForm.register("password")
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setShowPassword(!showPassword),
                                                    className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400",
                                                    children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                                        lineNumber: 282,
                                                        columnNumber: 37
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                                        lineNumber: 282,
                                                        columnNumber: 70
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                            lineNumber: 269,
                                            columnNumber: 17
                                        }, this),
                                        registerForm.formState.errors.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-red-500",
                                            children: registerForm.formState.errors.password.message
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                            lineNumber: 286,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                    lineNumber: 265,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "password_confirmation",
                                    label: "Confirmer le mot de passe",
                                    type: "password",
                                    placeholder: "Répétez votre mot de passe",
                                    required: true,
                                    error: registerForm.formState.errors.password_confirmation?.message,
                                    ...registerForm.register("password_confirmation")
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                    lineNumber: 290,
                                    columnNumber: 15
                                }, this),
                                apiError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-red-50 border border-red-200 rounded-xl px-4 py-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-red-600",
                                        children: apiError
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                        lineNumber: 302,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                    lineNumber: 301,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 mt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "button",
                                            variant: "outline",
                                            size: "md",
                                            onClick: ()=>{
                                                setStep(1);
                                                setApiError("");
                                                setEligibility(null);
                                            },
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 19
                                                }, this),
                                                "Retour"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                            lineNumber: 307,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "submit",
                                            size: "md",
                                            loading: registerForm.formState.isSubmitting,
                                            className: "flex-[2]",
                                            children: "Créer mon compte"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                            lineNumber: 317,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                    lineNumber: 306,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                            lineNumber: 231,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-sm text-gray-500 mt-6",
                            children: [
                                "Déjà un compte ?",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/connexion",
                                    className: "text-[#1a3a6b] font-semibold hover:underline",
                                    children: "Se connecter"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                                    lineNumber: 331,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                            lineNumber: 329,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                    lineNumber: 146,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/app/(auth)/inscription/page.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_s(InscriptionPage, "rAkkAo21/Ief253woHB+ZVIq10E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$hooks$2f$usePortalAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePortalAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = InscriptionPage;
var _c;
__turbopack_context__.k.register(_c, "InscriptionPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_INSFS-Projet_insfs-portail_src_0d1370d1._.js.map