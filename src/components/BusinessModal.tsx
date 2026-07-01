import { useState, FormEvent } from 'react';
import { X, CheckCircle2, Sparkles, Building, Phone, Send, Loader2, ArrowRight } from 'lucide-react';
import { citiesList } from '../data';

interface BusinessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BusinessModal({ isOpen, onClose }: BusinessModalProps) {
  const [role, setRole] = useState<'contractor' | 'architect' | 'labour' | 'supplier'>('contractor');
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Lahore');
  const [experience, setExperience] = useState('3');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !businessName || !phone) {
      alert("Please fill in all mandatory fields.");
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API registration call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop overlay */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
      ></div>

      {/* Modal Dialog Content */}
      <div className="bg-[#0F2A20] border border-[#1E4D38] w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl relative z-10 transition-transform transform scale-100 duration-300 flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="flex justify-between items-center p-5 border-b border-[#1E4D38] bg-[#060E0A]/40 shrink-0">
          <div>
            <span className="text-[10px] font-mono text-[#F5C518] uppercase tracking-widest block font-bold">Grow your local network</span>
            <h3 className="text-lg font-display font-extrabold text-white mt-0.5">Register Your Business</h3>
          </div>
          <button 
            onClick={onClose}
            className="text-[#B8C5BD] hover:text-white p-1 rounded-lg hover:bg-[#1E4D38] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto flex-1 scrollbar-thin">
          {isSuccess ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-emerald-950/80 border border-[#2ECC71] text-[#2ECC71] rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-900/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-display font-black text-white">Application Received!</h4>
              <p className="text-sm text-[#B8C5BD] max-w-xs mx-auto leading-relaxed">
                Thank you for applying. A Tameer Saz partner relationship manager from <strong>{city}</strong> office will contact you on <strong className="text-white">{phone}</strong> within 24 working hours for CNIC & license verification.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setName('');
                    setBusinessName('');
                    setPhone('');
                    onClose();
                  }}
                  className="bg-[#2ECC71] hover:bg-emerald-500 text-[#060E0A] font-sans text-xs font-extrabold px-6 py-3 rounded-lg transition-all cursor-pointer"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              
              {/* Role Select Tabs */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#B8C5BD] mb-2 font-bold">
                  What is your profession?
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setRole('contractor')}
                    className={`p-2.5 rounded-lg border text-center transition-all cursor-pointer ${
                      role === 'contractor'
                        ? 'bg-[#1E4D38] border-[#F5C518] text-white font-bold'
                        : 'bg-[#060E0A]/40 border-[#1E4D38] text-[#B8C5BD]'
                    }`}
                  >
                    Contractor
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('architect')}
                    className={`p-2.5 rounded-lg border text-center transition-all cursor-pointer ${
                      role === 'architect'
                        ? 'bg-[#1E4D38] border-[#F5C518] text-white font-bold'
                        : 'bg-[#060E0A]/40 border-[#1E4D38] text-[#B8C5BD]'
                    }`}
                  >
                    Architect / Designer
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('labour')}
                    className={`p-2.5 rounded-lg border text-center transition-all cursor-pointer ${
                      role === 'labour'
                        ? 'bg-[#1E4D38] border-[#F5C518] text-white font-bold'
                        : 'bg-[#060E0A]/40 border-[#1E4D38] text-[#B8C5BD]'
                    }`}
                  >
                    Labour Professional
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('supplier')}
                    className={`p-2.5 rounded-lg border text-center transition-all cursor-pointer ${
                      role === 'supplier'
                        ? 'bg-[#1E4D38] border-[#F5C518] text-white font-bold'
                        : 'bg-[#060E0A]/40 border-[#1E4D38] text-[#B8C5BD]'
                    }`}
                  >
                    Material Supplier
                  </button>
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#B8C5BD] mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Kamran Mehmood"
                  className="w-full bg-[#060E0A]/60 border border-[#1E4D38] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F5C518]"
                />
              </div>

              {/* Business Name */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#B8C5BD] mb-1.5">
                  {role === 'labour' ? 'Primary Trade Skill *' : 'Company / Firm Name *'}
                </label>
                <div className="relative">
                  <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B8C5BD]" />
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder={role === 'labour' ? 'e.g. Mason (Raj Mistry) or Electrician' : 'e.g. Mughal Builders Pvt Ltd'}
                    className="w-full bg-[#060E0A]/60 border border-[#1E4D38] rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#F5C518]"
                  />
                </div>
              </div>

              {/* Contact Phone */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#B8C5BD] mb-1.5">
                  WhatsApp / Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B8C5BD]" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 03001234567"
                    className="w-full bg-[#060E0A]/60 border border-[#1E4D38] rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#F5C518]"
                  />
                </div>
              </div>

              {/* City and experience split row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#B8C5BD] mb-1.5">
                    Operating City
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-[#060E0A]/60 border border-[#1E4D38] rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:border-[#F5C518] appearance-none"
                  >
                    {citiesList.map((c) => (
                      <option key={c.id} value={c.name} className="bg-[#060E0A]">
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#B8C5BD] mb-1.5">
                    Years of Experience
                  </label>
                  <select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full bg-[#060E0A]/60 border border-[#1E4D38] rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:border-[#F5C518] appearance-none"
                  >
                    <option value="1" className="bg-[#060E0A]">1-2 Years</option>
                    <option value="3" className="bg-[#060E0A]">3-5 Years</option>
                    <option value="6" className="bg-[#060E0A]">6-10 Years</option>
                    <option value="11" className="bg-[#060E0A]">10+ Years</option>
                  </select>
                </div>
              </div>

              {/* Consent check */}
              <div className="p-3 bg-[#060E0A]/40 border border-[#1E4D38] rounded-xl text-[11px] text-[#B8C5BD] leading-normal">
                ✔ By submitting this form, you authorize Tameer Saz vetting team to call you for verify portfolio proofs. Certified profiles receive the "Verified" badge.
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#F5C518] hover:bg-[#e0b20f] text-[#060E0A] font-sans text-sm font-black py-3.5 rounded-xl shadow-lg shadow-[#F5C518]/20 flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Registering Business...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Verification Request
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
