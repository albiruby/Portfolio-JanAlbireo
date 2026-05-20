import { data } from "@/lib/portfolio-data";
import { Github, Linkedin, Mail, Download, MapPin, Code, Monitor, GraduationCap, Award, Users, BookOpen, ChevronRight, Sparkles, Terminal, FileText, Blocks, Smartphone, Layers, Command, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#05050a] text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-100 relative overflow-x-clip">
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none mix-blend-screen" style={{ backgroundImage: "radial-gradient(circle at 15% 50%, rgba(6, 182, 212, 0.08) 0%, transparent 40%), radial-gradient(circle at 85% 30%, rgba(139, 92, 246, 0.08) 0%, transparent 40%)" }}></div>
      <div className="fixed inset-0 z-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>

      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#05050a]/70 backdrop-blur-xl border-b border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg tracking-tight text-white flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-violet-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <span className="text-white font-black text-sm">JA</span>
            </div>
            Jan Albireo
          </Link>
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
              <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
              <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            </nav>
            <a 
              href={data.socials.resume} 
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-semibold text-xs uppercase tracking-widest transition-colors shadow-sm"
            >
              Download CV <Download className="w-4 h-4" />
            </a>
            {/* Mobile Menu simple placeholder */}
            <div className="md:hidden text-sm font-semibold text-white">
              <Code className="w-6 h-6 text-slate-300" />
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 flex flex-col gap-24 lg:gap-32 pb-32">
        
        {/* Section 1: Hero Cinematic */}
        <section id="hero" className="pt-32 lg:pt-40 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center lg:flex-row gap-16 lg:gap-24 min-h-[90vh] justify-center">
          {/* Main Content */}
          <div className="flex-1 space-y-8 order-2 lg:order-1 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/30 border border-cyan-500/30 text-cyan-400 text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Open for Internship Opportunities
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500 tracking-tight leading-tight">
                {data.hero.name}
              </h1>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-cyan-400 leading-snug">
                {data.hero.role}
              </h2>
            </div>
            
            <p className="text-slate-400 text-base lg:text-lg max-w-2xl leading-relaxed font-light">
              {data.hero.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a 
                href={data.hero.resume} 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl font-bold uppercase tracking-wider text-xs transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] active:scale-95"
              >
                Download CV <Download className="w-4 h-4" />
              </a>
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-bold uppercase tracking-wider text-xs transition-all active:scale-95 backdrop-blur-sm"
              >
                View Projects <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-6">
              {["Roblox Interactive Media", "UI/UX", "Web Prototype", "Android App", "Bogor, Indonesia"].map((badge, idx) => (
                <span key={idx} className="px-3.5 py-1.5 bg-white/[0.03] border border-white/5 rounded-full text-[11px] font-medium text-slate-300 flex items-center gap-2 backdrop-blur-md">
                  <Sparkles className="w-3 h-3 text-violet-400"/> {badge}
                </span>
              ))}
            </div>
          </div>
          
          {/* Hero Visual Card */}
          <div className="relative order-1 lg:order-2 w-full max-w-sm lg:max-w-md mx-auto pt-12 lg:pt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-violet-500 rounded-[2.5rem] blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#0a0a14]/60 backdrop-blur-xl p-2 shadow-2xl">
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-[#11111a]">
                <Image
                  src={data.hero.avatarUrl}
                  alt={data.hero.name}
                  fill
                  priority
                  className="object-cover opacity-90 mix-blend-lighten"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-[#05050A]/20 to-transparent opacity-90"></div>
              </div>
            </div>
            
            {/* Floating Info Cards */}
            <div className="absolute -bottom-6 -left-4 sm:-left-12 bg-[#0a0a14]/80 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl space-y-3.5 w-max transform hover:-translate-y-1 transition-transform">
              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-white">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400" /> 
                <span>6th Semester Student</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-white">
                <Code className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" /> 
                <span>Roblox • UI/UX • Web • Android</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-white">
                <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" /> 
                <span>Available for Internship</span>
              </div>
            </div>

            {/* Small decorative floats */}
            <div className="absolute top-1/4 -right-6 md:-right-10 bg-white/5 border border-white/10 backdrop-blur-md p-3 rounded-xl shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
              <Layers className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="absolute top-2/3 -right-4 bg-white/5 border border-white/10 backdrop-blur-md p-3 rounded-xl shadow-xl animate-bounce" style={{ animationDuration: '4s' }}>
              <Blocks className="w-5 h-5 text-violet-400" />
            </div>
          </div>
        </section>

        {/* Section 2: Profile Snapshot / Quick Stats */}
        <section className="border-y border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all group">
              <GraduationCap className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 group-hover:-rotate-3 transition-transform" />
              <h3 className="text-lg font-bold text-white mb-2">6th Semester</h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed">Digital Multimedia Technology student at Politeknik Negeri Jakarta.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-violet-500/30 hover:bg-white/[0.04] transition-all group">
              <Monitor className="w-8 h-8 text-violet-400 mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform" />
              <h3 className="text-lg font-bold text-white mb-2">4 Featured Projects</h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed">Roblox, web prototype, Android app, and educational game projects.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all group">
              <Blocks className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 group-hover:-rotate-3 transition-transform" />
              <h3 className="text-lg font-bold text-white mb-2">Interactive Media</h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed">Focused on virtual environment, NPC interaction, UI system, and testing.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-violet-500/30 hover:bg-white/[0.04] transition-all group">
              <Terminal className="w-8 h-8 text-violet-400 mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform" />
              <h3 className="text-lg font-bold text-white mb-2">Internship Ready</h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed">Open to UI/UX, front-end, game, Android, and multimedia roles.</p>
            </div>
          </div>
        </section>

        {/* Section 3: About Me */}
        <section id="about" className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-cyan-400 font-bold uppercase tracking-widest text-xs">
                  <Terminal className="w-4 h-4" /> Core Background
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white">{data.about.title}</h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full"></div>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed font-light">
                {data.about.description}
              </p>
            </div>
            
            <div className="bg-[#0a0a14]/60 backdrop-blur-md border border-white/10 p-8 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 blur-[80px] rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-50"></div>
              
              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                <Command className="w-6 h-6 text-violet-400"/> Focus Areas
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {data.about.focusAreas.map((focus, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
                    {focus}
                  </div>
                ))}
              </div>
              
              <div className="mt-10 p-5 bg-violet-500/10 border border-violet-500/20 rounded-2xl relative">
                <Sparkles className="absolute top-0 right-0 -mt-2 -mr-2 w-6 h-6 text-violet-400 opacity-50" />
                <p className="text-xs text-violet-200 leading-relaxed font-medium">
                  <span className="font-bold text-violet-400 uppercase tracking-widest">Note:</span> {data.about.aiNote}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Internship Interest */}
        <section className="bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent border-y border-white/5 py-24 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-cyan-500/5 blur-[150px] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-12 relative z-10">
            <div className="space-y-6 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black text-white">{data.internshipInterest.title}</h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">
                {data.internshipInterest.description}
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {data.internshipInterest.roles.map((role, idx) => (
                <div key={idx} className="px-6 py-4 rounded-xl bg-[#0a0a14] border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:-translate-y-1 transition-all font-semibold text-cyan-100 flex items-center gap-3 shadow-lg hover:shadow-cyan-500/20 cursor-default group">
                  <Terminal className="w-4 h-4 text-cyan-400 opacity-70 group-hover:opacity-100 transition-opacity" />
                  {role}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Featured Projects */}
        <section id="projects" className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-violet-400 font-bold uppercase tracking-widest text-xs">
              <Layers className="w-4 h-4" /> Digital Showcase
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white">Featured Projects</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Project 1 (Large - Col Span 2 on Desktop) */}
            <div className="lg:col-span-2 group rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#0a0a14]/60 backdrop-blur-md flex flex-col md:flex-row hover:border-cyan-500/40 transition-all shadow-xl hover:shadow-[0_0_40px_rgba(6,182,212,0.1)]">
              <div className="w-full md:w-1/2 aspect-video md:aspect-auto relative overflow-hidden">
                <Image
                  src={data.projects[0].imageUrl}
                  alt={data.projects[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a0a14]/90 md:bg-gradient-to-l opacity-0 md:opacity-100"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-transparent to-transparent md:hidden"></div>
                <div className="absolute top-6 left-6">
                   <span className="px-4 py-1.5 bg-[#0a0a14]/80 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest rounded-lg border border-white/10">
                     {data.projects[0].subtitle}
                   </span>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-6 relative">
                 <div className="space-y-2">
                   <div className="flex flex-wrap gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-widest">
                     <span>{data.projects[0].category}</span>
                     <span className="text-slate-600">•</span>
                     <span>{data.projects[0].period}</span>
                   </div>
                   <h3 className="text-3xl font-black text-white leading-tight">{data.projects[0].title}</h3>
                   <p className="text-sm text-violet-300 font-medium">{data.projects[0].role}</p>
                 </div>
                 
                 <p className="text-slate-400 text-sm leading-relaxed font-light">
                   {data.projects[0].description}
                 </p>
                 
                 <div className="p-4 bg-white/5 border border-white/5 rounded-2xl">
                   <p className="text-[10px] uppercase font-bold text-slate-500 mb-1.5">Key Contribution</p>
                   <p className="text-sm font-medium text-slate-300 leading-relaxed">{data.projects[0].contribution}</p>
                 </div>

                 <div className="flex flex-wrap gap-2 pt-2">
                    {data.projects[0].tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-bold text-slate-400 bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                 </div>
              </div>
            </div>

            {/* Remaining Projects */}
            {data.projects.slice(1).map((project) => (
              <div key={project.id} className="group rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#0a0a14]/60 backdrop-blur-md flex flex-col hover:border-violet-500/40 transition-all shadow-xl hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]">
                <div className="w-full aspect-video relative overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-[#0a0a14]/20 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                     <span className="px-4 py-1.5 bg-[#0a0a14]/80 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest rounded-lg border border-white/10">
                       {project.subtitle}
                     </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1 space-y-6">
                   <div className="space-y-2">
                     <div className="flex flex-wrap justify-between gap-2 text-[10px] md:text-xs font-semibold text-violet-400 uppercase tracking-widest">
                       <span>{project.category}</span>
                       <span>{project.period}</span>
                     </div>
                     <h3 className="text-2xl font-black text-white leading-tight">{project.title}</h3>
                     <p className="text-sm text-cyan-300 font-medium">{project.role}</p>
                   </div>
                   
                   <p className="text-slate-400 text-sm leading-relaxed font-light flex-1">
                     {project.description}
                   </p>
                   
                   <div className="p-4 bg-white/5 border border-white/5 rounded-2xl">
                     <p className="text-[10px] uppercase font-bold text-slate-500 mb-1.5">Key Contribution</p>
                     <p className="text-sm font-medium text-slate-300 leading-relaxed">{project.contribution}</p>
                   </div>

                   <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.slice(0, 5).map((tag, i) => (
                        <span key={i} className="text-[9px] md:text-[10px] font-bold text-slate-400 bg-white/5 border border-white/5 px-2.5 py-1.5 rounded-lg uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 5 && (
                        <span className="text-[10px] font-bold text-slate-500 px-2.5 py-1.5 bg-transparent border border-dashed border-slate-700 rounded-lg">
                          +{project.tags.length - 5}
                        </span>
                      )}
                   </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Skills Matrix */}
        <section id="skills" className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
          <div className="space-y-4">
             <div className="inline-flex items-center gap-2 text-cyan-400 font-bold uppercase tracking-widest text-xs">
              <Code className="w-4 h-4" /> Tech Arsenal
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white">Skills Matrix</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {Object.entries(data.skills).map(([category, items], idx) => (
              <div key={idx} className="bg-[#0a0a14]/60 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-lg hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all group">
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-colors">
                     {idx % 3 === 0 ? <Terminal className="w-4 h-4 text-cyan-400" /> : idx % 3 === 1 ? <Monitor className="w-4 h-4 text-violet-400" /> : <Layers className="w-4 h-4 text-emerald-400" />}
                   </div>
                   <h3 className="text-sm font-bold text-white uppercase tracking-wider">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {items.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1.5 bg-white/5 border border-white/10 text-[11px] font-medium text-slate-300 rounded-lg group-hover:border-white/20 transition-colors shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Education & Experience */}
        <section id="education" className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Timeline 1: Education */}
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-violet-400 font-bold uppercase tracking-widest text-xs">
                <GraduationCap className="w-4 h-4" /> Academic Background
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white">Education</h2>
              <div className="w-16 h-1.5 bg-violet-500 rounded-full"></div>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:ml-5 md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-violet-500/50 before:via-white/10 before:to-transparent">
              {data.education.map((item, index) => (
                <div key={index} className="relative pl-12 md:pl-16">
                  <div className="absolute left-0 w-8 h-8 md:w-10 md:h-10 bg-[#0a0a14] rounded-full border-2 border-violet-500 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.3)] z-10">
                    <div className="w-2.5 h-2.5 bg-violet-400 rounded-full"></div>
                  </div>
                  <div className="bg-[#0a0a14]/60 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-lg hover:border-violet-500/30 transition-all">
                    <span className="text-xs font-bold text-violet-400 bg-violet-500/10 px-3 py-1.5 rounded-lg border border-violet-500/20 inline-block mb-4">{item.period}</span>
                    <h4 className="text-xl font-bold text-white mb-2">{item.school}</h4>
                    <p className="text-sm font-semibold text-slate-300 mb-1">{item.degree}</p>
                    <p className="text-xs text-slate-500 font-medium mb-4">{item.location}</p>
                    {item.description && (
                      <p className="text-sm text-slate-400 font-light leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-16">
            {/* Timeline 2: Experience */}
            <div className="space-y-12">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-cyan-400 font-bold uppercase tracking-widest text-xs">
                  <Users className="w-4 h-4" /> Team Collaboration
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white">Academic Experience</h2>
                <div className="w-16 h-1.5 bg-cyan-500 rounded-full"></div>
              </div>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:ml-5 md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-cyan-500/50 before:via-white/10 before:to-transparent">
                {data.academicExperience.map((item, index) => (
                  <div key={index} className="relative pl-12 md:pl-16">
                    <div className="absolute left-0 w-8 h-8 md:w-10 md:h-10 bg-[#0a0a14] rounded-full border-2 border-cyan-500 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)] z-10">
                      <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full"></div>
                    </div>
                    <div className="bg-[#0a0a14]/60 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-lg hover:border-cyan-500/30 transition-all">
                       <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/20 inline-block mb-4">{item.period}</span>
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-sm font-semibold text-slate-300 mb-4">{item.organization} — {item.role}</p>
                      <p className="text-sm text-slate-400 font-light leading-relaxed mb-6">
                        {item.description}
                      </p>
                      {item.bullets && (
                        <ul className="space-y-3">
                          {item.bullets.map((b, i) => (
                            <li key={i} className="text-sm text-slate-400 font-light leading-relaxed flex items-start gap-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0"></span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-8">
               <h2 className="text-3xl font-black text-white">Certification</h2>
              <div className="space-y-6">
                {data.certifications.map((item, index) => (
                  <div key={index} className="bg-[#0a0a14]/60 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-lg flex flex-col sm:flex-row gap-6 hover:border-white/20 transition-all">
                    <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 items-center justify-center text-slate-300">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex flex-col gap-2 mb-3">
                        <h4 className="text-lg font-bold text-white">{item.title}</h4>
                        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20 w-max">{item.period}</span>
                      </div>
                      <p className="text-sm font-semibold text-slate-300 mb-3">{item.organizer} — {item.program}</p>
                      {item.description && (
                        <p className="text-sm text-slate-400 font-light leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Contact API */}
        <section id="contact" className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="py-24 px-8 md:px-16 text-center bg-gradient-to-b from-[#0a0a14]/80 to-[#030308]/90 backdrop-blur-xl border border-white/10 rounded-[3rem] relative overflow-hidden shadow-2xl">
            {/* Glowing orbs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/20 blur-[150px] rounded-full pointer-events-none z-0"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-600/20 blur-[150px] rounded-full pointer-events-none z-0"></div>
            
            <div className="relative z-10 space-y-10 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/30 border border-cyan-500/30 text-cyan-400 text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.15)] mx-auto">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                Open for Internship Opportunities
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white">Let&apos;s Connect</h2>
              
              <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed">
                Saya terbuka untuk kesempatan magang, kolaborasi akademik, dan pengembangan proyek digital interaktif.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
                <a 
                  href={data.socials.email} 
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#05050a] hover:bg-slate-200 rounded-xl font-bold uppercase tracking-wider text-xs transition-all shadow-lg hover:shadow-xl active:scale-95"
                >
                  <Mail className="w-4 h-4" /> Email Me
                </a>
                <a 
                  href={data.socials.linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 text-white hover:bg-white/10 border border-white/10 rounded-xl font-bold uppercase tracking-wider text-xs transition-all shadow-lg backdrop-blur-md active:scale-95"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <a 
                  href={data.socials.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 text-white hover:bg-white/10 border border-white/10 rounded-xl font-bold uppercase tracking-wider text-xs transition-all shadow-lg backdrop-blur-md active:scale-95"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a 
                  href={data.socials.resume} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-600/10 text-cyan-400 hover:bg-cyan-600/20 border border-cyan-500/30 hover:border-cyan-400 rounded-xl font-bold uppercase tracking-wider text-xs transition-all shadow-lg backdrop-blur-md active:scale-95"
                >
                  <Download className="w-4 h-4" /> Download CV
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      
      <footer className="py-12 text-sm font-medium text-slate-500 border-t border-white/5 bg-[#030308] z-10 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-lg border border-white/5">
             <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
             <span className="text-slate-300 font-semibold tracking-wide text-xs uppercase">Available for Internship</span>
           </div>
          <p className="font-semibold text-slate-600 tracking-wider text-[11px] uppercase">&copy; {new Date().getFullYear()} {data.hero.name}. Digital Multimedia Portfolio.</p>
        </div>
      </footer>
    </div>
  );
}
