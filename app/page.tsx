import { data } from "@/lib/portfolio-data";
import { Github, Linkedin, Mail, Twitter, ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#f5f5f5] relative overflow-x-hidden font-sans">
      {/* Background Decoration */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-900/10 blur-[140px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-neutral-800/20 blur-[100px] rounded-full pointer-events-none z-0"></div>

      {/* Navbar Minimalis */}
      <header className="sticky top-0 z-50 bg-[#080808] border-b border-white/5 shadow-md">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex flex-col hover:opacity-80 transition-opacity">
            <span className="text-xs tracking-[0.4em] uppercase font-medium text-indigo-400">Portfolio Digital</span>
            <span className="text-sm mt-1 opacity-50 italic font-serif text-white">Edisi Kolektif {new Date().getFullYear()}</span>
          </Link>
          <nav className="hidden md:flex gap-12 text-[10px] tracking-[0.3em] uppercase opacity-60 font-semibold text-white">
            <a href="#about" className="hover:opacity-100 transition-opacity">Tentang</a>
            <a href="#projects" className="hover:opacity-100 transition-opacity">Portofolio</a>
            <a href="#contact" className="hover:opacity-100 transition-opacity">Kontak</a>
          </nav>
          {/* Mobile Menu simple button / placeholder */}
          <div className="md:hidden text-xs tracking-widest uppercase font-medium text-indigo-400">
             Menu
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-24 space-y-24 md:space-y-32">
        
        {/* Section 1: Hero */}
        <section id="hero" className="flex flex-col-reverse md:flex-row items-center gap-12 pt-8 md:pt-16 z-10 relative">
          <div className="flex-1 space-y-4">
            <p className="text-indigo-400 font-medium tracking-[0.3em] uppercase text-[10px] md:text-xs">
              {data.hero.greeting}
            </p>
            <h1 className="text-6xl md:text-8xl font-serif italic tracking-tight leading-[1.1] text-white">
              {data.hero.name.split(' ')[0]} <span className="text-indigo-200/40">{data.hero.name.split(' ').slice(1).join(' ')}</span>
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 ml-0 md:ml-2 pt-4">
              <div className="hidden sm:block h-[1px] w-12 md:w-24 bg-indigo-400/50"></div>
              <div className="space-y-2">
                <p className="text-lg font-light text-neutral-300 max-w-lg leading-relaxed tracking-wide">
                  {data.hero.role}
                </p>
                <p className="text-sm font-light text-neutral-500 max-w-xl leading-relaxed tracking-wide">
                  {data.hero.description}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 pt-8 md:ml-2">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-3 bg-neutral-900 border border-white/10 text-white rounded-full font-medium text-xs tracking-widest uppercase hover:bg-white/5 transition-all active:scale-95"
              >
                Hubungi Saya
              </a>
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center px-8 py-3 bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 rounded-full font-medium text-xs tracking-widest uppercase hover:bg-indigo-600/30 transition-all active:scale-95"
              >
                Lihat Karya
              </a>
            </div>
          </div>
          
          <div className="w-56 h-56 md:w-80 md:h-80 relative rounded-full overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(79,70,229,0.1)] flex-shrink-0">
            <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay z-10 pointer-events-none"></div>
            <Image
              src={data.hero.avatarUrl}
              alt={data.hero.name}
              fill
              priority
              className="object-cover grayscale opacity-90"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* Section 2: About & Skills */}
        <section id="about" className="grid md:grid-cols-12 gap-12 items-start py-8 z-10 relative">
          <div className="md:col-span-7 space-y-6">
            <h2 className="font-serif italic text-4xl tracking-tight text-white/90">
              {data.about.title}
            </h2>
            <div className="h-[1px] w-24 bg-indigo-400/30"></div>
            <p className="text-neutral-400 font-light leading-relaxed text-lg tracking-wide">
              {data.about.description}
            </p>
          </div>
          <div className="md:col-span-5 space-y-6 bg-neutral-900/50 p-8 border border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-indigo-500/5 mix-blend-overlay pointer-events-none"></div>
            <h3 className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold relative z-10">Keahlian Utamaku</h3>
            <div className="flex flex-wrap gap-2.5 relative z-10">
              {data.skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-neutral-950/50 border border-white/10 hover:border-indigo-400/50 text-xs font-medium text-neutral-300 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Projects */}
        <section id="projects" className="space-y-12 z-10 relative">
          <div className="space-y-6">
            <h2 className="font-serif italic text-4xl md:text-5xl tracking-tight text-white/90">Karya Pilihan</h2>
            <div className="h-[1px] w-24 bg-indigo-400/30"></div>
            <p className="text-neutral-400 font-light text-lg max-w-2xl tracking-wide">Beberapa proyek terbaru yang telah saya kembangkan dan desain secara komprehensif.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.projects.map((project) => (
              <div 
                key={project.id} 
                className="group cursor-default flex flex-col"
              >
                <div className="h-64 w-full bg-neutral-900 border border-white/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-neutral-900/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-6 left-6 z-20">
                    <span className="text-[9px] uppercase tracking-widest text-indigo-400 font-bold block mb-1">
                      {project.tags[0]}
                    </span>
                    <h3 className="text-2xl font-serif italic text-white/90 group-hover:text-white transition-colors">{project.title}</h3>
                  </div>
                </div>
                
                <div className="mt-4 flex flex-col flex-1 space-y-4">
                  <p className="text-neutral-500 font-light text-sm flex-1 leading-relaxed tracking-wide">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 py-2">
                    {project.tags.slice(1).map((tag, i) => (
                      <span key={i} className="text-[10px] tracking-wider uppercase font-medium text-neutral-400 border border-white/5 px-3 py-1 bg-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.link} 
                    className="inline-flex items-center gap-2 text-[10px] tracking-widest uppercase font-semibold text-indigo-400 hover:text-indigo-300 transition-colors mt-2 w-max"
                  >
                    Lihat Proyek <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="mt-6 h-[1px] w-full bg-white/5 group-hover:bg-indigo-400 transition-colors duration-500"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Contact */}
        <section id="contact" className="py-24 space-y-8 text-center bg-neutral-900/30 border border-white/5 px-6 text-white my-12 relative overflow-hidden z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-900/10 blur-[100px] rounded-full pointer-events-none z-0"></div>
          
          <div className="relative z-10 space-y-6">
            <h2 className="font-serif italic text-4xl md:text-5xl tracking-tight text-white/90">Mari Bekerja Sama</h2>
            <div className="h-[1px] w-24 bg-indigo-400/30 mx-auto"></div>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto font-light tracking-wide">
              Tertarik untuk berkolaborasi atau sekadar menyapa? Jangan ragu untuk menghubungi melalui email.
            </p>
            <div className="flex justify-center gap-6 md:gap-8 pt-8">
              <a 
                href={data.socials.email} 
                className="text-neutral-500 hover:text-white transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a 
                href={data.socials.github} 
                target="_blank" 
                rel="noreferrer" 
                className="text-neutral-500 hover:text-white transition-colors duration-300"
                aria-label="Github"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href={data.socials.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="text-neutral-500 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href={data.socials.twitter} 
                target="_blank" 
                rel="noreferrer" 
                className="text-neutral-500 hover:text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-8 text-sm font-medium text-neutral-500 bg-[#080808] border-t border-white/5 z-10 relative">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex flex-col gap-1 text-center md:text-left">
            <span className="text-[9px] uppercase tracking-widest text-neutral-600">Status Terkini</span>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
              <span className="text-xs font-light text-neutral-400">Tersedia untuk proyek freelance</span>
            </div>
          </div>
          <p className="text-[10px] tracking-widest uppercase font-light">&copy; {new Date().getFullYear()} {data.hero.name}. <span className="italic font-serif text-neutral-400">All rights reserved.</span></p>
        </div>
      </footer>
    </div>
  );
}
