import { useState, useMemo } from 'react';
import { Sparkles, Building2, TrendingUp, Calculator, CalendarRange, MapPin, Hammer, Layers, ShieldCheck, ArrowRight, HelpCircle } from 'lucide-react';
import { citiesList, plotSizesList, buildTypesList, calculateConstructionCost } from '../data';
import { City, PlotSize, BuildType } from '../types';

interface CostEstimatorProps {
  onGenerateTimeline: (size: PlotSize, type: BuildType) => void;
}

export default function CostEstimator({ onGenerateTimeline }: CostEstimatorProps) {
  const [selectedSize, setSelectedSize] = useState<PlotSize>('5-marla');
  const [selectedCity, setSelectedCity] = useState<City>('Lahore');
  const [selectedBuild, setSelectedBuild] = useState<BuildType>('standard-finishing');
  const [isEstimating, setIsEstimating] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  // Auto-calculate the estimate
  const estimate = useMemo(() => {
    return calculateConstructionCost(selectedSize, selectedCity, selectedBuild);
  }, [selectedSize, selectedCity, selectedBuild]);

  const handleRecalculate = () => {
    setIsEstimating(true);
    setTimeout(() => {
      setIsEstimating(false);
    }, 600);
  };

  // Helper to format currency
  const formatPKR = (amount: number) => {
    if (amount >= 10000000) { // 1 Crore+
      return `PKR ${(amount / 10000000).toFixed(2)} Crore`;
    }
    return `PKR ${(amount / 100000).toFixed(2)} Lakh`;
  };

  const rawPKR = (amount: number) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const activeSizeObj = plotSizesList.find(p => p.id === selectedSize)!;
  const activeCityObj = citiesList.find(c => c.id === selectedCity)!;
  const activeBuildObj = buildTypesList.find(b => b.id === selectedBuild)!;

  return (
    <section id="cost-estimator" className="py-24 px-4 bg-gradient-to-b from-[#060E0A] to-[#0A3B2E] border-t border-[#1E4D38] relative overflow-hidden">
      {/* Blueprint Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      
      {/* Decorative Glow */}
      <div className="absolute -top-48 left-1/4 w-96 h-96 bg-[#2ECC71]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-48 right-1/4 w-96 h-96 bg-[#F5C518]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0F2A20] border border-[#1E4D38] px-4 py-1.5 rounded-full text-[#F5C518] text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            AI Cost Estimator Tool
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Calculate Construction Costs <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5C518] to-[#2ECC71]">Instantly</span>
          </h2>
          <p className="text-[#B8C5BD] text-base md:text-lg font-sans leading-relaxed">
            Get ultra-precise structural costs, grey structure budgets, finishing metrics, and dynamic raw materials checklists formulated on live Pakistani markets.
          </p>
        </div>

        {/* Dynamic Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (5 Cols) */}
          <div className="lg:col-span-5 bg-[#0F2A20]/80 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-[#1E4D38] shadow-xl shadow-black/30">
            <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-[#F5C518]" />
              Select Plot Specifications
            </h3>

            {/* Plot Size Select */}
            <div className="mb-6">
              <label className="block text-xs font-mono uppercase tracking-widest text-[#B8C5BD] mb-2.5">
                1. Plot Size (Marla / Kanal)
              </label>
              <div className="grid grid-cols-2 gap-3">
                {plotSizesList.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => {
                      setSelectedSize(size.id);
                      handleRecalculate();
                    }}
                    className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                      selectedSize === size.id
                        ? 'bg-[#1E4D38] border-[#F5C518] text-white shadow-md'
                        : 'bg-[#060E0A]/40 border-[#1E4D38] hover:border-[#F5C518]/50 text-[#B8C5BD]'
                    }`}
                  >
                    <div className="font-sans font-bold text-sm block">
                      {size.id === '3-marla' ? '3 Marla' : size.id === '5-marla' ? '5 Marla' : size.id === '10-marla' ? '10 Marla' : '1 Kanal'}
                    </div>
                    <span className="text-[11px] font-mono opacity-80">
                      {size.areaSqFt} sq. ft.
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* City Select */}
            <div className="mb-6">
              <label className="block text-xs font-mono uppercase tracking-widest text-[#B8C5BD] mb-2.5 flex justify-between items-center">
                <span>2. Project City</span>
                <span className="text-[10px] text-[#F5C518] capitalize">Dynamic city multiplier active</span>
              </label>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#F5C518]" />
                <select
                  value={selectedCity}
                  onChange={(e) => {
                    setSelectedCity(e.target.value as City);
                    handleRecalculate();
                  }}
                  className="w-full pl-10 pr-4 py-3.5 bg-[#060E0A]/60 border border-[#1E4D38] rounded-xl text-sm text-white focus:outline-none focus:border-[#F5C518] appearance-none cursor-pointer"
                >
                  {citiesList.map((city) => (
                    <option key={city.id} value={city.id} className="bg-[#060E0A] text-white">
                      {city.name} (Multiplier: {city.multiplier}x)
                    </option>
                  ))}
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#B8C5BD] text-xs">▼</div>
              </div>
            </div>

            {/* Build Type Select */}
            <div className="mb-8">
              <label className="block text-xs font-mono uppercase tracking-widest text-[#B8C5BD] mb-2.5">
                3. Quality & Build Level
              </label>
              <div className="space-y-3">
                {buildTypesList.map((build) => (
                  <button
                    key={build.id}
                    onClick={() => {
                      setSelectedBuild(build.id);
                      handleRecalculate();
                    }}
                    className={`w-full p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer flex gap-3 ${
                      selectedBuild === build.id
                        ? 'bg-[#1E4D38] border-[#2ECC71] text-white shadow-md'
                        : 'bg-[#060E0A]/40 border-[#1E4D38] hover:border-[#2ECC71]/40 text-[#B8C5BD]'
                    }`}
                  >
                    <div className="pt-0.5">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedBuild === build.id ? 'border-[#2ECC71]' : 'border-[#B8C5BD]'}`}>
                        {selectedBuild === build.id && <div className="w-2.5 h-2.5 rounded-full bg-[#2ECC71]"></div>}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-sans font-bold text-sm block flex justify-between">
                        <span>{build.name}</span>
                        <span className="text-xs text-[#F5C518] font-mono">~{build.baseRatePerSqFt} PKR/sqft</span>
                      </div>
                      <span className="text-[11px] block text-[#B8C5BD] mt-1 leading-relaxed">
                        {build.desc}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Trust badge */}
            <div className="p-3 bg-[#060E0A]/40 border border-[#1E4D38] rounded-xl flex items-center gap-2.5 text-xs text-[#B8C5BD]">
              <ShieldCheck className="w-5 h-5 text-[#2ECC71] shrink-0" />
              <span>Estimates update automatically weekly matching cement, structural steel, & local labor revisions.</span>
            </div>
          </div>

          {/* Results Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Total Budget Card */}
            <div className="bg-[#0F2A20]/80 backdrop-blur-md rounded-2xl border border-[#1E4D38] p-6 md:p-8 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5C518]/5 rounded-bl-full pointer-events-none"></div>

              {isEstimating ? (
                <div className="py-20 flex flex-col items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full border-2 border-t-[#F5C518] border-r-transparent border-l-transparent border-b-[#2ECC71] animate-spin"></div>
                  <span className="font-mono text-xs text-[#F5C518]">AI Estimator crunching live rates...</span>
                </div>
              ) : (
                <>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-6 border-b border-[#1E4D38]">
                    <div>
                      <span className="font-mono text-xs text-[#B8C5BD] uppercase tracking-widest block mb-1">
                        PROJECT BUDGET ESTIMATE ({activeSizeObj.name} in {activeCityObj.name})
                      </span>
                      <h4 className="text-3xl md:text-5xl font-display font-black text-[#F5C518] text-glow">
                        {formatPKR(estimate.total)}
                      </h4>
                      <p className="text-[13px] text-[#B8C5BD] mt-1">
                        Exact calculated amount: <strong className="text-white">{rawPKR(estimate.total)}</strong>
                      </p>
                    </div>

                    <div className="bg-[#060E0A] px-4 py-3 rounded-xl border border-[#1E4D38] text-right">
                      <div className="font-mono text-[10px] text-[#B8C5BD] uppercase block">Timeline Period</div>
                      <div className="text-xl font-display font-extrabold text-white flex items-center gap-1.5 mt-0.5">
                        <CalendarRange className="w-4 h-4 text-[#2ECC71]" />
                        {estimate.durationMonths} Months
                      </div>
                    </div>
                  </div>

                  {/* Structural Cost Breakdown Bar */}
                  <div className="space-y-2 mb-8">
                    <div className="flex justify-between text-xs font-mono text-[#B8C5BD]">
                      <span>Grey Structure Construction (60%)</span>
                      <span>Finishing Works (40%)</span>
                    </div>
                    <div className="h-4 w-full bg-[#060E0A] rounded-full overflow-hidden flex border border-[#1E4D38]">
                      <div 
                        className="bg-gradient-to-r from-[#1E4D38] to-[#2ECC71] h-full transition-all duration-500"
                        style={{ width: selectedBuild === 'grey-structure' ? '100%' : '60%' }}
                      ></div>
                      {selectedBuild !== 'grey-structure' && (
                        <div className="bg-gradient-to-r from-[#F5C518] to-amber-500 h-full w-[40%] transition-all duration-500"></div>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-1">
                      <div>
                        <span className="text-xs text-[#B8C5BD] block">Grey Structure cost:</span>
                        <span className="text-sm font-sans font-bold text-white block">
                          {rawPKR(estimate.greyStructure)}
                        </span>
                      </div>
                      {selectedBuild !== 'grey-structure' ? (
                        <div className="text-right">
                          <span className="text-xs text-[#B8C5BD] block">Finishing & fittings cost:</span>
                          <span className="text-sm font-sans font-bold text-white block">
                            {rawPKR(estimate.finishing)}
                          </span>
                        </div>
                      ) : (
                        <div className="text-right">
                          <span className="text-[11px] text-[#2ECC71] italic">Finishing omitted in grey structure selection</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Materials breakdown accordion-like visual */}
                  <div>
                    <h5 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4 flex items-center justify-between">
                      <span>Estimated Core Building Materials Checklist</span>
                      <button 
                        onClick={() => setShowExplanation(!showExplanation)}
                        className="text-[#F5C518] hover:underline text-xs flex items-center gap-1 font-mono normal-case"
                      >
                        <HelpCircle className="w-3.5 h-3.5" />
                        {showExplanation ? 'Hide pricing source' : 'View pricing assumptions'}
                      </button>
                    </h5>

                    {showExplanation && (
                      <div className="mb-4 p-3.5 bg-[#060E0A]/80 border border-[#1E4D38] rounded-lg text-xs text-[#B8C5BD] leading-relaxed">
                        Assuming 2026/2025 Lahore/Karachi average wholesale bulk rates: Cement @ Rs.1,450/bag, Bricks @ Rs.18/piece, Steel Rebar (60 Grade) @ Rs.265,000/ton, Sand @ Rs.85/cft, Labor contract rate @ Rs.400-550/sqft depending on finishing grade.
                      </div>
                    )}

                    {/* Material quantities grids */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      
                      {/* Bricks Card */}
                      <div className="bg-[#060E0A]/40 border border-[#1E4D38] p-3.5 rounded-xl flex justify-between items-center">
                        <div>
                          <span className="text-xs font-medium text-[#B8C5BD] block">Red Bricks (Grade-A)</span>
                          <span className="text-lg font-mono font-extrabold text-white mt-0.5 block">
                            {estimate.materials.bricks.qty.toLocaleString()} <span className="text-xs font-normal text-[#B8C5BD]">pcs</span>
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] font-mono text-[#B8C5BD] block">Est. Cost</span>
                          <span className="text-sm font-sans font-bold text-[#F5C518]">
                            {rawPKR(estimate.materials.bricks.cost)}
                          </span>
                        </div>
                      </div>

                      {/* Cement Card */}
                      <div className="bg-[#060E0A]/40 border border-[#1E4D38] p-3.5 rounded-xl flex justify-between items-center">
                        <div>
                          <span className="text-xs font-medium text-[#B8C5BD] block">Portland Cement (OPC)</span>
                          <span className="text-lg font-mono font-extrabold text-white mt-0.5 block">
                            {estimate.materials.cement.qty.toLocaleString()} <span className="text-xs font-normal text-[#B8C5BD]">bags</span>
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] font-mono text-[#B8C5BD] block">Est. Cost</span>
                          <span className="text-sm font-sans font-bold text-[#F5C518]">
                            {rawPKR(estimate.materials.cement.cost)}
                          </span>
                        </div>
                      </div>

                      {/* Steel Card */}
                      <div className="bg-[#060E0A]/40 border border-[#1E4D38] p-3.5 rounded-xl flex justify-between items-center">
                        <div>
                          <span className="text-xs font-medium text-[#B8C5BD] block">Deformed Steel Rebar</span>
                          <span className="text-lg font-mono font-extrabold text-white mt-0.5 block">
                            {estimate.materials.steel.qty} <span className="text-xs font-normal text-[#B8C5BD]">tons</span>
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] font-mono text-[#B8C5BD] block">Est. Cost</span>
                          <span className="text-sm font-sans font-bold text-[#F5C518]">
                            {rawPKR(estimate.materials.steel.cost)}
                          </span>
                        </div>
                      </div>

                      {/* Sand Card */}
                      <div className="bg-[#060E0A]/40 border border-[#1E4D38] p-3.5 rounded-xl flex justify-between items-center">
                        <div>
                          <span className="text-xs font-medium text-[#B8C5BD] block">Lawrencepur Sand (Cubic Ft)</span>
                          <span className="text-lg font-mono font-extrabold text-white mt-0.5 block">
                            {estimate.materials.sand.qty.toLocaleString()} <span className="text-xs font-normal text-[#B8C5BD]">cft</span>
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] font-mono text-[#B8C5BD] block">Est. Cost</span>
                          <span className="text-sm font-sans font-bold text-[#F5C518]">
                            {rawPKR(estimate.materials.sand.cost)}
                          </span>
                        </div>
                      </div>

                      {/* Labor Cost Card */}
                      <div className="bg-[#060E0A]/40 border border-[#1E4D38] p-3.5 rounded-xl flex justify-between items-center">
                        <div>
                          <span className="text-xs font-medium text-[#B8C5BD] block">Skilled/Unskilled Labor Wages</span>
                          <span className="text-lg font-mono font-extrabold text-white mt-0.5 block flex items-center gap-1">
                            <Hammer className="w-4 h-4 text-[#2ECC71]" />
                            Complete Contract
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] font-mono text-[#B8C5BD] block">Est. Cost</span>
                          <span className="text-sm font-sans font-bold text-[#F5C518]">
                            {rawPKR(estimate.laborCost)}
                          </span>
                        </div>
                      </div>

                      {/* Finishing fixtures/tiles if selected */}
                      {selectedBuild !== 'grey-structure' ? (
                        <div className="bg-[#060E0A]/40 border border-[#1E4D38] p-3.5 rounded-xl flex justify-between items-center">
                          <div>
                            <span className="text-xs font-medium text-[#B8C5BD] block">Premium Tiles & Sanitary</span>
                            <span className="text-lg font-mono font-extrabold text-white mt-0.5 block">
                              {estimate.materials.tiles.qty.toLocaleString()} <span className="text-xs font-normal text-[#B8C5BD]">boxes</span>
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="text-[10px] font-mono text-[#B8C5BD] block">Est. Cost</span>
                            <span className="text-sm font-sans font-bold text-[#F5C518]">
                              {rawPKR(estimate.materials.tiles.cost)}
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-emerald-950/20 border border-dashed border-[#1E4D38] p-3.5 rounded-xl flex items-center justify-center text-center text-xs text-[#B8C5BD]">
                          Grey structure has zero finishing tiles, doors, paint or marbles calculated.
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Schedule action prompt button */}
                  <div className="mt-8 pt-6 border-t border-[#1E4D38] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-left">
                      <h6 className="text-sm font-sans font-bold text-white">Generate Project Blueprint?</h6>
                      <p className="text-xs text-[#B8C5BD] mt-0.5">Auto-create structural schedules and milestones for {activeSizeObj.name}.</p>
                    </div>
                    <button
                      onClick={() => onGenerateTimeline(selectedSize, selectedBuild)}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-[#2ECC71] to-emerald-600 hover:from-[#2ecc72] hover:to-emerald-500 text-white font-sans text-xs font-extrabold px-5 py-3 rounded-lg shadow-lg shadow-emerald-900/40 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                    >
                      <CalendarRange className="w-4 h-4" />
                      View Construction Timeline
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
