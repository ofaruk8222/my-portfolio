"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

/* ─── Context ─────────────────────────────────────────── */
interface DropdownMenuContextValue {
  open: boolean;
  setOpen: (v: boolean) => void;
}

const DropdownMenuContext = React.createContext<DropdownMenuContextValue>({
  open: false,
  setOpen: () => {},
});

/* ─── Root ────────────────────────────────────────────── */
function DropdownMenu({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  return (
    <DropdownMenuContext.Provider value={{ open, setOpen }}>
      <div className="relative inline-block">{children}</div>
    </DropdownMenuContext.Provider>
  );
}

/* ─── Trigger ─────────────────────────────────────────── */
function DropdownMenuTrigger({
  children,
  className,
  showChevron = true,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { showChevron?: boolean }) {
  const { open, setOpen } = React.useContext(DropdownMenuContext);
  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      aria-expanded={open}
      aria-haspopup="menu"
      className={cn(
        "inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800",
        className,
      )}
      {...props}
    >
      {children}
      {showChevron && (
        <ChevronDown
          className={cn("h-4 w-4 transition-transform duration-200", open && "rotate-180")}
        />
      )}
    </button>
  );
}

/* ─── Content ─────────────────────────────────────────── */
function DropdownMenuContent({
  children,
  className,
  align = "start",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { align?: "start" | "end" }) {
  const { open, setOpen } = React.useContext(DropdownMenuContext);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      document.addEventListener("mousedown", handleClick);
      document.addEventListener("keydown", handleKey);
    }
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open, setOpen]);

  if (!open) return null;

  return (
    <div
      ref={ref}
      role="menu"
      className={cn(
        "absolute z-50 mt-2 min-w-[10rem] rounded-xl border border-zinc-200 bg-white p-1 shadow-xl dark:border-white/10 dark:bg-zinc-900",
        align === "end" ? "right-0" : "left-0",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/* ─── Item ────────────────────────────────────────────── */
function DropdownMenuItem({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { setOpen } = React.useContext(DropdownMenuContext);
  return (
    <button
      type="button"
      role="menuitem"
      onClick={() => setOpen(false)}
      className={cn(
        "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-zinc-700 transition hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-white/10",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

/* ─── Separator ───────────────────────────────────────── */
function DropdownMenuSeparator({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) {
  return (
    <hr
      className={cn("my-1 border-zinc-200 dark:border-white/10", className)}
      {...props}
    />
  );
}

/* ─── Label ───────────────────────────────────────────── */
function DropdownMenuLabel({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500", className)}
      {...props}
    >
      {children}
    </span>
  );
}

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
};
