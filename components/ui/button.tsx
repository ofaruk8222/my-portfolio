import * as React from "react";

import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, children, type = "button", variant = "default", size = "default", ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<{ className?: string }>, {
        className: cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variant === "outline" && "border border-zinc-300 bg-transparent hover:bg-zinc-100 dark:border-white/10 dark:hover:bg-white/10",
          variant === "ghost" && "bg-transparent hover:bg-zinc-100 dark:hover:bg-white/10",
          variant === "default" && "bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200",
          size === "sm" ? "h-9 px-3" : size === "icon" ? "h-10 w-10 p-0" : "h-10 px-4 py-2",
          (children as React.ReactElement<{ className?: string }>).props.className,
          className,
        ),
        ...props,
      });
    }

    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variant === "outline" && "border border-zinc-300 bg-transparent hover:bg-zinc-100 dark:border-white/10 dark:hover:bg-white/10",
          variant === "ghost" && "bg-transparent hover:bg-zinc-100 dark:hover:bg-white/10",
          variant === "default" && "bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200",
          size === "sm" ? "h-9 px-3" : size === "icon" ? "h-10 w-10 p-0" : "h-10 px-4 py-2",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button };