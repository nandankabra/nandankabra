import React, { useState, useEffect } from 'react';

// --- CONFIGURATION / LINKS ---
const PHONE_NUMBER = "919644038391";
const LINKEDIN_URL = "https://www.linkedin.com/in/nandan-kabra?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"; 
const INSTAGRAM_URL = "https://instagram.com/nandankabra"; 
const PRE_FILLED_MESSAGE = encodeURIComponent("Hi Nandan, I saw your portfolio and would like to discuss a project/role!");
const WHATSAPP_LINK = `https://wa.me/${PHONE_NUMBER}?text=${PRE_FILLED_MESSAGE}`;
const CALL_LINK = `tel:+${PHONE_NUMBER}`;

// --- DATABASE / DATA ---
const PROJECTS = [
  {
    title: "Refurbicon",
    tags: ["HTML5", "Tailwind CSS", "JavaScript"],
    desc: "Architected a high-throughput digital retail engine. Optimized database queries reducing load times by 40%.",
    link: "https://refurbicon.com/"
  },
  {
    title: "AI Workflow Engine",
    tags: ["Python", "LangChain", "Meta API", "SQL"],
    desc: "Integrated LLMs with WhatsApp Cloud API to automate 80% of repetitive business inquiries.",
    link: "#"
  }
];

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#020617] text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      
      {/* Floating WhatsApp Action */}
      <a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[60] p-4 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center justify-center"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.675 1.439 5.662 1.439h.005c6.562 0 11.897-5.335 11.9-11.894a11.821 11.821 0 00-3.488-8.413z"/></svg>
      </a>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-slate-950/80 backdrop-blur-xl border-b border-white/5' : 'py-6 md:py-8 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span className="text-xl md:text-2xl font-black text-white tracking-tighter">NANDAN KABRA</span>
          <div className="flex gap-6 text-[10px] md:text-sm font-bold uppercase tracking-widest text-slate-400 items-center">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors hidden sm:block">LinkedIn</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-white text-black rounded-full hover:bg-cyan-400 transition-all text-[10px] md:text-xs">Let's Chat</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-6 tracking-tight leading-[1.1]">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">The Future</span>.
          </h1>
          <p className="max-w-2xl text-base md:text-xl text-slate-400 mb-10 leading-relaxed font-light">
            Software Engineer specializing in high-performance backends and scalable architectures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href={CALL_LINK} className="px-8 py-4 bg-cyan-600 text-white font-bold rounded-2xl hover:bg-cyan-500 transition-all text-center flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              Call Directly
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-slate-800 text-white font-bold rounded-2xl border border-white/10 hover:bg-slate-700 transition-all text-center">
              WhatsApp Chat
            </a>
          </div>
        </section>

        {/* Contact Me Section - Centered Layout */}
        <section id="contact" className="py-20 md:py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 md:p-16 rounded-[3rem] bg-gradient-to-b from-slate-900/50 to-slate-950/50 border border-white/5 backdrop-blur-2xl text-center">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Connect With Me</h2>
              <p className="text-slate-400 mb-12 max-w-md mx-auto">Feel free to reach out through any of these platforms. I'm always open to new opportunities.</p>
              
              {/* Centered Sub-cards Grid */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
                
                {/* LinkedIn Card */}
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" 
                   className="group w-full sm:w-[180px] p-6 bg-slate-800/30 rounded-[2rem] border border-white/5 hover:border-blue-500/50 transition-all hover:-translate-y-2">
                  <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-blue-400 transition-colors">LinkedIn</span>
                </a>

                {/* WhatsApp Card */}
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" 
                   className="group w-full sm:w-[180px] p-6 bg-slate-800/30 rounded-[2rem] border border-white/5 hover:border-green-500/50 transition-all hover:-translate-y-2">
                  <div className="w-12 h-12 bg-green-600/20 text-green-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.675 1.439 5.662 1.439h.005c6.562 0 11.897-5.335 11.9-11.894a11.821 11.821 0 00-3.488-8.413z"/></svg>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-green-400 transition-colors">WhatsApp</span>
                </a>

                {/* Direct Call Card */}
                <a href={CALL_LINK} 
                   className="group w-full sm:w-[180px] p-6 bg-slate-800/30 rounded-[2rem] border border-white/5 hover:border-cyan-500/50 transition-all hover:-translate-y-2">
                  <div className="w-12 h-12 bg-cyan-600/20 text-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-cyan-400 transition-colors">Direct Call</span>
                </a>
              </div>

              {/* Main Email CTA */}
              <div className="space-y-4">
                <a href="mailto:nandankabra2@gmail.com" 
                   className="inline-block px-12 py-5 bg-white text-black font-black rounded-full hover:scale-105 hover:bg-cyan-400 transition-all shadow-xl shadow-white/5">
                  nandankabra2@gmail.com
                </a>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest">Available for 2026 roles</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 text-center text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-slate-600 px-6">
        &copy; 2026 Designed & Engineered by Nandan Kabra
      </footer>
    </div>
  );
}