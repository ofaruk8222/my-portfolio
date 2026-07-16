const BlankPageLayout = ({ 
    children, 
}: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className="min-h-screen bg-stone-50 text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
            {children}
        </div>
    );
};

export default BlankPageLayout;
