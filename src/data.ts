import { FeatureItem, Testimonial, City, PlotSize, BuildType, EstimateBreakdown, TimelinePhase } from './types';

export const citiesList: { id: City; name: string; multiplier: number }[] = [
  { id: 'Lahore', name: 'Lahore', multiplier: 1.0 },
  { id: 'Karachi', name: 'Karachi', multiplier: 1.05 },
  { id: 'Islamabad', name: 'Islamabad', multiplier: 1.1 },
  { id: 'Rawalpindi', name: 'Rawalpindi', multiplier: 1.02 },
  { id: 'Peshawar', name: 'Peshawar', multiplier: 0.95 },
  { id: 'Faisalabad', name: 'Faisalabad', multiplier: 0.93 },
  { id: 'Multan', name: 'Multan', multiplier: 0.92 },
];

export const plotSizesList: { id: PlotSize; name: string; areaSqFt: number }[] = [
  { id: '3-marla', name: '3 Marla (675 sq. ft.)', areaSqFt: 675 },
  { id: '5-marla', name: '5 Marla (1,125 sq. ft.)', areaSqFt: 1125 },
  { id: '10-marla', name: '10 Marla (2,250 sq. ft.)', areaSqFt: 2250 },
  { id: '1-kanal', name: '1 Kanal (4,500 sq. ft.)', areaSqFt: 4500 },
];

export const buildTypesList: { id: BuildType; name: string; baseRatePerSqFt: number; desc: string }[] = [
  { 
    id: 'grey-structure', 
    name: 'Grey Structure (Structural Only)', 
    baseRatePerSqFt: 2200,
    desc: 'Foundation, pillars, concrete beams, brickwalls, plaster, and basic piping'
  },
  { 
    id: 'standard-finishing', 
    name: 'Standard Finishing (A-Category)', 
    baseRatePerSqFt: 3800,
    desc: 'Complete grey structure + premium local tiles, standard woodwork, paint, electrical, and plumbing fixtures'
  },
  { 
    id: 'premium-finishing', 
    name: 'Premium Finishing (Executive A+)', 
    baseRatePerSqFt: 5200,
    desc: 'Luxurious finish. Turkish tiles, solid deodar woodwork, designer sanitary fittings, premium paint, false ceiling, and security systems'
  },
];

export const featuresList: FeatureItem[] = [
  {
    id: 'ai-cost',
    title: 'AI Cost Estimation',
    description: 'Instant project cost breakdown powered by AI, customized for current market rates in Pakistan.',
    iconName: 'Sparkles',
  },
  {
    id: 'smart-timeline',
    title: 'Smart Timeline Planning',
    description: 'Phase-by-phase automated project schedules aligned with weather, material delays, and worker schedules.',
    iconName: 'CalendarRange',
  },
  {
    id: 'contractor-network',
    title: 'Verified Contractor Network',
    description: 'Browse, filter, and hire rated, reviewed contractors with authentic local portfolio verifications.',
    iconName: 'UserCheck',
  },
  {
    id: 'architect-designers',
    title: 'Architects & Interior Designers',
    description: 'Discover and connect with certified professionals to conceptualize blueprints, structural designs, and interior layouts.',
    iconName: 'Compass',
  },
  {
    id: 'material-calc',
    title: 'Material Calculator',
    description: 'Instantly calculate the exact quantity of bricks, cement, sand, steel, and crush needed for your layout.',
    iconName: 'Calculator',
  },
  {
    id: 'supplier-mkt',
    title: 'Material Supplier Marketplace',
    description: 'Shop grey structure (cement, steel) and finishing materials directly from verified manufacturers at wholesale rates.',
    iconName: 'Store',
  },
  {
    id: 'labour-services',
    title: 'Labour Rate Services',
    description: 'Browse skilled daily-wage tradespeople—masons, plumbers, electricians—with transparent verified market rates.',
    iconName: 'Hammer',
  },
  {
    id: 'realtime-chat',
    title: 'Real-Time Messaging',
    description: 'Direct in-app messaging, voice notes, and file sharing between homeowners, contractors, and suppliers.',
    iconName: 'MessageSquare',
  },
  {
    id: 'pro-dashboards',
    title: 'Professional Dashboards',
    description: 'Dedicated business tools, portfolio management, analytics, and lead generation trackers for local builders.',
    iconName: 'LayoutDashboard',
  },
];

export const testimonialsList: Testimonial[] = [
  {
    id: '1',
    name: 'Kamran Alvi',
    city: 'DHA Phase 6, Lahore',
    role: 'Homeowner',
    rating: 5,
    quote: 'Tameer Saz saved me from contractor fraud. The AI Cost Estimate gave me leverage to negotiate with builders. The estimated cost of 5 Marla was exactly within 5% of my final spend!',
    avatarInitials: 'KA',
    projectType: '5 Marla Custom House',
  },
  {
    id: '2',
    name: 'Zainab Qazi',
    city: 'Clifton, Karachi',
    role: 'Architect',
    rating: 5,
    quote: 'As an architect, finding genuine clients who understand high-quality materials is tough. Tameer Saz connects me with pre-vetted homeowners who love our modern design catalog.',
    avatarInitials: 'ZQ',
    projectType: '1 Kanal Luxury Villa',
  },
  {
    id: '3',
    name: 'Engr. Tariq Mehmood',
    city: 'G-11, Islamabad',
    role: 'Contractor',
    rating: 5,
    quote: 'Managing multiple grey structure projects was chaotic until I started using their timeline scheduler. Material ordering and daily labor rates are easily managed on one single dashboard.',
    avatarInitials: 'TM',
    projectType: 'Tariq Construction Co.',
  },
];

