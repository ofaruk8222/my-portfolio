import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "flex h-10 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-950 placeholder:text-zinc-400 transition",
          "focus:outline-none focus:ring-2 focus:ring-zinc-950/20 focus:border-zinc-400",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "dark:border-white/10 dark:bg-zinc-900 dark:text-white dark:placeholder:text-zinc-500",
          "dark:focus:ring-white/20 dark:focus:border-white/30",
          error && "border-rose-500 focus:ring-rose-500/20 dark:border-rose-400",
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export { Input };
