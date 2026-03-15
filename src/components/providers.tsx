"use client";

import { useState, useEffect, useCallback } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  PortalAuthContext,
  getStoredUser,
  getStoredToken,
  clearAuth,
} from "@/hooks/usePortalAuth";
import type { PortalUser, EnrollmentApplication } from "@/types";
import api from "@/lib/api";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 30_000, retry: 1 },
  },
});

function PortalAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUserState] = useState<PortalUser | null>(null);
  const [application, setApplicationState] = useState<EnrollmentApplication | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = getStoredToken();
    const stored = getStoredUser();

    if (token && stored) {
      setUserState(stored);
      // Fetch fresh application data
      api.get("/portal/me")
        .then((res) => {
          setUserState(res.data.user);
          setApplicationState(res.data.application);
        })
        .catch(() => {
          clearAuth();
          setUserState(null);
          setApplicationState(null);
        })
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    api.post("/portal/logout").catch(() => {});
    clearAuth();
    setUserState(null);
    setApplicationState(null);
    window.location.href = "/connexion";
  }, []);

  const setUser = useCallback((u: PortalUser | null) => setUserState(u), []);
  const setApplication = useCallback((a: EnrollmentApplication | null) => setApplicationState(a), []);

  return (
    <PortalAuthContext.Provider
      value={{ user, application, isLoading, logout, setUser, setApplication }}
    >
      {children}
    </PortalAuthContext.Provider>
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <PortalAuthProvider>{children}</PortalAuthProvider>
    </QueryClientProvider>
  );
}
