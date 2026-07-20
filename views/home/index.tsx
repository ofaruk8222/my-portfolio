import { PageContainer } from "@/components/shared/container";
import { BlogSection } from "@/views/home/blog-section";
import { ContactSection } from "@/views/home/contact-section";
import { ExperienceSection } from "@/views/home/experience-section";
import { Hero } from "@/views/home/hero";
import { ProjectSection } from "@/views/home/project-section";
import { SkillSection } from "@/views/home/skill-section";

export function HomeView() {
  return (
    <main className="flex-1">
      <PageContainer className="py-10 sm:py-12 lg:py-16">
        <Hero />
        <SkillSection />
        <ExperienceSection />
        <ProjectSection />
        <BlogSection />
        <ContactSection />
      </PageContainer>
    </main>
  );
}
