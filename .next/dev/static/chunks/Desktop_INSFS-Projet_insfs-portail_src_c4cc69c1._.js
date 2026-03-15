(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/INSFS-Projet/insfs-portail/src/hooks/usePortalAuth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PortalAuthContext",
    ()=>PortalAuthContext,
    "clearAuth",
    ()=>clearAuth,
    "getStoredToken",
    ()=>getStoredToken,
    "getStoredUser",
    ()=>getStoredUser,
    "storeAuth",
    ()=>storeAuth,
    "usePortalAuth",
    ()=>usePortalAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const PortalAuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    user: null,
    application: null,
    isLoading: true,
    logout: ()=>{},
    setUser: ()=>{},
    setApplication: ()=>{}
});
function usePortalAuth() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PortalAuthContext);
}
_s(usePortalAuth, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function getStoredToken() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return localStorage.getItem("portal_token");
}
function getStoredUser() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = localStorage.getItem("portal_user");
        return raw ? JSON.parse(raw) : null;
    } catch  {
        return null;
    }
}
function storeAuth(token, user) {
    localStorage.setItem("portal_token", token);
    localStorage.setItem("portal_user", JSON.stringify(user));
}
function clearAuth() {
    localStorage.removeItem("portal_token");
    localStorage.removeItem("portal_user");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/INSFS-Projet/insfs-portail/src/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "http://localhost:8000/api") || "http://localhost:8000/api",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    },
    withCredentials: true
});
api.interceptors.request.use((config)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        const token = localStorage.getItem("portal_token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    return config;
});
api.interceptors.response.use((response)=>response, (error)=>{
    if (error.response?.status === 401 && ("TURBOPACK compile-time value", "object") !== "undefined") {
        localStorage.removeItem("portal_token");
        localStorage.removeItem("portal_user");
        window.location.href = "/connexion";
    }
    return Promise.reject(error);
});
const __TURBOPACK__default__export__ = api;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/INSFS-Projet/insfs-portail/src/components/providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$hooks$2f$usePortalAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/src/hooks/usePortalAuth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/src/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const queryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]({
    defaultOptions: {
        queries: {
            staleTime: 30_000,
            retry: 1
        }
    }
});
function PortalAuthProvider({ children }) {
    _s();
    const [user, setUserState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [application, setApplicationState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortalAuthProvider.useEffect": ()=>{
            const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$hooks$2f$usePortalAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredToken"])();
            const stored = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$hooks$2f$usePortalAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredUser"])();
            if (token && stored) {
                setUserState(stored);
                // Fetch fresh application data
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/portal/me").then({
                    "PortalAuthProvider.useEffect": (res)=>{
                        setUserState(res.data.user);
                        setApplicationState(res.data.application);
                    }
                }["PortalAuthProvider.useEffect"]).catch({
                    "PortalAuthProvider.useEffect": ()=>{
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$hooks$2f$usePortalAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAuth"])();
                        setUserState(null);
                        setApplicationState(null);
                    }
                }["PortalAuthProvider.useEffect"]).finally({
                    "PortalAuthProvider.useEffect": ()=>setIsLoading(false)
                }["PortalAuthProvider.useEffect"]);
            } else {
                setIsLoading(false);
            }
        }
    }["PortalAuthProvider.useEffect"], []);
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PortalAuthProvider.useCallback[logout]": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/portal/logout").catch({
                "PortalAuthProvider.useCallback[logout]": ()=>{}
            }["PortalAuthProvider.useCallback[logout]"]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$hooks$2f$usePortalAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAuth"])();
            setUserState(null);
            setApplicationState(null);
            window.location.href = "/connexion";
        }
    }["PortalAuthProvider.useCallback[logout]"], []);
    const setUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PortalAuthProvider.useCallback[setUser]": (u)=>setUserState(u)
    }["PortalAuthProvider.useCallback[setUser]"], []);
    const setApplication = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PortalAuthProvider.useCallback[setApplication]": (a)=>setApplicationState(a)
    }["PortalAuthProvider.useCallback[setApplication]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$hooks$2f$usePortalAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PortalAuthContext"].Provider, {
        value: {
            user,
            application,
            isLoading,
            logout,
            setUser,
            setApplication
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/components/providers.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(PortalAuthProvider, "z8guCEZ9KJE3PbJGERWVXT1Ds4o=");
_c = PortalAuthProvider;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PortalAuthProvider, {
            children: children
        }, void 0, false, {
            fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/components/providers.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/INSFS-Projet/insfs-portail/src/components/providers.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_c1 = Providers;
var _c, _c1;
__turbopack_context__.k.register(_c, "PortalAuthProvider");
__turbopack_context__.k.register(_c1, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_INSFS-Projet_insfs-portail_src_c4cc69c1._.js.map