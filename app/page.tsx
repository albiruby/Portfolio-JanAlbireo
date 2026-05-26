"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Download, Sun, Moon, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { content } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useAppContext } from "@/components/Providers";
import { projectsData } from "@/lib/projects-data";

export default function PortfolioPage() {
  const { lang } = useAppContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return empty placeholder with same background to prevent hydration mismatch and layout shift
    return <div className="min-h-screen bg-[#fafafa] dark:bg-slate-950"></div>;
  }

  const t = content[lang];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#fafafa] dark:bg-slate-950 text-slate-600 dark:text-slate-400 font-sans selection:bg-sky-100 selection:text-sky-900 scroll-smooth relative transition-colors duration-300">
      {/* Subtle Noise Texture Overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.025] dark:opacity-[0.04] mix-blend-multiply dark:mix-blend-overlay z-50"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      ></div>

      <Header />

      <main>
        {/* HERO SECTION */}
        <section
          id="home"
          className="relative mx-auto w-full max-w-screen-2xl px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-16 md:pt-20 lg:pt-24 pb-20 md:pb-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 sm:gap-12 lg:gap-16 items-center"
        >
          {/* Subtle faint dotted background for Hero */}
          <div className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#64748b_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
          {/* Soft pale cyan radial gradient on the right */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-100/40 dark:bg-cyan-900/10 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>

          <div className="space-y-6 sm:space-y-8 relative z-10">
            <div className="flex flex-col items-start gap-4">
              <span className="text-[10px] sm:text-[11px] font-bold text-sky-700 dark:text-sky-400 uppercase tracking-[0.2em]">
                {t.hero.intro}
              </span>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-50 dark:bg-sky-900/30 border border-sky-100/50 dark:border-sky-800/50 rounded-full text-[10px] sm:text-[11px] font-bold text-sky-800 dark:text-sky-300 uppercase tracking-widest shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-sky-400"></span>
                {t.hero.badge}
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-bold tracking-tight text-slate-950 dark:text-white leading-[1.1] sm:leading-[1.05]">
                {t.hero.headingText1}
                <span className="relative inline-block mx-1.5">
                  <span className="relative z-10 text-sky-800 dark:text-sky-400 focus:outline-none">
                    {t.hero.headingHighlight}
                  </span>
                  <span className="absolute bottom-1 sm:bottom-1.5 left-0 w-full h-2 sm:h-3 bg-sky-100 dark:bg-sky-900/40 -z-10"></span>
                </span>
                {t.hero.headingText2}
              </h1>

              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-slate-500 dark:text-slate-400 leading-snug">
                Jan Albireo — {t.hero.role1}{" "}
                <span className="text-slate-800 dark:text-slate-200">
                  {t.hero.role2}
                </span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl border-l-2 border-slate-200 dark:border-slate-800 pl-4">
              {t.hero.description}
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-slate-950 dark:bg-slate-100 text-white dark:text-slate-950 text-[12px] sm:text-[13px] font-bold rounded-full hover:bg-slate-800 dark:hover:bg-white transition-colors shadow-sm gap-2"
              >
                {t.hero.primaryCta} <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="/CV_Jan_Albireo.pdf"
                download="CV_Jan_Albireo.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-transparent border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-[12px] sm:text-[13px] font-bold rounded-full hover:border-sky-600 hover:text-sky-700 dark:hover:border-sky-500 dark:hover:text-sky-400 transition-colors gap-2"
              >
                {t.hero.secondaryCta} <Download className="w-4 h-4" />
              </a>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 sm:pt-6 pb-2">
              {t.hero.pills.map((pill, idx) => (
                <span
                  key={idx}
                  className="text-[10px] sm:text-[11px] font-medium text-slate-600 dark:text-slate-300 uppercase tracking-widest px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 rounded-full shadow-sm"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-md mx-auto z-10 flex flex-col items-center mt-4 lg:mt-0">
            <div className="relative w-full aspect-[4/5] max-h-[420px] rounded-[1.5rem] overflow-hidden bg-white dark:bg-slate-900 shadow-xl shadow-sky-900/5 dark:shadow-none ring-1 ring-slate-200/50 dark:ring-slate-800">
              <Image
                src="/img-profil.jpg"
                alt="Jan Albireo"
                fill
                priority
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 rounded-[1.5rem] ring-1 ring-inset ring-black/5 dark:ring-white/5 pointer-events-none"></div>
            </div>
            <p className="text-[10px] sm:text-[11px] font-medium text-slate-400 dark:text-slate-500 tracking-widest uppercase mt-4 text-center">
              {t.hero.portfolioYear}
            </p>
          </div>
        </section>

        {/* PROFILE SNAPSHOT */}
        <section className="bg-white dark:bg-slate-950 py-16 md:py-20 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
          <div className="mx-auto w-full max-w-screen-2xl px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {t.snapshot.map((snap, idx) => (
              <div
                key={idx}
                className="p-6 rounded-[1rem] bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 shadow-sm hover:border-sky-200 dark:hover:border-sky-800 transition-colors"
              >
                <span className="text-[10px] font-bold text-sky-700 dark:text-sky-400 uppercase tracking-widest block mb-3">
                  0{idx + 1}
                </span>
                <h4 className="text-[15px] font-bold text-slate-950 dark:text-white mb-2">
                  {snap.title}
                </h4>
                <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  {snap.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section
          id="about"
          className="mx-auto w-full max-w-screen-2xl px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-16 md:py-24 grid md:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start"
        >
          <div className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm mx-auto aspect-[3/4] md:aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-slate-100 dark:bg-slate-900 shadow-xl shadow-sky-900/5 dark:shadow-none border border-slate-200/50 dark:border-slate-800">
            <Image
              src="/img-profil.jpg"
              alt="Jan Albireo"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-bold text-sky-700 dark:text-sky-400 uppercase tracking-[0.2em]">
                {t.about.section}
              </span>
              <div className="h-px bg-slate-200 dark:bg-slate-800 flex-grow max-w-[50px]"></div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-950 dark:text-white leading-[1.2] tracking-tight">
              {t.about.headline}
            </h3>
            <div className="h-1 w-12 bg-sky-200 dark:bg-sky-800 rounded-full"></div>
            <div className="text-[15px] md:text-base text-slate-600 dark:text-slate-400 leading-relaxed space-y-6">
              {t.about.paragraphs &&
                t.about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="pt-6 sm:pt-8 border-t border-slate-200 dark:border-slate-800">
              <p className="text-[12px] text-slate-500 dark:text-slate-500 leading-relaxed italic">
                {t.about.aiNote}
              </p>
            </div>
          </div>
        </section>

        {/* INTERNSHIP INTEREST */}
        <section className="bg-slate-50 dark:bg-slate-900/40 py-16 md:py-24 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
          <div className="mx-auto w-full max-w-screen-2xl px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 grid md:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-[10px] font-bold text-sky-700 dark:text-sky-400 uppercase tracking-[0.2em]">
                  {t.internship.section}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
                {t.internship.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[14px] sm:text-[15px] md:text-base pt-2 border-t border-slate-200 dark:border-slate-800">
                {t.internship.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {t.internship.roles.map((role, idx) => (
                <span
                  key={idx}
                  className="px-4 sm:px-5 py-2 sm:py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium text-[12px] sm:text-[13px] rounded-full text-center shadow-sm"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SELECTED WORKS SECTION */}
        <section
          id="projects"
          className="bg-slate-50 dark:bg-slate-900/50 py-20 lg:py-24 border-y border-slate-200 dark:border-slate-800 relative transition-colors duration-300"
        >
          <div className="mx-auto w-full max-w-screen-2xl px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
            <div className="mb-12 max-w-3xl">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[10px] font-bold text-sky-700 dark:text-sky-400 uppercase tracking-[0.2em]">
                  {t.work.section}
                </span>
                <div className="h-px bg-slate-200 dark:bg-slate-800 flex-grow max-w-[100px]"></div>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-950 dark:text-white tracking-tight mb-4">
                {t.work.title}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                {t.work.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projectsData.map((project, idx) => {
                const projectContent = project.content[lang];
                const projectTags = project.tags[lang];
                const displayTags = projectTags.slice(0, 3);
                const remainingTags = projectTags.length - 3;

                return (
                  <Link
                    key={project.id}
                    href={`/projects/${project.slug}`}
                    className="group block h-full flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 overflow-hidden cursor-pointer"
                  >
                    <article className="flex h-full min-h-[430px] flex-col">
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0 border-b border-transparent group-hover:border-slate-100 dark:group-hover:border-slate-800 transition-colors">
                        <Image
                          src={project.image}
                          alt={projectContent.title}
                          fill
                          className={`h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105 ${
                            [
                              "trackstudio-tracklabid",
                              "university-website-redesign-android-app",
                              "runcard-studio",
                            ].includes(project.slug)
                              ? "object-left"
                              : "object-center"
                          }`}
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      <div className="flex flex-1 flex-col p-5">
                        <div className="mb-3 flex items-center justify-between gap-2">
                          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest line-clamp-1">
                            {projectContent.category} · {projectContent.period}
                          </p>
                          <span className="shrink-0 inline-flex items-center px-2 py-0.5 bg-sky-50 dark:bg-sky-900/30 border border-sky-100 dark:border-sky-800/50 rounded-md text-[9px] font-bold text-sky-800 dark:text-sky-300 uppercase tracking-widest">
                            {projectContent.status}
                          </span>
                        </div>

                        <h3 className="mb-2 text-xl font-bold text-slate-950 dark:text-white leading-tight flex items-start justify-between gap-2">
                          <span className="line-clamp-2">
                            {projectContent.title}
                          </span>
                        </h3>

                        <div className="mb-4 text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                          {projectContent.overview}
                        </div>

                        <div className="mb-4 space-y-1.5 flex-1">
                          <p className="text-xs flex gap-1.5">
                            <span className="font-semibold text-slate-900 dark:text-slate-200 shrink-0">
                              {t.work.roleLabel}
                            </span>{" "}
                            <span className="text-slate-600 dark:text-slate-400 line-clamp-1">
                              {projectContent.role}
                            </span>
                          </p>
                          <p className="text-xs flex flex-col gap-0.5">
                            <span className="font-semibold text-slate-900 dark:text-slate-200">
                              {t.work.contributionLabel}
                            </span>{" "}
                            <span className="text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                              {projectContent.contribution}
                            </span>
                          </p>
                          {projectContent.interestArea && (
                            <p className="text-xs flex flex-col gap-0.5">
                              <span className="font-semibold text-slate-900 dark:text-slate-200">
                                {t.work.interestAreaLabel}
                              </span>{" "}
                              <span className="text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                                {projectContent.interestArea}
                              </span>
                            </p>
                          )}
                        </div>

                        <div className="pt-4 flex flex-col gap-3 mt-auto border-t border-slate-100 dark:border-slate-800">
                          <div className="flex flex-wrap gap-1.5">
                            {displayTags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="text-[10px] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-md font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                            {remainingTags > 0 && (
                              <span className="text-[10px] bg-slate-50 dark:bg-slate-900 text-slate-500 px-2 py-1 rounded-md font-bold text-slate-500">
                                +{remainingTags} {t.work.moreLabel}
                              </span>
                            )}
                          </div>
                          <span className="font-medium text-[13px] text-sky-600 dark:text-sky-400 flex items-center group-hover:underline">
                            {lang === "en"
                              ? "View case study →"
                              : "Lihat detail proyek →"}
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* SKILLS & EDUCATION */}
        <section
          id="skills"
          className="bg-white dark:bg-slate-950 py-20 lg:py-24 transition-colors duration-300"
        >
          <div className="mx-auto w-full max-w-screen-2xl px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24">
            {/* Left: Skills */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[10px] font-bold text-sky-700 dark:text-sky-400 uppercase tracking-[0.2em]">
                  {t.skills.section}
                </span>
                <div className="h-px bg-slate-200 dark:bg-slate-800 flex-grow max-w-[50px]"></div>
              </div>
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white mb-10 pb-4 border-b border-slate-200 dark:border-slate-800">
                {t.skills.title}
              </h2>

              <div className="space-y-6">
                {t.skills.categories.map((cat, idx) => (
                  <div
                    key={idx}
                    className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-200 dark:hover:border-sky-700 transition-colors rounded-[1rem] shadow-sm group"
                  >
                    <div className="w-10 h-10 rounded-full bg-sky-50 dark:bg-sky-900/30 flex items-center justify-center mb-6 text-sky-600 dark:text-sky-400 group-hover:scale-110 transition-transform">
                      <span className="w-3 h-3 rounded-full bg-sky-400 dark:bg-sky-500"></span>
                    </div>
                    <h4 className="font-bold text-slate-950 dark:text-white text-lg mb-4">
                      {cat.name}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((s, i) => {
                        // Distinct style for first category just for variety like original
                        if (idx === 0) {
                          return (
                            <span
                              key={i}
                              className="text-[11px] bg-sky-50 dark:bg-sky-900/30 text-sky-800 dark:text-sky-300 border border-sky-100 dark:border-sky-800 px-3 py-1 rounded-full font-medium"
                            >
                              {s}
                            </span>
                          );
                        }
                        return (
                          <span
                            key={i}
                            className="text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 px-3 py-1 rounded-full font-medium"
                          >
                            {s}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {/* Compact list */}
                <div className="pt-6 space-y-4">
                  <div className="flex border-b border-slate-200 dark:border-slate-800 pb-4">
                    <span className="w-1/3 font-medium text-slate-950 dark:text-white text-[13px] uppercase tracking-widest">
                      {t.skills.languagesLbl}
                    </span>
                    <span className="w-2/3 text-slate-600 dark:text-slate-400 text-[13px]">
                      {t.skills.languagesVal}
                    </span>
                  </div>
                  <div className="flex">
                    <span className="w-1/3 font-medium text-slate-950 dark:text-white text-[13px] uppercase tracking-widest">
                      {t.skills.softSkillsLbl}
                    </span>
                    <span className="w-2/3 text-slate-600 dark:text-slate-400 text-[13px] leading-relaxed">
                      {t.skills.softSkillsVal}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Education & Recognition */}
            <div id="education">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[10px] font-bold text-sky-700 dark:text-sky-400 uppercase tracking-[0.2em]">
                  {t.education.section}
                </span>
                <div className="h-px bg-slate-200 dark:bg-slate-800 flex-grow max-w-[50px]"></div>
              </div>
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white mb-10 pb-4 border-b border-slate-200 dark:border-slate-800">
                {t.education.title}
              </h2>

              <div className="space-y-8 mb-16">
                {t.education.items.map((ed, i) => (
                  <div
                    key={i}
                    className="relative pl-8 md:pl-10 border-l border-slate-200 dark:border-slate-800 group/timeline"
                  >
                    <div className="absolute w-[11px] h-[11px] bg-slate-50 dark:bg-slate-950 border-2 border-sky-400 dark:border-sky-500 rounded-full -left-[6px] top-6 transition-colors group-hover/timeline:bg-sky-100 dark:group-hover/timeline:bg-sky-900/50"></div>

                    <article className="rounded-2xl border border-slate-200 bg-white/80 p-6 md:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/80">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                        <span className="text-xs font-bold text-sky-700 dark:text-sky-400 uppercase tracking-[0.2em] shrink-0">
                          {ed.period}
                        </span>
                        {ed.badge && (
                          <span
                            className={`inline-flex items-center px-2.5 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-widest shrink-0 w-fit ${i === 0 ? "bg-sky-50 text-sky-700 border border-sky-100 dark:bg-sky-900/40 dark:text-sky-300 dark:border-sky-800/60" : "bg-slate-100 text-slate-600 border border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700"}`}
                          >
                            {ed.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl md:text-[28px] font-bold tracking-tight text-slate-950 dark:text-white mb-2 leading-tight">
                        {ed.school}
                      </h3>
                      <h4 className="text-base md:text-lg font-medium text-slate-700 dark:text-slate-300 mb-2">
                        {ed.degree}
                      </h4>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-6">
                        {ed.location}
                      </p>

                      {ed.relevantCourseworkText && (
                        <div className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-900/50 p-5 rounded-xl border border-slate-100 dark:border-slate-800">
                          <span className="font-bold text-slate-900 dark:text-slate-200 block mb-1.5">
                            {ed.relevantCourseworkText}
                          </span>
                          {ed.relevantCourseworkValue}
                        </div>
                      )}
                    </article>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-slate-950 dark:text-white mb-10 pb-4 border-b border-slate-200 dark:border-slate-800">
                {t.certification.title}
              </h2>
              <div className="space-y-6">
                {t.certification.items.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 border-l-4 border-l-sky-400 dark:border-l-sky-500 rounded-[1rem] shadow-sm"
                  >
                    <span className="text-[10px] font-bold text-sky-700 dark:text-sky-400 uppercase tracking-widest mb-2 block">
                      {cert.period}
                    </span>
                    <h4 className="text-lg font-bold text-slate-950 dark:text-white mb-1 leading-snug">
                      {cert.program}
                    </h4>
                    <p className="text-[13px] font-medium text-slate-800 dark:text-slate-300">
                      {cert.organizer}
                    </p>
                    <p className="text-[12px] text-slate-500 dark:text-slate-400 mb-4">
                      {cert.location}
                    </p>
                    <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-slate-950 dark:text-white mt-16 mb-10 pb-4 border-b border-slate-200 dark:border-slate-800">
                {t.academicExperience.title}
              </h2>
              <div className="space-y-6">
                {t.academicExperience.items.map((exp, idx) => (
                  <div
                    key={idx}
                    className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 border-l-4 border-l-slate-400 dark:border-l-slate-500 rounded-[1rem] shadow-sm"
                  >
                    <span className="text-[10px] font-bold text-sky-700 dark:text-sky-400 uppercase tracking-widest mb-2 block">
                      {exp.period}
                    </span>
                    <h4 className="text-lg font-bold text-slate-950 dark:text-white mb-1 leading-snug">
                      {exp.title}
                    </h4>
                    <p className="text-[13px] font-medium text-slate-800 dark:text-slate-300">
                      {exp.role}
                    </p>
                    <p className="text-[12px] text-slate-500 dark:text-slate-400 mb-4">
                      {exp.location}
                    </p>
                    <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-[12px] leading-relaxed"
                        >
                          <span className="w-1 h-1 rounded-full bg-slate-400 mt-2 shrink-0"></span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="relative mx-auto w-full max-w-screen-2xl px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-20 md:py-24 grid md:grid-cols-2 gap-12 lg:gap-16 items-start border-t border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-300"
        >
          {/* Subtle contact background gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-50/50 dark:from-cyan-900/10 via-transparent to-transparent pointer-events-none -z-10"></div>

          <div className="space-y-12 relative z-10">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] font-bold text-sky-700 dark:text-sky-400 uppercase tracking-[0.2em]">
                  {t.contact.section}
                </span>
                <div className="h-px bg-slate-200 dark:bg-slate-800 flex-grow max-w-[50px]"></div>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-950 dark:text-white tracking-tight mb-8">
                {t.contact.title}
              </h2>
              <p className="text-[15px] md:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-4 max-w-md">
                {t.contact.subtitle}
              </p>
              <p className="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
                {t.contact.microcopy}
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-slate-200/60 dark:border-slate-800/60">
              <div>
                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.15em] mb-2">
                  {t.contact.directEmail}
                </p>
                <a
                  href="mailto:janalbireo123@gmail.com"
                  className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white hover:text-sky-700 dark:hover:text-sky-400 transition-colors break-all"
                >
                  janalbireo123@gmail.com
                </a>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.15em] mb-2">
                  {t.contact.location}
                </p>
                <p className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white">
                  {t.contact.locationValue}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm p-10 md:p-14 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 flex flex-col justify-center relative z-10 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-8">
              {t.contact.connectTitle}
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:janalbireo123@gmail.com"
                className="w-full inline-flex items-center justify-center px-6 py-4 bg-slate-950 dark:bg-slate-100 text-white dark:text-slate-950 text-[13px] font-bold rounded-full hover:bg-slate-800 dark:hover:bg-white hover:shadow-md transition-all shadow-sm"
              >
                {t.contact.buttons.email}
              </a>
              <a
                href="https://linkedin.com/in/janalbireogd"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center px-6 py-4 bg-white dark:bg-slate-900 text-slate-950 dark:text-white border border-slate-200 dark:border-slate-700 text-[13px] font-bold rounded-full hover:border-sky-300 dark:hover:border-sky-600 hover:text-sky-800 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-slate-800 transition-colors shadow-sm"
              >
                {t.contact.buttons.linkedin}
              </a>
              <a
                href="https://github.com/janalbireo123"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center px-6 py-4 bg-white dark:bg-slate-900 text-slate-950 dark:text-white border border-slate-200 dark:border-slate-700 text-[13px] font-bold rounded-full hover:border-sky-300 dark:hover:border-sky-600 hover:text-sky-800 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-slate-800 transition-colors shadow-sm"
              >
                {t.contact.buttons.github}
              </a>
              <a
                href="/CV_Jan_Albireo.pdf"
                download="CV_Jan_Albireo.pdf"
                target="_blank"
                rel="noreferrer"
                className="w-full mt-4 inline-flex items-center justify-center px-6 py-4 bg-transparent text-slate-950 dark:text-white border-2 border-slate-950 dark:border-white text-[13px] font-bold rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-sky-800 dark:hover:text-sky-400 transition-colors gap-2"
              >
                <Download className="w-4 h-4" /> {t.contact.buttons.download}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
