export type PlotSize = '3-marla' | '5-marla' | '10-marla' | '1-kanal';

export type City = 'Lahore' | 'Karachi' | 'Islamabad' | 'Rawalpindi' | 'Peshawar' | 'Faisalabad' | 'Multan';

export type BuildType = 'grey-structure' | 'standard-finishing' | 'premium-finishing';

export interface EstimateBreakdown {
  total: number;
  greyStructure: number;
  finishing: number;
  durationMonths: number;
  materials: {
    bricks: { qty: number; unit: string; cost: number };
    cement: { qty: number; unit: string; cost: number };
    sand: { qty: number; unit: string; cost: number };
    steel: { qty: number; unit: string; cost: number };
    crush: { qty: number; unit: string; cost: number };
    paint: { qty: number; unit: string; cost: number };
    tiles: { qty: number; unit: string; cost: number };
  };
  laborCost: number;
}

export interface TimelinePhase {
  id: string;
  phaseNumber: number;
  title: string;
  durationWeeks: number;
  status: 'completed' | 'in-progress' | 'pending';
  deliverables: string[];
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  role: 'Homeowner' | 'Contractor' | 'Architect';
  rating: number;
  quote: string;
  avatarInitials: string;
  projectType: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProfessionalRole {
  id: string;
  title: string;
  benefits: string[];
  features: string[];
  cta: string;
}
