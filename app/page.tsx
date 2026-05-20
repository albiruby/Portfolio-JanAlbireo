import { data } from "@/lib/portfolio-data";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-600 font-sans selection:bg-blue-100 selection:text-blue-900 scroll-smooth">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full bg-[#fafafa]/95 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/" className="font-extrabold text-2xl tracking-tighter text-[#111] uppercase" title="Jan Albireo">
            STUDIO
          </Link>
          <nav className="hidden md:flex gap-10">
            {[
              { id: 'home', label: 'Home' },
              { id: 'work', label: 'Work' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'education', label: 'Education' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => {
              const isActive = item.id === 'home';
              const href = item.id === 'home' ? '#home' : item.id === 'work' ? '#projects' : `#${item.id}`;
              return (
                <a key={item.id} href={href} className={`text-[13px] font-semibold tracking-wide transition-colors pb-1 border-b-2 items-center flex ${isActive ? 'text-[#111] border-[#5c7a8c]' : 'text-gray-500 hover:text-[#111] border-transparent'}`}>
                  {item.label}
                </a>
              );
            })}
          </nav>
          <a href="/CV_Jan_Albireo.pdf" download="CV_Jan_Albireo.pdf" target="_blank" rel="noreferrer" className="hidden md:inline-flex items-center justify-center px-8 py-3 bg-[#111] text-white text-[13px] font-bold rounded-sm shadow-sm hover:shadow-md hover:bg-black transition-all">
            Download CV
          </a>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="max-w-7xl mx-auto px-6 pt-24 pb-32 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-[11px] font-bold text-gray-600 uppercase tracking-wider shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              Open for Internship Opportunities
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-[#111] leading-[1.05]">
                Designing interactive media, web prototypes, and digital products.
              </h1>
              
              <h2 className="text-xl md:text-2xl font-medium text-[#5c7a8c] leading-snug">
                Jan Albireo — Digital Multimedia Technology Student & Interactive Media Developer
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Saya adalah mahasiswa semester 6 Teknik Multimedia Digital di Politeknik Negeri Jakarta dengan pengalaman berbasis proyek dalam Roblox interactive media, UI/UX, web prototype, Android app development, testing, dan documentation.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="/CV_Jan_Albireo.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#f4f6f7] border border-gray-200 text-[#111] text-[13px] font-bold rounded-full hover:bg-white hover:border-gray-300 transition-colors gap-3">
                Download Resume <Download className="w-4 h-4" />
              </a>
              <a href="#projects" className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-[#111] text-[13px] font-bold rounded-full hover:text-blue-600 transition-colors gap-2">
                View Work <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="flex flex-wrap gap-2 pt-6 pb-2">
              {['Roblox Interactive Media', 'UI/UX', 'Web Prototype', 'Android App'].map((pill, idx) => (
                <span key={idx} className="text-[11px] font-bold text-gray-500 uppercase tracking-widest px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
                  {pill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden bg-[#f4f6f7] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100">
              <Image src="/imgprofil.png" alt="Jan Albireo" fill priority className="object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-[0.8fr_1.2fr] gap-16 items-start border-t border-gray-200">
          <div className="relative w-full max-w-sm mx-auto aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden bg-[#f4f6f7] shadow-sm border border-gray-100">
             <Image src="/imgprofil.png" alt="Jan Albireo" fill className="object-cover" />
          </div>
          <div className="space-y-8">
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">About</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-[#111] leading-[1.1] tracking-tight">
              Bridging the gap between interactive media and digital product.
            </h3>
            <div className="text-lg text-gray-600 leading-relaxed space-y-6">
              <p>
                Saya terbiasa mengerjakan proyek multimedia digital yang menggabungkan aspek visual, teknis, dokumentasi, dan pengalaman pengguna. Dalam beberapa proyek akademik maupun personal, saya berkontribusi pada environment design, UI/UX, Lua scripting, web prototyping, Android development, testing scenario, research documentation, dan academic report writing.
              </p>
            </div>
            <div className="pt-8 border-t border-gray-200">
              <p className="text-[13px] text-gray-500 leading-relaxed italic">
                * AI tools are used as supporting resources for references, debugging, ideation, and documentation structure with manual review and validation.
              </p>
            </div>
          </div>
        </section>

        {/* INTERNSHIP INTEREST */}
        <section className="bg-[#f4f6f7] py-24 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[0.8fr_1.2fr] gap-16 items-start">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#111]">Internship Interest</h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Saya terbuka untuk kesempatan magang yang berhubungan dengan pengembangan produk digital, media interaktif, UI/UX, web application, game development, Android development, dan multimedia production.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                "UI/UX Designer Intern", "Front-End Developer Intern", "Interactive Media Developer Intern",
                "Game Developer Intern", "Android Developer Intern", "Multimedia Designer Intern"
              ].map((role, idx) => (
                <span key={idx} className="px-5 py-2.5 bg-white border border-gray-200 text-[#111] font-bold text-[13px] rounded-full text-center shadow-sm">
                  {role}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SELECTED WORKS SECTION */}
        <section id="projects" className="max-w-7xl mx-auto px-6 py-32">
          <div className="mb-20 max-w-3xl">
            <h2 className="text-5xl font-bold text-[#111] tracking-tight mb-6">Selected Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
              Selected project-based experiences in interactive media, game development, web prototype, and Android implementation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
            {data.projects.map((project, idx) => {
              const isWide = idx === 0 || idx === 3;
              const displayTags = project.tags.slice(0, 5);
              const remainingTags = project.tags.length - 5;
              
              return (
                <div key={idx} className={`group flex flex-col gap-6 ${isWide ? 'md:col-span-2' : 'md:col-span-1'}`}>
                  {/* Image container */}
                  <div className={`relative w-full rounded-[0.75rem] overflow-hidden bg-[#f4f6f7] ${isWide ? 'aspect-[16/9] md:aspect-[21/9]' : 'aspect-[4/3]'} border border-gray-200/60`}>
                    <Image 
                      src={project.imageUrl} 
                      alt={project.title} 
                      fill 
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  {/* Content container */}
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="space-y-1.5">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#111] leading-tight flex items-center gap-3">
                          {project.title}
                          <ArrowUpRight className="w-6 h-6 text-gray-300 opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
                        </h3>
                        <p className="text-[12px] font-bold text-gray-500 uppercase tracking-[0.15em]">
                          {project.category} • {project.period}
                        </p>
                      </div>
                      <span className="shrink-0 inline-flex items-center px-3 py-1 bg-gray-100 border border-gray-200 rounded-md text-[10px] font-bold text-gray-600 uppercase tracking-wider">
                        {project.status}
                      </span>
                    </div>
                    
                    <div className="text-gray-600 leading-relaxed space-y-4 max-w-4xl">
                      <p className="text-base text-gray-800">{project.description}</p>
                      <div className="text-sm space-y-2 border-l-2 border-gray-200 pl-4">
                        <p><span className="font-bold text-[#111]">Role:</span> {project.role}</p>
                        <p><span className="font-bold text-[#111]">Contribution:</span> {project.contribution}</p>
                      </div>
                    </div>
                    
                    <div className="pt-2 flex flex-wrap gap-2">
                      {displayTags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[11px] bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-md font-medium shadow-sm">
                          {tag}
                        </span>
                      ))}
                      {remainingTags > 0 && (
                        <span className="text-[11px] bg-[#f4f6f7] border border-gray-200 text-gray-500 px-3 py-1.5 rounded-md font-bold shadow-sm">
                          +{remainingTags} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SKILLS & EDUCATION (Academic Trajectory style) */}
        <section id="skills" className="bg-[#f4f6f7] py-24 md:py-32 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left: Skills */}
            <div>
              <h2 className="text-3xl font-bold text-[#111] mb-12 border-b border-gray-300 pb-4">Expertise & Toolkit</h2>
              <div className="space-y-6">
                 {/* Card 1 */}
                 <div className="p-8 bg-white border border-gray-200 rounded-[1rem] shadow-sm">
                   <h4 className="font-bold text-[#111] text-xl mb-4">Interactive Media & Game</h4>
                   <p className="text-gray-600 leading-relaxed text-sm">
                     Roblox Studio, Lua, Unity, 3D Virtual Tour, Game Development
                   </p>
                 </div>
                 {/* Card 2 */}
                 <div className="p-8 bg-white border border-gray-200 rounded-[1rem] shadow-sm">
                   <h4 className="font-bold text-[#111] text-xl mb-4">Web & App Development</h4>
                   <p className="text-gray-600 leading-relaxed text-sm">
                     HTML, CSS, JavaScript, TypeScript / TSX, React, Tailwind CSS, Java, Kotlin, Android Studio
                   </p>
                 </div>
                 {/* Card 3 */}
                 <div className="p-8 bg-white border border-gray-200 rounded-[1rem] shadow-sm">
                   <h4 className="font-bold text-[#111] text-xl mb-4">Design & Multimedia</h4>
                   <p className="text-gray-600 leading-relaxed text-sm">
                     Figma, Canva, CapCut, Adobe Photoshop, Adobe Illustrator, Autodesk Maya, Blender
                   </p>
                 </div>
                 {/* Card 4 */}
                 <div className="p-8 bg-white border border-gray-200 rounded-[1rem] shadow-sm">
                   <h4 className="font-bold text-[#111] text-xl mb-4">Technical Workflow</h4>
                   <p className="text-gray-600 leading-relaxed text-sm">
                     GitHub / Version Control, Arduino, ESP32, Wokwi, Documentation, Functional Testing, Problem Solving
                   </p>
                 </div>

                 {/* Compact list */}
                 <div className="pt-6 space-y-4">
                   <div className="flex border-b border-gray-200 pb-4">
                     <span className="w-1/3 font-bold text-[#111] text-sm">Languages</span>
                     <span className="w-2/3 text-gray-600 text-sm">Indonesian - Native, English - Intermediate</span>
                   </div>
                   <div className="flex">
                     <span className="w-1/3 font-bold text-[#111] text-sm">Soft Skills</span>
                     <span className="w-2/3 text-gray-600 text-sm leading-relaxed">
                       Team Collaboration, Communication, Adaptability, Problem Solving, Time Management, Documentation, Attention to Detail, Analytical Thinking
                     </span>
                   </div>
                 </div>
              </div>
            </div>

            {/* Right: Education & Recognition */}
            <div id="education">
               <h2 className="text-3xl font-bold text-[#111] mb-12 border-b border-gray-300 pb-4">Academic Trajectory</h2>
               <div className="space-y-12 mb-16">
                 {/* Education 1 */}
                 <div className="relative pl-6 border-l border-gray-300">
                   <div className="absolute w-3 h-3 bg-[#f4f6f7] border-[3px] border-[#111] rounded-full -left-[6.5px] top-1"></div>
                   <span className="text-xs font-bold text-[#5c7a8c] uppercase tracking-widest mb-2 block">Sep 2023 – Present</span>
                   <h3 className="text-xl font-bold text-[#111] mb-1">D4 / Applied Bachelor Degree in Teknik Multimedia Digital</h3>
                   <p className="text-sm font-medium text-[#111]">Politeknik Negeri Jakarta</p>
                   <p className="text-sm text-gray-500 mb-4">Depok, Indonesia</p>
                   <div className="text-sm text-gray-600 leading-relaxed">
                     <span className="font-bold text-[#111]">Relevant Coursework:</span> Interactive Multimedia, UI/UX Design, 3D Modeling and Animation, Game Development, Web Programming, Mobile Programming, Database, Embedded System, IoT, Digital Multimedia Production.
                   </div>
                 </div>
                 
                 {/* Education 2 */}
                 <div className="relative pl-6 border-l border-gray-300">
                   <div className="absolute w-3 h-3 bg-[#f4f6f7] border-[3px] border-[#111] rounded-full -left-[6.5px] top-1"></div>
                   <span className="text-xs font-bold text-[#5c7a8c] uppercase tracking-widest mb-2 block">2020 – 2023</span>
                   <h3 className="text-xl font-bold text-[#111] mb-1">Senior High School</h3>
                   <p className="text-sm font-medium text-[#111]">SMA Regina Pacis Bogor</p>
                   <p className="text-sm text-gray-500">Bogor, Indonesia</p>
                 </div>
               </div>

               <h2 className="text-3xl font-bold text-[#111] mb-12 border-b border-gray-300 pb-4">Recognition / Training</h2>
               <div className="space-y-6">
                 <div className="p-8 bg-white border border-gray-200 rounded-[1rem] shadow-sm">
                   <span className="text-xs font-bold text-[#5c7a8c] uppercase tracking-widest mb-2 block">Jul 2025</span>
                   <h4 className="text-xl font-bold text-[#111] mb-1">Intermediate Multimedia Designer - Vocational School Graduate Academy</h4>
                   <p className="text-sm font-medium text-[#111]">Digital Talent Scholarship 2025</p>
                   <p className="text-sm text-gray-500 mb-4">BPSDMP Jakarta</p>
                   <p className="text-sm text-gray-600 leading-relaxed">
                     Completed a 24-hour training program covering multimedia design fundamentals, digital production, and applied creative workflow.
                   </p>
                 </div>
               </div>
            </div>

          </div>
        </section>

        {/* ACADEMIC TEAM EXPERIENCE */}
        <section className="bg-white py-24 md:py-32 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
             <div className="max-w-3xl">
               <h2 className="text-3xl font-bold text-[#111] mb-12 border-b border-gray-200 pb-4">Academic Team Experience</h2>
               <div className="space-y-4">
                 <h3 className="text-2xl font-bold text-[#111]">Semester-Based Multimedia Projects</h3>
                 <p className="text-sm font-bold text-[#5c7a8c] uppercase tracking-[0.1em]">2023 – Present • Politeknik Negeri Jakarta</p>
                 <p className="text-base font-medium text-[#111] pb-2">Project Contributor / Team Coordinator</p>
                 <p className="text-gray-600 leading-relaxed text-base">
                   Worked on team-based semester projects including simple websites, 2D/3D games, Unity educational games, IoT simulations with Arduino/ESP32, and multimedia applications.
                 </p>
                 <ul className="space-y-3 pt-2">
                   <li className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                     <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0"></span>
                     Adapted roles across concept development, design, development, testing, documentation, presentation, and problem-solving.
                   </li>
                   <li className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                     <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0"></span>
                     Contributed to project planning, technical implementation, team coordination, and academic presentation.
                   </li>
                 </ul>
               </div>
             </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-[#111] tracking-tight mb-8">Get in touch</h2>
              <p className="text-xl text-gray-800 leading-relaxed mb-4 max-w-md">
                Saya terbuka untuk kesempatan magang, kolaborasi akademik, dan pengembangan proyek digital interaktif.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
                Portfolio ini disusun sebagai ringkasan pengalaman proyek, skill, dan kesiapan saya untuk mengikuti program magang.
              </p>
            </div>
            
            <div className="space-y-6 pt-6 border-t border-gray-200">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.15em] mb-2">Direct Email</p>
                <a href="mailto:janalbireo123@gmail.com" className="text-xl sm:text-2xl font-bold text-[#111] hover:text-[#5c7a8c] transition-colors break-all">
                  janalbireo123@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.15em] mb-2">Location</p>
                <p className="text-xl sm:text-2xl font-bold text-[#111]">
                  Bogor, Indonesia
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#f4f6f7] p-10 md:p-14 rounded-2xl border border-gray-200 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-[#111] mb-8">Connect & Download</h3>
            <div className="flex flex-col gap-4">
              <a href="mailto:janalbireo123@gmail.com" className="w-full inline-flex items-center justify-center px-6 py-4 bg-[#111] text-white text-sm font-bold rounded-full hover:bg-gray-800 transition-colors shadow-sm">
                Email Me
              </a>
              <a href="https://linkedin.com/in/janalbireogd" target="_blank" rel="noreferrer" className="w-full inline-flex items-center justify-center px-6 py-4 bg-white text-[#111] border border-gray-200 text-sm font-bold rounded-full hover:border-gray-300 transition-colors shadow-sm">
                LinkedIn
              </a>
              <a href="https://github.com/janalbireo123" target="_blank" rel="noreferrer" className="w-full inline-flex items-center justify-center px-6 py-4 bg-white text-[#111] border border-gray-200 text-sm font-bold rounded-full hover:border-gray-300 transition-colors shadow-sm">
                GitHub
              </a>
              <a href="/CV_Jan_Albireo.pdf" download="CV_Jan_Albireo.pdf" target="_blank" rel="noreferrer" className="w-full mt-4 inline-flex items-center justify-center px-6 py-4 bg-transparent text-[#111] border-2 border-[#111] text-sm font-bold rounded-full hover:bg-gray-100 transition-colors gap-2">
                <Download className="w-4 h-4" /> Download CV
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-sm font-bold text-[#111] tracking-widest uppercase">
            JAN ALBIREO
          </p>
          <p className="text-sm text-gray-500">
            © 2026 Jan Albireo. Digital Multimedia Portfolio.
          </p>
          <div className="flex gap-6 items-center">
              <a href="mailto:janalbireo123@gmail.com" className="text-sm font-bold text-gray-500 hover:text-[#111] transition-colors">Email</a>
              <a href="https://linkedin.com/in/janalbireogd" target="_blank" rel="noreferrer" className="text-sm font-bold text-gray-500 hover:text-[#111] transition-colors">LinkedIn</a>
              <a href="https://github.com/janalbireo123" target="_blank" rel="noreferrer" className="text-sm font-bold text-gray-500 hover:text-[#111] transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
