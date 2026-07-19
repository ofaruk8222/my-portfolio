import { FrontendCard } from "@/views/sections/home/tech-stack/cards/frontend";
import { BackendCard } from "@/views/sections/home/tech-stack/cards/backend";
import { DatabaseCard } from "@/views/sections/home/tech-stack/cards/database";
import { ToolsCard } from "@/views/sections/home/tech-stack/cards/tools";

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
