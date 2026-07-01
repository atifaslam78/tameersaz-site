import { useState, useEffect, MouseEvent } from 'react';
import { Construction, Menu, X, Download } from 'lucide-react';

interface NavbarProps {
  onOpenDownloadModal: () => void;
  onOpenBusinessModal: () => void;
}

export default function Navbar({ onOpenDownloadModal, onOpenBusinessModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'AI Estimator', href: '#cost-estimator' },
    { name: 'For Professionals', href: '#professionals' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060E0A]/95 backdrop-blur-md border-b border-[#1E4D38] py-4 shadow-lg shadow-[#060E0A]/30'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2 group"
          >
            <div className="bg-[#F5C518] text-[#060E0A] p-2 rounded-lg transition-transform duration-300 group-hover:scale-110">
              <Construction className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-extrabold text-white tracking-wide leading-tight">
                TAMEER <span className="text-[#F5C518]">SAZ</span>
              </span>
              <span className="font-mono text-[9px] tracking-widest text-[#B8C5BD] uppercase font-bold">
                Builder Ecosystem
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-sans text-sm font-medium text-[#B8C5BD] hover:text-white transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#F5C518] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Call to Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenBusinessModal}
              className="font-sans text-sm font-semibold text-[#B8C5BD] hover:text-[#F5C518] transition-colors duration-200"
            >
              Register Business
            </button>
            <button
              onClick={onOpenDownloadModal}
              className="flex items-center gap-2 bg-[#F5C518] hover:bg-[#e0b20f] text-[#060E0A] font-sans text-sm font-bold px-5 py-2.5 rounded-lg shadow-lg shadow-[#F5C518]/25 hover:shadow-[#F5C518]/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download App
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={onOpenDownloadModal}
              className="sm:hidden flex items-center justify-center bg-[#F5C518] text-[#060E0A] p-2.5 rounded-lg"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#B8C5BD] hover:text-white focus:outline-none p-2 rounded-lg border border-[#1E4D38] hover:bg-[#0F2A20]"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#060E0A]/98 border-b border-[#1E4D38] px-4 py-6 space-y-4 absolute top-full left-0 w-full shadow-2xl transition-all duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-sans text-base font-medium text-[#B8C5BD] hover:text-white px-3 py-2 rounded-lg hover:bg-[#0F2A20] transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-[#1E4D38] flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenBusinessModal();
                }}
                className="w-full text-center bg-[#0F2A20] hover:bg-[#1E4D38] text-white font-sans text-sm font-semibold py-3 rounded-lg border border-[#1E4D38] transition-all"
              >
                Register Your Business
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenDownloadModal();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#F5C518] text-[#060E0A] font-sans text-sm font-bold py-3 rounded-lg shadow-lg shadow-[#F5C518]/25 transition-all"
              >
                <Download className="w-4 h-4" />
                Download App
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