export const stepsList = [
  {
    step: '01',
    title: 'Sign Up & Choose Your Role',
    description: 'Download the app and select your profile. Whether you are a Homeowner planning to build, or a Contractor, Architect, Labour, or Material Supplier looking to grow business.',
  },
  {
    step: '02',
    title: 'Plan Project or List Services',
    description: 'Homeowners use AI to estimate budgets, calculate materials, and map out timelines. Professionals upload their CNIC, licensing, and portfolio catalogs for verification.',
  },
  {
    step: '03',
    title: 'Connect, Transact & Build',
    description: 'Hire pre-screened teams, negotiate prices via secure chat, order raw materials directly from wholesale suppliers, and track milestone-based project timelines.',
  },
];

export const appScreensData = [
  {
    id: 'homeowner-dashboard',
    title: 'Homeowner Dashboard',
    subtitle: 'Track your home construction journey from anywhere',
    screenTitle: 'Project Progress',
    accentColor: '#F5C518',
  },
  {
    id: 'ai-estimator',
    title: 'AI Cost Estimator',
    subtitle: 'Accurate cost calculations in less than 30 seconds',
    screenTitle: 'AI Estimator',
    accentColor: '#2ECC71',
  },
  {
    id: 'contractor-marketplace',
    title: 'Contractor Marketplace',
    subtitle: 'Hire the best certified architects & structural engineers',
    screenTitle: 'Top Architects',
    accentColor: '#3498DB',
  },
  {
    id: 'realtime-chat',
    title: 'Real-Time Chat',
    subtitle: 'Direct encrypted collaboration with plumbers, suppliers & masons',
    screenTitle: 'Active Chats',
    accentColor: '#E67E22',
  },
  {
    id: 'supplier-catalog',
    title: 'Wholesale Suppliers',
    subtitle: 'Purchase cement, steel rebar & sanitary goods directly',
    screenTitle: 'Raw Materials',
    accentColor: '#9B59B6',
  },
  {
    id: 'pro-profile',
    title: 'Business Analytics',
    subtitle: 'Dashboard for construction professionals to scale leads',
    screenTitle: 'Earnings Hub',
    accentColor: '#F1C40F',
  }
];

export function calculateConstructionCost(
  sizeId: PlotSize,
  cityId: City,
  typeId: BuildType
): EstimateBreakdown {
  const size = plotSizesList.find((p) => p.id === sizeId) || plotSizesList[1];
  const city = citiesList.find((c) => c.id === cityId) || citiesList[0];
  const build = buildTypesList.find((b) => b.id === typeId) || buildTypesList[1];

  const baseCost = size.areaSqFt * build.baseRatePerSqFt * city.multiplier;
  
  // Grey Structure represents roughly 60% of Grey structure rate or full standard rate
  let greyPct = 0.60;
  let finishPct = 0.40;
  
  if (build.id === 'grey-structure') {
    greyPct = 1.0;
    finishPct = 0.0;
  }

  const greyStructureCost = Math.round(baseCost * greyPct);
  const finishingCost = Math.round(baseCost * finishPct);
  const totalCost = greyStructureCost + finishingCost;

  // Material estimates (quantities based on construction norms in Pakistan per sq ft)
  // E.g. Cement: ~0.4 bags per sq ft for grey structure, +0.2 for standard finishing
  const area = size.areaSqFt;
  const cementBags = Math.round(area * (build.id === 'grey-structure' ? 0.45 : build.id === 'standard-finishing' ? 0.70 : 0.85));
  const bricksCount = Math.round(area * (build.id === 'grey-structure' ? 32 : 36));
  const sandCft = Math.round(area * 1.8);
  const steelTons = Number((area * 0.0022).toFixed(2)); // ~2.2 kg per sq ft -> tons
  const crushCft = Math.round(area * 1.2);
  const paintDrums = Math.round(area * 0.008);
  const tilesBoxes = Math.round(area * 0.4);

  // Current realistic average wholesale cost in PKR for 2026/2025:
  const CEMENT_PRICE_PER_BAG = 1450;
  const BRICK_PRICE_PER_PIECE = 18;
  const SAND_PRICE_PER_CFT = 85;
  const STEEL_PRICE_PER_TON = 265000;
  const CRUSH_PRICE_PER_CFT = 140;
  const PAINT_DRUM_PRICE = 16000;
  const TILE_BOX_PRICE = 2800;

  const materials = {
    bricks: { qty: bricksCount, unit: 'pcs', cost: bricksCount * BRICK_PRICE_PER_PIECE },
    cement: { qty: cementBags, unit: 'bags', cost: cementBags * CEMENT_PRICE_PER_BAG },
    sand: { qty: sandCft, unit: 'cft', cost: sandCft * SAND_PRICE_PER_CFT },
    steel: { qty: steelTons, unit: 'tons', cost: Math.round(steelTons * STEEL_PRICE_PER_TON) },
    crush: { qty: crushCft, unit: 'cft', cost: crushCft * CRUSH_PRICE_PER_CFT },
    paint: { qty: build.id === 'grey-structure' ? 0 : paintDrums, unit: 'drums', cost: build.id === 'grey-structure' ? 0 : paintDrums * PAINT_DRUM_PRICE },
    tiles: { qty: build.id === 'grey-structure' ? 0 : tilesBoxes, unit: 'boxes', cost: build.id === 'grey-structure' ? 0 : tilesBoxes * TILE_BOX_PRICE },
  };

  const laborCost = Math.round(totalCost * 0.22); // Labor is approx 22% of total cost
  const durationMonths = sizeId === '3-marla' ? 5 : sizeId === '5-marla' ? 7 : sizeId === '10-marla' ? 10 : 14;

  return {
    total: totalCost,
    greyStructure: greyStructureCost,
    finishing: finishingCost,
    durationMonths,
    materials,
    laborCost,
  };
}

