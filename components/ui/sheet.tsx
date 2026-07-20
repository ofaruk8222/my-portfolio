"use client";

import * as React from "react";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

type SheetSide = "left" | "right" | "top" | "bottom";

/* ─── Root ────────────────────────────────────────────── */
interface SheetProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function Sheet({ open, onClose, children }: SheetProps) {
  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      {children}
    </>
  );
}

/* ─── Content ─────────────────────────────────────────── */
interface SheetContentProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: SheetSide;
  onClose?: () => void;
}

const sideClasses: Record<SheetSide, string> = {
  right: "inset-y-0 right-0 h-full w-3/4 max-w-sm border-l",
  left: "inset-y-0 left-0 h-full w-3/4 max-w-sm border-r",
  top: "inset-x-0 top-0 w-full max-h-[50vh] border-b",
  bottom: "inset-x-0 bottom-0 w-full max-h-[50vh] border-t",
};

function SheetContent({
  children,
  className,
  side = "right",
  onClose,
  ...props
}: SheetContentProps) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      className={cn(
        "fixed z-50 flex flex-col border-zinc-200 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-zinc-900",
        sideClasses[side],
        className,
      )}
      {...props}
    >
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Close panel"
          className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition hover:bg-zinc-100 dark:border-white/10 dark:text-zinc-400 dark:hover:bg-white/10"
        >
          <X className="h-4 w-4" />
        </button>
      )}
      {children}
    </div>
  );
}

/* ─── Header ──────────────────────────────────────────── */
function SheetHeader({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mb-4 flex flex-col gap-1", className)} {...props}>
      {children}
    </div>
  );
}

/* ─── Title ───────────────────────────────────────────── */
function SheetTitle({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={cn("text-lg font-semibold text-zinc-950 dark:text-white", className)} {...props}>
      {children}
    </h2>
  );
}

/* ─── Description ─────────────────────────────────────── */
function SheetDescription({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm text-zinc-500 dark:text-zinc-400", className)} {...props}>
      {children}
    </p>
  );
}

/* ─── Footer ──────────────────────────────────────────── */
function SheetFooter({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mt-auto flex justify-end gap-3 pt-4", className)} {...props}>
      {children}
    </div>
  );
}

export { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter };
