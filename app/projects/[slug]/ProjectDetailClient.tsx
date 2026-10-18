"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut, RefreshCcw, Maximize, ArrowUpRight } from "lucide-react";
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
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-[#fafafa] dark:bg-slate-950" />;
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
    // eslint-disable-next-line react-hooks/immutability
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
      <div className="mb-10">
        <h3 className="display-sm text-base sm:text-lg text-slate-950 dark:text-white uppercase pb-2 border-b border-slate-200 dark:border-slate-800 mb-4 flex items-center justify-between">
          <span>{title}</span>
          <span className="w-2 h-2 rounded-full bg-sky-500" />
        </h3>
        {Array.isArray(content) ? (
          <ul className="space-y-2.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {content.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-sky-500 mt-2 shrink-0 rounded-full" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
            {content}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen w-full bg-[#fafafa] dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans selection:bg-sky-500 selection:text-white scroll-smooth transition-colors duration-300">
      <Header />

      <main className="pb-20">
        {/* Top Breadcrumb & Presentation Bar */}
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 py-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <Link
            href="/#projects"
            className="meta inline-flex items-center gap-2 text-sky-700 dark:text-sky-400 font-bold hover:underline group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            {t.back}
          </Link>
          <span className="meta text-slate-500 dark:text-slate-400 hidden sm:inline">
            ARCHIVE // {project.slug.toUpperCase()}
          </span>
        </div>

        {/* Hero Title */}
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 pt-10 pb-8 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-4xl space-y-3">
            <span className="meta text-sky-700 dark:text-sky-400 font-bold block">
              {c.category} · {c.period}
            </span>
            <h1 className="display text-4xl sm:text-5xl md:text-6xl text-slate-950 dark:text-white leading-[0.88]">
              {c.title}
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-normal pt-1">
              {c.subtitle}
            </p>
          </div>
        </div>

        {/* Hero Image Carousel - Full Vivid Color */}
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 py-10 border-b border-slate-200 dark:border-slate-800">
          <div
            className="w-full aspect-video sm:aspect-[21/9] bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 overflow-hidden relative group shadow-md"
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
                    alt={`${c.title} - Plate ${idx + 1}`}
                    fill
                    className={`object-cover ${
                      ["trackstudio-tracklabid", "university-website-redesign-android-app", "runcard-studio"].includes(project.slug) && idx === 0
                        ? "object-left"
                        : "object-center"
                    }`}
                    referrerPolicy="no-referrer"
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
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
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-slate-300 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white hover:bg-sky-600 hover:text-white transition-colors opacity-0 group-hover:opacity-100 rounded-sm"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-slate-300 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white hover:bg-sky-600 hover:text-white transition-colors opacity-0 group-hover:opacity-100 rounded-sm"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Counter Tag */}
                <div className="absolute bottom-4 left-4 meta border border-sky-300 dark:border-sky-800 bg-white/95 dark:bg-slate-900/95 px-3 py-1.5 text-sky-800 dark:text-sky-300 font-bold rounded-sm shadow-xs">
                  PLATE {currentImageIndex + 1} / {gallery.length}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Content Layout (Metadata Left, Details Right) */}
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 py-12 grid lg:grid-cols-[1fr_2.4fr] gap-12 lg:gap-16">
          {/* Metadata Sidebar */}
          <div>
            <div className="sticky top-28 space-y-6 border border-slate-200 dark:border-slate-800 p-6 bg-white dark:bg-slate-900 shadow-xs">
              <span className="meta text-sky-700 dark:text-sky-400 font-bold block border-b border-slate-200 dark:border-slate-800 pb-2">
                PROJECT METRICS
              </span>

              <div>
                <p className="meta text-slate-500 dark:text-slate-400 mb-1">{t.role}</p>
                <p className="display-sm text-base text-slate-950 dark:text-white">{c.role}</p>
              </div>

              <div>
                <p className="meta text-slate-500 dark:text-slate-400 mb-1">{t.category}</p>
                <p className="display-sm text-base text-slate-950 dark:text-white">{c.category}</p>
              </div>

              <div>
                <p className="meta text-slate-500 dark:text-slate-400 mb-1">{t.period}</p>
                <p className="display-sm text-base text-slate-950 dark:text-white">{c.period}</p>
              </div>

              <div>
                <p className="meta text-slate-500 dark:text-slate-400 mb-1">{t.status}</p>
                <span className="meta border border-sky-300 dark:border-sky-800 bg-sky-50 dark:bg-sky-950/40 px-2.5 py-0.5 text-sky-800 dark:text-sky-300 font-bold inline-block mt-1 rounded-xs">
                  {c.status}
                </span>
              </div>

              {"link" in project && project.link && (
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                  <p className="meta text-sky-700 dark:text-sky-400 font-bold mb-2">EXPERIENCE LINK</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-solid w-full text-center"
                  >
                    <span>
                      {project.link.includes("roblox.com")
                        ? "PLAY EXPERIENCE"
                        : "VISIT PROJECT"}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                <p className="meta text-slate-500 dark:text-slate-400 mb-2">{t.tools}</p>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag, i) => (
                    <span
                      key={i}
                      className="meta px-2.5 py-1 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] rounded-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div>
            {renderSection(t.overview, c.overview)}
            {renderSection(t.context, c.context)}
            {renderSection(t.contribution, c.contribution)}
            {renderSection(t.keyFeatures, c.keyFeatures)}
            {renderSection(t.process, c.process)}

            {/* Gallery Grid - Full Color */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="mb-12">
                <h3 className="display-sm text-base sm:text-lg text-slate-950 dark:text-white uppercase pb-2 border-b border-slate-200 dark:border-slate-800 mb-4 flex items-center justify-between">
                  <span>GALLERY PLATES</span>
                  <span className="w-2 h-2 rounded-full bg-sky-500" />
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.gallery.map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-video border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 overflow-hidden cursor-pointer group shadow-xs hover:border-sky-500 transition-colors"
                      onClick={() => openLightbox(i)}
                    >
                      <Image
                        src={img}
                        alt="Project plate"
                        fill
                        className={`object-cover group-hover:scale-105 transition-transform duration-500 ${
                          ["trackstudio-tracklabid", "university-website-redesign-android-app", "runcard-studio"].includes(project.slug) && i === 0
                            ? "object-left"
                            : "object-center"
                        }`}
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
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

      {/* Related Projects - Full Color */}
      {relatedProjects.length > 0 && (
        <section className="bg-slate-50/60 dark:bg-slate-900/60 py-16 md:py-20 border-t border-slate-200 dark:border-slate-800">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="flex items-center justify-between pb-3 mb-8 border-b border-slate-200 dark:border-slate-800">
              <span className="meta text-sky-700 dark:text-sky-400 font-bold">
                {t.related}
              </span>
              <span className="meta text-slate-500 dark:text-slate-400">
                EXPLORE MORE
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((rp) => {
                const rpC = rp.content[lang];
                return (
                  <Link
                    href={`/projects/${rp.slug}`}
                    key={rp.id}
                    className="group flex flex-col border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-sky-500 transition-colors shadow-xs"
                  >
                    <div className="relative aspect-[16/10] w-full bg-slate-100 dark:bg-slate-800 overflow-hidden border-b border-slate-200 dark:border-slate-800">
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
                    <div className="p-5 flex flex-col flex-1">
                      <p className="meta text-slate-500 dark:text-slate-400 text-[10px] mb-1">
                        {rpC.category}
                      </p>
                      <h4 className="display-sm text-lg text-slate-950 dark:text-white line-clamp-2 leading-snug mb-3 group-hover:text-sky-600 dark:group-hover:text-sky-400 group-hover:underline transition-colors">
                        {rpC.title}
                      </h4>
                      <span className="mt-auto meta text-sky-600 dark:text-sky-400 font-bold inline-flex items-center gap-1 group-hover:underline">
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

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm">
          {/* Top Controls */}
          <div className="absolute top-0 left-0 w-full p-4 flex items-center justify-between z-[110]">
            <div className="meta text-white text-xs opacity-75">
              PLATE {lightboxIndex + 1} / {gallery.length}
            </div>
            <button
              onClick={closeLightbox}
              className="p-2 text-white/70 hover:text-white border border-white/20 hover:border-white transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
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
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 z-[110]">
                  <button onClick={() => zoomOut()} className="p-2 text-white/80 hover:text-white transition-colors" aria-label="Zoom out">
                    <ZoomOut className="w-5 h-5" />
                  </button>
                  <button onClick={() => resetTransform()} className="p-2 text-white/80 hover:text-white transition-colors" aria-label="Reset zoom">
                    <RefreshCcw className="w-4 h-4" />
                  </button>
                  <button onClick={() => zoomIn()} className="p-2 text-white/80 hover:text-white transition-colors" aria-label="Zoom in">
                    <ZoomIn className="w-5 h-5" />
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
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white border border-white/20 hover:border-white transition-colors z-[110]"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={nextLightboxImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white border border-white/20 hover:border-white transition-colors z-[110]"
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
