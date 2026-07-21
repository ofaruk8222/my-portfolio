"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

import { ProjectCard } from "@/components/ui/project-card";
import { ProjectModal } from "@/components/ui/project-modal";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  type: string;
  tags: string[];
  imageUrl: string;
  imageAlt: string;
  liveUrl?: string;
  githubUrl: string;
}

interface ProjectsContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function ProjectsContainer({ children, className, ...props }: ProjectsContainerProps) {
  return (
    <div
      className={cn(
        "rounded-[2rem] border border-zinc-200 bg-white/90 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8 lg:p-10 dark:border-white/10 dark:bg-zinc-900/80 dark:shadow-black/20",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

const projects: Project[] = [
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description: "A modern, responsive portfolio built with Next.js and Tailwind CSS.",
    longDescription:
      "Designed and developed a fully responsive personal portfolio featuring dark mode, smooth animations, and a modular component architecture for easy maintenance and extension.",
    type: "Web Application",
    tags: ["Next.js", "React", "CSS", "TypeScript"],
    imageUrl: "/images/messi.png",
    imageAlt: "Portfolio project screenshot",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/ofaruk8222/my-portfolio",
  },
  {
    id: "safe-lens",
    title: "Safe Lens",
    description:
      "Advanced home security system with real-time monitoring, motion detection, and instant alerts. Features AI-powered threat detection and cloud storage integration.",
    longDescription:
      "An advanced home security system with real-time monitoring, motion detection, and instant alerts. Features AI-powered threat detection and cloud storage integration for comprehensive property protection.",
    type: "Security System",
    tags: ["Python", "Open CV", "TensorFlow", "YOLO", "WebRTC", "Pthon Applications"],
    imageUrl: "/images/safe-lens.png",
    imageAlt: "Safe Lens project screenshot",
    githubUrl: "https://github.com/ofaruk8222/Safe-Lens",
  },
  {
    id: "route-finder",
    title: "Route Finder",
    description:
      "Intelligent route optimization tool that calculates the most efficient paths for delivery and navigation. Implements Dijkstra's algorithm with real-time traffic consideration.",
    longDescription:
      "An intelligent route optimization tool that calculates the most efficient paths for delivery and navigation. Implements Dijkstra's algorithm with real-time traffic consideration for accurate, time-saving routes.",
    type: "Navigation Tool",
    tags: ["HTML", "Tailwind CSS", "Google Maps API", "Node JS", "React"],
    imageUrl: "/images/route-finder.png",
    imageAlt: "Route Finder project screenshot",
    githubUrl: "https://github.com/ofaruk8222/Route-Finder",
  },
];

export function ProjectSection() {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);

  const selected = projects.find((p) => p.id === selectedId);

  return (
    <section id="projects" className="mt-8 sm:mt-10 lg:mt-12">
      <ProjectsContainer>
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
            Projects
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
            Selected work and side projects.
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              className="min-w-0 w-full"
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
              imageAlt={project.imageAlt}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              onOpenModal={() => setSelectedId(project.id)}
            />
          ))}
        </div>

        {selected && (
          <ProjectModal
            open={selectedId !== null}
            onClose={() => setSelectedId(null)}
            title={selected.title}
            description={selected.description}
            longDescription={selected.longDescription}
            tags={selected.tags}
            imageUrl={selected.imageUrl}
            imageAlt={selected.imageAlt}
            liveUrl={selected.liveUrl}
            githubUrl={selected.githubUrl}
          />
        )}
      </ProjectsContainer>
    </section>
  );
}