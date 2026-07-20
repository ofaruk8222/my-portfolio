import * as React from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, error, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <select
          ref={ref}
          className={cn(
            "flex h-10 w-full appearance-none rounded-xl border border-zinc-200 bg-white px-3 py-2 pr-9 text-sm text-zinc-950 transition",
            "focus:outline-none focus:ring-2 focus:ring-zinc-950/20 focus:border-zinc-400",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "dark:border-white/10 dark:bg-zinc-900 dark:text-white",
            "dark:focus:ring-white/20 dark:focus:border-white/30",
            error && "border-rose-500 focus:ring-rose-500/20 dark:border-rose-400",
            className,
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400 dark:text-zinc-500"
          aria-hidden="true"
        />
      </div>
    );
  },
);

Select.displayName = "Select";

/* ─── Option ──────────────────────────────────────────── */
const SelectOption = React.forwardRef<
  HTMLOptionElement,
  React.OptionHTMLAttributes<HTMLOptionElement>
>(({ className, ...props }, ref) => <option ref={ref} className={cn(className)} {...props} />);

SelectOption.displayName = "SelectOption";

export { Select, SelectOption };
