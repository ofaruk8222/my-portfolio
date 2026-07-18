import { HomeHero } from "@/components/sections/home-hero";
import { SkillsSection } from "@/components/sections/skills";
import { PageContainer } from "@/components/shared/container";

export default function HomePage() {
  return (
    <main className="flex-1">
      <PageContainer className="py-10 sm:py-12 lg:py-16">
        <HomeHero />
        <SkillsSection />
      </PageContainer>
    </main>
  );
}
