import { Construction, Mail, ShieldCheck, Heart, ArrowUp, Globe } from 'lucide-react';

interface FooterProps {
  onOpenBusinessModal: () => void;
  onOpenPrivacyModal?: () => void;
}

export default function Footer({ onOpenBusinessModal, onOpenPrivacyModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060E0A] border-t border-[#1E4D38] pt-16 pb-8 px-4 text-left relative overflow-hidden">
      {/* Structural decoration */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#0A3B2E]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-[#1E4D38]">
          
          {/* Logo & Info column (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-[#F5C518] text-[#060E0A] p-2 rounded-lg">
                <Construction className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-extrabold text-white tracking-wide">
                  TAMEER <span className="text-[#F5C518]">SAZ</span>
                </span>
                <span className="font-mono text-[9px] tracking-widest text-[#B8C5BD] uppercase font-bold">
                  Builder Ecosystem
                </span>
              </div>
            </div>

            <p className="text-sm text-[#B8C5BD] leading-relaxed max-w-sm">
              Pakistan's first fully unified construction scheduling ecosystem, connecting homeowners directly to raw materials manufacturers, verified engineers, and skilled builders.
            </p>

            {/* Verification highlights */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-white bg-[#0F2A20] px-3 py-1 rounded-full border border-[#1E4D38]">
                <ShieldCheck className="w-4 h-4 text-[#2ECC71]" />
                <span>PEC Vetted Builders</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-white bg-[#0F2A20] px-3 py-1 rounded-full border border-[#1E4D38]">
                <Globe className="w-4 h-4 text-[#2ECC71]" />
                <span>ISO 9001 Sourcing</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column (3 Cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Navigate Website
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-[#B8C5BD] hover:text-[#F5C518] transition-colors">Home Landing</a>
              </li>
              <li>
                <a href="#features" className="text-[#B8C5BD] hover:text-[#F5C518] transition-colors">Key Features Grid</a>
              </li>
              <li>
                <a href="#cost-estimator" className="text-[#B8C5BD] hover:text-[#F5C518] transition-colors">AI Cost Estimator</a>
              </li>
              <li>
                <a href="#timeline-generator" className="text-[#B8C5BD] hover:text-[#F5C518] transition-colors">Schedules & Milestones</a>
              </li>
              <li>
                <button 
                  onClick={onOpenBusinessModal} 
                  className="text-[#B8C5BD] hover:text-[#F5C518] text-left transition-colors cursor-pointer"
                >
                  Join as Professional
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Support & App Store Column (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Contact & Support
            </h4>
            
            <div className="space-y-3">
              <a 
                href="mailto:contact@tameersaz.tech" 
                className="flex items-center gap-3 text-sm text-[#B8C5BD] hover:text-white p-2.5 rounded-lg border border-[#1E4D38] bg-[#0F2A20]/40 transition-colors"
              >
                <Mail className="w-4 h-4 text-[#F5C518]" />
                <span className="font-mono">contact@tameersaz.tech</span>
              </a>

              <div className="text-xs text-[#B8C5BD] leading-relaxed">
                <span className="text-white font-bold block">Headquarters:</span>
                <span>79CC, Block A, Khayabaan e Amin, Lahore</span>
              </div>
            </div>
          </div>

        </div>

        {/* Lower row */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div className="text-xs text-[#B8C5BD]">
            <p>© {new Date().getFullYear()} Tameer Saz. All rights reserved. Registered under Securities and Exchange Commission of Pakistan (SECP).</p>
            <div className="flex justify-center sm:justify-start gap-4 mt-2">
              <button 
                onClick={(e) => { e.preventDefault(); if (onOpenPrivacyModal) onOpenPrivacyModal(); }} 
                className="hover:underline text-[#B8C5BD] hover:text-[#F5C518] transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <span>·</span>
              <a href="#terms" onClick={(e) => { e.preventDefault(); alert("Terms of Service and PEC standard contract templates are available within the app."); }} className="hover:underline">Terms of Service</a>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            {/* Made in Pakistan indicator */}
            <div className="flex items-center gap-1.5 text-xs text-white font-medium bg-[#0F2A20] px-3.5 py-1.5 rounded-xl border border-[#1E4D38]">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
              <span>in Pakistan 🇵🇰</span>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 bg-[#0F2A20] hover:bg-[#1E4D38] border border-[#1E4D38] text-white rounded-lg transition-colors cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
