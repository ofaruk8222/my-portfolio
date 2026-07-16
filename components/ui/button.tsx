import * as React from "react";

import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "ghost";
  size?: "default" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, children, type = "button", variant = "default", size = "default", ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<{ className?: string }>, {
        className: cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variant === "ghost" && "bg-transparent hover:bg-accent hover:text-accent-foreground",
          variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/90",
          size === "icon" ? "h-10 w-10 p-0" : "h-10 px-4 py-2",
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
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variant === "ghost" && "bg-transparent hover:bg-accent hover:text-accent-foreground",
          variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/90",
          size === "icon" ? "h-10 w-10 p-0" : "h-10 px-4 py-2",
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
