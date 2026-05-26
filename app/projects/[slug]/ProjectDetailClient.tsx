"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useAppContext } from "@/components/Providers";
import { projectsData } from "@/lib/projects-data";
import { useEffect, useState } from "react";

type Project = typeof projectsData[0];

export function ProjectDetailClient({ project, relatedProjects }: { project: Project; relatedProjects: Project[] }) {
  const { lang } = useAppContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-[#fafafa] dark:bg-slate-950"></div>;
  }

  const c = project.content[lang];
  const tags = project.tags[lang];

  const dict = {
    en: {
      back: "Back to complete work",
      role: "Role",
      period: "Period",
      category: "Category",
      status: "Status",
      related: "Related Projects",
      overview: "Overview",
      context: "Context",
      contribution: "Contribution",
      keyFeatures: "Key Features",
      process: "Process",
      tools: "Tools & Tech",
      outcome: "Outcome",
      learning: "Learning",
      viewCase: "View case study →"
    },
    id: {
      back: "Kembali ke semua karya",
      role: "Peran",
      period: "Periode",
      category: "Kategori",
      status: "Status",
      related: "Proyek Terkait",
      overview: "Ringkasan",
      context: "Konteks",
      contribution: "Kontribusi",
      keyFeatures: "Fitur Utama",
      process: "Proses",
      tools: "Alat & Teknologi",
      outcome: "Hasil",
      learning: "Pembelajaran",
      viewCase: "Lihat detail proyek →"
    }
  };

  const t = dict[lang];

  const renderSection = (title: string, content?: string | string[]) => {
    if (!content) return null;
    return (
      <div className="mb-12">
        <h3 className="text-sm font-bold text-slate-950 dark:text-white uppercase tracking-widest mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">
          {title}
        </h3>
        {Array.isArray(content) ? (
          <ul className="list-disc leading-relaxed text-[15px] space-y-2 text-slate-700 dark:text-slate-300 pl-5">
            {content.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ) : (
          <div className="leading-relaxed text-[15px] text-slate-700 dark:text-slate-300 whitespace-pre-wrap">
            {content}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen w-full bg-[#fafafa] dark:bg-slate-950 text-slate-600 dark:text-slate-400 font-sans selection:bg-sky-100 selection:text-sky-900 scroll-smooth">
      <Header />

      <main className="pb-24">
        {/* Back navigation */}
        <div className="mx-auto w-full max-w-screen-2xl px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 lg:py-10">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-950 dark:hover:text-white transition-colors group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            {t.back}
          </Link>
        </div>

        {/* Hero title */}
        <div className="mx-auto w-full max-w-screen-2xl px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 mb-8 lg:mb-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-950 dark:text-white tracking-tight leading-tight mb-4">
              {c.title}
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-serif italic">
              {c.subtitle}
            </p>
          </div>
        </div>

        {/* Hero image placeholder or actual image */}
        <div className="mx-auto w-full max-w-screen-2xl px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 mb-16 lg:mb-24">
          <div className="w-full aspect-video sm:aspect-[21/9] bg-slate-100 dark:bg-slate-900 rounded-3xl overflow-hidden relative border border-slate-200 dark:border-slate-800">
            <Image 
              src={project.image} 
              alt={c.title} 
              fill 
              className="object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
        </div>

        {/* Content Layout (Metadata Left, Details Right) */}
        <div className="mx-auto w-full max-w-screen-2xl px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 grid lg:grid-cols-[1fr_2.5fr] gap-12 lg:gap-24">
          
          {/* Metadata Sidebar */}
          <div>
            <div className="sticky top-32 space-y-8 p-6 lg:p-0 bg-white/50 lg:bg-transparent dark:bg-slate-900/50 lg:dark:bg-transparent rounded-2xl lg:rounded-none border border-slate-200 lg:border-none dark:border-slate-800">
              
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">{t.role}</p>
                <p className="text-sm font-semibold text-slate-950 dark:text-white">{c.role}</p>
              </div>
              
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">{t.category}</p>
                <p className="text-sm font-semibold text-slate-950 dark:text-white">{c.category}</p>
              </div>
              
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">{t.period}</p>
                <p className="text-sm font-semibold text-slate-950 dark:text-white">{c.period}</p>
              </div>
              
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">{t.status}</p>
                <span className="inline-flex items-center px-2 py-0.5 bg-sky-50 dark:bg-sky-900/30 border border-sky-100 dark:border-sky-800/50 rounded-md text-[10px] font-bold text-sky-800 dark:text-sky-300 uppercase tracking-widest mt-1">
                  {c.status}
                </span>
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">{t.tools}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, i) => (
                    <span key={i} className="text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-md font-medium border border-slate-200 dark:border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
            </div>
          </div>

          {/* Main Content Area */}
          <div className="max-w-3xl">
            {renderSection(t.overview, c.overview)}
            {renderSection(t.context, c.context)}
            {renderSection(t.contribution, c.contribution)}
            {renderSection(t.keyFeatures, c.keyFeatures)}
            {renderSection(t.process, c.process)}
            
            {/* Gallery (If Any) */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="mb-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.gallery.map((img, i) => (
                    <div key={i} className="relative aspect-video rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      <Image 
                        src={img} 
                        alt="Project gallery" 
                        fill 
                        className="object-cover hover:scale-105 transition-transform duration-500" 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {renderSection(t.outcome, c.outcome)}
            {renderSection(t.learning, c.learning)}
          </div>
        </div>
      </main>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="bg-white dark:bg-slate-900 py-16 lg:py-24 border-t border-slate-200 dark:border-slate-800 transition-colors">
          <div className="mx-auto w-full max-w-screen-2xl px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <h2 className="text-2xl font-bold text-slate-950 dark:text-white tracking-tight mb-8">
              {t.related}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((rp) => {
                const rpC = rp.content[lang];
                return (
                  <Link href={`/projects/${rp.slug}`} key={rp.id} className="group flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-[#fafafa] dark:bg-slate-950 overflow-hidden hover:border-sky-300 dark:hover:border-sky-700 transition-colors">
                    <div className="relative aspect-video w-full bg-slate-100 dark:bg-slate-800 overflow-hidden border-b border-transparent group-hover:border-slate-100 dark:group-hover:border-slate-800 transition-colors">
                      <Image
                        src={rp.image}
                        alt={rpC.title}
                        fill
                        className="object-cover transition duration-700 ease-out group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">{rpC.category}</p>
                      <h4 className="text-[15px] font-bold text-slate-950 dark:text-white line-clamp-2 leading-snug mb-3">
                        {rpC.title}
                      </h4>
                      <span className="mt-auto text-[11px] font-bold text-sky-600 dark:text-sky-400 group-hover:underline">
                        {t.viewCase}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
