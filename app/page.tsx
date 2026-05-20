import { data } from "@/lib/portfolio-data";
import { Github, Linkedin, Mail, Download, ArrowUpRight, ChevronRight, Layers, FileText, Monitor, Hexagon, Database, Users, GraduationCap, Award, Terminal, CheckCircle2, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#050508] text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-100 relative overflow-x-clip scroll-smooth">
      {/* Global Noise Texture Overlay */}
      <div className="fixed inset-0 z-[100] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.08]"></div>
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="fixed top-0 left-1/4 w-[800px] h-[800px] bg-cyan-900/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none -z-10 mt-[-200px]"></div>
      <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none -z-10 mb-[-200px]"></div>
      
      {/* 2. Floating Navbar */}
      <header className="fixed top-6 inset-x-0 z-50 px-4 md:px-8 max-w-6xl mx-auto w-full">
        <div className="bg-[#0a0a0f]/60 backdrop-blur-xl border border-white/10 rounded-full h-14 flex items-center justify-between px-2 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          <Link href="/" className="font-bold text-sm tracking-widest uppercase text-white flex items-center gap-3 px-4">
            <span className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.6)]"></span>
            Jan Albireo
          </Link>
          <div className="flex items-center gap-1 md:gap-4 pr-1">
            <nav className="hidden md:flex items-center gap-1">
              {['About', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors rounded-full hover:bg-white/5">
                  {item}
                </a>
              ))}
            </nav>
            <div className="w-px h-6 bg-white/10 hidden md:block mx-2"></div>
            <a 
              href={data.socials.resume} 
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-500/30 text-cyan-50 rounded-full font-bold text-xs uppercase tracking-wider transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
            >
              CV <Download className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 flex flex-col gap-24 md:gap-32 pb-32 pt-32 lg:pt-40">
        
        {/* 3. Hero Command Center */}
        <section id="hero" className="px-6 lg:px-8 max-w-7xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div className="space-y-10 order-2 lg:order-1 relative z-20">
            <div className="relative inline-flex">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full blur opacity-30 animate-pulse"></div>
              <div className="relative inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#0a0a0f]/80 border border-cyan-500/30 text-cyan-300 text-[10px] md:text-xs font-bold tracking-widest uppercase shadow-[0_0_30px_rgba(6,182,212,0.15)] backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                Open for Internship Opportunities
              </div>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 tracking-tighter leading-[1.1]">
                {data.hero.name}
              </h1>
              <h2 className="text-lg md:text-xl font-medium text-cyan-400 leading-snug">
                {data.hero.role}
              </h2>
            </div>
            
            <p className="text-slate-300 text-sm md:text-base max-w-xl leading-relaxed">
              {data.hero.description}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href={data.hero.resume} 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#050508] hover:bg-slate-200 rounded-xl font-black uppercase tracking-wider text-xs transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] active:scale-95"
              >
                Download CV <Download className="w-4 h-4" />
              </a>
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 text-white rounded-xl font-bold uppercase tracking-wider text-xs transition-all active:scale-95 backdrop-blur-sm"
              >
                View Projects <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-4">
              {["Roblox Interactive Media", "UI/UX Design", "Web Prototype", "Android App", "Multimedia Production"].map((badge, idx) => (
                <span key={idx} className="px-3 py-1.5 bg-[#0a0a0f]/80 border border-white/5 rounded-lg text-[10px] md:text-[11px] font-semibold text-slate-400 flex items-center gap-2">
                  <Hexagon className="w-3 h-3 text-cyan-500/50"/> {badge}
                </span>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 w-full max-w-md mx-auto relative z-10">
            {/* Command Card Frame */}
            <div className="relative aspect-[4/5] rounded-[2rem] p-1.5 bg-gradient-to-b from-white/10 via-white/5 to-transparent shadow-[0_20px_60px_rgba(0,0,0,0.6)] group">
               <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-indigo-500/10 rounded-[2rem] blur-2xl opacity-50"></div>
               <div className="relative w-full h-full rounded-[1.75rem] overflow-hidden bg-[#0A0A0F] border border-white/10">
                 <Image
                    src={data.hero.avatarUrl}
                    alt={data.hero.name}
                    fill
                    priority
                    className="object-cover opacity-80 saturate-50 group-hover:saturate-100 group-hover:scale-105 transition-all duration-700 mix-blend-screen"
                    referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/40 to-transparent"></div>
                 
                 {/* Card Overlays */}
                 <div className="absolute bottom-6 left-6 right-6 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-900/40 backdrop-blur-md border border-cyan-500/30 rounded-lg shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                      <span className="text-[10px] font-bold text-cyan-100 uppercase tracking-wider">Available for Internship</span>
                    </div>
                    <div className="flex gap-2 text-[10px] uppercase font-bold text-slate-300 tracking-wider">
                      <span className="bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">6th Semester Student</span>
                      <span className="bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 flex items-center gap-1.5"><MapPin className="w-3 h-3 text-cyan-400"/> Bogor</span>
                    </div>
                 </div>
               </div>
               
               {/* 3 Floating Elements - use Tailwind hover/group patterns for static position or subtle animation without custom keyframes */}
               <div className="absolute top-12 -left-8 bg-[#0a0a0f]/90 backdrop-blur-xl border border-white/10 p-3.5 rounded-2xl shadow-2xl flex items-center gap-3">
                 <div className="w-8 h-8 rounded-xl bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
                   <Monitor className="w-4 h-4 text-cyan-400" />
                 </div>
                 <div>
                   <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Interactive Media</p>
                   <p className="text-[11px] font-bold text-white">Roblox • NPC • 3D</p>
                 </div>
               </div>

               <div className="absolute bottom-32 -right-8 bg-[#0a0a0f]/90 backdrop-blur-xl border border-white/10 p-3.5 rounded-2xl shadow-2xl flex items-center gap-3">
                 <div className="w-8 h-8 rounded-xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                   <Layers className="w-4 h-4 text-indigo-400" />
                 </div>
                 <div>
                   <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Technical + Visual</p>
                   <p className="text-[11px] font-bold text-white">UI/UX • Web • Android</p>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* 4. Profile Snapshot Bento */}
        <section className="px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-6">
           <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-2">Profile Snapshot</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[160px] gap-4">
              {data.snapshot.map((item, idx) => {
                const isLarge = idx === 1 || idx === 3;
                const isGlow = idx === 4;
                return (
                  <div key={idx} className={`relative p-6 rounded-3xl bg-[#0a0a0f]/80 border ${isGlow ? 'border-cyan-500/50 bg-cyan-950/10' : 'border-white/5 hover:border-white/10'} backdrop-blur-md shadow-xl flex flex-col justify-between group transition-all hover:-translate-y-1 ${isLarge ? 'md:col-span-2' : ''}`}>
                    {isGlow && <div className="absolute inset-0 bg-cyan-500/5 blur-xl rounded-3xl pointer-events-none"></div>}
                    <div className="text-[10px] font-black text-white/20">0{idx + 1} {"//"}</div>
                    <div className="space-y-2 relative z-10">
                      <h4 className={`font-bold ${isGlow ? 'text-cyan-300' : 'text-white'} leading-tight`}>{item.title}</h4>
                      <p className="text-xs text-slate-400 font-medium leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                )
              })}
           </div>
        </section>

        {/* Diagonal Tech Spline Divider */}
        <div className="w-full h-px max-w-5xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        {/* 5. About Editorial Section */}
        <section id="about" className="px-6 lg:px-8 max-w-7xl mx-auto w-full grid lg:grid-cols-[1fr_1fr] gap-16 items-start">
          <div className="space-y-8 sticky top-32">
            <h2 className="text-4xl md:text-5xl font-black text-white">{data.about.title}</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full"></div>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-light bg-white/5 p-6 md:p-8 rounded-3xl border border-white/5 shadow-inner backdrop-blur-sm">
              {data.about.description}
            </p>
            <p className="text-[11px] text-slate-500 font-medium italic flex items-start gap-3 bg-[#0a0a0f] p-4 rounded-xl border border-white/5">
               <span className="w-2 h-2 rounded-full bg-slate-600 shrink-0 mt-1"></span>
               {data.about.aiNote}
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
             <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-2 mb-2">Core Focus Areas</h3>
             {data.about.focusAreas.map((focus, idx) => (
                <div key={idx} className="p-5 rounded-2xl border border-white/5 bg-[#0a0a0f]/60 hover:bg-white/[0.03] transition-colors flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <span className="text-sm font-bold text-slate-200">{focus}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                </div>
             ))}
          </div>
        </section>

        {/* 6. Internship Target Console */}
        <section className="px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="p-8 md:p-12 rounded-[2.5rem] bg-[#0A0A0F] border border-cyan-500/20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none"></div>
            
            <div className="max-w-2xl space-y-4 mb-10 relative z-10">
              <div className="inline-flex items-center gap-2 text-cyan-400 font-bold uppercase tracking-widest text-[10px]">
                <CheckCircle2 className="w-4 h-4" /> Career Objectives
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white">{data.internshipInterest.title}</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                {data.internshipInterest.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
              {data.internshipInterest.roles.map((role, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/30 hover:bg-cyan-500/5 group transition-all flex items-center gap-3">
                  <div className="w-1.5 h-6 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition-colors"></div>
                  <span className="font-bold text-sm text-slate-300 group-hover:text-white transition-colors">{role}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Featured Project Showcase */}
        <section id="projects" className="px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-12 relative z-20">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-indigo-400 font-bold uppercase tracking-widest text-[10px]">
              <FileText className="w-4 h-4" /> Portfolio Showcase
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white">Featured Projects</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Selected project-based experiences aligned with interactive media, game development, web prototype, and Android implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Flagship Project: SEAMOLEC */}
            <div className="lg:col-span-12 relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-cyan-500 to-violet-500 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-20 transition duration-700 pointer-events-none"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 hover:border-white/20 transition-colors duration-700 bg-[#0a0a0f] flex flex-col lg:flex-row shadow-2xl">
              <div className="w-full lg:w-[50%] relative aspect-video lg:aspect-auto overflow-hidden bg-[#111]">
                <Image
                  src={data.projects[0].imageUrl}
                  alt={data.projects[0].title}
                  fill
                  className="object-cover opacity-80 mix-blend-lighten group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent lg:hidden"></div>
                <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#0a0a0f] to-transparent hidden lg:block z-10"></div>
                <div className="absolute top-6 left-6 z-20">
                  <div className="px-3 py-1.5 bg-[#0a0a0f]/80 backdrop-blur-md border border-white/10 rounded-lg flex items-center gap-2 text-[10px] uppercase font-bold tracking-wider text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    {data.projects[0].status}
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-[50%] p-8 md:p-12 flex flex-col justify-center relative space-y-8 z-20">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    <span>{data.projects[0].category}</span>
                    <span className="text-slate-600">•</span>
                    <span>{data.projects[0].period}</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black text-white leading-[1.1]">{data.projects[0].title}</h3>
                  <p className="text-sm font-bold text-cyan-400">{data.projects[0].role}</p>
                </div>
                
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {data.projects[0].description}
                </p>

                <div className="space-y-4">
                  <div className="space-y-2">
                     <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Contribution</p>
                     <p className="text-xs text-slate-300 font-medium leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">{data.projects[0].contribution}</p>
                  </div>
                  
                  <div className="space-y-2">
                     <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Key Features</p>
                     <div className="flex flex-wrap gap-2">
                        {data.projects[0].keyFeatures.map((feat, i) => (
                           <span key={i} className="text-[10px] font-bold text-slate-200 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-lg">
                             {feat}
                           </span>
                        ))}
                     </div>
                  </div>
                </div>
                
                <div className="pt-4 flex flex-wrap gap-2">
                  {data.projects[0].tags.map((tag, i) => (
                    <span key={i} className="text-[9px] font-black text-cyan-500/80 uppercase tracking-wider">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

            {/* Asymmetric Project Bento for 2, 3, 4 */}
            {data.projects.slice(1).map((project, idx) => {
              const isLarge = idx === 0; // edu-fun obby takes more space
              return (
                <div key={project.id} className={`relative group ${isLarge ? 'lg:col-span-7' : 'lg:col-span-5'}`}>
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-cyan-500 to-violet-500 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-20 transition duration-700 pointer-events-none"></div>
                  <div className="relative h-full rounded-[2rem] overflow-hidden border border-white/10 hover:border-white/20 bg-[#0a0a0f] flex flex-col transition-colors duration-700 shadow-xl">
                  <div className="w-full aspect-[16/9] relative overflow-hidden bg-[#111]">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 mix-blend-lighten"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0a0f] to-transparent"></div>
                    <div className="absolute top-4 left-4 z-20">
                      <div className="px-3 py-1 bg-[#0a0a0f]/80 backdrop-blur-md border border-white/10 rounded-md flex items-center gap-2 text-[9px] uppercase font-bold tracking-wider text-slate-300">
                        {project.status === "Academic Prototype" ? <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> : <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>}
                        {project.status}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 md:p-8 flex flex-col flex-1 relative z-10 space-y-6">
                    <div className="space-y-2">
                      <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{project.category}</p>
                      <h3 className="text-2xl font-black text-white leading-tight">{project.title}</h3>
                      <p className="text-xs font-bold text-slate-400">{project.role}</p>
                    </div>
                    
                    <p className="text-xs text-slate-300 font-light leading-relaxed flex-1">
                      {project.description}
                    </p>
                    
                    <div className="space-y-2 bg-white/5 p-4 rounded-xl border border-white/5">
                       <p className="text-[9px] text-slate-500 uppercase tracking-widest font-black">Contribution</p>
                       <p className="text-xs text-slate-300 font-medium leading-relaxed">{project.contribution}</p>
                    </div>

                    <div className="pt-2 flex flex-wrap gap-2">
                       {project.tags.map((tag, i) => (
                         <span key={i} className="text-[9px] font-bold text-slate-400 border border-white/5 bg-white/5 px-2 py-1 rounded-md">
                           {tag}
                         </span>
                       ))}
                    </div>
                  </div>
                </div>
                </div>
              )
            })}

          </div>
        </section>

        {/* 8. Skills Matrix Dashboard */}
        <section id="skills" className="px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-12">
          <div className="space-y-4 max-w-2xl">
             <div className="inline-flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-widest text-[10px]">
              <Database className="w-4 h-4" /> Technical Arsenal
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white">Skills Matrix</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Technical, creative, and workflow skills developed through academic and personal projects.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(data.skills).map(([category, items], idx) => (
              <div key={idx} className="relative p-[1px] rounded-[2rem] bg-gradient-to-br from-cyan-500/10 to-violet-500/10 hover:from-cyan-500/40 hover:to-violet-500/40 transition-colors duration-500 shadow-xl group">
                <div className="h-full w-full p-6 md:p-8 rounded-[calc(2rem-1px)] bg-[#0a0a0f] flex flex-col gap-6">
                   <div>
                     <h3 className="text-sm font-bold text-white mb-1">{category}</h3>
                     <div className="w-8 h-px bg-white/20"></div>
                   </div>
                   
                   <div className="flex flex-wrap gap-2">
                      {items.map((skill, index) => (
                        <span key={index} className="px-3 py-1.5 rounded-lg border border-white/10 bg-[#111116] text-[11px] font-semibold text-slate-300 relative z-10">
                          {skill}
                        </span>
                      ))}
                   </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Diagonal Tech Spline Divider */}
        <div className="w-full h-px max-w-5xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        {/* 9 & 10. Education, Cert, Team, Workflow */}
        <section id="education" className="px-6 lg:px-8 max-w-7xl mx-auto w-full grid xl:grid-cols-2 gap-16 xl:gap-24 relative">
          
          {/* Left Column */}
          <div className="space-y-16">
            
            {/* Education Timeline */}
            <div className="space-y-10">
              <h2 className="text-2xl font-black text-white flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-cyan-400" /> Education
              </h2>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px before:h-full before:w-px before:bg-gradient-to-b before:from-cyan-500/50 before:via-white/10 before:to-transparent">
                {data.education.map((item, index) => (
                  <div key={index} className="relative pl-10">
                    <div className="absolute left-1 top-1.5 w-4 h-4 bg-[#0a0a0f] border-[3px] border-cyan-500 rounded-full z-10"></div>
                    
                    <div className="space-y-2">
                      <span className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">{item.period}</span>
                      <h4 className="text-xl font-bold text-white leading-tight">{item.school}</h4>
                      <p className="text-xs font-bold text-slate-400">{item.degree}</p>
                      <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest mb-4"><MapPin className="inline w-3 h-3"/> {item.location}</p>
                      
                      {item.description && (
                        <p className="text-xs text-slate-300 font-medium leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5 mt-3">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certification Panel */}
            <div className="p-8 rounded-[2rem] bg-[#0a0a0f] border border-white/5 shadow-xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[50px] rounded-full"></div>
               <h3 className="text-lg font-black text-white mb-6 flex items-center gap-3 relative z-10">
                <Award className="w-5 h-5 text-indigo-400" /> Certification & Training
              </h3>
              
              <div className="space-y-3 relative z-10">
                <h4 className="text-base font-bold text-slate-200">{data.certifications[0].title}</h4>
                <div className="flex flex-wrap gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  <span className="text-indigo-400">{data.certifications[0].period}</span>
                  <span>•</span>
                  <span>{data.certifications[0].organizer}</span>
                </div>
                <p className="text-xs font-bold text-slate-400 bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg inline-block">
                  {data.certifications[0].program}
                </p>
                <p className="text-xs text-slate-400 font-medium leading-relaxed pt-2">
                  {data.certifications[0].description}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="space-y-16">
            
            {/* Academic Team Experience */}
            <div className="space-y-10">
              <h2 className="text-2xl font-black text-white flex items-center gap-3">
                <Users className="w-6 h-6 text-violet-400" /> Academic Team Experience
              </h2>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px before:h-full before:w-px before:bg-gradient-to-b before:from-violet-500/50 before:via-white/10 before:to-transparent">
                {data.academicExperience.map((item, index) => (
                  <div key={index} className="relative pl-10">
                    <div className="absolute left-1 top-1.5 w-4 h-4 bg-[#0a0a0f] border-[3px] border-violet-500 rounded-full z-10"></div>
                    
                    <div className="space-y-3">
                      <span className="text-[10px] font-black text-violet-400 uppercase tracking-widest">{item.period}</span>
                      <h4 className="text-xl font-bold text-white leading-tight">{item.title}</h4>
                      <p className="text-xs font-bold text-slate-400">{item.role} • {item.organization}</p>
                      
                      <p className="text-xs text-slate-300 font-medium leading-relaxed">
                        {item.description}
                      </p>
                      {item.bullets && (
                        <ul className="space-y-3 bg-white/5 p-5 rounded-xl border border-white/5 mt-4">
                          {item.bullets.map((b, i) => (
                            <li key={i} className="text-[11px] text-slate-300 font-medium flex items-start gap-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 shrink-0 opacity-70"></span>
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

            {/* Working Style */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest pl-1 mb-4 flex items-center gap-2">
                 <Terminal className="w-4 h-4" /> Working Style
               </h3>
               <div className="grid sm:grid-cols-2 gap-4">
                 {data.workingStyle.map((style, idx) => (
                   <div key={idx} className="p-5 rounded-[1.5rem] bg-[#0a0a0f] border border-white/5 hover:border-white/10 transition-colors">
                     <h4 className="text-xs font-bold text-white mb-2">{style.title}</h4>
                     <p className="text-[11px] text-slate-400 font-medium leading-relaxed">{style.description}</p>
                   </div>
                 ))}
               </div>
            </div>

          </div>
        </section>

        {/* 11. Recruiter CTA Command Center */}
        <section id="contact" className="px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-20">
           <div className="py-20 lg:py-28 px-6 md:px-12 text-center bg-[#0a0a0f] border border-white/10 rounded-[3rem] relative overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
            
            {/* Core Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-600/10 via-indigo-600/10 to-transparent blur-[120px] pointer-events-none rounded-full"></div>
            
            <div className="relative z-10 space-y-10 max-w-3xl mx-auto flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-[10px] font-bold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                Open for Internship Opportunities
              </div>
              
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-white">Let&apos;s Connect.</h2>
                <p className="text-base text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
                  Saya terbuka untuk kesempatan magang, kolaborasi akademik, dan pengembangan proyek digital interaktif.
                </p>
                <p className="text-[11px] text-slate-500 font-medium">
                  Portfolio ini disusun sebagai ringkasan pengalaman proyek, skill, dan kesiapan saya untuk mengikuti program magang.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full pt-4">
                <a href={data.socials.email} className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-[#111116] border border-white/5 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all group">
                  <Mail className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  <span className="text-xs font-bold text-white">Email Me</span>
                </a>
                <a href={data.socials.linkedin} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-[#111116] border border-white/5 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group">
                  <Linkedin className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors" />
                  <span className="text-xs font-bold text-white">LinkedIn</span>
                </a>
                <a href={data.socials.github} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-[#111116] border border-white/5 hover:border-white/30 hover:bg-white/5 transition-all group">
                  <Github className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                  <span className="text-xs font-bold text-white">GitHub</span>
                </a>
                <a href={data.socials.resume} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-gradient-to-br from-cyan-600/20 to-indigo-600/20 border border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all group">
                  <Download className="w-6 h-6 text-cyan-400 group-hover:-translate-y-1 transition-transform" />
                  <span className="text-xs font-bold text-white">Download CV</span>
                </a>
              </div>

              <div className="flex gap-4 text-[10px] uppercase font-bold text-slate-500 tracking-wider pt-6">
                 <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3"/> Bogor, Indonesia</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* 12. Footer */}
      <footer className="border-t border-white/5 bg-[#050508] relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-bold font-mono text-slate-500 uppercase tracking-widest text-center md:text-left">
            © 2026 Jan Albireo. Digital Multimedia Portfolio.
          </p>
          <p className="text-[10px] font-medium text-slate-600 text-center md:text-right">
            Built as an internship-ready digital resume and project showcase.
          </p>
        </div>
      </footer>
    </div>
  );
}
