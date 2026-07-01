import { useState, useEffect } from 'react';
import { CalendarRange, CheckCircle2, Clock, Map, ChevronRight, AlertTriangle, Sparkles, CheckSquare, ListChecks } from 'lucide-react';
import { PlotSize, BuildType, TimelinePhase } from '../types';
import { generateTimelinePhases, plotSizesList } from '../data';

interface TimelineGeneratorProps {
  selectedSize: PlotSize;
  selectedBuild: BuildType;
}

export default function TimelineGenerator({ selectedSize, selectedBuild }: TimelineGeneratorProps) {
  const [phases, setPhases] = useState<TimelinePhase[]>([]);
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);

  useEffect(() => {
    const updatedPhases = generateTimelinePhases(selectedSize, selectedBuild);
    setPhases(updatedPhases);
    // Safety check for bounds
    if (activePhaseIndex >= updatedPhases.length) {
      setActivePhaseIndex(0);
    }
  }, [selectedSize, selectedBuild]);

  const activePhase = phases[activePhaseIndex] || null;
  const activeSizeName = plotSizesList.find(p => p.id === selectedSize)?.name || '5 Marla';

  // Calculate total duration in weeks
  const totalWeeks = phases.reduce((acc, curr) => acc + curr.durationWeeks, 0);
  const totalMonths = (totalWeeks / 4.3).toFixed(1);

  return (
    <section id="timeline-generator" className="py-24 px-4 bg-[#060E0A] border-t border-[#1E4D38] relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0A3B2E]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0F2A20] border border-[#1E4D38] px-4 py-1.5 rounded-full text-[#2ECC71] text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-sm">
            <CalendarRange className="w-3.5 h-3.5" />
            Interactive Scheduler App Module
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            AI-Generated Construction <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ECC71] to-[#F5C518]">Project Timelines</span>
          </h2>
          <p className="text-[#B8C5BD] text-base md:text-lg font-sans leading-relaxed">
            See how Tameer Saz maps out your house construction milestone by milestone. Try toggling plot size above to recalculate duration lengths below.
          </p>
        </div>

        {/* Phase progress ribbon / overview stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 bg-[#0F2A20]/40 border border-[#1E4D38] p-5 rounded-2xl max-w-4xl mx-auto">
          <div className="text-center py-2 border-b md:border-b-0 md:border-r border-[#1E4D38]/60">
            <span className="text-xs font-mono text-[#B8C5BD] uppercase block mb-1">Target Plot Specs</span>
            <span className="text-lg font-sans font-bold text-white">{activeSizeName}</span>
          </div>
          <div className="text-center py-2 border-b md:border-b-0 md:border-r border-[#1E4D38]/60">
            <span className="text-xs font-mono text-[#B8C5BD] uppercase block mb-1">Total Estimated Duration</span>
            <span className="text-lg font-sans font-bold text-[#F5C518]">{totalWeeks} Weeks (~{totalMonths} Months)</span>
          </div>
          <div className="text-center py-2">
            <span className="text-xs font-mono text-[#B8C5BD] uppercase block mb-1">Total Distinct Phases</span>
            <span className="text-lg font-sans font-bold text-[#2ECC71]">{phases.length} Major Stages</span>
          </div>
        </div>

        {/* Layout: Sidebar phase navigation & active details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Phase selector left list (5 columns) */}
          <div className="lg:col-span-5 space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B8C5BD] block mb-2 px-1">
                Select Construction Stage:
              </span>
              {phases.map((phase, index) => {
                const isActive = index === activePhaseIndex;
                const isCompleted = phase.status === 'completed';
                const isInProgress = phase.status === 'in-progress';

                return (
                  <button
                    key={phase.id}
                    onClick={() => setActivePhaseIndex(index)}
                    className={`w-full p-4 rounded-xl border text-left transition-all duration-300 flex items-center justify-between gap-4 cursor-pointer relative ${
                      isActive
                        ? 'bg-[#1E4D38] border-[#2ECC71] text-white shadow-lg translate-x-1.5'
                        : 'bg-[#0F2A20]/60 border-[#1E4D38] hover:border-[#1E4D38]/80 text-[#B8C5BD]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Step Number Badge */}
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                        isActive 
                          ? 'bg-[#2ECC71] text-[#060E0A]' 
                          : isCompleted 
                          ? 'bg-emerald-950 text-[#2ECC71] border border-[#1E4D38]' 
                          : 'bg-[#060E0A]/80 text-[#B8C5BD] border border-[#1E4D38]'
                      }`}>
                        {phase.phaseNumber}
                      </div>

                      <div>
                        <span className="text-xs font-mono opacity-80 block uppercase tracking-wide">
                          Stage {phase.phaseNumber} · {phase.durationWeeks} Weeks
                        </span>
                        <span className={`text-sm font-sans font-extrabold ${isActive ? 'text-white' : 'text-[#B8C5BD]'}`}>
                          {phase.title}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {isCompleted && (
                        <span className="text-[10px] font-mono bg-emerald-950/80 text-[#2ECC71] px-2 py-0.5 rounded border border-emerald-800">
                          Completed
                        </span>
                      )}
                      {isInProgress && (
                        <span className="text-[10px] font-mono bg-[#F5C518]/10 text-[#F5C518] px-2 py-0.5 rounded border border-[#F5C518]/30 animate-pulse">
                          Current Phase
                        </span>
                      )}
                      <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'rotate-90 text-[#2ECC71]' : 'text-[#B8C5BD]'}`} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Smart notice */}
            <div className="p-4 bg-[#0F2A20]/20 border border-[#1E4D38] rounded-xl text-xs text-[#B8C5BD] space-y-2 mt-4">
              <div className="flex items-center gap-2 text-white font-bold">
                <AlertTriangle className="w-4 h-4 text-[#F5C518]" />
                <span>Weather & Holiday Adaptive</span>
              </div>
              <p className="leading-relaxed">
                Tameer Saz mobile app monitors Pakistani monsoon patterns and religious holidays (Eid, Ashura) to auto-adjust contractor schedules in real-time.
              </p>
            </div>
          </div>

          {/* Active Phase details panel (7 columns) */}
          <div className="lg:col-span-7">
            {activePhase && (
              <div className="bg-[#0F2A20]/70 backdrop-blur-md rounded-2xl border border-[#1E4D38] p-6 md:p-8 h-full flex flex-col justify-between shadow-xl">
                <div>
                  
                  {/* Title and duration */}
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6 pb-6 border-b border-[#1E4D38]">
                    <div>
                      <span className="text-xs font-mono text-[#F5C518] uppercase tracking-widest block mb-1">
                        Active Stage Breakdown
                      </span>
                      <h4 className="text-2xl md:text-3xl font-display font-extrabold text-white">
                        {activePhase.title}
                      </h4>
                    </div>
                    
                    <div className="flex items-center gap-2 bg-[#060E0A] px-3.5 py-2 rounded-xl border border-[#1E4D38] shrink-0">
                      <Clock className="w-4 h-4 text-[#2ECC71]" />
                      <div className="text-left">
                        <span className="text-[9px] font-mono text-[#B8C5BD] uppercase block leading-none">Phase Duration</span>
                        <span className="text-sm font-sans font-extrabold text-white">{activePhase.durationWeeks} Weeks</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <p className="text-sm text-[#B8C5BD] leading-relaxed">
                      {activePhase.description}
                    </p>
                  </div>

                  {/* Deliverables checklist */}
                  <div className="space-y-4">
                    <h5 className="font-display font-bold text-xs text-white uppercase tracking-wider flex items-center gap-2">
                      <ListChecks className="w-4 h-4 text-[#2ECC71]" />
                      Key Milestones & Deliverables ({activePhase.deliverables.length})
                    </h5>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {activePhase.deliverables.map((item, dIdx) => (
                        <div 
                          key={dIdx} 
                          className="bg-[#060E0A]/40 border border-[#1E4D38] p-3.5 rounded-xl flex items-start gap-3 hover:border-[#2ECC71]/40 transition-colors"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#2ECC71] shrink-0 mt-0.5" />
                          <span className="text-xs text-white font-medium leading-normal">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Integration reminder banner */}
                <div className="mt-10 p-4 bg-gradient-to-r from-[#1E4D38]/30 to-[#F5C518]/5 border border-[#1E4D38] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-left">
                    <div className="flex items-center gap-1.5 text-xs font-sans font-bold text-white">
                      <Sparkles className="w-4 h-4 text-[#F5C518]" />
                      <span>Track Real-Time Progress in Mobile App</span>
                    </div>
                    <p className="text-[11px] text-[#B8C5BD] mt-0.5">Invite your local contractor to Tameer Saz and tick off these items together.</p>
                  </div>
                  <a
                    href="#download"
                    className="shrink-0 bg-transparent hover:bg-white/5 text-white font-sans text-xs font-bold px-4 py-2 rounded-lg border border-[#1E4D38] transition-all flex items-center gap-1.5"
                  >
                    Download App
                  </a>
                </div>

              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
