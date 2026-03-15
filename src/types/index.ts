export interface AdmittedStudentInfo {
  id: string;
  last_name: string;
  first_name: string;
  date_of_birth: string;
  school: string | null;
  academic_year: string | null;
  entry_mode: string;
  year_of_study: number;
  status: string;
}

export interface PortalUser {
  id: string;
  admitted_student_id: string;
  last_name: string;
  first_name: string;
  date_of_birth: string;
  email: string;
  phone: string | null;
  created_at: string;
  admitted_student?: AdmittedStudentInfo;
}

export type ApplicationStatus =
  | "BROUILLON"
  | "SOUMIS"
  | "EN_TRAITEMENT"
  | "CORRECTION_DEMANDEE"
  | "VALIDE"
  | "REJETE"
  | "COMPLET";

export interface CorrectionField {
  field: string;
  message: string;
}

export interface ApplicationDocument {
  id: string;
  document_type: string;
  original_name: string;
  file_url?: string;
  file_size: number;
  status: "SOUMIS" | "VALIDE" | "REJETE";
  notes: string | null;
  created_at: string;
}

export interface ApplicationSignature {
  id: string;
  signature_type: string;
  signature_image: string;
  signer_name: string | null;
  signed_at: string;
}

export interface EnrollmentApplication {
  id: string;
  status: ApplicationStatus;
  rejection_reason: string | null;
  correction_fields: CorrectionField[] | null;
  submitted_at: string | null;
  validated_at: string | null;
  completed_at: string | null;

  // Section I — Identité
  last_name: string | null;
  first_name: string | null;
  gender: "M" | "F" | null;
  date_of_birth: string | null;
  place_of_birth: string | null;
  nationality: string | null;
  father_name: string | null;
  mother_name: string | null;
  marital_status: string | null;
  children_count: number;
  phone: string | null;
  email: string | null;
  photo_url: string | null;

  // Statut
  status_type: "Fonctionnaire" | "Boursier national" | "Boursier étranger" | "Non-boursier" | null;
  emploi: string | null;
  matricule_fonctionnaire: string | null;
  echelon: string | null;
  categorie: string | null;
  classe: string | null;

  // Section II — Diplômes
  diploma_cepe: boolean;
  diploma_bepc: boolean;
  diploma_bac: boolean;
  diploma_bac_serie: string | null;
  other_diplomas: string | null;

  // Section III — Entrée
  entry_date: string | null;

  // Section IV — Adresse
  address_quarter: string | null;
  address_apartment: string | null;
  address_phone: string | null;
  postal_box: string | null;
  vacation_address: string | null;
  tutor_name: string | null;
  tutor_address: string | null;
  tutor_phone: string | null;

  // Section V — Santé
  has_health_issues: boolean;
  health_condition: string | null;
  doctor_info: string | null;

  // Engagement
  engagement_signed: boolean;
  engagement_signed_at: string | null;

  // PDFs générés
  fiche_identification_path: string | null;
  fiche_inscription_path: string | null;
  certificat_inscription_path: string | null;

  // Relations
  documents?: ApplicationDocument[];
  signatures?: ApplicationSignature[];
}

export interface GeneratedDocument {
  document_type: string;
  label: string;
  available: boolean;
  description: string;
}

export interface EligibilityResult {
  found: boolean;
  already_registered?: boolean;
  admitted_student_id?: string;
  school?: string;
  academic_year?: string;
  entry_mode?: string;
  year_of_study?: number;
  message?: string;
}