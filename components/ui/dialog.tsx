"use client";

import * as React from "react";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

/* ─── Overlay ─────────────────────────────────────────── */
interface DialogOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  onClose?: () => void;
}

function DialogOverlay({ open, onClose, className, ...props }: DialogOverlayProps) {
  if (!open) return null;
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity",
        className,
      )}
      onClick={onClose}
      aria-hidden="true"
      {...props}
    />
  );
}

/* ─── Root ────────────────────────────────────────────── */
interface DialogProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function Dialog({ open, onClose, children }: DialogProps) {
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
      <DialogOverlay open={open} onClose={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        {children}
      </div>
    </>
  );
}

/* ─── Content ─────────────────────────────────────────── */
interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
}

function DialogContent({ children, className, onClose, ...props }: DialogContentProps) {
  return (
    <div
      className={cn(
        "relative w-full max-w-lg rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-zinc-900",
        className,
      )}
      {...props}
    >
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
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
function DialogHeader({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mb-4 flex flex-col gap-1", className)} {...props}>
      {children}
    </div>
  );
}

/* ─── Title ───────────────────────────────────────────── */
function DialogTitle({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={cn("text-lg font-semibold text-zinc-950 dark:text-white", className)} {...props}>
      {children}
    </h2>
  );
}

/* ─── Description ─────────────────────────────────────── */
function DialogDescription({
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
function DialogFooter({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mt-6 flex justify-end gap-3", className)} {...props}>
      {children}
    </div>
  );
}

export { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter };
