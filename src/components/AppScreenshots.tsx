import { useState, FormEvent } from 'react';
import { Smartphone, LayoutDashboard, Sparkles, UserCheck, MessageSquare, Store, AreaChart, Star, ShieldCheck, Heart, Send, Check } from 'lucide-react';
import { appScreensData } from '../data';

export default function AppScreenshots() {
  const [activeTab, setActiveTab] = useState<string>('homeowner-dashboard');
  const [chatMessage, setChatMessage] = useState<string>('');
  const [chatList, setChatList] = useState([
    { sender: 'homeowner', text: 'Salam Tariq sb, did the standard cement delivery arrive at site?' },
    { sender: 'contractor', text: 'Walaikum Salam Kamran sb, yes! 50 bags of Maple Leaf cement received and stacked in the storage shed.' },
    { sender: 'homeowner', text: 'Excellent. Please start foundation concrete curing early tomorrow.' }
  ]);

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    setChatList([...chatList, { sender: 'homeowner', text: chatMessage }]);
    setChatMessage('');
    // Simulate automated reply
    setTimeout(() => {
      setChatList(prev => [
        ...prev,
        { sender: 'contractor', text: 'Sure thing, team is set for 7 AM. I will upload photos on the portal!' }
      ]);
    }, 1000);
  };

  return (
    <section id="screenshots" className="py-24 px-4 bg-[#060E0A] border-t border-[#1E4D38] relative overflow-hidden">
      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0F2A20] border border-[#1E4D38] px-4 py-1.5 rounded-full text-[#F5C518] text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Smartphone className="w-3.5 h-3.5" />
            Live App Preview
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            See Tameer Saz in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ECC71] to-[#F5C518]">Action</span>
          </h2>
          <p className="text-[#B8C5BD] text-base md:text-lg font-sans leading-relaxed">
            Click through our custom interactive phone mockup below to preview the actual mobile application screens designed for Pakistani homeowners and builders.
          </p>
        </div>

        {/* Dynamic Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Controls - Left side tabs (5 Columns) */}
          <div className="lg:col-span-5 space-y-4 order-2 lg:order-1">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B8C5BD] block mb-2">
              Select Mobile Feature Screen:
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {appScreensData.map((screen) => {
                const isActive = screen.id === activeTab;
                
                // Assign icon based on screen id
                const getIcon = () => {
                  switch (screen.id) {
                    case 'homeowner-dashboard': return <LayoutDashboard className="w-5 h-5" />;
                    case 'ai-estimator': return <Sparkles className="w-5 h-5" />;
                    case 'contractor-marketplace': return <UserCheck className="w-5 h-5" />;
                    case 'realtime-chat': return <MessageSquare className="w-5 h-5" />;
                    case 'supplier-catalog': return <Store className="w-5 h-5" />;
                    case 'pro-profile': return <AreaChart className="w-5 h-5" />;
                    default: return <LayoutDashboard className="w-5 h-5" />;
                  }
                };

                return (
                  <button
                    key={screen.id}
                    onClick={() => setActiveTab(screen.id)}
                    className={`p-4 rounded-xl border text-left transition-all duration-300 flex items-center gap-4 cursor-pointer ${
                      isActive
                        ? 'bg-[#0F2A20] border-[#F5C518] text-white shadow-lg shadow-black/40 scale-102 translate-x-1'
                        : 'bg-[#0F2A20]/40 border-[#1E4D38] hover:border-[#F5C518]/30 text-[#B8C5BD]'
                    }`}
                  >
                    <div className={`p-2.5 rounded-lg shrink-0 ${isActive ? 'bg-[#F5C518] text-[#060E0A]' : 'bg-[#060E0A]/60 text-[#B8C5BD]'}`}>
                      {getIcon()}
                    </div>
                    <div>
                      <h4 className="text-sm font-sans font-extrabold text-white">{screen.title}</h4>
                      <p className="text-[11px] text-[#B8C5BD] leading-tight mt-0.5">{screen.subtitle}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Device Mockup Display - Right side phone (7 Columns) */}
          <div className="lg:col-span-7 flex justify-center order-1 lg:order-2">
            <div className="relative bg-[#0F2A20]/50 border border-[#1E4D38] p-8 rounded-3xl w-full max-w-lg shadow-2xl shadow-black/60 flex justify-center">
              
              {/* Outer Phone Frame */}
              <div className="relative w-[310px] h-[610px] bg-neutral-900 rounded-[48px] p-3 border-[6px] border-neutral-800 shadow-2xl flex flex-col justify-between overflow-hidden">
                
                {/* Speaker Ear Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-800 rounded-b-2xl z-30 flex items-center justify-center">
                  <div className="w-12 h-1 bg-neutral-700 rounded-full mb-1"></div>
                  <div className="w-2.5 h-2.5 bg-neutral-900 rounded-full ml-2 mb-1 border border-neutral-700"></div>
                </div>

                {/* Inner Phone Screen */}
                <div className="w-full h-full bg-[#060E0A] rounded-[38px] overflow-hidden relative flex flex-col justify-between pt-6 select-none font-sans">
                  
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-6 pt-1 text-[10px] font-mono text-[#B8C5BD] z-20">
                    <span>09:41 AM</span>
                    <div className="flex items-center gap-1">
                      <span>4G</span>
                      <div className="w-4 h-2 bg-[#2ECC71] rounded-sm"></div>
                    </div>
                  </div>

                  {/* SCREEN INTERFACES */}
                  <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col text-left">
                    
                    {/* Screen Header */}
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <span className="text-[9px] font-mono text-[#B8C5BD] block leading-none">TAMEER SAZ APP</span>
                        <h5 className="text-sm font-sans font-bold text-white mt-0.5">
                          {appScreensData.find(s => s.id === activeTab)?.screenTitle}
                        </h5>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-[#0F2A20] border border-[#1E4D38] flex items-center justify-center text-xs text-[#F5C518]">
                        🇵🇰
                      </div>
                    </div>

                    {/* DYNAMIC SCREEN LAYOUTS */}

                    {/* 1. HOMEOWNER DASHBOARD */}
                    {activeTab === 'homeowner-dashboard' && (
                      <div className="space-y-3 flex-1 flex flex-col justify-start text-xs">
                        
                        {/* Summary Widget */}
                        <div className="p-3 bg-[#0F2A20] border border-[#1E4D38] rounded-xl">
                          <span className="text-[10px] font-mono text-[#B8C5BD] block">ACTIVE HOUSE BUILD</span>
                          <span className="text-sm font-bold text-white block mt-0.5">5 Marla DHA Phase 6</span>
                          <div className="mt-2 flex justify-between items-center">
                            <span className="text-[11px] text-[#B8C5BD]">Total completion:</span>
                            <span className="font-mono font-bold text-[#F5C518]">42% Completed</span>
                          </div>
                          <div className="h-2 w-full bg-[#060E0A] rounded-full overflow-hidden mt-1.5 flex border border-[#1E4D38]">
                            <div className="bg-[#2ECC71] h-full" style={{ width: '42%' }}></div>
                          </div>
                        </div>

                        {/* Cost & Materials indicators */}
                        <div className="grid grid-cols-2 gap-2">
                          <div className="p-2.5 bg-[#060E0A]/80 border border-[#1E4D38] rounded-lg">
                            <span className="text-[9px] text-[#B8C5BD] block uppercase">Est. Cost Spent</span>
                            <span className="font-mono font-bold text-[#2ECC71] block mt-0.5">Rs. 18.5 Lakh</span>
                          </div>
                          <div className="p-2.5 bg-[#060E0A]/80 border border-[#1E4D38] rounded-lg">
                            <span className="text-[9px] text-[#B8C5BD] block uppercase">Next Milestone</span>
                            <span className="font-sans font-extrabold text-[#F5C518] block mt-0.5 text-[10px] truncate">Roof Slab Casting</span>
                          </div>
                        </div>

                        {/* Recent Activity lists */}
                        <div className="space-y-2">
                          <span className="text-[10px] font-mono text-[#B8C5BD] block">REAL-TIME EVENTS</span>
                          <div className="p-2 bg-[#0F2A20]/40 border border-[#1E4D38] rounded-lg flex items-center justify-between">
                            <div className="flex items-center gap-1.5 truncate">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#2ECC71]"></div>
                              <span className="text-[10px] text-white truncate">Bricks count verified</span>
                            </div>
                            <span className="text-[8px] font-mono text-[#B8C5BD]">1h ago</span>
                          </div>
                          <div className="p-2 bg-[#0F2A20]/40 border border-[#1E4D38] rounded-lg flex items-center justify-between">
                            <div className="flex items-center gap-1.5 truncate">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F5C518]"></div>
                              <span className="text-[10px] text-white truncate">Architect sent floorplan rev 3</span>
                            </div>
                            <span className="text-[8px] font-mono text-[#B8C5BD]">3h ago</span>
                          </div>
                        </div>

                      </div>
                    )}

                    {/* 2. AI COST ESTIMATION */}
                    {activeTab === 'ai-estimator' && (
                      <div className="space-y-3 flex-1 flex flex-col justify-start text-xs">
                        
                        {/* Selector representation */}
                        <div className="p-2.5 bg-[#0F2A20] border border-[#1E4D38] rounded-xl flex justify-between text-[11px]">
                          <span>Plot: <strong>10 Marla</strong></span>
                          <span>City: <strong>Lahore</strong></span>
                        </div>

                        {/* Big Ring chart simulated */}
                        <div className="flex flex-col items-center justify-center p-3 bg-[#060E0A] border border-[#1E4D38] rounded-xl text-center">
                          <div className="relative w-24 h-24 flex items-center justify-center">
                            {/* SVG circle */}
                            <svg className="absolute w-full h-full -rotate-90">
                              <circle cx="48" cy="48" r="40" className="stroke-[#1E4D38] fill-none stroke-[8]"></circle>
                              <circle cx="48" cy="48" r="40" className="stroke-[#2ECC71] fill-none stroke-[8]" strokeDasharray="251" strokeDashoffset="100"></circle>
                            </svg>
                            <div className="flex flex-col items-center leading-none">
                              <span className="text-[9px] font-mono text-[#B8C5BD]">EST. TOTAL</span>
                              <span className="text-xs font-bold text-white mt-1">Rs. 85.5L</span>
                            </div>
                          </div>
                          <span className="text-[10px] font-mono text-[#2ECC71] mt-2 block">Standard Build Rate</span>
                        </div>

                        {/* Material estimate list */}
                        <div className="space-y-1.5 text-[10px]">
                          <div className="flex justify-between p-2 bg-[#0F2A20]/50 rounded border border-[#1E4D38]">
                            <span>🧱 Bricks Needed</span>
                            <span className="font-mono font-bold">72,000 pcs</span>
                          </div>
                          <div className="flex justify-between p-2 bg-[#0F2A20]/50 rounded border border-[#1E4D38]">
                            <span>📦 Cement Bags</span>
                            <span className="font-mono font-bold">1,450 bags</span>
                          </div>
                          <div className="flex justify-between p-2 bg-[#0F2A20]/50 rounded border border-[#1E4D38]">
                            <span>⚓ Grade-60 Steel</span>
                            <span className="font-mono font-bold">4.8 Tons</span>
                          </div>
                        </div>

                      </div>
                    )}

                    {/* 3. CONTRACTOR MARKETPLACE */}
                    {activeTab === 'contractor-marketplace' && (
                      <div className="space-y-2.5 flex-1 flex flex-col justify-start text-xs">
                        
                        {/* Search bar */}
                        <div className="p-2 bg-[#060E0A] border border-[#1E4D38] rounded-lg text-[10px] text-[#B8C5BD] flex justify-between items-center">
                          <span>Search Architects, Contractors...</span>
                          <span>🔍</span>
                        </div>

                        {/* List items */}
                        <div className="p-2.5 bg-[#0F2A20] border border-[#1E4D38] rounded-xl space-y-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <span className="text-[9px] font-mono text-[#2ECC71] uppercase font-bold bg-emerald-950 px-1 py-0.5 rounded border border-emerald-800">PEC Certified</span>
                              <h6 className="font-bold text-white mt-1">Engr. Tariq Mehmood</h6>
                              <p className="text-[10px] text-[#B8C5BD]">Tariq Construction Co. · Islamabad</p>
                            </div>
                            <div className="flex items-center gap-0.5 font-mono text-xs text-[#F5C518]">
                              <Star className="w-3.5 h-3.5 fill-[#F5C518]" />
                              <span>4.9</span>
                            </div>
                          </div>
                          <p className="text-[10px] text-[#B8C5BD] line-clamp-2 leading-relaxed">Specializing in Grey Structure and Standard A-grade finishing villa projects.</p>
                          <button className="w-full text-center py-1.5 bg-[#060E0A] hover:bg-[#1E4D38] text-white border border-[#1E4D38] rounded font-mono text-[10px] transition-colors cursor-pointer">
                            View Profile & Portfolio
                          </button>
                        </div>

                        <div className="p-2.5 bg-[#0F2A20]/50 border border-[#1E4D38] rounded-xl">
                          <div className="flex justify-between items-start">
                            <div>
                              <span className="text-[9px] font-mono text-[#F5C518] uppercase font-bold bg-[#060E0A] px-1 py-0.5 rounded">Architect</span>
                              <h6 className="font-bold text-white mt-1">Zainab Qazi Design</h6>
                              <p className="text-[10px] text-[#B8C5BD]">Clifton, Karachi</p>
                            </div>
                            <div className="flex items-center gap-0.5 font-mono text-xs text-[#F5C518]">
                              <Star className="w-3.5 h-3.5 fill-[#F5C518]" />
                              <span>4.8</span>
                            </div>
                          </div>
                        </div>

                      </div>
                    )}

                    {/* 4. REAL-TIME CHAT */}
                    {activeTab === 'realtime-chat' && (
                      <div className="flex-1 flex flex-col justify-between text-[11px] h-full max-h-[340px]">
                        
                        {/* Chat messages viewport */}
                        <div className="flex-1 space-y-2.5 overflow-y-auto pr-1 pb-2">
                          <div className="text-center py-1">
                            <span className="text-[8px] font-mono text-[#B8C5BD] uppercase tracking-wider bg-[#060E0A]/80 border border-[#1E4D38] px-2 py-0.5 rounded">Secure chat with contractor</span>
                          </div>

                          {chatList.map((chat, idx) => (
                            <div 
                              key={idx} 
                              className={`max-w-[85%] p-2 rounded-xl text-xs leading-normal ${
                                chat.sender === 'homeowner' 
                                  ? 'bg-[#2ECC71] text-[#060E0A] ml-auto rounded-tr-none' 
                                  : 'bg-[#0F2A20] text-white mr-auto rounded-tl-none border border-[#1E4D38]'
                              }`}
                            >
                              <p>{chat.text}</p>
                            </div>
                          ))}
                        </div>

                        {/* Chat input box */}
                        <form onSubmit={handleSendMessage} className="mt-2 flex gap-1 pt-2 border-t border-[#1E4D38]/60">
                          <input
                            type="text"
                            value={chatMessage}
                            onChange={(e) => setChatMessage(e.target.value)}
                            placeholder="Type progress request..."
                            className="flex-1 bg-[#060E0A] border border-[#1E4D38] px-2.5 py-1.5 rounded-lg text-white text-[11px] focus:outline-none focus:border-[#F5C518]"
                          />
                          <button
                            type="submit"
                            className="bg-[#F5C518] text-[#060E0A] p-1.5 rounded-lg hover:bg-yellow-500 transition-all shrink-0 cursor-pointer"
                          >
                            <Send className="w-3 h-3" />
                          </button>
                        </form>

                      </div>
                    )}

                    {/* 5. SUPPLIER PRODUCT CATALOG */}
                    {activeTab === 'supplier-catalog' && (
                      <div className="space-y-2.5 flex-1 flex flex-col justify-start text-xs">
                        
                        {/* Filter row */}
                        <div className="flex gap-1 overflow-x-auto pb-1 no-scrollbar text-[9px] font-mono">
                          <span className="bg-[#2ECC71] text-[#060E0A] px-2 py-0.5 rounded shrink-0 font-bold">Cement</span>
                          <span className="bg-[#0F2A20] border border-[#1E4D38] text-[#B8C5BD] px-2 py-0.5 rounded shrink-0">Steel</span>
                          <span className="bg-[#0F2A20] border border-[#1E4D38] text-[#B8C5BD] px-2 py-0.5 rounded shrink-0">Bricks</span>
                          <span className="bg-[#0F2A20] border border-[#1E4D38] text-[#B8C5BD] px-2 py-0.5 rounded shrink-0">Pipes</span>
                        </div>

                        {/* Catalog list */}
                        <div className="grid grid-cols-2 gap-2">
                          <div className="p-2 bg-[#0F2A20] border border-[#1E4D38] rounded-xl flex flex-col justify-between">
                            <span className="text-[8px] font-mono text-[#F5C518] uppercase">MAPLE LEAF</span>
                            <h6 className="font-bold text-white text-[10px] mt-0.5">Maple Leaf OPC Cement</h6>
                            <div className="mt-2 flex justify-between items-center pt-1.5 border-t border-[#1E4D38]/60">
                              <span className="font-mono font-bold text-white text-[10px]">Rs. 1,450/bag</span>
                              <span className="text-[10px] text-[#2ECC71]">🛒</span>
                            </div>
                          </div>

                          <div className="p-2 bg-[#0F2A20] border border-[#1E4D38] rounded-xl flex flex-col justify-between">
                            <span className="text-[8px] font-mono text-[#F5C518] uppercase">MUGHAL STEEL</span>
                            <h6 className="font-bold text-white text-[10px] mt-0.5">Mughal Steel Rebar G60</h6>
                            <div className="mt-2 flex justify-between items-center pt-1.5 border-t border-[#1E4D38]/60">
                              <span className="font-mono font-bold text-white text-[9px]">Rs. 2.65L/ton</span>
                              <span className="text-[10px] text-[#2ECC71]">🛒</span>
                            </div>
                          </div>
                        </div>

                        {/* Trust badge mini */}
                        <div className="p-2 bg-emerald-950/20 border border-emerald-900/60 rounded-lg text-[9px] text-[#B8C5BD] text-center">
                          Direct-to-site wholesale delivery available across major Pakistani cities.
                        </div>

                      </div>
                    )}

                    {/* 6. PROFESSIONAL PROFILE */}
                    {activeTab === 'pro-profile' && (
                      <div className="space-y-3 flex-1 flex flex-col justify-start text-xs">
                        
                        {/* Revenue statistics chart bar */}
                        <div className="p-3 bg-[#0F2A20] border border-[#1E4D38] rounded-xl">
                          <span className="text-[9px] font-mono text-[#B8C5BD] block uppercase">BUILDER REVENUE</span>
                          <span className="text-sm font-bold text-white block mt-0.5">Rs. 8.4 Lakh <span className="text-[9px] text-[#2ECC71] font-mono">(+24% this month)</span></span>
                          
                          {/* Mini visual bars */}
                          <div className="flex gap-1 items-end h-10 mt-3 pt-2">
                            <div className="flex-1 bg-[#1E4D38] h-4 rounded-sm"></div>
                            <div className="flex-1 bg-[#1E4D38] h-6 rounded-sm"></div>
                            <div className="flex-1 bg-[#1E4D38] h-5 rounded-sm"></div>
                            <div className="flex-1 bg-[#2ECC71] h-9 rounded-sm"></div>
                          </div>
                        </div>

                        {/* Action cards for professionals */}
                        <div className="space-y-1.5 text-[10px]">
                          <div className="p-2 bg-[#060E0A] border border-[#1E4D38] rounded-lg flex justify-between items-center">
                            <span>📋 Active Quotations</span>
                            <span className="bg-[#2ECC71] text-[#060E0A] px-1.5 py-0.5 rounded font-mono font-bold">4 Active</span>
                          </div>
                          <div className="p-2 bg-[#060E0A] border border-[#1E4D38] rounded-lg flex justify-between items-center">
                            <span>📬 New Client Inquiries</span>
                            <span className="bg-[#F5C518] text-[#060E0A] px-1.5 py-0.5 rounded font-mono font-bold">2 New</span>
                          </div>
                        </div>

                      </div>
                    )}

                  </div>

                  {/* Android Navigation bar simulated */}
                  <div className="h-10 bg-[#060E0A] border-t border-[#1E4D38] flex justify-around items-center px-4 z-20 shrink-0">
                    <div className="w-3.5 h-3.5 border-2 border-[#B8C5BD] rotate-45 rounded-sm opacity-60"></div>
                    <div className="w-3.5 h-3.5 rounded-full border-2 border-[#B8C5BD] opacity-60"></div>
                    <div className="w-3.5 h-3 text-[#B8C5BD] flex items-center justify-center font-bold opacity-60 font-mono text-[10px]">&lt;</div>
                  </div>

                </div>
              </div>

              {/* Background badge decorations behind the mockup */}
              <div className="absolute top-12 left-6 bg-[#0F2A20] border border-[#1E4D38] p-3 rounded-xl hidden sm:flex items-center gap-2.5 shadow-xl rotate-[-6deg] z-20">
                <ShieldCheck className="w-5 h-5 text-[#2ECC71]" />
                <div className="text-left leading-none">
                  <span className="text-[10px] text-[#B8C5BD] block uppercase tracking-wider">SECURED BY</span>
                  <span className="text-xs font-bold text-white">Firebase Auth</span>
                </div>
              </div>

              <div className="absolute bottom-16 right-6 bg-[#0F2A20] border border-[#1E4D38] p-3 rounded-xl hidden sm:flex items-center gap-2.5 shadow-xl rotate-[6deg] z-20">
                <Heart className="w-5 h-5 text-[#2ECC71] fill-[#2ECC71]" />
                <div className="text-left leading-none">
                  <span className="text-[10px] text-[#B8C5BD] block uppercase tracking-wider">PROUDLY MADE IN</span>
                  <span className="text-xs font-bold text-white">Pakistan 🇵🇰</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
