import { PageContainer } from "@/components/shared/container";

export default function BlogPostLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex-1">
      <PageContainer className="py-10 sm:py-12 lg:py-16">{children}</PageContainer>
    </main>
  );
}
