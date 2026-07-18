import { Footer } from "@/components/shared/footer";

const BlankPageLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="min-h-screen bg-stone-50 text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
      {children}
      <Footer />
    </div>
  );
};

export default BlankPageLayout;
