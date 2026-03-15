"use client";

import { createContext, useContext } from "react";
import type { PortalUser, EnrollmentApplication } from "@/types";

export interface PortalAuthContextType {
  user: PortalUser | null;
  application: EnrollmentApplication | null;
  isLoading: boolean;
  logout: () => void;
  setUser: (user: PortalUser | null) => void;
  setApplication: (app: EnrollmentApplication | null) => void;
}

export const PortalAuthContext = createContext<PortalAuthContextType>({
  user: null,
  application: null,
  isLoading: true,
  logout: () => {},
  setUser: () => {},
  setApplication: () => {},
});

export function usePortalAuth() {
  return useContext(PortalAuthContext);
}

export function getStoredToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("portal_token");
}

export function getStoredUser(): PortalUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem("portal_user");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function storeAuth(token: string, user: PortalUser) {
  localStorage.setItem("portal_token", token);
  localStorage.setItem("portal_user", JSON.stringify(user));
}

export function clearAuth() {
  localStorage.removeItem("portal_token");
  localStorage.removeItem("portal_user");
}
