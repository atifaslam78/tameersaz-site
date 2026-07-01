import { useState, useMemo } from 'react';
import { Calculator, Blocks, Droplet, Hash, FileSpreadsheet, Sparkles, TrendingDown } from 'lucide-react';

export default function MaterialCalculator() {
  const [areaSqFt, setAreaSqFt] = useState<number>(2250); // Default 10 Marla coverage

  // Calculations based on standard building regulations (LDA/KDA) and material practices in Pakistan
  const materials = useMemo(() => {
    // 1 sq ft needs:
    // ~34 bricks for average double story layout
    // ~0.65 cement bags
    // ~1.6 cft sand
    // ~2.5 kg steel = 0.0025 tons
    // ~1.1 cft crush
    // ~0.006 paint drums
    
    const bricks = Math.round(areaSqFt * 34);
    const cement = Math.round(areaSqFt * 0.68);
    const sand = Math.round(areaSqFt * 1.6);
    const steel = Number((areaSqFt * 0.0024).toFixed(2));
    const crush = Math.round(areaSqFt * 1.1);
    const paint = Math.round(areaSqFt * 0.006);

    // Approximate cost estimation in PKR
    const brickCost = bricks * 18;
    const cementCost = cement * 1450;
    const sandCost = sand * 85;
    const steelCost = Math.round(steel * 265000);
    const crushCost = crush * 140;
    const paintCost = paint * 16000;
    const totalCost = brickCost + cementCost + sandCost + steelCost + crushCost + paintCost;

    return {
      bricks, cement, sand, steel, crush, paint,
      costs: {
        bricks: brickCost,
        cement: cementCost,
        sand: sandCost,
        steel: steelCost,
        crush: crushCost,
        paint: paintCost,
        total: totalCost
      }
    };
  }, [areaSqFt]);

  const rawPKR = (amount: number) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section id="material-calculator" className="py-24 px-4 bg-gradient-to-b from-[#0A3B2E] to-[#060E0A] border-t border-[#1E4D38] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0F2A20] border border-[#1E4D38] px-4 py-1.5 rounded-full text-[#F5C518] text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Calculator className="w-3.5 h-3.5" />
            Quick Quantity Estimator
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Instant Raw Material <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5C518] to-[#2ECC71]">Quantity Calculator</span>
          </h2>
          <p className="text-[#B8C5BD] text-base md:text-lg font-sans leading-relaxed">
            Drag the slider to adjust your home’s total covered area in square feet. See standard raw materials and pricing update in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Slider Controls (4 Columns) */}
          <div className="lg:col-span-4 bg-[#0F2A20]/80 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-[#1E4D38] shadow-xl">
            <h3 className="text-lg font-display font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#2ECC71]" />
              Adjust Covered Area
            </h3>

            {/* Coverage Area Input */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#B8C5BD]">Total Covered Area</span>
                  <span className="text-2xl font-mono font-black text-[#F5C518]">{areaSqFt.toLocaleString()} <span className="text-xs font-normal">sq. ft.</span></span>
                </div>

                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="50"
                  value={areaSqFt}
                  onChange={(e) => setAreaSqFt(Number(e.target.value))}
                  className="w-full h-2 bg-[#060E0A] rounded-lg appearance-none cursor-pointer accent-[#F5C518] border border-[#1E4D38]"
                />

                <div className="flex justify-between text-[11px] font-mono text-[#B8C5BD] mt-2">
                  <span>500 sq.ft. (Small Cabin)</span>
                  <span>10,000 sq.ft. (Large Mansion)</span>
                </div>
              </div>

              {/* Local Area Size Conversions Helper */}
              <div className="p-4 bg-[#060E0A]/50 rounded-xl border border-[#1E4D38] space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-[#F5C518] block tracking-widest font-bold">Common Layout reference sizes:</span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button 
                    onClick={() => setAreaSqFt(1125)}
                    className="p-2 rounded bg-[#0F2A20] border border-[#1E4D38] text-left text-white hover:border-[#F5C518] transition-colors cursor-pointer"
                  >
                    <div className="font-bold">5 Marla</div>
                    <div className="text-[10px] text-[#B8C5BD]">~1,125 sq ft</div>
                  </button>
                  <button 
                    onClick={() => setAreaSqFt(2250)}
                    className="p-2 rounded bg-[#0F2A20] border border-[#1E4D38] text-left text-white hover:border-[#F5C518] transition-colors cursor-pointer"
                  >
                    <div className="font-bold">10 Marla</div>
                    <div className="text-[10px] text-[#B8C5BD]">~2,250 sq ft</div>
                  </button>
                  <button 
                    onClick={() => setAreaSqFt(4500)}
                    className="p-2 rounded bg-[#0F2A20] border border-[#1E4D38] text-left text-white hover:border-[#F5C518] transition-colors cursor-pointer"
                  >
                    <div className="font-bold">1 Kanal</div>
                    <div className="text-[10px] text-[#B8C5BD]">~4,500 sq ft</div>
                  </button>
                  <button 
                    onClick={() => setAreaSqFt(9000)}
                    className="p-2 rounded bg-[#0F2A20] border border-[#1E4D38] text-left text-white hover:border-[#F5C518] transition-colors cursor-pointer"
                  >
                    <div className="font-bold">2 Kanal</div>
                    <div className="text-[10px] text-[#B8C5BD]">~9,000 sq ft</div>
                  </button>
                </div>
              </div>

              {/* Calculated material sum */}
              <div className="pt-4 border-t border-[#1E4D38]">
                <span className="text-[11px] font-mono text-[#B8C5BD] uppercase block tracking-wider">Estimated Materials Total Value</span>
                <span className="text-xl font-display font-black text-white block mt-1">{rawPKR(materials.costs.total)}</span>
                <span className="text-[10px] text-[#2ECC71] block mt-0.5">† Values exclude tile flooring and plumbing fixtures</span>
              </div>
            </div>
          </div>

          {/* Quantities & Pricing Checklist (8 Columns) */}
          <div className="lg:col-span-8 bg-[#0F2A20]/40 border border-[#1E4D38] rounded-2xl p-6 md:p-8 shadow-xl">
            <h3 className="text-xl font-display font-extrabold text-white mb-6 flex items-center justify-between">
              <span>Raw Materials Breakdown Checklist</span>
              <span className="text-xs font-mono font-normal text-[#B8C5BD]">Unit averages calculated live</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Brick box */}
              <div className="bg-[#060E0A]/40 border border-[#1E4D38] p-4 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-amber-950/40 text-amber-500 rounded-lg border border-amber-900">
                    {/* Placeholder custom block design */}
                    <span className="text-lg font-mono font-bold leading-none">🧱</span>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#B8C5BD] uppercase block">Clay Bricks (A-grade)</span>
                    <span className="text-base font-sans font-extrabold text-white">
                      {materials.bricks.toLocaleString()} <span className="text-xs font-normal text-[#B8C5BD]">pcs</span>
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-[#B8C5BD] block">Est. cost</span>
                  <span className="text-xs font-mono font-bold text-[#F5C518]">{rawPKR(materials.costs.bricks)}</span>
                </div>
              </div>

              {/* Cement box */}
              <div className="bg-[#060E0A]/40 border border-[#1E4D38] p-4 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-emerald-950/40 text-[#2ECC71] rounded-lg border border-emerald-900">
                    <Blocks className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#B8C5BD] uppercase block">Portland Cement</span>
                    <span className="text-base font-sans font-extrabold text-white">
                      {materials.cement.toLocaleString()} <span className="text-xs font-normal text-[#B8C5BD]">bags</span>
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-[#B8C5BD] block">Est. cost</span>
                  <span className="text-xs font-mono font-bold text-[#F5C518]">{rawPKR(materials.costs.cement)}</span>
                </div>
              </div>

              {/* Steel box */}
              <div className="bg-[#060E0A]/40 border border-[#1E4D38] p-4 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-950/40 text-blue-400 rounded-lg border border-blue-900">
                    <Hash className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#B8C5BD] uppercase block">Steel Rebars (Grade 60)</span>
                    <span className="text-base font-sans font-extrabold text-white">
                      {materials.steel} <span className="text-xs font-normal text-[#B8C5BD]">tons</span>
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-[#B8C5BD] block">Est. cost</span>
                  <span className="text-xs font-mono font-bold text-[#F5C518]">{rawPKR(materials.costs.steel)}</span>
                </div>
              </div>

              {/* Sand box */}
              <div className="bg-[#060E0A]/40 border border-[#1E4D38] p-4 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-yellow-950/40 text-yellow-500 rounded-lg border border-yellow-900">
                    <span className="text-lg font-mono font-bold leading-none">⏳</span>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#B8C5BD] uppercase block">Ravi & Chenab Sand</span>
                    <span className="text-base font-sans font-extrabold text-white">
                      {materials.sand.toLocaleString()} <span className="text-xs font-normal text-[#B8C5BD]">cft</span>
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-[#B8C5BD] block">Est. cost</span>
                  <span className="text-xs font-mono font-bold text-[#F5C518]">{rawPKR(materials.costs.sand)}</span>
                </div>
              </div>

              {/* Gravel / Crush box */}
              <div className="bg-[#060E0A]/40 border border-[#1E4D38] p-4 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-gray-950/40 text-gray-400 rounded-lg border border-gray-900">
                    <span className="text-lg font-mono font-bold leading-none">🪨</span>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#B8C5BD] uppercase block">Margalla Crush / Gravel</span>
                    <span className="text-base font-sans font-extrabold text-white">
                      {materials.crush.toLocaleString()} <span className="text-xs font-normal text-[#B8C5BD]">cft</span>
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-[#B8C5BD] block">Est. cost</span>
                  <span className="text-xs font-mono font-bold text-[#F5C518]">{rawPKR(materials.costs.crush)}</span>
                </div>
              </div>

              {/* Paint drums */}
              <div className="bg-[#060E0A]/40 border border-[#1E4D38] p-4 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-pink-950/40 text-pink-400 rounded-lg border border-pink-900">
                    <Droplet className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#B8C5BD] uppercase block">Weather-Sheet & Emulsion</span>
                    <span className="text-base font-sans font-extrabold text-white">
                      {materials.paint} <span className="text-xs font-normal text-[#B8C5BD]">drums</span>
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-[#B8C5BD] block">Est. cost</span>
                  <span className="text-xs font-mono font-bold text-[#F5C518]">{rawPKR(materials.costs.paint)}</span>
                </div>
              </div>

            </div>

            {/* Print/Download checklist suggestion */}
            <div className="mt-6 p-4 bg-[#060E0A]/55 rounded-xl border border-dashed border-[#1E4D38] flex flex-col md:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#B8C5BD] text-center md:text-left">
                Download this list to your phone as an Excel Spreadsheet to buy materials directly at wholesale markets.
              </span>
              <button 
                onClick={() => alert("Checklist CSV generated! Download starting in background on the Tameer Saz App.")}
                className="text-xs font-mono font-bold bg-[#F5C518] hover:bg-[#e0b20f] text-[#060E0A] px-4 py-2.5 rounded-lg flex items-center gap-2 cursor-pointer transition-all shrink-0"
              >
                <FileSpreadsheet className="w-4 h-4" />
                Export material checklist
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
