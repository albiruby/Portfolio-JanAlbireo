import { notFound } from "next/navigation";
import { projectsData } from "@/lib/projects-data";
import { ProjectDetailClient } from "./ProjectDetailClient";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projectsData.find(project => project.slug === resolvedParams.slug);

  if (!project) {
    return {
      title: 'Project Not Found | Jan Albireo',
    };
  }

  return {
    title: `${project.content.en.title} | Jan Albireo`,
    description: project.content.en.overview,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  // Get 3 other projects for the 'Related Projects' section
  const relatedProjects = projectsData.filter((p) => p.id !== project.id).slice(0, 3);

  return <ProjectDetailClient project={project} relatedProjects={relatedProjects} />;
}
