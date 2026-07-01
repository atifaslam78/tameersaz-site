import { X, Smartphone, ArrowRight, ShieldCheck, Star } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
      ></div>

      {/* Content box */}
      <div className="bg-[#0F2A20] border border-[#1E4D38] w-full max-w-md rounded-2xl overflow-hidden shadow-2xl relative z-10 p-6 md:p-8 text-center text-white">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[#B8C5BD] hover:text-white p-1 rounded-lg hover:bg-[#1E4D38] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon */}
        <div className="w-12 h-12 bg-[#F5C518]/10 text-[#F5C518] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#F5C518]/30">
          <Smartphone className="w-6 h-6 animate-pulse" />
        </div>

        <h3 className="text-xl font-display font-extrabold mb-1">Download Tameer Saz App</h3>
        <p className="text-xs text-[#B8C5BD] mb-6">
          Get Pakistan's first AI-powered construction planner in your pocket.
        </p>

        {/* App Store options */}
        <div className="space-y-3">
          
          {/* Google Play */}
          <button 
            onClick={() => alert("Simulating Google Play Store connection! The Flutter package is pre-configured with Firebase Services.")}
            className="w-full bg-[#F5C518] hover:bg-[#e0b20f] text-[#060E0A] py-3 rounded-xl font-sans font-bold text-sm flex items-center justify-center gap-2.5 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>🤖</span>
            <span>Get it on Google Play Store</span>
          </button>

          {/* App Store */}
          <button 
            onClick={() => alert("Simulating Apple App Store connection! Fully optimized iOS version complete.")}
            className="w-full bg-transparent hover:bg-white/5 text-white border border-[#1E4D38] py-3 rounded-xl font-sans font-bold text-sm flex items-center justify-center gap-2.5 transition-all cursor-pointer"
          >
            <span>🍏</span>
            <span>Download on Apple App Store</span>
          </button>

        </div>

        {/* Simulated QR Code scan element */}
        <div className="mt-8 pt-6 border-t border-[#1E4D38] flex flex-col items-center">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#B8C5BD] mb-3">
            OR SCAN TO INSTANTLY INSTALL
          </span>
          
          {/* Mock QR Code vector box */}
          <div className="w-28 h-28 bg-white p-2 rounded-lg shadow-inner flex items-center justify-center relative group">
            {/* Draw custom grid design representing QR */}
            <div className="w-full h-full bg-neutral-900 flex flex-wrap p-1 gap-1 items-center justify-center content-center rounded-sm">
              <div className="w-6 h-6 border-4 border-white m-0.5 rounded-sm"></div>
              <div className="w-6 h-6 bg-white m-0.5 rounded-sm flex items-center justify-center text-[5px] text-black">TS</div>
              <div className="w-6 h-6 border-4 border-white m-0.5 rounded-sm"></div>
              <div className="w-6 h-6 bg-white m-0.5 rounded-sm"></div>
              <div className="w-6 h-6 border-4 border-white m-0.5 rounded-sm"></div>
              <div className="w-6 h-6 bg-white m-0.5 rounded-sm"></div>
            </div>
            <div className="absolute inset-0 bg-emerald-950/95 text-[#2ECC71] text-[9px] font-mono flex items-center justify-center p-2 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
              QR Demo Scanner Active
            </div>
          </div>
          
          <p className="text-[11px] text-[#B8C5BD] mt-3 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#2ECC71]" />
            <span>Verified safe · Virus-Free SECP Compliance</span>
          </p>
        </div>

        {/* Rating detail */}
        <div className="mt-6 flex justify-center items-center gap-1 text-xs text-[#B8C5BD]">
          <span className="font-bold text-white">4.9/5.0</span>
          <div className="flex text-[#F5C518]">
            <Star className="w-3 h-3 fill-[#F5C518] stroke-[#F5C518]" />
            <Star className="w-3 h-3 fill-[#F5C518] stroke-[#F5C518]" />
            <Star className="w-3 h-3 fill-[#F5C518] stroke-[#F5C518]" />
            <Star className="w-3 h-3 fill-[#F5C518] stroke-[#F5C518]" />
            <Star className="w-3 h-3 fill-[#F5C518] stroke-[#F5C518]" />
          </div>
          <span>(12.4k+ reviews in PK)</span>
        </div>

      </div>
    </div>
  );
}
