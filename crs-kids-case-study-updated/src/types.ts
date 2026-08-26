export interface NavItem {
  id: string;
  num: string;
  label: string;
}

export interface Persona {
  id: string;
  role: string;
  badge: string;
  quote: string;
  subQuote: string;
  color: string;
  accentBg: string;
  iconName: string;
  emotionalCore: string;
  needs: string[];
  designedMoments: string[];
  keyArtifact: string;
}

export interface JourneyStage {
  id: string;
  stageNum: string;
  name: string;
  englishName: string;
  timeSlot: string;
  goal: string;
  emotion: string;
  outcome: string;
  touchpoints: string[];
  color: string;
  icon: string;
}

export interface TimelineEvent {
  time: string;
  title: string;
  subtitle: string;
  description: string;
  zone: string;
  visualTag: string;
  icon: string;
  accentColor: string;
  keyHighlight: string;
}

export interface StationTent {
  id: string;
  number: string;
  title: string;
  badge: string;
  type: string;
  duration: string;
  targetAge: string;
  experience: string;
  learnings: string[];
  stamp: string;
  stampIcon: string;
  stampColor: string;
  toolsUsed: string[];
  physicalSetup: string;
  coOpLevel: string;
}

export interface VenueZone {
  id: string;
  title: string;
  tag: string;
  x: number; // percentage
  y: number; // percentage
  color: string;
  icon: string;
  whatHappens: string;
  whyHere: string;
  whatParticipantFeels: string;
  spatialFeatures: string[];
  dimensions: string;
}

export interface DesignArtifact {
  id: string;
  title: string;
  category: 'Kimlik' | 'Fiziksel Materyal' | 'Çevre & Yönlendirme' | 'Dijital Deneyim';
  description: string;
  whyRationale: string;
  color: string;
  icon: string;
  details: string[];
}

export interface ProjectMilestone {
  code: string;
  title: string;
  timeframe: string;
  focus: string;
  deliverables: string[];
  isEventDay?: boolean;
}

export interface StakeholderGroup {
  name: string;
  role: string;
  responsibility: string;
  criticalSuccessFactor: string;
  icon: string;
}

export interface SupplierGroup {
  name: string;
  scope: string;
  deliverable: string;
  selectionCriteria: string;
}

export interface RiskItem {
  risk: string;
  probability: 'Düşük' | 'Orta' | 'Yüksek';
  impact: 'Kritik' | 'Yüksek' | 'Orta';
  mitigation: string;
  contingencyPlan: string;
}

export interface BudgetItem {
  category: string;
  percentage: number;
  description: string;
  costNote: string;
  color: string;
}

export interface MetricItem {
  value: string;
  label: string;
  sublabel: string;
  target: string;
  quote: string;
  color: string;
}
