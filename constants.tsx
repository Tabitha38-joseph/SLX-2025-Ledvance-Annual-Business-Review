
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
        { label: "Personalization Engine Built", text: "Implemented 'Business Type' and 'Role type' fields specifically to unlock hyper-relevant B2B personalization for 2026." }
      ]
    }
  },
  {
    id: 3,
    title: "2025 Highlights",
    icon: <Target size={18} />,
    header: "2025 Highlights: From Strategy to Execution",
    layout: 'columns',
    content: [
      {
        goal: "UX-Optimized Lead Capture",
        icon: "globe",
        execution: "SalesLabX provided strategic direction and performance-focused designs for the new Contact Us and Contact Sales layouts. We defined the high-conversion sticky-form UX to streamline the lead capture process and improve professional B2B engagement."
      },
      {
        goal: "Database Building",
        icon: "database",
        execution: "Leveraged ZoomInfo and BDR collaboration to manually enrich the database with Business and Role type fields for all segments (Engineers, Designers, Distributors), ensuring 2026 readiness for hyper-relevant content journeys."
      },
      {
        goal: "Strategic Segmentation",
        icon: "filter",
        execution: "Created B2B Segmentation Target Lists to remove consumer accounts. Audited unsubscribe mechanisms and footers to ensure system-wide compliance and data hygiene."
      }
    ]
  },
  {
    id: 4,
    title: "Product Velocity",
    icon: <Zap size={18} />,
    header: "Product Launch Velocity",
    layout: 'velocity',
    content: {
      volume: {
        title: "The Volume",
        points: [
          "Quarterly Redesigns: Managed end-to-end digital logistics and fully redesigned Internal and External Product Launch Landing Pages every single quarter (Q1-Q4).",
          "Sub-brand Integration: Scaled designs for Phase EV, LINK, and TruWave ecosystems within the core launch infrastructure."
        ]
      },
      variety: {
        title: "Product Spotlights",
        items: [
          { name: "Phase EV Gen 2", desc: "Dual-market commercial charger launch (US/English & Canada/French)." },
          { name: "Night Ring", desc: "\"Light the Night\" specialized design for landscape and security." },
          { name: "Opti-Select", desc: "Trade Media High Bay campaign featuring selectable beam technology." },
          { name: "LED Tubes", desc: "Complete 2025 Product Guide distribution and technical spec mapping." }
        ]
      }
    }
  },
  {
    id: 5,
    title: "Education Ecosystem",
    icon: <BookOpen size={18} />,
    header: "Education as a Marketing Tool",
    layout: 'dark',
    content: {
      intro: "A robust On-Demand ecosystem supporting the goal of providing 'Tools & Training' to the trade through gated lead-capture.",
      lightpoint: {
        title: "LightPoint On-Demand: Modules 1-7",
        desc: "Built high-volume gated landing pages for the complete curriculum. Specific topics include TM-30, Lighting Audits, and selective Beam technology.",
        topics: ["Module 1: Advanced Back to Basics", "Module 2: Introduction to TM-30", "Module 3: Lighting Design Process", "Module 4: Lighting Audits", "Module 5: Controls Basics", "Module 6: Industrial Applications", "Module 7: Energy Star Sunsetting"]
      },
      live: [
        "Strategic awareness campaigns for 2025 & 2026 LIGHTPOINT Onsite Training (Controls Essentials).",
        "Lead capture for regional training events through optimized digital RSVPs and role-type verification."
      ]
    }
  },
  {
    id: 6,
    title: "Lead Capture",
    icon: <UserCheck size={18} />,
    header: "Lead Capture & Data Integrity",
    layout: 'split',
    content: {
      problem: "\"Homepage dumping\" of leads and missing audience data (Distributor vs. Contractor).",
      solutions: [
        {
          title: "Trade Ad Landing Page Strategy",
          text: "Built the 'Trade Ad - Marketing Cloud Landing Page' (/contact-sales) with UTM Tracking (Source, Medium, Campaign) to measure ROI on trade media spend."
        },
        {
          title: "Mandatory Field Logic",
          text: "Updated SLX_Contact Us Form and ProductPageContactForm. Result: No new contact enters the database without a defined Business Type and Role type."
        }
      ]
    }
  },
  {
    id: 7,
    title: "Technical Health",
    icon: <ShieldCheck size={18} />,
    header: "Technical Health & Infrastructure",
    layout: 'technical',
    content: [
      "Automation Optimization: Reduced run-times to 12/24-hour intervals to prevent system timeouts during high-volume sends.",
      "Footer Compliance: Fixed broken 'Preference Center' links and updated footer templates across all MC assets.",
      "Cookie Tracking: Initiated the 'Subscriber Cookie Tracking' project to enable behavioral targeting.",
      "Rendering: Resolved 'NYCU' email rendering issues specifically for Chrome and Edge browsers."
    ]
  },
  {
    id: 8,
    title: "Performance",
    icon: <BarChart3 size={18} />,
    header: "2025 Performance: The Year of Scale & Precision",
    layout: 'performance',
    content: {
      table: [
        { month: "Jan", sends: "30,966", open: "21.23%", ctor: "25.20%" },
        { month: "Feb", sends: "83,415", open: "25.46%", ctor: "13.26%" },
        { month: "Mar", sends: "88,872", open: "19.62%", ctor: "20.23%" },
        { month: "Apr", sends: "170,035", open: "18.73%", ctor: "18.65%", highlight: "Peak Scale" },
        { month: "May", sends: "86,062", open: "19.86%", ctor: "9.70%" },
        { month: "Jun", sends: "33,613", open: "21.42%", ctor: "20.92%" },
        { month: "Jul", sends: "25,030", open: "21.51%", ctor: "22.22%" },
        { month: "Aug", sends: "73,682", open: "19.81%", ctor: "15.80%" },
        { month: "Sep", sends: "43,104", open: "19.74%", ctor: "20.55%" },
        { month: "Oct", sends: "5,228", open: "24.50%", ctor: "24.42%", highlight: "Quality Peak" },
        { month: "Nov", sends: "82,317", open: "16.13%", ctor: "15.22%" },
      ]
    }
  },
  {
    id: 9,
    title: "2026 Strategy",
    icon: <TrendingUp size={18} />,
    header: "2026 Strategic Evolution",
    layout: 'strategy',
    content: {
      pillars: [
        {
          title: "Advanced Automation & Nurtures",
          description: "Deploying sophisticated automation and DRIP campaigns. Readiness: Audited engine and segmented database are ready for behavioral-triggered series.",
          icon: "zap"
        },
        {
          title: "Hyper-Personalization",
          description: "Tailored content for key personas (Distributors, Contractors, Engineers) enabled by our 2025 Business and Role Type field implementation.",
          icon: "users"
        },
        {
          title: "Strategic Lead Management",
          description: "Implementing MQL Foundation and Lead Scoring. Readiness: Building transition pathways bridging marketing engagement to direct sales action.",
          icon: "route"
        },
        {
          title: "Content AI Engine",
          description: "Building AI-powered content system to increase output of case studies and blog posts segmented by business type. Performance tracking identifies what resonates with each persona, enabling scaled, targeted content creation.",
          icon: "edit"
        },
        {
          title: "Commerce Cloud",
          description: "Partnering to build Salesforce Commerce Cloud foundation and attribution infrastructure. Establishing frameworks to connect marketing engagement to commerce sales, creating measurable marketing revenue impact.",
          icon: "shopping-cart"
        }
      ]
    }
  },
  {
    id: 10,
    title: "Summary",
    icon: <Flag size={18} />,
    header: "Summary",
    layout: 'summary',
    content: {
      white: "In 2025, SalesLabX didn't just execute campaigns; we built the data infrastructure (Fields, Forms, Segmentation) required to achieve LEDVANCE's 2026 vision.",
      orange: [
        "Infrastructure is Stable.",
        "Segmentation is Live.",
        "Ready for 2026.",
        "Let's Scale the Personalization Journey."
      ]
    }
  }
];
