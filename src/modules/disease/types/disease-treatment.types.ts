export interface Pesticide {
  name: string;
  type: string;
  dosage: string;
}

export interface DiseaseTreatment {
  id: number;
  name: string;
  url?: string;
  recommended_pesticides?: Pesticide[];
  recommended_treatment?: string;
  dosage?: string;
  application_frequency?: string;
}
