import { useState, useEffect } from 'react';
import { ArrowLeft, Shield, Lock, CheckCircle, Search, Mail, Globe, Scale, BookOpen } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onBackToHome: () => void;
}

export default function PrivacyPolicyPage({ onBackToHome }: PrivacyPolicyPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('1');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const sections = [
    { id: '1', title: '1. Introduction' },
    { id: '2', title: '2. Information We Collect' },
    { id: '3', title: '3. How We Use Your Information' },
    { id: '4', title: '4. Legal Basis (GDPR)' },
    { id: '5', title: '5. How We Share Your Information' },
    { id: '6', title: '6. Storage and Retention' },
    { id: '7', title: '7. Data Security' },
    { id: '8', title: '8. Permissions We Request' },
    { id: '9', title: '9. Children\'s Privacy' },
    { id: '10', title: '10. Your Privacy Rights' },
    { id: '11', title: '11. Third-Party Links' },
    { id: '12', title: '12. Changes to Policy' },
    { id: '13', title: '13. Contact Us' },
    { id: '14', title: '14. Governing Law' },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(`section-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Helper to highlight search terms
  const highlightText = (text: string, search: string) => {
    if (!search.trim()) return text;
    const regex = new RegExp(`(${search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return (
      <>
        {parts.map((part, i) => 
          regex.test(part) ? (
            <mark key={i} className="bg-[#F5C518]/30 text-white rounded px-0.5 font-semibold">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <div className="bg-[#060E0A] text-white min-h-screen font-sans">
      
      {/* 1. Header Banner */}
      <div className="border-b border-[#1E4D38] bg-gradient-to-r from-[#0F2A20] to-[#060E0A] py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <button 
            onClick={onBackToHome}
            className="group flex items-center gap-2 text-xs font-mono text-[#2ECC71] hover:text-[#f3cd3b] transition-all mb-6 cursor-pointer bg-[#060E0A]/50 px-4 py-2 rounded-full border border-[#1E4D38] w-fit"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>BACK TO HOME PAGE</span>
          </button>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#2ECC71]/10 border border-[#2ECC71]/30 flex items-center justify-center text-[#2ECC71] shrink-0">
                <Shield className="w-7 h-7" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">
                  Privacy Policy
                </h1>
                <p className="text-xs font-mono text-[#B8C5BD] uppercase tracking-wider mt-1.5">
                  Tameer Saz · Last Updated: June 29, 2026 · Effective Date: June 29, 2026
                </p>
              </div>
            </div>

            {/* In-Page Quick Search */}
            <div className="relative w-full md:w-80">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#B8C5BD]">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search privacy terms..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#060E0A]/70 border border-[#1E4D38] rounded-xl text-xs text-white placeholder-[#B8C5BD]/60 focus:outline-none focus:ring-1 focus:ring-[#2ECC71] focus:border-[#2ECC71]"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-xs text-[#B8C5BD] hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Layout Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Floating Table of Contents for Large Screens */}
          <aside className="lg:col-span-3 sticky top-6 hidden lg:block bg-[#0F2A20]/40 border border-[#1E4D38] p-5 rounded-2xl">
            <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-[#B8C5BD] mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#2ECC71]" />
              <span>Table of Contents</span>
            </h2>
            <nav className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left py-2 px-3 rounded-lg text-xs transition-all duration-150 cursor-pointer ${
                    activeSection === section.id
                      ? 'bg-[#2ECC71]/10 text-[#2ECC71] font-semibold border-l-2 border-[#2ECC71]'
                      : 'text-[#B8C5BD] hover:bg-[#1E4D38]/30 hover:text-white'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </aside>

          {/* Right Column: Full-width Policy Content */}
          <main className="lg:col-span-9 space-y-12">
            
            {/* Introductory Abstract Badge */}
            <div className="p-5 bg-[#0F2A20]/40 rounded-2xl border border-[#1E4D38] flex items-start gap-4">
              <Lock className="w-6 h-6 text-[#F5C518] shrink-0 mt-0.5 animate-pulse" />
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">Compliance Overview</span>
                <p className="text-xs text-[#B8C5BD] leading-relaxed">
                  This Privacy Policy applies to the Tameer Saz mobile application and associated web portals. It details our compliant standards aligned with the <strong>Pakistan Electronic Crimes Act (PECA)</strong>, the <strong>General Data Protection Regulation (GDPR)</strong>, and Google Play Store and Apple App Store Developer standards.
                </p>
              </div>
            </div>

            {/* Section 1 */}
            <section id="section-1" className="space-y-4 scroll-mt-6">
              <h3 className="text-xl font-display font-extrabold text-white flex items-center gap-2 border-b border-[#1E4D38]/60 pb-2">
                <span className="text-[#F5C518] font-mono text-sm">1.</span> Introduction
              </h3>
              <div className="text-sm text-[#B8C5BD] space-y-4 leading-relaxed font-sans">
                <p>
                  {highlightText(
                    'Welcome to Tameer Saz ("the Application," "we," "our," or "us"). Tameer Saz is a construction planning and services marketplace platform ("Company"). The Application connects homeowners, contractors, architects, labour professionals, and building materials suppliers in a unified digital ecosystem to streamline construction projects across Pakistan.',
                    searchQuery
                  )}
                </p>
                <p>
                  {highlightText(
                    'This Privacy Policy describes in detail how we collect, use, disclose, store, transfer, and protect your personal information when you use our mobile application and associated services (collectively, the "Service"). By accessing or using Tameer Saz, you signify your agreement to this Privacy Policy in its entirety. If you do not agree with the terms of this Policy, please do not use our Service.',
                    searchQuery
                  )}
                </p>
                <p>
                  {highlightText(
                    'Our policy is designed to maintain industry-best standards. It fully complies with applicable data protection regulations, including best practices under the General Data Protection Regulation (GDPR), the Pakistan Electronic Crimes Act (PECA), Google Play Store Developer Policies, and Apple App Store Review Guidelines.',
                    searchQuery
                  )}
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="section-2" className="space-y-5 scroll-mt-6">
              <h3 className="text-xl font-display font-extrabold text-white flex items-center gap-2 border-b border-[#1E4D38]/60 pb-2">
                <span className="text-[#F5C518] font-mono text-sm">2.</span> Information We Collect
              </h3>
              <p className="text-sm text-[#B8C5BD] leading-relaxed">
                {highlightText(
                  'We collect information that you provide directly, information collected automatically through your use of the Service, and information from third-party services.',
                  searchQuery
                )}
              </p>

              {/* Subsection 2.1 */}
              <div className="space-y-3.5 pl-4 border-l-2 border-[#1E4D38] mt-2">
                <h4 className="text-sm font-mono text-[#F5C518] uppercase tracking-wider font-bold">
                  2.1 Information You Provide Directly
                </h4>
                
                <div className="overflow-hidden border border-[#1E4D38] rounded-xl bg-[#060E0A]/40">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-[#060E0A] text-white border-b border-[#1E4D38] font-mono">
                        <th className="p-3.5 font-extrabold w-1/3">Data Category</th>
                        <th className="p-3.5 font-extrabold">Elements Collected & Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#1E4D38] text-[#B8C5BD]">
                      <tr>
                        <td className="p-3.5 font-bold text-white font-mono bg-[#060E0A]/20">Identity Information</td>
                        <td className="p-3.5">{highlightText('Full name, display name', searchQuery)}</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-white font-mono bg-[#060E0A]/20">Contact Information</td>
                        <td className="p-3.5">{highlightText('Mobile phone number', searchQuery)}</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-white font-mono bg-[#060E0A]/20">Account Information</td>
                        <td className="p-3.5">{highlightText('Account role selection (Homeowner, Contractor, Architect, Labour, Supplier), profile photograph', searchQuery)}</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-white font-mono bg-[#060E0A]/20">Professional Information</td>
                        <td className="p-3.5">{highlightText('Registered business name, specific service categories, trade specializations, years of industry experience, service coverage areas, CNIC (optional for verification badges)', searchQuery)}</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-white font-mono bg-[#060E0A]/20">Project Information</td>
                        <td className="p-3.5">{highlightText('Construction project name, project address, covered plot size, construction build type, budget range, estimated project timeline', searchQuery)}</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-white font-mono bg-[#060E0A]/20">Financial Information</td>
                        <td className="p-3.5">{highlightText('Cost estimates, project budgets. Please note: we do not process payments directly or collect credit card billing credentials', searchQuery)}</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-white font-mono bg-[#060E0A]/20">Communication Content</td>
                        <td className="p-3.5">{highlightText('Real-time chat text logs, voice messages, files and images sent through the in-app chat system', searchQuery)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Subsection 2.2 */}
              <div className="space-y-3.5 pl-4 border-l-2 border-[#1E4D38] pt-2">
                <h4 className="text-sm font-mono text-[#F5C518] uppercase tracking-wider font-bold">
                  2.2 Information Collected Automatically
                </h4>
                <p className="text-xs text-[#B8C5BD]">
                  When you access or use our Service, we automatically collect certain technical and behavioral information:
                </p>
                <ul className="space-y-2.5 text-xs text-[#B8C5BD] list-disc pl-5">
                  <li>
                    <strong className="text-white">Device Information:</strong> {highlightText('Device model, operating system version, unique device identifiers (IDFV, Android ID), screen resolution.', searchQuery)}
                  </li>
                  <li>
                    <strong className="text-white">Log Data:</strong> {highlightText('IP address, access timestamps, application crash reports, system error logs, diagnostic performance metrics.', searchQuery)}
                  </li>
                  <li>
                    <strong className="text-white">Usage Analytics:</strong> {highlightText('App features accessed, screens viewed, time spent on specific interactive elements, navigation paths, and button clicks.', searchQuery)}
                  </li>
                  <li>
                    <strong className="text-white">Performance Data:</strong> {highlightText('App load times, API network request latency, rendering performance metrics.', searchQuery)}
                  </li>
                  <li>
                    <strong className="text-white">Authentication Tokens:</strong> {highlightText('Secure Firebase Authentication tokens and unique session identifiers.', searchQuery)}
                  </li>
                </ul>
              </div>

              {/* Subsection 2.3 */}
              <div className="space-y-3 pl-4 border-l-2 border-[#1E4D38] pt-2">
                <h4 className="text-sm font-mono text-[#F5C518] uppercase tracking-wider font-bold">
                  2.3 Information Collected from Third Parties
                </h4>
                <p className="text-xs text-[#B8C5BD]">
                  When you choose to authenticate using third-party logins or integration systems, we receive limited credential information:
                </p>
                <ul className="space-y-2 text-xs text-[#B8C5BD] list-disc pl-5">
                  <li>
                    <strong className="text-white">Google Sign-In (OAuth 2.0):</strong> {highlightText('Your public name, email address, and Google profile photograph, as explicitly authorized by you during the auth flow.', searchQuery)}
                  </li>
                  <li>
                    <strong className="text-white">Firebase Authentication (Phone Number):</strong> {highlightText('When you log in using your mobile phone number, Firebase handles secure processing and registers your number as a verified credential.', searchQuery)}
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section id="section-3" className="space-y-4 scroll-mt-6">
              <h3 className="text-xl font-display font-extrabold text-white flex items-center gap-2 border-b border-[#1E4D38]/60 pb-2">
                <span className="text-[#F5C518] font-mono text-sm">3.</span> How We Use Your Information
              </h3>
              <p className="text-sm text-[#B8C5BD]">
                We process your data strictly for legitimate and pre-defined operational purposes, including:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#B8C5BD]">
                <div className="p-4 bg-[#0F2A20]/20 border border-[#1E4D38] rounded-xl space-y-2">
                  <span className="font-mono font-bold text-[#2ECC71] text-[11px] uppercase tracking-wider block">3.1 Service Operations</span>
                  <ul className="space-y-1 list-disc pl-4">
                    <li>Creating and managing user accounts</li>
                    <li>Connecting homeowners with local contractors</li>
                    <li>Enabling in-app real-time messaging</li>
                    <li>Generating AI estimates and project timelines</li>
                  </ul>
                </div>

                <div className="p-4 bg-[#0F2A20]/20 border border-[#1E4D38] rounded-xl space-y-2">
                  <span className="font-mono font-bold text-[#2ECC71] text-[11px] uppercase tracking-wider block">3.2 Matching & Recommendations</span>
                  <ul className="space-y-1 list-disc pl-4">
                    <li>Recommending builders based on location</li>
                    <li>Displaying contextually relevant products</li>
                    <li>Tailoring matching rules to construction scope</li>
                  </ul>
                </div>

                <div className="p-4 bg-[#0F2A20]/20 border border-[#1E4D38] rounded-xl space-y-2">
                  <span className="font-mono font-bold text-[#2ECC71] text-[11px] uppercase tracking-wider block">3.3 Safety & Trust</span>
                  <ul className="space-y-1 list-disc pl-4">
                    <li>Verifying contractor credentials & CNIC</li>
                    <li>Preventing fraud, abuse, and bad actors</li>
                    <li>Monitoring suspicious registration activity</li>
                  </ul>
                </div>

                <div className="p-4 bg-[#0F2A20]/20 border border-[#1E4D38] rounded-xl space-y-2">
                  <span className="font-mono font-bold text-[#2ECC71] text-[11px] uppercase tracking-wider block">3.4 Analytics & Optimization</span>
                  <ul className="space-y-1 list-disc pl-4">
                    <li>Analyzing aggregated user behavior</li>
                    <li>Fixing errors via Firebase Crashlytics</li>
                    <li>Measuring UI tool performance metrics</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-[#060E0A]/40 border border-[#1E4D38] rounded-xl text-xs text-[#B8C5BD] space-y-2">
                <strong className="text-white block font-mono uppercase text-[10px]">3.5 Communications & Notifications</strong>
                <p>{highlightText('We send push notifications for new site messages, milestone alerts, schedule delays, or critical system updates. You can opt-out at any time inside your phone settings.', searchQuery)}</p>
                <strong className="text-white block font-mono uppercase text-[10px] pt-1">3.6 Legal Compliance</strong>
                <p>{highlightText('We retain and share records in response to lawful government orders, PECA regulations, or to enforce our standard terms of use.', searchQuery)}</p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section-4" className="space-y-4 scroll-mt-6">
              <h3 className="text-xl font-display font-extrabold text-white flex items-center gap-2 border-b border-[#1E4D38]/60 pb-2">
                <span className="text-[#F5C518] font-mono text-sm">4.</span> Legal Basis for Processing (GDPR)
              </h3>
              <p className="text-sm text-[#B8C5BD]">
                For users located in the European Economic Area (EEA) or jurisdictions requiring formal legal frameworks for data processing, we rely on the following lawful bases:
              </p>

              <div className="overflow-hidden border border-[#1E4D38] rounded-xl bg-[#060E0A]/40 text-xs">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#060E0A] text-white border-b border-[#1E4D38] font-mono">
                      <th className="p-3 font-extrabold">Processing Purpose</th>
                      <th className="p-3 font-extrabold">Lawful Basis (GDPR Art. 6)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1E4D38] text-[#B8C5BD]">
                    <tr>
                      <td className="p-3 font-semibold text-white">Account creation, cost estimation, and Service delivery</td>
                      <td className="p-3">Performance of a Contract (Article 6(1)(b) GDPR)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-white">Analytics, bug remediation, and performance monitoring</td>
                      <td className="p-3">Legitimate Interests (Article 6(1)(f) GDPR)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-white">Marketing communications & professional leads outreach</td>
                      <td className="p-3">Consent (Article 6(1)(a) GDPR)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-white">Tax recordkeeping, fraud audit, and legal obedience</td>
                      <td className="p-3">Legal Obligation (Article 6(1)(c) GDPR)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5 */}
            <section id="section-5" className="space-y-4 scroll-mt-6">
              <h3 className="text-xl font-display font-extrabold text-white flex items-center gap-2 border-b border-[#1E4D38]/60 pb-2">
                <span className="text-[#F5C518] font-mono text-sm">5.</span> How We Share Your Information
              </h3>
              <p className="text-sm text-[#B8C5BD] leading-relaxed">
                We <strong className="text-white">do not sell, rent, trade, or otherwise transfer your personal information to third parties for commercial purposes.</strong> We share your information only under the following limited conditions:
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-[#0F2A20]/20 border border-[#1E4D38] rounded-xl">
                  <span className="font-mono text-xs text-[#F5C518] font-bold block uppercase mb-1.5">5.1 Within the Tameer Saz Platform (User-to-User Sharing)</span>
                  <p className="text-xs text-[#B8C5BD] leading-relaxed">
                    {highlightText('Your public profile details (name, profile photo, verified role, construction specialties, and ratings) are visible to other logged-in users on the platform. Messages you write in the secure in-app chat are shared directly and exclusively with your chat recipient. Professional builder portfolios and product pricing lists are publicly searchable in our local marketplace.', searchQuery)}
                  </p>
                </div>

                <div className="p-4 bg-[#0F2A20]/20 border border-[#1E4D38] rounded-xl">
                  <span className="font-mono text-xs text-[#F5C518] font-bold block uppercase mb-2.5">5.2 Third-Party Service Providers</span>
                  <p className="text-xs text-[#B8C5BD] mb-3">
                    We engage trusted technical vendors who process operational data only on our behalf under strict Data Processing Agreements:
                  </p>

                  <div className="overflow-hidden border border-[#1E4D38] rounded-lg text-xs bg-[#060E0A]/60">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-[#060E0A] text-white border-b border-[#1E4D38] font-mono">
                          <th className="p-2.5">Service Provider</th>
                          <th className="p-2.5">Purpose</th>
                          <th className="p-2.5">Data Shared</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#1E4D38] text-[#B8C5BD]">
                        <tr>
                          <td className="p-2.5 font-bold text-white">Google Firebase (Firestore)</td>
                          <td className="p-2.5">Database and real-time data storage</td>
                          <td className="p-2.5">User profile, project details, chat messages</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-white">Google Firebase (Authentication)</td>
                          <td className="p-2.5">User authentication & security checks</td>
                          <td className="p-2.5">Phone number, Google account identity</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-white">Google Firebase (Storage)</td>
                          <td className="p-2.5">File and portfolio storage</td>
                          <td className="p-2.5">Uploaded images, drawings, catalogs</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-white">Google Firebase (Crashlytics)</td>
                          <td className="p-2.5">Crash reporting and stability logs</td>
                          <td className="p-2.5">Device information, crash traces</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-white">Google Firebase (Analytics)</td>
                          <td className="p-2.5">Usage analytics and event mapping</td>
                          <td className="p-2.5">In-app usage events and screen views</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-white">Google Firebase (Performance)</td>
                          <td className="p-2.5">Performance measurement</td>
                          <td className="p-2.5">Network latency, rendering speeds</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-white">Google Sign-In</td>
                          <td className="p-2.5">OAuth authentication</td>
                          <td className="p-2.5">Name, email, public profile picture</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <span className="text-[10px] text-[#B8C5BD] block mt-2.5">
                    All Firebase services are operated by Google LLC and governed by <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#2ECC71] hover:underline font-semibold">Google's Privacy Policy</a>.
                  </span>
                </div>

                <div className="p-4 bg-[#0F2A20]/10 border border-[#1E4D38] rounded-xl text-xs text-[#B8C5BD] space-y-3">
                  <div>
                    <span className="font-mono text-xs text-white font-bold block uppercase mb-1">5.3 Legal Requirements & Safety</span>
                    <p>{highlightText('We may disclose your personal information if requested by law, regulation, subpoena, court order, or governmental authority, or if we believe in good faith that disclosure is necessary to protect our intellectual property, users safety, or the public interest.', searchQuery)}</p>
                  </div>
                  
                  <div className="pt-2 border-t border-[#1E4D38]/30">
                    <span className="font-mono text-xs text-white font-bold block uppercase mb-1">5.4 Business Transfers</span>
                    <p>{highlightText('In the event of a merger, acquisition, corporate restructuring, or sale of substantially all company assets, your information may be transferred to the acquiring entity subject to identical privacy promises.', searchQuery)}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="section-6" className="space-y-4 scroll-mt-6">
              <h3 className="text-xl font-display font-extrabold text-white flex items-center gap-2 border-b border-[#1E4D38]/60 pb-2">
                <span className="text-[#F5C518] font-mono text-sm">6.</span> Data Storage and Retention
              </h3>
              
              <div className="space-y-4">
                <h4 className="text-sm font-mono text-white font-bold">6.1 Storage Location</h4>
                <p className="text-sm text-[#B8C5BD] leading-relaxed">
                  {highlightText('Your data is stored securely on Google Firebase cloud infrastructure, which maintains enterprise data centers primarily in the United States and other global regions. By using Tameer Saz, you consent to the transfer of your information to these international server locations.', searchQuery)}
                </p>

                <h4 className="text-sm font-mono text-white font-bold pt-1">6.2 Retention Periods</h4>
                <p className="text-xs text-[#B8C5BD]">
                  We retain your data only for as long as necessary to fulfill operational service purposes:
                </p>

                <div className="overflow-hidden border border-[#1E4D38] rounded-xl bg-[#060E0A]/40 text-xs">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#060E0A] text-white border-b border-[#1E4D38] font-mono">
                        <th className="p-3">Data Category</th>
                        <th className="p-3">Retention Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#1E4D38] text-[#B8C5BD]">
                      <tr>
                        <td className="p-3 font-bold text-white">Active user account and profile data</td>
                        <td className="p-3">Duration of account existence + 90 days post-deletion</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-white">Chat messages logs</td>
                        <td className="p-3">Duration of account existence + 90 days post-deletion</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-white">Project and cost estimation records</td>
                        <td className="p-3">Duration of account existence + 90 days post-deletion</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-white">Crashlytics diagnostic logs</td>
                        <td className="p-3">90 days from logged crash event</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-white">Analytics event tracking data</td>
                        <td className="p-3">14 months (Standard Google Analytics default)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-white">Authentication logs</td>
                        <td className="p-3">Duration of account existence</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-[#B8C5BD] leading-relaxed">
                  {highlightText('When you request account deletion, we process and delete your personal data within 30 days, except where storage is mandated by federal laws or required for active dispute resolution.', searchQuery)}
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section id="section-7" className="space-y-4 scroll-mt-6">
              <h3 className="text-xl font-display font-extrabold text-white flex items-center gap-2 border-b border-[#1E4D38]/60 pb-2">
                <span className="text-[#F5C518] font-mono text-sm">7.</span> Data Security
              </h3>
              <p className="text-sm text-[#B8C5BD]">
                We implement industry-standard technical and organizational security measures to protect your information against unauthorized access, disclosure, alteration, or destruction:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#B8C5BD]">
                <div className="p-4 bg-[#0F2A20]/20 border border-[#1E4D38] rounded-xl space-y-1">
                  <strong className="text-white font-mono block">Encryption in Transit</strong>
                  <p>{highlightText('All data transmitted between the Application and our cloud endpoints is fully encrypted using TLS 1.2 or higher (HTTPS).', searchQuery)}</p>
                </div>
                <div className="p-4 bg-[#0F2A20]/20 border border-[#1E4D38] rounded-xl space-y-1">
                  <strong className="text-white font-mono block">Encryption at Rest</strong>
                  <p>{highlightText('Firebase Firestore, Firebase Storage, and Firebase Authentication implement AES-256 server-side encryption for all stored records.', searchQuery)}</p>
                </div>
                <div className="p-4 bg-[#0F2A20]/20 border border-[#1E4D38] rounded-xl space-y-1">
                  <strong className="text-white font-mono block">Authentication Security</strong>
                  <p>{highlightText('We use Firebase Authentication, which implements secure token-based sessions. Mobile number verification utilizes secure time-limited OTP codes; Google Sign-In relies on OAuth 2.0.', searchQuery)}</p>
                </div>
                <div className="p-4 bg-[#0F2A20]/20 border border-[#1E4D38] rounded-xl space-y-1">
                  <strong className="text-white font-mono block">Strict Access Controls</strong>
                  <p>{highlightText('Access to production databases is strictly restricted to pre-authorized site managers on a need-to-know basis.', searchQuery)}</p>
                </div>
              </div>
              <p className="text-xs text-[#B8C5BD] italic">
                Important: While we strive to protect your personal information, no method of data transmission over the internet is 100% secure. We cannot guarantee absolute security.
              </p>
            </section>

            {/* Section 8 */}
            <section id="section-8" className="space-y-4 scroll-mt-6">
              <h3 className="text-xl font-display font-extrabold text-white flex items-center gap-2 border-b border-[#1E4D38]/60 pb-2">
                <span className="text-[#F5C518] font-mono text-sm">8.</span> Permissions We Request
              </h3>
              <p className="text-sm text-[#B8C5BD]">
                To provide the full interactive functionality of Tameer Saz, we request the following system permissions on your mobile device:
              </p>

              <div className="overflow-hidden border border-[#1E4D38] rounded-xl bg-[#060E0A]/40 text-xs">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#060E0A] text-white border-b border-[#1E4D38] font-mono">
                      <th className="p-3">Permission</th>
                      <th className="p-3">Purpose</th>
                      <th className="p-3">Required / Optional</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1E4D38] text-[#B8C5BD]">
                    <tr>
                      <td className="p-3 font-bold text-white">Camera</td>
                      <td className="p-3">Capturing profile photos and on-site project portfolio images</td>
                      <td className="p-3 text-[#F5C518] font-semibold">Optional</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-white">Photo Library (Read)</td>
                      <td className="p-3">Selecting profile pictures and blueprint drawings to upload</td>
                      <td className="p-3 text-[#F5C518] font-semibold">Optional</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-white">Photo Library (Write)</td>
                      <td className="p-3">Saving custom generated cost sheets and project timelines to device</td>
                      <td className="p-3 text-[#F5C518] font-semibold">Optional</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-white">Microphone</td>
                      <td className="p-3">Reserved for future in-app voice message features between builders</td>
                      <td className="p-3 text-[#F5C518] font-semibold">Optional</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-white">Location (When In Use)</td>
                      <td className="p-3">Identifying service coverage area for direct contractor matching</td>
                      <td className="p-3 text-[#F5C518] font-semibold">Optional</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-white">Notifications (Push)</td>
                      <td className="p-3">Receiving real-time chat messages and milestone phase approvals</td>
                      <td className="p-3 text-[#F5C518] font-semibold">Optional</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-white">Network Access</td>
                      <td className="p-3">Enabling core database connection and communication features</td>
                      <td className="p-3 text-[#2ECC71] font-bold">Required</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-[#B8C5BD]">
                You may revoke any optional permission at any time through your device's Settings application. Revoking optional permissions may limit certain app features.
              </p>
            </section>

            {/* Section 9 */}
            <section id="section-9" className="space-y-4 scroll-mt-6">
              <h3 className="text-xl font-display font-extrabold text-white flex items-center gap-2 border-b border-[#1E4D38]/60 pb-2">
                <span className="text-[#F5C518] font-mono text-sm">9.</span> Children's Privacy
              </h3>
              <div className="text-sm text-[#B8C5BD] space-y-3 leading-relaxed">
                <p>
                  Tameer Saz is <strong className="text-white">not intended for, directed at, or designed for use by children under the age of 18 (eighteen) years.</strong> We do not knowingly collect personal information from minors.
                </p>
                <p>
                  {highlightText('If you are a parent or guardian and you believe that a person under 18 has provided us with their personal information without your consent, please contact us immediately at contact@tameersaz.tech. Upon receiving such a request, we will take prompt steps to verify the information and delete it from our databases as quickly as reasonably practicable.', searchQuery)}
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section id="section-10" className="space-y-5 scroll-mt-6">
              <h3 className="text-xl font-display font-extrabold text-white flex items-center gap-2 border-b border-[#1E4D38]/60 pb-2">
                <span className="text-[#F5C518] font-mono text-sm">10.</span> Your Privacy Rights
              </h3>
              <p className="text-sm text-[#B8C5BD]">
                Depending on your jurisdiction and local laws, you possess legal rights regarding your personal records:
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-[#0F2A20]/20 border border-[#1E4D38] rounded-xl">
                  <span className="font-mono text-xs text-[#F5C518] font-bold block uppercase mb-2">10.1 Rights Available to All Users</span>
                  <ul className="space-y-2 text-xs text-[#B8C5BD] list-disc pl-5">
                    <li><strong className="text-white">Right to Access:</strong> You can view and download your profile data directly inside the edit profile section of the Application.</li>
                    <li><strong className="text-white">Right to Rectification:</strong> You can update or amend outdated contact, company, or profile information within the application settings at any time.</li>
                    <li><strong className="text-white">Right to Delete:</strong> You can request complete database removal by selecting the "Delete Account" option in the Application settings.</li>
                    <li><strong className="text-white">Right to Withdraw Consent:</strong> You can disable location tracking or push notifications instantly within your device permissions panel.</li>
                  </ul>
                </div>

                <div className="p-4 bg-[#0F2A20]/20 border border-[#1E4D38] rounded-xl">
                  <span className="font-mono text-xs text-[#F5C518] font-bold block uppercase mb-2">10.2 Additional Rights for EEA / UK Residents (GDPR)</span>
                  <ul className="space-y-2 text-xs text-[#B8C5BD] list-disc pl-5">
                    <li><strong className="text-white">Right to Data Portability:</strong> Request a structured, machine-readable copy of your personal data.</li>
                    <li><strong className="text-white">Right to Restriction of Processing:</strong> Request that we temporarily suspend data processing under certain circumstances.</li>
                    <li><strong className="text-white">Right to Object:</strong> Object to processing operations justified by Legitimate Interests.</li>
                    <li><strong className="text-white">Right to Lodge a Complaint:</strong> Lodge a complaint with your local data protection supervisory authority.</li>
                  </ul>
                </div>
              </div>

              <p className="text-xs text-[#B8C5BD]">
                To exercise any of these rights, please reach out to us using the contact details in Section 13. We respond to all verified requests within <strong className="text-white">30 days</strong>.
              </p>
            </section>

            {/* Section 11 */}
            <section id="section-11" className="space-y-4 scroll-mt-6">
              <h3 className="text-xl font-display font-extrabold text-white flex items-center gap-2 border-b border-[#1E4D38]/60 pb-2">
                <span className="text-[#F5C518] font-mono text-sm">11.</span> Third-Party Links and Services
              </h3>
              <p className="text-sm text-[#B8C5BD] leading-relaxed">
                {highlightText('The Application may contain links to third-party websites, profiles, or external services (such as contractor websites or supplier portfolios). This Privacy Policy applies only to our Application and Service. We are not responsible for the privacy practices of external platforms, and we encourage you to review their terms before transferring data.', searchQuery)}
              </p>
            </section>

            {/* Section 12 */}
            <section id="section-12" className="space-y-4 scroll-mt-6">
              <h3 className="text-xl font-display font-extrabold text-white flex items-center gap-2 border-b border-[#1E4D38]/60 pb-2">
                <span className="text-[#F5C518] font-mono text-sm">12.</span> Changes to This Privacy Policy
              </h3>
              <p className="text-sm text-[#B8C5BD] leading-relaxed">
                {highlightText('We may update this Privacy Policy periodically to reflect changes in our practices, service features, legal requirements, or other operational reasons. When we make material changes, we will update the "Last Updated" date at the top of this document, send an in-app notification to alert you, and request a fresh acknowledgment if required by regulations. Your continued use of the Service constitutes acceptance of the updated terms.', searchQuery)}
              </p>
            </section>

            {/* Section 13 */}
            <section id="section-13" className="space-y-4 scroll-mt-6">
              <h3 className="text-xl font-display font-extrabold text-white flex items-center gap-2 border-b border-[#1E4D38]/60 pb-2">
                <span className="text-[#F5C518] font-mono text-sm">13.</span> Contact Us
              </h3>
              <p className="text-sm text-[#B8C5BD]">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-[#0F2A20]/20 border border-[#1E4D38] rounded-xl space-y-2">
                  <span className="text-[#F5C518] font-mono uppercase font-bold block">Company Legal Identity</span>
                  <p className="text-white font-bold text-sm">Tameer Saz Ecosystem</p>
                  <p className="text-[#B8C5BD]">79CC, Block A, Khayabaan e Amin, Lahore</p>
                </div>

                <div className="p-4 bg-[#0F2A20]/20 border border-[#1E4D38] rounded-xl space-y-2">
                  <span className="text-[#F5C518] font-mono uppercase font-bold block">Digital Support Desk</span>
                  <p className="text-[#B8C5BD]">
                    Email Support: <a href="mailto:contact@tameersaz.tech" className="text-white font-semibold hover:underline">contact@tameersaz.tech</a>
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#B8C5BD]">
                We are committed to resolving privacy concerns and will respond to all inquiries within <strong className="text-white">5 business days</strong>.
              </p>
            </section>

            {/* Section 14 */}
            <section id="section-14" className="space-y-4 scroll-mt-6">
              <h3 className="text-xl font-display font-extrabold text-white flex items-center gap-2 border-b border-[#1E4D38]/60 pb-2">
                <span className="text-[#F5C518] font-mono text-sm">14.</span> Governing Law
              </h3>
              <p className="text-sm text-[#B8C5BD] leading-relaxed">
                This Privacy Policy shall be governed by and construed in accordance with the laws of <strong className="text-white">Pakistan</strong>, without regard to its conflict of law principles. Any disputes arising under or in connection with this Privacy Policy shall be subject to the exclusive jurisdiction of the courts of Pakistan.
              </p>
            </section>

            {/* Footer Acknowledgment Block */}
            <div className="p-6 border border-[#1E4D38] bg-[#0F2A20]/30 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4 mt-12">
              <span className="text-xs text-[#B8C5BD] flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#2ECC71] shrink-0" />
                <span>Fully compliant with PECA and GDPR standards.</span>
              </span>
              <button
                onClick={onBackToHome}
                className="w-full sm:w-auto bg-[#2ECC71] hover:bg-emerald-500 text-[#060E0A] font-sans text-xs font-extrabold px-8 py-3 rounded-xl transition-all cursor-pointer shadow-lg shadow-emerald-950/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                I Acknowledge and Go Back
              </button>
            </div>

          </main>
        </div>
      </div>

    </div>
  );
}
