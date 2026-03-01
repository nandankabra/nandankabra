import React from 'react';

const projects = [
  {
    id: 1,
    title: "Refurbicon",
    category: "Premium Electronics & IT Retail",
    status: "Live",
    description: "A high-performance digital catalog and business website. Features dynamic product listings, live stock status, and a booking portal for chip-level repairs.",
    tags: ["React", "Tailwind CSS", "PostgreSQL"],
    link: "https://refurbicon.com/",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    color: "cyan"
  },
  // You can easily add a second project here later:
  {
    id: 2,
    title: "AI Automation Hub",
    category: "Workflow Optimization",
    status: "Internal",
    description: "Custom n8n pipelines and WhatsApp Cloud API integration for automated lead generation and customer support.",
    tags: ["n8n", "FastAPI", "Anthropic LLM"],
    link: "#",
    image: "https://images.unsplash.com/photo-1518433278981-d3a0a3ad8148?auto=format&fit=crop&q=80",
    color: "purple"
  }
];

export default function ProjectsSection() {
  return (
    <section id="work" className="py-24 relative z-10 bg-slate-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Featured Work</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            A selection of my recent engineering projects, ranging from full-stack platforms to AI-driven automation.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="group rounded-[2rem] bg-slate-900/50 border border-white/10 overflow-hidden backdrop-blur-md hover:border-cyan-500/50 transition-all duration-500">
              
              {/* Image Area */}
              <div className="h-64 relative overflow-hidden border-b border-white/5 flex items-center justify-center">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-2xl bg-slate-950/80 border border-white/10 shadow-2xl backdrop-blur-md group-hover:rotate-6 transition-transform duration-500">
                   <span className="text-3xl font-black text-white">
                     {project.title.charAt(0)}<span className="text-cyan-400">.</span>
                   </span>
                </div>
              </div>

              {/* Details Area */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-cyan-400 font-medium text-sm">{project.category}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border ${
                    project.status === 'Live' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-slate-400 mb-8 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-semibold text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center text-white font-bold hover:text-cyan-400 transition-colors">
                  View Project Details
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}