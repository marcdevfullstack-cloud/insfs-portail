module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Desktop/INSFS-Projet/insfs-portail/src/hooks/usePortalAuth.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
const PortalAuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    user: null,
    application: null,
    isLoading: true,
    logout: ()=>{},
    setUser: ()=>{},
    setApplication: ()=>{}
});
function usePortalAuth() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(PortalAuthContext);
}
function getStoredToken() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
}
function getStoredUser() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
}
function storeAuth(token, user) {
    localStorage.setItem("portal_token", token);
    localStorage.setItem("portal_user", JSON.stringify(user));
}
function clearAuth() {
    localStorage.removeItem("portal_token");
    localStorage.removeItem("portal_user");
}
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/Desktop/INSFS-Projet/insfs-portail/src/lib/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "http://localhost:8000/api") || "http://localhost:8000/api",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    },
    withCredentials: true
});
api.interceptors.request.use((config)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return config;
});
api.interceptors.response.use((response)=>response, (error)=>{
    if (error.response?.status === 401 && ("TURBOPACK compile-time value", "undefined") !== "undefined") //TURBOPACK unreachable
    ;
    return Promise.reject(error);
});
const __TURBOPACK__default__export__ = api;
}),
"[project]/Desktop/INSFS-Projet/insfs-portail/src/components/providers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$hooks$2f$usePortalAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/src/hooks/usePortalAuth.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/INSFS-Projet/insfs-portail/src/lib/api.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const queryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClient"]({
    defaultOptions: {
        queries: {
            staleTime: 30_000,
            retry: 1
        }
    }
});
function PortalAuthProvider({ children }) {
    const [user, setUserState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [application, setApplicationState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$hooks$2f$usePortalAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStoredToken"])();
        const stored = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$hooks$2f$usePortalAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStoredUser"])();
        if (token && stored) {
            setUserState(stored);
            // Fetch fresh application data
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("/portal/me").then((res)=>{
                setUserState(res.data.user);
                setApplicationState(res.data.application);
            }).catch(()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$hooks$2f$usePortalAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearAuth"])();
                setUserState(null);
                setApplicationState(null);
            }).finally(()=>setIsLoading(false));
        } else {
            setIsLoading(false);
        }
    }, []);
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/portal/logout").catch(()=>{});
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$hooks$2f$usePortalAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearAuth"])();
        setUserState(null);
        setApplicationState(null);
        window.location.href = "/connexion";
    }, []);
    const setUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((u)=>setUserState(u), []);
    const setApplication = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((a)=>setApplicationState(a), []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$src$2f$hooks$2f$usePortalAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PortalAuthContext"].Provider, {
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
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$INSFS$2d$Projet$2f$insfs$2d$portail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PortalAuthProvider, {
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
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9964cc06._.js.map