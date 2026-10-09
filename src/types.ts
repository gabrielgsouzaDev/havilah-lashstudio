export enum ProcedureId {
  VOLUME_PREMIUM = 'volume_premium',
  PRINCESS_EFFECT = 'princess_effect',
  VOLUME_HAVILAH = 'volume_havilah',
  FOX_EYES = 'fox_eyes',
  VOLUME_DIVINE = 'volume_divine',
  CAPPING = 'capping',
  COMBO_GLAMOUR = 'combo_glamour',
  NATURAL_SOFT = 'natural_soft',
}

export enum AppRoute {
  HOME = '/',
  PRICING = '/valores',
  BOOKING = '/agendamento',
  CONSULTANCY = '/consultoria',
  CARE = '/cuidados',
  ABOUT_ME = '/sobre-mim',
  CHAT = '/chat-ai',
  DASHBOARD = '/dashboard',
}

export interface Procedure {
  id: ProcedureId;
  name: string;
  description: string;
  imagePlaceholder: string;
  price: number;
  maintenancePrice?: number;
}

export interface AdditionalService {
  id: string;
  name: string;
  price: number;
}

export interface CareTip {
  title: string;
  text: string;
  icon: 'clock' | 'droplet' | 'shield' | 'feather';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  modelUsed: string;
  timeAsClient: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'procedimento' | 'cuidados' | 'agendamento' | 'estudio';
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  technique: string;
}

export interface ConsultancyResult {
  eyeType: string;
  recommendedIds: ProcedureId[];
  summary: string;
  curvatures: string;
}


