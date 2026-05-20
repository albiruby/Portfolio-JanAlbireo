import { data } from "@/lib/portfolio-data";
import { Github, Linkedin, Mail, Download, MapPin, Code, Monitor, GraduationCap, Award, Users, BookOpen, ChevronRight, Sparkles, Terminal, FileText, Blocks, Smartphone, Layers, Command, Briefcase, Database, Activity, CheckCircle2, UserCircle, Hexagon, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#020205] text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-100 relative overflow-x-clip scroll-smooth">
      {/* Background Decor - Complex Mesh & Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none mix-blend-screen opacity-50" style={{ backgroundImage: "radial-gradient(ellipse at 20% 40%, rgba(6, 182, 212, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 80% 60%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)" }}></div>
      <div className="fixed inset-0 z-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay"></div>
      <div className="fixed top-0 inset-x-0 h-screen z-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: "linear-gradient(to right, #8b5cf6 1px, transparent 1px), linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

      {/* Floating Navbar */}
      <header className="fixed top-6 inset-x-0 z-50 px-6 lg:px-8 max-w-6xl mx-auto w-full transition-all duration-300">
        <div className="bg-[#0a0a10]/80 backdrop-blur-xl border border-white/10 rounded-2xl h-16 flex items-center justify-between px-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <Link href="/" className="font-bold text-lg tracking-tight text-white flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
              <span className="text-white font-black text-sm">JA</span>
            </div>
            Jan Albireo
          </Link>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-6 text-[13px] font-semibold text-slate-400">
              <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
              <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            </nav>
            <div className="w-px h-6 bg-white/10 hidden md:block"></div>
            <a 
              href={data.socials.resume} 
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-bold text-[11px] uppercase tracking-widest transition-all hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]"
            >
              Download CV <Download className="w-3 h-3" />
            </a>
            {/* Mobile Menu Icon */}
            <div className="md:hidden text-white flex items-center justify-center p-2 rounded-lg bg-white/5 border border-white/10">
              <Code className="w-5 h-5" />
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 flex flex-col gap-28 pb-32 pt-32 lg:pt-40">
        
        {/* Section 1: Cinematic Hero */}
        <section id="hero" className="px-6 lg:px-8 max-w-7xl mx-auto w-full grid lg:grid-cols-[1fr_auto] gap-16 lg:gap-20 items-center justify-center relative">
          {/* Subtle Hero Glow */}
          <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-cyan-600/10 rounded-[100%] blur-[120px] -translate-y-1/2 -translate-x-1/4 pointer-events-none -z-10 mix-blend-screen animate-[pulse_6s_ease-in-out_infinite]"></div>
          
          {/* Main Content */}
          <div className="space-y-10 order-2 lg:order-1 relative z-10 w-full xl:max-w-3xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cyan-950/20 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(6,182,212,0.1)] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Open for Internship Opportunities
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-500 tracking-tighter leading-none">
                {data.hero.name}.
              </h1>
              <h2 className="text-lg sm:text-2xl font-medium text-cyan-300 leading-snug flex items-center gap-3">
                {data.hero.role}
              </h2>
            </div>
            
            <p className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed font-light">
              {data.hero.description}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href={data.hero.resume} 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#050510] hover:bg-slate-200 rounded-xl font-black uppercase tracking-wider text-[11px] transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] active:scale-95"
              >
                Download CV <Download className="w-4 h-4" />
              </a>
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 text-white rounded-xl font-bold uppercase tracking-wider text-[11px] transition-all active:scale-95 backdrop-blur-sm"
              >
                View Projects <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-4">
              {["Roblox Interactive Media", "UI/UX Design", "Web Prototype", "Android App", "Multimedia Production"].map((badge, idx) => (
                <span key={idx} className="px-3.5 py-1.5 bg-[#0a0a14]/60 border border-white/5 rounded-lg text-[10px] sm:text-xs font-semibold text-slate-300 flex items-center gap-2 backdrop-blur-md">
                  <Hexagon className="w-3 h-3 text-cyan-400"/> {badge}
                </span>
              ))}
            </div>
          </div>
          
          {/* Hero Right Visual Dashboard */}
          <div className="relative order-1 lg:order-2 w-full max-w-[340px] md:max-w-md mx-auto">
            {/* Glowing Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 rounded-[3rem] blur-3xl opacity-50 animate-pulse"></div>
            
            {/* Main Interactive Card */}
            <div className="relative aspect-[3/4] w-full rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#0a0a14]/80 backdrop-blur-2xl p-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group hover:border-white/20 transition-all duration-500">
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-[#11111a]">
                <Image
                  src={data.hero.avatarUrl}
                  alt={data.hero.name}
                  fill
                  priority
                  className="object-cover opacity-80 mix-blend-lighten group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#050510] to-transparent"></div>
              </div>
            </div>
            
            {/* Floating Mini Dashboards */}
            <div className="absolute top-8 -left-6 lg:-left-12 bg-[#050510]/90 backdrop-blur-xl border border-white/10 p-3 lg:p-4 rounded-xl shadow-2xl flex items-center gap-3 animate-[float_4s_ease-in-out_infinite]">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Status</p>
                <p className="text-xs font-bold text-white">6th Semester Student</p>
              </div>
            </div>

            <div className="absolute bottom-16 -right-4 lg:-right-8 bg-[#050510]/90 backdrop-blur-xl border border-white/10 p-3 lg:p-4 rounded-xl shadow-2xl flex items-center gap-3 animate-[float_5s_ease-in-out_infinite_reverse]">
              <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center border border-violet-500/30">
                <CheckCircle2 className="w-4 h-4 text-violet-400" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Availability</p>
                <p className="text-xs font-bold text-white">Internship Ready</p>
              </div>
            </div>

            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full shadow-2xl flex items-center gap-2 whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-bold text-slate-300">Bogor, Indonesia</span>
            </div>
          </div>
        </section>

        {/* Section 2: Recruiter Snapshot Dashboard (Bento) */}
        <section className="px-6 lg:px-8 max-w-7xl mx-auto w-full relative">
           <div className="absolute inset-0 bg-violet-600/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {data.snapshot.map((item, idx) => (
                <div key={idx} className={`p-6 rounded-3xl bg-[#0a0a14]/60 border border-white/10 backdrop-blur-md shadow-xl hover:bg-white/[0.04] hover:border-cyan-500/40 transition-colors flex flex-col gap-4 ${idx === 0 || idx === 5 ? 'lg:col-span-2' : ''} ${idx === 2 || idx === 3 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                      {idx === 0 ? <GraduationCap className="w-5 h-5"/> : idx === 1 ? <Layers className="w-5 h-5"/> : idx === 2 ? <div className="font-black text-sm">3D</div> : idx === 3 ? <Code className="w-5 h-5"/> : idx === 4 ? <Briefcase className="w-5 h-5"/> : <CheckCircle2 className="w-5 h-5"/>}
                    </div>
                    <h3 className="text-base font-bold text-white leading-tight">{item.title}</h3>
                  </div>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">{item.description}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Section divider visual */}
        <div className="w-full max-w-7xl mx-auto px-6 h-px">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        {/* Section 3: About + Focus Area Bento */}
        <section id="about" className="px-6 lg:px-8 max-w-7xl mx-auto w-full grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center relative">
          {/* About Section Glow */}
          <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none -z-10 mix-blend-screen"></div>
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-cyan-400 font-bold uppercase tracking-widest text-[10px]">
                <UserCircle className="w-4 h-4" /> Core Background
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white">{data.about.title}</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full"></div>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed font-light bg-white/5 p-6 rounded-2xl border border-white/5 shadow-inner">
              {data.about.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <div className="sm:col-span-2 p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0a0a14] to-[#12121c] flex items-center gap-4 shadow-xl">
               <div className="w-12 h-12 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center shrink-0">
                 <Command className="w-6 h-6 text-violet-400" />
               </div>
               <div>
                 <h3 className="text-lg font-bold text-white">Focus Areas</h3>
                 <p className="text-xs text-slate-400 uppercase tracking-widest">Key Competencies</p>
               </div>
             </div>
             
             {data.about.focusAreas.map((focus, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-colors flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
                  <span className="text-sm font-semibold text-slate-200">{focus}</span>
                </div>
             ))}

             <div className="sm:col-span-2 p-5 rounded-2xl border border-blue-500/20 bg-blue-500/5 relative overflow-hidden mt-2 flex items-start gap-4">
               <Sparkles className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
               <p className="text-xs text-blue-200 leading-relaxed font-medium">
                 {data.about.aiNote}
               </p>
             </div>
          </div>
        </section>

        {/* Section 4: Internship Target Roles */}
        <section className="px-6 lg:px-8 max-w-7xl mx-auto w-full relative">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 via-transparent to-transparent blur-3xl -z-10 rounded-full"></div>
          
          <div className="text-center space-y-4 mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-white">{data.internshipInterest.title}</h2>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              {data.internshipInterest.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.internshipInterest.roles.map((role, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#0a0a14]/80 backdrop-blur-md border border-white/10 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] group transition-all cursor-default flex items-center justify-between">
                <span className="font-bold text-sm text-slate-200 group-hover:text-cyan-300 transition-colors">{role}</span>
                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
              </div>
            ))}
          </div>
        </section>

        {/* Section divider visual */}
        <div className="w-full max-w-5xl mx-auto px-6 h-px">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
        </div>

        {/* Section 5: Featured Project Dashboard */}
        <section id="projects" className="px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-12 relative">
          {/* Project Section Mesh Background */}
          <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-[150px] translate-x-1/3 pointer-events-none -z-10 animate-[pulse_8s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] -translate-x-1/3 pointer-events-none -z-10 animate-[pulse_10s_ease-in-out_infinite]"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay pointer-events-none -z-10 rounded-3xl"></div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-violet-400 font-bold uppercase tracking-widest text-[10px]">
                <Layers className="w-4 h-4" /> Digital Showcase
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white">Featured Projects</h2>
              <p className="text-slate-400 text-sm font-light leading-relaxed mt-2">
                Selected project-based experiences aligned with interactive media, game development, web prototype, and Android implementation.
              </p>
            </div>
            <div className="hidden md:block">
               <a href={data.socials.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider transition-all">
                 View GitHub <Github className="w-4 h-4" />
               </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-min">
            
            {/* Project 1 (Hero Card - Col Span 3 or Full Width) */}
            <div className="lg:col-span-3 rounded-[2rem] overflow-hidden border border-white/10 bg-[#0a0a14] flex flex-col md:flex-row group hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.1)] transition-all">
              <div className="w-full md:w-[45%] relative aspect-video md:aspect-auto overflow-hidden bg-[#11111a]">
                <Image
                  src={data.projects[0].imageUrl}
                  alt={data.projects[0].title}
                  fill
                  className="object-cover opacity-70 mix-blend-lighten group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0a14] to-transparent md:hidden"></div>
                <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#0a0a14] to-transparent hidden md:block z-10"></div>
                
                <div className="absolute top-6 left-6 z-20">
                  <div className="px-3 py-1 bg-cyan-500/20 backdrop-blur-md border border-cyan-500/30 rounded-full flex items-center gap-2 text-[10px] uppercase font-bold tracking-wider text-cyan-300 shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    {data.projects[0].status}
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-[55%] p-8 md:p-12 flex flex-col justify-center relative space-y-6 md:-ml-8 z-20 bg-gradient-to-r from-transparent to-[#0a0a14] md:to-transparent">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <span>{data.projects[0].category}</span>
                    <span className="text-slate-600">•</span>
                    <span>{data.projects[0].period}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">{data.projects[0].title}</h3>
                  <p className="text-sm font-semibold text-cyan-400">{data.projects[0].role}</p>
                </div>
                
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {data.projects[0].description}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-2">Contribution</p>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">{data.projects[0].contribution}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-2">Key Features</p>
                    <ul className="text-xs text-slate-300 leading-relaxed font-medium space-y-1">
                      {data.projects[0].keyFeatures.slice(0, 4).map((feat, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-cyan-500"></span> {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="pt-2 flex flex-wrap gap-2">
                  {data.projects[0].tags.slice(0, 6).map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold text-slate-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg uppercase tracking-wider backdrop-blur-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sub Projects (Grid) */}
            {data.projects.slice(1).map((project, idx) => (
              <div key={project.id} className="rounded-[2rem] overflow-hidden border border-white/10 bg-[#0a0a14]/80 backdrop-blur-md flex flex-col group hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] transition-all">
                <div className="w-full aspect-[16/10] relative overflow-hidden bg-[#11111a]">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover opacity-70 mix-blend-lighten group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0a0a14] vi-[#0a0a14]/60 to-transparent"></div>
                  
                  <div className="absolute top-4 xl:top-6 left-4 xl:left-6 z-20">
                    <div className="px-3 py-1 bg-[#0a0a14]/80 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-2 text-[9px] xl:text-[10px] uppercase font-bold tracking-wider text-slate-300 shadow-lg">
                      <span className={`w-1.5 h-1.5 rounded-full ${idx === 0 ? 'bg-amber-400' : idx === 1 ? 'bg-blue-400' : 'bg-emerald-400'}`}></span>
                      {project.status}
                    </div>
                  </div>
                </div>
                
                <div className="p-6 xl:p-8 flex flex-col flex-1 relative z-10 space-y-5 -mt-8 xl:-mt-10 bg-transparent">
                  <div className="space-y-2">
                    <p className="text-[9px] xl:text-[10px] font-bold text-slate-400 uppercase tracking-widest">{project.category} • {project.period}</p>
                    <h3 className="text-xl xl:text-2xl font-black text-white leading-tight line-clamp-2">{project.title}</h3>
                    <p className="text-xs font-semibold text-violet-400">{project.role}</p>
                  </div>
                  
                  <p className="text-xs xl:text-sm text-slate-400 font-light leading-relaxed flex-1 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="pt-4 border-t border-white/10">
                     <p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold mb-2">Key Highlights</p>
                     <div className="flex flex-wrap gap-1.5 xl:gap-2">
                        {project.keyFeatures.slice(0, 3).map((feat, i) => (
                          <span key={i} className="text-[9px] xl:text-[10px] font-semibold text-slate-300 bg-white/5 border border-white/5 px-2 py-1 rounded-md">
                            {feat}
                          </span>
                        ))}
                     </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </section>

        {/* Section 6: Skills Matrix Dashboard */}
        <section id="skills" className="px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-10 relative">
          <div className="absolute top-1/2 left-1/2 w-[1000px] h-[600px] bg-emerald-600/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10"></div>
          <div className="space-y-4">
             <div className="inline-flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-widest text-[10px]">
              <Database className="w-4 h-4" /> Technical Arsenal
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white">Skills Matrix</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {Object.entries(data.skills).map(([category, items], idx) => (
              <div key={idx} className="p-6 xl:p-8 rounded-[2rem] bg-[#0a0a14]/60 backdrop-blur-md border border-white/10 shadow-xl hover:border-emerald-500/30 hover:bg-white/[0.03] transition-all group">
                <div className="flex items-center justify-between mb-6">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-colors">
                       {idx === 0 ? <Code className="w-5 h-5 text-cyan-400" /> : 
                        idx === 1 ? <Smartphone className="w-5 h-5 text-blue-400" /> : 
                        idx === 2 ? <Monitor className="w-5 h-5 text-violet-400" /> : 
                        idx === 3 ? <Hexagon className="w-5 h-5 text-pink-400" /> : 
                        idx === 4 ? <Activity className="w-5 h-5 text-emerald-400" /> : 
                        idx === 5 ? <Users className="w-5 h-5 text-amber-400" /> : 
                        <BookOpen className="w-5 h-5 text-slate-400" />}
                     </div>
                     <h3 className="text-sm font-black text-white uppercase tracking-wider">{category}</h3>
                   </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1.5 bg-white/5 border border-white/10 text-[10px] xl:text-[11px] font-bold text-slate-300 uppercase tracking-wider rounded-lg group-hover:border-white/20 transition-colors shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section divider visual */}
        <div className="w-full max-w-7xl mx-auto px-6 h-px">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        {/* Section 7: Education & Experience Dash */}
        <section id="education" className="px-6 lg:px-8 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 relative">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
          
          {/* Timeline 1: Education */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-white flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-violet-400" /> Education
              </h2>
            </div>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[1.4rem] before:-translate-x-px before:h-full before:w-px before:bg-gradient-to-b before:from-violet-500/50 before:via-white/10 before:to-transparent">
              {data.education.map((item, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-[1.1rem] top-6 w-3 h-3 bg-violet-400 rounded-full ring-4 ring-[#020205] ring-offset-2 ring-offset-violet-500/20 z-10"></div>
                  
                  <div className="p-6 rounded-3xl bg-[#0a0a14]/60 border border-white/10 shadow-lg hover:border-violet-500/30 transition-colors">
                    <span className="text-[10px] font-bold text-violet-400 bg-violet-500/10 px-3 py-1 rounded-md border border-violet-500/20 inline-block mb-3 uppercase tracking-widest">{item.period}</span>
                    <h4 className="text-lg font-black text-white leading-tight mb-1">{item.school}</h4>
                    <p className="text-xs font-bold text-slate-300 mb-1">{item.degree}</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-4">{item.location}</p>
                    {item.description && (
                      <p className="text-xs text-slate-400 font-medium leading-relaxed bg-white/5 p-3 rounded-xl border border-white/5">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Certification Card */}
            <div className="pt-8">
               <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3">
                <Award className="w-5 h-5 text-emerald-400" /> Certification & Training
              </h3>
               <div className="p-6 rounded-3xl bg-[#0a0a14] border border-white/10 shadow-xl flex flex-col sm:flex-row gap-5 hover:border-emerald-500/30 transition-all">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2 items-center">
                      <h4 className="text-base font-bold text-white">{data.certifications[0].title}</h4>
                      <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/20">{data.certifications[0].period}</span>
                    </div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{data.certifications[0].organizer} — {data.certifications[0].program}</p>
                    <p className="text-xs text-slate-400 font-medium leading-relaxed pt-1">
                      {data.certifications[0].description}
                    </p>
                  </div>
               </div>
            </div>
          </div>

          <div className="space-y-12">
            {/* Timeline 2: Experience */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-black text-white flex items-center gap-3">
                  <Users className="w-6 h-6 text-cyan-400" /> Academic Team Experience
                </h2>
              </div>
              
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[1.4rem] before:-translate-x-px before:h-full before:w-px before:bg-gradient-to-b before:from-cyan-500/50 before:via-white/10 before:to-transparent">
                {data.academicExperience.map((item, index) => (
                  <div key={index} className="relative pl-12">
                    <div className="absolute left-[1.1rem] top-6 w-3 h-3 bg-cyan-400 rounded-full ring-4 ring-[#020205] ring-offset-2 ring-offset-cyan-500/20 z-10"></div>
                    
                    <div className="p-6 rounded-3xl bg-[#0a0a14]/60 border border-white/10 shadow-lg hover:border-cyan-500/30 transition-colors">
                       <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-md border border-cyan-500/20 inline-block mb-3 uppercase tracking-widest">{item.period}</span>
                      <h4 className="text-lg font-black text-white leading-tight mb-1">{item.title}</h4>
                      <p className="text-xs font-bold text-slate-300 mb-4">{item.organization} <span className="text-slate-600 px-1">•</span> <span className="text-cyan-300">{item.role}</span></p>
                      
                      <p className="text-xs text-slate-300 font-medium leading-relaxed mb-4">
                        {item.description}
                      </p>
                      {item.bullets && (
                        <ul className="space-y-2.5 bg-white/5 p-4 rounded-xl border border-white/5">
                          {item.bullets.map((b, i) => (
                            <li key={i} className="text-[11px] text-slate-400 font-medium flex items-start gap-3">
                              <span className="w-1 h-1 rounded-full bg-cyan-500 mt-1.5 shrink-0"></span>
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

            {/* Workflow Style */}
            <div className="space-y-6">
              <h3 className="text-xl font-black text-white mb-2 flex items-center gap-3">
                 <Terminal className="w-5 h-5 text-blue-400" /> Working Style
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {data.workingStyle.map((style, idx) => (
                   <div key={idx} className="p-5 rounded-2xl bg-[#0a0a14]/80 border border-white/5 hover:bg-white/5 transition-colors">
                     <h4 className="text-sm font-bold text-slate-200 mb-2">{style.title}</h4>
                     <p className="text-[11px] text-slate-400 font-medium leading-relaxed">{style.description}</p>
                   </div>
                 ))}
               </div>
            </div>

          </div>
        </section>

        {/* Section 8: Final CTA Recruiter Contact */}
        <section id="contact" className="px-6 lg:px-8 max-w-7xl mx-auto w-full relative">
           <div className="py-20 lg:py-28 px-6 md:px-12 text-center bg-gradient-to-b from-[#0a0a14]/90 to-[#050510]/90 backdrop-blur-3xl border border-white/10 rounded-[3rem] relative overflow-hidden shadow-2xl">
            {/* Complex internal glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full bg-gradient-to-r from-cyan-600/10 via-violet-600/10 to-blue-600/10 blur-[100px] pointer-events-none rounded-full"></div>
            
            <div className="relative z-10 space-y-10 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-cyan-950/40 border border-cyan-500/40 text-cyan-400 text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(6,182,212,0.15)] mx-auto">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse relative">
                  <span className="absolute inset-0 bg-cyan-400 rounded-full blur-[4px]"></span>
                </span>
                Open for Internship Opportunities
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-white mb-2">Let&apos;s Connect.</h2>
              <p className="text-base md:text-lg text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
                {data.internshipInterest.description.split(", dan ")[0]}. {/* Taking the first part for brevity in CTA */}
                Terbuka untuk kolaborasi akademik dan magang profesional.
              </p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
                <a href={data.socials.email} className="flex flex-col items-center justify-center gap-3 p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all shadow-lg hover:-translate-y-1">
                  <Mail className="w-6 h-6 text-slate-300" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Email Me</span>
                </a>
                <a href={data.socials.linkedin} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center gap-3 p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all shadow-lg hover:-translate-y-1">
                  <Linkedin className="w-6 h-6 text-slate-300" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">LinkedIn</span>
                </a>
                <a href={data.socials.github} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center gap-3 p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all shadow-lg hover:-translate-y-1">
                  <Github className="w-6 h-6 text-slate-300" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">GitHub</span>
                </a>
                <a href={data.socials.resume} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center gap-3 p-6 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-2xl transition-all shadow-lg hover:-translate-y-1 group">
                  <Download className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider">Download CV</span>
                </a>
              </div>
              
              <div className="pt-8 flex items-center justify-center gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                 <MapPin className="w-4 h-4" /> Bogor, Indonesia
              </div>
            </div>
          </div>
        </section>

      </main>
      
      {/* Footer */}
      <footer className="w-full border-t border-white/10 bg-[#020205] relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex flex-col items-center md:items-start gap-2">
             <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
               <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
               <span className="text-emerald-400 font-bold tracking-widest text-[10px] uppercase">Ready for Internship</span>
             </div>
             <p className="text-[10px] text-slate-500 font-medium">Built as an internship-ready digital resume and project showcase.</p>
           </div>
          <p className="font-bold text-slate-500 tracking-wider text-[10px] uppercase">&copy; {new Date().getFullYear()} {data.hero.name}. Digital Multimedia Portfolio.</p>
        </div>
      </footer>
    </div>
  );
}
