import React from 'react';
import { 
  Home, 
  ClipboardList, 
  Target, 
  Zap, 
  BookOpen, 
  UserCheck, 
  ShieldCheck, 
  TrendingUp, 
  Flag, 
  Globe, 
  Database, 
  Filter, 
  BarChart3 
} from 'lucide-react';

export interface SlideData {
  id: number;
  title: string;
  icon: React.ReactNode;
  header?: string;
  content: any;
  layout: 'title' | 'executive' | 'columns' | 'velocity' | 'dark' | 'split' | 'technical' | 'performance' | 'strategy' | 'summary';
}

export const slides: SlideData[] = [
  {
    id: 1,
    title: "Title Slide",
    icon: <Home size={18} />,
    layout: 'title',
    content: {
      main: "LEDVANCE 2025 Annual Business Review",
      sub: "Building the Foundation for Personalization",
      footer: "Prepared by SalesLabX"
    }
  },
  {
    id: 2,
    title: "Executive Summary",
    icon: <ClipboardList size={18} />,
    header: "Foundational Strategic Realignment",
    layout: 'executive',
    content: {
      body: "In 2025, our core focus was on building, cleaning, and expanding the database foundation. By implementing new Business Type and Role type fields across all forms, we successfully transitioned from broad broadcasting to a data-rich environment designed for precision.",
      achievements: [
        { label: "Volume & Variety", text: "Increased total email sends with fresh designs across 4 Quarterly Launches and 20+ Product Spotlights." },
        { label: "Database Growth", text: "Successfully launched the Rolling Showroom YETI Giveaway to build the contractor database." },
        { label: "Personalization Engine Built", text: "Implemented 'Business Type' and 'Role type' fields specifically to unlock hyper-relevant B2B personalization for 2026."
