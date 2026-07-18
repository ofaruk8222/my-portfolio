import { FrontendCard } from "@/components/sections/home/tech-stack/cards/frontend";
import { BackendCard } from "@/components/sections/home/tech-stack/cards/backend";
import { DatabaseCard } from "@/components/sections/home/tech-stack/cards/database";
import { ToolsCard } from "@/components/sections/home/tech-stack/cards/tools";

export function TechStack() {
  return (
    <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-stretch">
      <FrontendCard />
      <BackendCard />
      <DatabaseCard />
      <ToolsCard />
    </div>
  );
}
