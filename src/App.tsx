import { useState, useEffect } from 'react';
import { 
  Sparkles, Download, ArrowRight, ShieldCheck, Star, 
  CheckCircle2, Compass, Store, Hammer, MessageSquare, 
  LayoutDashboard, CalendarRange, Calculator, UserCheck, Play, ArrowUpRight
} from 'lucide-react';

import Navbar from './components/Navbar';
import CostEstimator from './components/CostEstimator';
import TimelineGenerator from './components/TimelineGenerator';
import MaterialCalculator from './components/MaterialCalculator';
import AppScreenshots from './components/AppScreenshots';
import BusinessModal from './components/BusinessModal';
import DownloadModal from './components/DownloadModal';
import Footer from './components/Footer';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';

import { PlotSize, BuildType } from './types';
import { featuresList, testimonialsList, stepsList } from './data';

export default function App() {
  // View states (main layout vs dedicated privacy webpage)
  const [view, setView] = useState<'main' | 'privacy'>(() => {
    return window.location.pathname === '/privacy' ? 'privacy' : 'main';
  });

  // Modal states
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [isBusinessOpen, setIsBusinessOpen] = useState(false);

  useEffect(() => {
    const handleLocationChange = () => {
      if (window.location.pathname === '/privacy') {
        setView('privacy');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setView('main');
      }
    };
    window.addEventListener('popstate', handleLocationChange);
    // Initial check
    handleLocationChange();
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const handleBackToHome = () => {
    window.history.pushState({}, '', '/');
    setView('main');
  };

  const handleOpenPrivacy = () => {
    window.history.pushState({}, '', '/privacy');
    setView('privacy');
  };

  // Sharing states between estimator and timeline
  const [estimatorPlotSize, setEstimatorPlotSize] = useState<PlotSize>('5-marla');
  const [estimatorBuildType, setEstimatorBuildType] = useState<BuildType>('standard-finishing');

  // Active role tab in "For Professionals"
  const [activeProRole, setActiveProRole] = useState<'contractor' | 'architect' | 'labour' | 'supplier'>('contractor');

  // Callback to sync cost estimator to timeline
  const handleGenerateTimeline = (size: PlotSize, type: BuildType) => {
    setEstimatorPlotSize(size);
    setEstimatorBuildType(type);
    
    // Smooth scroll to timeline
    const timelineEl = document.getElementById('timeline-generator');
    if (timelineEl) {
      timelineEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenDownload = () => setIsDownloadOpen(true);
  const handleCloseDownload = () => setIsDownloadOpen(false);

  const handleOpenBusiness = () => setIsBusinessOpen(true);
  const handleCloseBusiness = () => setIsBusinessOpen(false);

  // Helper to map icon string name to Component
  const renderFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#F5C518]" />;
      case 'CalendarRange': return <CalendarRange className="w-6 h-6 text-[#2ECC71]" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-emerald-400" />;
      case 'Compass': return <Compass className="w-6 h-6 text-blue-400" />;
      case 'Calculator': return <Calculator className="w-6 h-6 text-amber-500" />;
      case 'Store': return <Store className="w-6 h-6 text-pink-400" />;
      case 'Hammer': return <Hammer className="w-6 h-6 text-[#2ECC71]" />;
      case 'MessageSquare': return <MessageSquare className="w-6 h-6 text-[#F5C518]" />;
      case 'LayoutDashboard': return <LayoutDashboard className="w-6 h-6 text-[#2ECC71]" />;
      default: return <Sparkles className="w-6 h-6 text-white" />;
    }
  };

  if (view === 'privacy') {
    return <PrivacyPolicyPage onBackToHome={handleBackToHome} />;
  }

  return (
    <div className="bg-[#060E0A] text-white min-h-screen font-sans selection:bg-[#F5C518] selection:text-[#060E0A] overflow-x-hidden antialiased">
      
      {/* 1. Header Navigation */}
      <Navbar 
        onOpenDownloadModal={handleOpenDownload} 
        onOpenBusinessModal={handleOpenBusiness} 
      />

      {/* 2. HERO SECTION */}
      <header id="home" className="relative min-h-screen flex items-center pt-24 pb-16 px-4 bg-gradient-to-b from-[#0A3B2E] via-[#060E0A] to-[#060E0A] overflow-hidden border-b border-[#1E4D38]">
        {/* Animated grid blueprint overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none"></div>

        {/* Dynamic Glow blobs */}
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-[#2ECC71]/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-[300px] h-[300px] bg-[#F5C518]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text content (7 Columns) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Proudly Pakistan Animated badge */}
            <div className="inline-flex items-center gap-2 bg-[#0F2A20] border border-[#1E4D38] px-3.5 py-1.5 rounded-full shadow-lg shadow-[#060E0A]/50">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2ECC71] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2ECC71]"></span>
              </span>
              <span className="text-[11px] font-mono tracking-widest text-[#B8C5BD] uppercase font-bold">
                AI Powered · Firebase Secured · Made in Pakistan 🇵🇰
              </span>
            </div>

            {/* Giant Title */}
            <h1 className="text-4xl sm:text-6xl font-display font-black tracking-tight leading-none text-white">
              Build Smarter.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5C518] to-[#2ECC71] text-glow">
                Build Pakistan.
              </span>
            </h1>

            {/* Explanatory Subtitle */}
            <p className="text-[#B8C5BD] text-base sm:text-xl font-medium leading-relaxed max-w-2xl">
              Pakistan's first AI-powered construction planning and professional marketplace — connecting homeowners with trusted contractors, architects, and suppliers.
            </p>

            {/* App Store CTA buttons side by side */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={handleOpenDownload}
                className="flex items-center justify-center gap-3 bg-[#F5C518] hover:bg-[#e0b20f] text-[#060E0A] font-sans text-sm font-black px-6 py-4 rounded-xl shadow-xl shadow-[#F5C518]/15 hover:shadow-[#F5C518]/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>🤖</span>
                <div className="text-left leading-none">
                  <span className="text-[10px] uppercase font-mono block tracking-wider font-bold">Get it on</span>
                  <span className="text-sm font-extrabold block mt-0.5">Google Play Store</span>
                </div>
              </button>

              <button
                onClick={handleOpenDownload}
                className="flex items-center justify-center gap-3 bg-transparent hover:bg-white/5 text-white border-2 border-white/90 font-sans text-sm font-black px-6 py-4 rounded-xl transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>🍏</span>
                <div className="text-left leading-none">
                  <span className="text-[10px] uppercase font-mono block tracking-wider font-bold">Download on</span>
                  <span className="text-sm font-extrabold block mt-0.5">Apple App Store</span>
                </div>
              </button>
            </div>

            {/* Fast direct tools preview indicators */}
            <div className="pt-6 border-t border-[#1E4D38]/60 flex flex-wrap gap-x-8 gap-y-4 text-xs font-mono text-[#B8C5BD]">
              <a href="#cost-estimator" className="hover:text-[#F5C518] transition-all flex items-center gap-1.5">
                <span>📐 Try Live Cost Estimator</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#2ECC71]" />
              </a>
              <a href="#material-calculator" className="hover:text-[#2ECC71] transition-all flex items-center gap-1.5">
                <span>🧮 Material Quantity Calculator</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#2ECC71]" />
              </a>
            </div>

          </div>

          {/* Right Smartphone graphic (5 Columns) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative group">
              {/* Outer decorative halo glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#2ECC71] to-[#F5C518] rounded-[48px] blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              {/* Device frame container */}
              <div className="relative w-[300px] h-[580px] bg-neutral-900 rounded-[44px] p-3 border-4 border-neutral-800 shadow-2xl flex flex-col justify-between overflow-hidden">
                {/* Speaker top bar */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-24 h-4 bg-neutral-800 rounded-b-xl z-20"></div>

                {/* Simulated inner app dashboard */}
                <div className="w-full h-full bg-[#060E0A] rounded-[34px] overflow-hidden relative flex flex-col justify-between pt-5 text-left font-sans select-none">
                  <div className="px-5 pt-1 flex justify-between items-center text-[10px] text-[#B8C5BD] font-mono">
                    <span>12:00 PM</span>
                    <span>98% 🔋</span>
                  </div>

                  {/* App Screen content - Homeowner Dashboard */}
                  <div className="flex-1 px-4 py-3 space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-[9px] font-mono text-[#2ECC71] uppercase block leading-none font-bold">Verified Project</span>
                        <h4 className="text-xs font-sans font-bold text-white mt-1">Kamran Alvi's House</h4>
                      </div>
                      <span className="text-xs">🇵🇰</span>
                    </div>

                    {/* Progress Card */}
                    <div className="p-3 bg-[#0F2A20] border border-[#1E4D38] rounded-xl space-y-2.5">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-[#B8C5BD]">Phase 2 / Foundation</span>
                        <span className="font-mono text-[#F5C518] font-bold">52% Done</span>
                      </div>
                      <div className="h-1.5 w-full bg-[#060E0A] rounded-full overflow-hidden flex border border-[#1E4D38]">
                        <div className="bg-[#2ECC71] h-full w-[52%]"></div>
                      </div>
                    </div>

                    {/* Verified Contractor Card */}
                    <div className="p-3 bg-[#060E0A] border border-[#1E4D38] rounded-xl space-y-2">
                      <span className="text-[9px] font-mono text-[#B8C5BD] block uppercase tracking-wide">ASSIGNEE PARTNER</span>
                      <div className="flex justify-between items-center">
                        <div>
                          <h5 className="font-extrabold text-white text-[11px]">Engr. Tariq Mehmood</h5>
                          <span className="text-[9px] text-[#B8C5BD]">Tariq Construction Co.</span>
                        </div>
                        <span className="text-[9px] bg-[#2ECC71]/10 text-[#2ECC71] px-1.5 py-0.5 rounded border border-[#2ECC71]/30">ACTIVE</span>
                      </div>
                    </div>

                    {/* Chat Bubble Simulation */}
                    <div className="space-y-2">
                      <span className="text-[9px] font-mono text-[#B8C5BD] block uppercase">RECENT SITE CHAT</span>
                      <div className="p-2 bg-[#0F2A20]/60 border border-[#1E4D38] rounded-xl text-[10px] space-y-1">
                        <span className="font-bold text-[#F5C518] block">Tariq Mehmood:</span>
                        <p className="text-[#B8C5BD] leading-tight">Bricks and cement verified at plinth level. Ready for casting beam.</p>
                      </div>
                    </div>
                  </div>

                  {/* Android bottom nav bar */}
                  <div className="h-8 bg-[#060E0A] border-t border-[#1E4D38] flex justify-around items-center opacity-70">
                    <div className="w-3 h-3 border border-[#B8C5BD] rounded-sm"></div>
                    <div className="w-3 h-3 border border-[#B8C5BD] rounded-full"></div>
                    <div className="text-xs text-[#B8C5BD] font-mono">&lt;</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </header>

      {/* 3. FEATURES SECTION (Everything You Need to Build) */}
      <section id="features" className="py-24 px-4 bg-[#060E0A] relative overflow-hidden border-b border-[#1E4D38]">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          
          {/* Title */}
          <div className="max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-[#0F2A20] border border-[#1E4D38] text-[#2ECC71] text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-4">
              Comprehensive App Suite
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
              Everything You Need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ECC71] to-[#F5C518]">Build Your Dream Home</span>
            </h2>
            <p className="text-[#B8C5BD] text-sm md:text-base leading-relaxed">
              Tameer Saz eliminates middlemen and non-transparent markups, placing direct control of materials, schedules, and verified builder contracts back into your hands.
            </p>
          </div>

          {/* 3x3 Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuresList.map((feature) => (
              <div 
                key={feature.id} 
                className="bg-[#0F2A20]/40 backdrop-blur-md p-6 rounded-2xl border border-[#1E4D38]/60 hover:border-[#F5C518]/50 transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#0A3B2E]/25 text-left flex flex-col justify-between group"
              >
                <div>
                  <div className="bg-[#060E0A]/80 p-3.5 rounded-xl inline-block border border-[#1E4D38] mb-4 group-hover:scale-110 transition-transform">
                    {renderFeatureIcon(feature.iconName)}
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mb-2 tracking-tight group-hover:text-[#F5C518] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#B8C5BD] leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Inline trigger check */}
                <div className="mt-4 pt-4 border-t border-[#1E4D38]/30 flex items-center justify-between text-xs text-[#2ECC71] font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Available in app</span>
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. HOW IT WORKS SECTION (3 Steps) */}
      <section id="how-it-works" className="py-24 px-4 bg-gradient-to-b from-[#060E0A] to-[#0A3B2E] relative overflow-hidden border-b border-[#1E4D38]">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto mb-20">
            <span className="inline-block bg-[#0F2A20] border border-[#1E4D38] text-[#F5C518] text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-4">
              Vetting Process Workflow
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
              Get Started in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5C518] to-[#2ECC71]">3 Simple Steps</span>
            </h2>
            <p className="text-[#B8C5BD] text-sm md:text-base leading-relaxed">
              Tameer Saz makes planning and executing your residential project smooth and entirely straightforward.
            </p>
          </div>

          {/* 3 Step horizontal blocks with connectors */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            
            {/* Step 1 */}
            <div className="bg-[#0F2A20]/80 p-8 rounded-2xl border border-[#1E4D38] text-left relative overflow-hidden">
              <span className="text-6xl md:text-8xl font-display font-black text-[#F5C518]/10 absolute -top-4 -right-2 select-none">
                01
              </span>
              <div className="w-12 h-12 rounded-xl bg-[#F5C518]/10 border border-[#F5C518]/30 text-[#F5C518] flex items-center justify-center font-mono text-base font-black mb-6">
                1
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">
                {stepsList[0].title}
              </h3>
              <p className="text-sm text-[#B8C5BD] leading-relaxed">
                {stepsList[0].description}
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#0F2A20]/80 p-8 rounded-2xl border border-[#1E4D38] text-left relative overflow-hidden">
              <span className="text-6xl md:text-8xl font-display font-black text-[#F5C518]/10 absolute -top-4 -right-2 select-none">
                02
              </span>
              <div className="w-12 h-12 rounded-xl bg-[#F5C518]/10 border border-[#F5C518]/30 text-[#F5C518] flex items-center justify-center font-mono text-base font-black mb-6">
                2
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">
                {stepsList[1].title}
              </h3>
              <p className="text-sm text-[#B8C5BD] leading-relaxed">
                {stepsList[1].description}
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#0F2A20]/80 p-8 rounded-2xl border border-[#1E4D38] text-left relative overflow-hidden">
              <span className="text-6xl md:text-8xl font-display font-black text-[#F5C518]/10 absolute -top-4 -right-2 select-none">
                03
              </span>
              <div className="w-12 h-12 rounded-xl bg-[#F5C518]/10 border border-[#F5C518]/30 text-[#F5C518] flex items-center justify-center font-mono text-base font-black mb-6">
                3
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">
                {stepsList[2].title}
              </h3>
              <p className="text-sm text-[#B8C5BD] leading-relaxed">
                {stepsList[2].description}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. DYNAMIC COST ESTIMATOR INTERACTIVE MODULE */}
      <CostEstimator onGenerateTimeline={handleGenerateTimeline} />

      {/* 6. DYNAMIC TIMELINE GENERATOR INTERACTIVE MODULE */}
      <TimelineGenerator selectedSize={estimatorPlotSize} selectedBuild={estimatorBuildType} />

      {/* 7. DYNAMIC MATERIAL QUANTITY CALCULATOR INTERACTIVE MODULE */}
      <MaterialCalculator />

      {/* 8. FOR PROFESSIONALS SECTION */}
      <section id="professionals" className="py-24 px-4 bg-gradient-to-b from-[#060E0A] to-[#0A3B2E] border-t border-[#1E4D38] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-[#0F2A20] border border-[#1E4D38] text-[#F5C518] text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-4">
              B2B Business Portal
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
              Grow Your Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ECC71] to-[#F5C518]">With Tameer Saz</span>
            </h2>
            <p className="text-[#B8C5BD] text-sm md:text-base leading-relaxed">
              Are you a licensed builder, structural engineer, supplier, or mason? Connect directly with homeowners who are ready to build. Zero middleman margins.
            </p>
          </div>

          {/* Interactive Role Tabs (4 options) */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 max-w-3xl mx-auto">
            <button
              onClick={() => setActiveProRole('contractor')}
              className={`px-5 py-3 rounded-xl border font-sans text-xs font-extrabold transition-all cursor-pointer ${
                activeProRole === 'contractor'
                  ? 'bg-[#F5C518] border-[#F5C518] text-[#060E0A]'
                  : 'bg-[#0F2A20]/80 border-[#1E4D38] text-[#B8C5BD] hover:border-[#F5C518]/40'
              }`}
            >
              👷 For Contractors
            </button>
            <button
              onClick={() => setActiveProRole('architect')}
              className={`px-5 py-3 rounded-xl border font-sans text-xs font-extrabold transition-all cursor-pointer ${
                activeProRole === 'architect'
                  ? 'bg-[#F5C518] border-[#F5C518] text-[#060E0A]'
                  : 'bg-[#0F2A20]/80 border-[#1E4D38] text-[#B8C5BD] hover:border-[#F5C518]/40'
              }`}
            >
              🏛 For Architects & Designers
            </button>
            <button
              onClick={() => setActiveProRole('labour')}
              className={`px-5 py-3 rounded-xl border font-sans text-xs font-extrabold transition-all cursor-pointer ${
                activeProRole === 'labour'
                  ? 'bg-[#F5C518] border-[#F5C518] text-[#060E0A]'
                  : 'bg-[#0F2A20]/80 border-[#1E4D38] text-[#B8C5BD] hover:border-[#F5C518]/40'
              }`}
            >
              👨‍🔧 For Labour Professionals
            </button>
            <button
              onClick={() => setActiveProRole('supplier')}
              className={`px-5 py-3 rounded-xl border font-sans text-xs font-extrabold transition-all cursor-pointer ${
                activeProRole === 'supplier'
                  ? 'bg-[#F5C518] border-[#F5C518] text-[#060E0A]'
                  : 'bg-[#0F2A20]/80 border-[#1E4D38] text-[#B8C5BD] hover:border-[#F5C518]/40'
              }`}
            >
              🏬 For Material Suppliers
            </button>
          </div>

          {/* Active Pro Role Card Detail */}
          <div className="bg-[#0F2A20]/80 backdrop-blur-md rounded-2xl border border-[#1E4D38] p-6 md:p-10 max-w-4xl mx-auto shadow-2xl">
            {activeProRole === 'contractor' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left">
                <div className="space-y-4">
                  <span className="text-xs font-mono text-[#F5C518] uppercase tracking-widest font-bold block">Contractors Platform</span>
                  <h3 className="text-2xl font-display font-extrabold text-white">Find Genuine Leads & Manage Milestones</h3>
                  <p className="text-sm text-[#B8C5BD] leading-relaxed">
                    Stop chasing clients for outstanding payments. Tameer Saz allows you to showcase your construction portfolio, negotiate transparently, receive payments, and track materials easily.
                  </p>
                  <ul className="space-y-2 text-xs text-white">
                    <li className="flex items-center gap-2">✔ Get directly discovered by homeowners near you</li>
                    <li className="flex items-center gap-2">✔ Upload photo proof of completed project phases</li>
                    <li className="flex items-center gap-2">✔ Access discounted builder-grade material rates</li>
                  </ul>
                </div>
                <div className="p-6 bg-[#060E0A]/60 rounded-xl border border-[#1E4D38] space-y-4">
                  <span className="text-xs font-mono text-[#2ECC71] block">ESTIMATED GROWTH</span>
                  <div className="flex justify-between items-end border-b border-[#1E4D38] pb-3">
                    <span className="text-xs text-[#B8C5BD]">Average Monthly Leads</span>
                    <span className="text-lg font-mono font-bold text-white">12 - 18 Leads</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-xs text-[#B8C5BD]">Average Builder Margin</span>
                    <span className="text-lg font-mono font-bold text-[#F5C518]">Saved 15% on Admin</span>
                  </div>
                  <button 
                    onClick={handleOpenBusiness}
                    className="w-full text-center py-3 bg-[#F5C518] text-[#060E0A] font-sans text-xs font-bold rounded-lg cursor-pointer"
                  >
                    Register as Contractor →
                  </button>
                </div>
              </div>
            )}

            {activeProRole === 'architect' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left">
                <div className="space-y-4">
                  <span className="text-xs font-mono text-[#F5C518] uppercase tracking-widest font-bold block">Architects & Interior Designers</span>
                  <h3 className="text-2xl font-display font-extrabold text-white">Display Blueprints & Modern Design Catalogs</h3>
                  <p className="text-sm text-[#B8C5BD] leading-relaxed">
                    Showcase modern, standard, or premium architectural design concepts. Connect directly with verified homeowners looking to buy full set of construction drawings (elevation, electrical, structural plans).
                  </p>
                  <ul className="space-y-2 text-xs text-white">
                    <li className="flex items-center gap-2">✔ Offer remote online paid consultations</li>
                    <li className="flex items-center gap-2">✔ List custom-made pre-packaged CAD blueprints</li>
                    <li className="flex items-center gap-2">✔ Get credited on final constructed villas</li>
                  </ul>
                </div>
                <div className="p-6 bg-[#060E0A]/60 rounded-xl border border-[#1E4D38] space-y-4">
                  <span className="text-xs font-mono text-[#2ECC71] block">ESTIMATED GROWTH</span>
                  <div className="flex justify-between items-end border-b border-[#1E4D38] pb-3">
                    <span className="text-xs text-[#B8C5BD]">Catalog Concept Downloads</span>
                    <span className="text-lg font-mono font-bold text-white">45+ Per Month</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-xs text-[#B8C5BD]">Average Design Contract</span>
                    <span className="text-lg font-mono font-bold text-[#F5C518]">Rs. 80,000 - 3.5 Lakh</span>
                  </div>
                  <button 
                    onClick={handleOpenBusiness}
                    className="w-full text-center py-3 bg-[#F5C518] text-[#060E0A] font-sans text-xs font-bold rounded-lg cursor-pointer"
                  >
                    Register as Architect →
                  </button>
                </div>
              </div>
            )}

            {activeProRole === 'labour' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left">
                <div className="space-y-4">
                  <span className="text-xs font-mono text-[#F5C518] uppercase tracking-widest font-bold block">Daily Wage Trade Professionals</span>
                  <h3 className="text-2xl font-display font-extrabold text-white">Get Direct Work Bookings with Fair Rates</h3>
                  <p className="text-sm text-[#B8C5BD] leading-relaxed">
                    For skilled masons (raj mistry), electricians, plumbers, tile fixers, painters, and welders. List your trade expertise, operating cities, and daily wage rates to get directly booked.
                  </p>
                  <ul className="space-y-2 text-xs text-white">
                    <li className="flex items-center gap-2">✔ Set your own transparent daily or project rates</li>
                    <li className="flex items-center gap-2">✔ Direct job alerts via SMS and automated voice calls</li>
                    <li className="flex items-center gap-2">✔ Standardized working hour regulations with secure payouts</li>
                  </ul>
                </div>
                <div className="p-6 bg-[#060E0A]/60 rounded-xl border border-[#1E4D38] space-y-4">
                  <span className="text-xs font-mono text-[#2ECC71] block">ESTIMATED BENEFITS</span>
                  <div className="flex justify-between items-end border-b border-[#1E4D38] pb-3">
                    <span className="text-xs text-[#B8C5BD]">Job Match Alerts</span>
                    <span className="text-lg font-mono font-bold text-white">Daily Matches</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-xs text-[#B8C5BD]">Verified Daily Wage Range</span>
                    <span className="text-lg font-mono font-bold text-[#F5C518]">Rs. 1,500 - 3,800/Day</span>
                  </div>
                  <button 
                    onClick={handleOpenBusiness}
                    className="w-full text-center py-3 bg-[#F5C518] text-[#060E0A] font-sans text-xs font-bold rounded-lg cursor-pointer"
                  >
                    Register as Labour Professional →
                  </button>
                </div>
              </div>
            )}

            {activeProRole === 'supplier' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left">
                <div className="space-y-4">
                  <span className="text-xs font-mono text-[#F5C518] uppercase tracking-widest font-bold block">Material Suppliers</span>
                  <h3 className="text-2xl font-display font-extrabold text-white">List Raw Materials & Reach Bulk Buyers</h3>
                  <p className="text-sm text-[#B8C5BD] leading-relaxed">
                    Sell grey structure materials (cement bags, steel rebars, crush sand) and premium finishing tiles, bath sanitary fittings, paints, or woodwork directly to thousand of active project builders.
                  </p>
                  <ul className="space-y-2 text-xs text-white">
                    <li className="flex items-center gap-2">✔ List live product catalog with wholesale price charts</li>
                    <li className="flex items-center gap-2">✔ Direct order placement with logistics scheduling</li>
                    <li className="flex items-center gap-2">✔ Bulk pricing models for contractor partnerships</li>
                  </ul>
                </div>
                <div className="p-6 bg-[#060E0A]/60 rounded-xl border border-[#1E4D38] space-y-4">
                  <span className="text-xs font-mono text-[#2ECC71] block">ESTIMATED SALES</span>
                  <div className="flex justify-between items-end border-b border-[#1E4D38] pb-3">
                    <span className="text-xs text-[#B8C5BD]">Wholesale Inquiries</span>
                    <span className="text-lg font-mono font-bold text-white">30+ Orders / Month</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-xs text-[#B8C5BD]">Reach Multiplier</span>
                    <span className="text-lg font-mono font-bold text-[#F5C518]">5x Local Footfall</span>
                  </div>
                  <button 
                    onClick={handleOpenBusiness}
                    className="w-full text-center py-3 bg-[#F5C518] text-[#060E0A] font-sans text-xs font-bold rounded-lg cursor-pointer"
                  >
                    Register as Supplier →
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 9. TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-24 px-4 bg-[#060E0A] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-[#0F2A20] border border-[#1E4D38] text-[#2ECC71] text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-4">
              Real User Feedback
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
              Trusted by Builders <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ECC71] to-[#F5C518]">Across Pakistan</span>
            </h2>
            <p className="text-[#B8C5BD] text-sm md:text-base leading-relaxed">
              Discover how homeowners, engineers, and suppliers save time, effort, and millions in PKR by planning on Tameer Saz.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {testimonialsList.map((t) => (
              <div 
                key={t.id} 
                className="bg-[#0F2A20]/60 p-6 md:p-8 rounded-2xl border border-[#1E4D38] flex flex-col justify-between relative shadow-lg"
              >
                <div>
                  
                  {/* Star Ratings */}
                  <div className="flex gap-1 mb-4 text-[#F5C518]">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F5C518] stroke-[#F5C518]" />
                    ))}
                  </div>

                  <blockquote className="text-sm text-white italic leading-relaxed mb-6">
                    "{t.quote}"
                  </blockquote>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[#1E4D38]/60">
                  <div className="w-10 h-10 rounded-full bg-[#1E4D38] border border-[#2ECC71] text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    {t.avatarInitials}
                  </div>
                  <div>
                    <h4 className="text-sm font-sans font-bold text-white leading-none">
                      {t.name}
                    </h4>
                    <span className="text-[11px] text-[#B8C5BD] block mt-1">
                      {t.city} · <strong className="text-white font-semibold">{t.role}</strong>
                    </span>
                    <span className="text-[10px] text-[#2ECC71] font-mono block mt-0.5">
                      {t.projectType}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. APP SCREENSHOTS GALLERY VIEW SIMULATOR */}
      <AppScreenshots />

      {/* 11. DOWNLOAD FOOTER CALL TO ACTION */}
      <section id="download" className="py-20 px-4 bg-gradient-to-r from-[#0A3B2E] via-[#060E0A] to-[#0A3B2E] border-t border-b border-[#1E4D38] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          
          <span className="inline-block bg-[#0F2A20] border border-[#1E4D38] text-[#F5C518] text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
            Instant Device Onboarding
          </span>

          <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight">
            Start Your Construction Journey Today
          </h2>

          <p className="text-[#B8C5BD] text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            Free to download on any Android and iOS device. Plan cost estimates, design schedules, verify building standards, and source raw materials directly.
          </p>

          {/* Download store buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={handleOpenDownload}
              className="flex items-center justify-center gap-3 bg-[#F5C518] hover:bg-[#e0b20f] text-[#060E0A] font-sans text-sm font-black px-6 py-3.5 rounded-xl transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>🤖</span>
              <div className="text-left leading-none">
                <span className="text-[9px] uppercase font-mono block font-bold">Android</span>
                <span className="text-xs font-extrabold block mt-0.5">Google Play Store</span>
              </div>
            </button>

            <button
              onClick={handleOpenDownload}
              className="flex items-center justify-center gap-3 bg-transparent hover:bg-white/5 text-white border-2 border-[#1E4D38] font-sans text-sm font-black px-6 py-3.5 rounded-xl transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>🍏</span>
              <div className="text-left leading-none">
                <span className="text-[9px] uppercase font-mono block font-bold">iOS Device</span>
                <span className="text-xs font-extrabold block mt-0.5">Apple App Store</span>
              </div>
            </button>
          </div>

          <p className="text-xs text-[#B8C5BD] pt-2">
            No registration required for initial cost calculator tools. Get started immediately.
          </p>

        </div>
      </section>

      {/* 12. FOOTER */}
      <Footer onOpenBusinessModal={handleOpenBusiness} onOpenPrivacyModal={handleOpenPrivacy} />

      {/* 13. MODALS SYSTEM */}
      <DownloadModal isOpen={isDownloadOpen} onClose={handleCloseDownload} />
      <BusinessModal isOpen={isBusinessOpen} onClose={handleCloseBusiness} />

    </div>
  );
}