export function generateTimelinePhases(sizeId: PlotSize, buildId: BuildType): TimelinePhase[] {
  const isGrey = buildId === 'grey-structure';
  
  const phases: TimelinePhase[] = [
    {
      id: 'phase1',
      phaseNumber: 1,
      title: 'Mobilization & Excavation',
      durationWeeks: sizeId === '3-marla' ? 2 : sizeId === '5-marla' ? 3 : sizeId === '10-marla' ? 4 : 5,
      status: 'completed',
      description: 'Site layout marking, worker shacks construction, bore drilling, and deep foundation digging.',
      deliverables: ['Water supply setup', 'Excavation to required depths', 'Soil compaction', 'Anti-termite chemical spray'],
    },
    {
      id: 'phase2',
      phaseNumber: 2,
      title: 'Foundation & Plinth Level',
      durationWeeks: sizeId === '3-marla' ? 3 : sizeId === '5-marla' ? 4 : sizeId === '10-marla' ? 5 : 7,
      status: 'in-progress',
      description: 'Pouring lean concrete, brickwork up to DPC (Damp Proof Course), steel framing for columns, and plinth beam casting.',
      deliverables: ['Damp Proof Course layer', 'Under-floor sewer pipe laying', 'Plinth level backfilling', 'Compaction and brick columns'],
    },
    {
      id: 'phase3',
      phaseNumber: 3,
      title: 'Ground & First Floor Structure',
      durationWeeks: sizeId === '3-marla' ? 4 : sizeId === '5-marla' ? 6 : sizeId === '10-marla' ? 8 : 11,
      status: 'pending',
      description: 'Laying out vertical brick walls, casting door frames, building shuttering scaffold, placing steel reinforcement for slab, and concrete pouring.',
      deliverables: ['Vertical load-bearing brick walls', 'Lintel beams and shade structures', 'Roof slab shuttering & electrical conduits', 'Concrete slab curing (14 days)'],
    },
    {
      id: 'phase4',
      phaseNumber: 4,
      title: 'Plastering & Masonry Piping',
      durationWeeks: sizeId === '3-marla' ? 3 : sizeId === '5-marla' ? 4 : sizeId === '10-marla' ? 6 : 8,
      status: 'pending',
      description: 'Chasing walls for hidden plumbing & electrical pipe networks, wall plastering (inner and outer), and boundary wall setup.',
      deliverables: ['Concealed PVC pipe framing', 'Under-plaster electric wiring box positioning', 'Two-layer cement plastering', 'Roof waterproofing treatment'],
    },
  ];

  if (!isGrey) {
    phases.push(
      {
        id: 'phase5',
        phaseNumber: 5,
        title: 'Tiles, Carpentry & False Ceiling',
        durationWeeks: sizeId === '3-marla' ? 3 : sizeId === '5-marla' ? 5 : sizeId === '10-marla' ? 7 : 9,
        status: 'pending',
        description: 'Fitting bathroom/floor tiles, installing false plaster ceilings, crafting solid wood door frames, and kitchen cabinetry base framework.',
        deliverables: ['Laser-aligned porcelain floor tiling', 'Designer false ceiling designs', 'Waterproof bathroom tiling', 'Laminated wardrobing framing'],
      },
      {
        id: 'phase6',
        phaseNumber: 6,
        title: 'Painting, Fixtures & Handover',
        durationWeeks: sizeId === '3-marla' ? 2 : sizeId === '5-marla' ? 3 : sizeId === '10-marla' ? 4 : 6,
        status: 'pending',
        description: 'Applying base wall putty, final emulsion paint, fitting switchboards, sanitary fixtures, glass windows, and clean polishing.',
        deliverables: ['Three-coat premium wall paint', 'Sanitary vanity & commode fittings', 'Aluminium/UPVC window glass panes', 'Debris clearing & final key handover'],
      }
    );
  }

  return phases;
}
