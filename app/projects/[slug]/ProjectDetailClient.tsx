"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut, RefreshCcw, Maximize } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useAppContext } from "@/components/Providers";
import { projectsData } from "@/lib/projects-data";
import { useEffect, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

type Project = typeof projectsData[0];

export function ProjectDetailClient({ project, relatedProjects }: { project: Project; relatedProjects: Project[] }) {
  const { lang } = useAppContext();
  const [mounted, setMounted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-[#fafafa] dark:bg-slate-950"></div>;
  }

  const c = project.content[lang];
  const tags = project.tags[lang];
  const gallery = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const nextLightboxImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevLightboxImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

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

        {/* Hero image carousel */}
        <div className="mx-auto w-full max-w-screen-2xl px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 mb-16 lg:mb-24">
          <div 
            className="w-full aspect-video sm:aspect-[21/9] bg-slate-100 dark:bg-slate-900 rounded-3xl overflow-hidden relative border border-slate-200 dark:border-slate-800 group"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex w-full h-full transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
              {gallery.map((img, idx) => (
                <div 
                  key={idx} 
                  className="w-full h-full shrink-0 relative cursor-pointer"
                  onClick={() => openLightbox(idx)}
                >
                  <Image 
                    src={img} 
                    alt={`${c.title} - Image ${idx + 1}`} 
                    fill 
                    className={`object-cover ${
                      ["trackstudio-tracklabid", "university-website-redesign-android-app", "runcard-studio"].includes(project.slug) && idx === 0
                      ? "object-left"
                      : "object-center"
                    }`}
                    referrerPolicy="no-referrer"
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-center justify-center">
                    <Maximize className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 drop-shadow-md scale-50 group-hover:scale-100 transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            {gallery.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 dark:bg-slate-900/80 text-slate-900 dark:text-white backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 shadow-sm"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 dark:bg-slate-900/80 text-slate-900 dark:text-white backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 shadow-sm"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Dot Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-2 bg-slate-900/30 dark:bg-slate-900/60 backdrop-blur-md rounded-full">
                  {gallery.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`transition-all duration-300 rounded-full ${idx === currentImageIndex ? 'w-5 h-2 bg-white' : 'w-2 h-2 bg-white/50 hover:bg-white/80'}`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
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
                    <div 
                      key={i} 
                      className="relative aspect-video rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 cursor-pointer group"
                      onClick={() => openLightbox(i)}
                    >
                      <Image 
                        src={img} 
                        alt="Project gallery" 
                        fill 
                        className={`object-cover group-hover:scale-105 transition-transform duration-500 ${
                          ["trackstudio-tracklabid", "university-website-redesign-android-app", "runcard-studio"].includes(project.slug) && i === 0
                          ? "object-left"
                          : "object-center"
                        }`} 
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <Maximize className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 drop-shadow-md scale-50 group-hover:scale-100 transition-all duration-300" />
                      </div>
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
                        className={`object-cover transition duration-700 ease-out group-hover:scale-105 ${
                          ["trackstudio-tracklabid", "university-website-redesign-android-app", "runcard-studio"].includes(rp.slug)
                          ? "object-left"
                          : "object-center"
                        }`}
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

      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm">
          {/* Top Controls */}
          <div className="absolute top-0 left-0 w-full p-4 flex items-center justify-between z-[110]">
            <div className="text-white text-sm font-bold opacity-70 tracking-widest uppercase">
              {lightboxIndex + 1} / {gallery.length}
            </div>
            <button
              onClick={closeLightbox}
              className="p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          <TransformWrapper
            initialScale={1}
            minScale={1}
            maxScale={4}
            centerOnInit
            centerZoomedOut
          >
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                {/* Bottom Zoom Controls */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full z-[110]">
                  <button onClick={() => zoomOut()} className="p-2 text-white/80 hover:text-white transition-colors" aria-label="Zoom out">
                    <ZoomOut className="w-6 h-6" />
                  </button>
                  <button onClick={() => resetTransform()} className="p-2 text-white/80 hover:text-white transition-colors" aria-label="Reset zoom">
                    <RefreshCcw className="w-5 h-5" />
                  </button>
                  <button onClick={() => zoomIn()} className="p-2 text-white/80 hover:text-white transition-colors" aria-label="Zoom in">
                    <ZoomIn className="w-6 h-6" />
                  </button>
                </div>

                <div className="absolute inset-0 w-full h-full flex items-center justify-center text-center cursor-grab active:cursor-grabbing">
                  <TransformComponent wrapperStyle={{ width: "100%", height: "100%" }} contentStyle={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div className="relative w-screen h-screen">
                      <Image
                        src={gallery[lightboxIndex]}
                        alt="Enlarged view"
                        fill
                        className="object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </TransformComponent>
                </div>
              </>
            )}
          </TransformWrapper>

          {/* Navigation */}
          {gallery.length > 1 && (
            <>
              <button
                onClick={prevLightboxImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/50 hover:text-white transition-colors z-[110]"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-10 h-10" />
              </button>
              <button
                onClick={nextLightboxImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/50 hover:text-white transition-colors z-[110]"
                aria-label="Next image"
              >
                <ChevronRight className="w-10 h-10" />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
