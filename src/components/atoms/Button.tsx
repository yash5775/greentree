import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "ghost";
    size?: "default" | "sm" | "lg";
}

export function Button({
    className,
    variant = "default",
    size = "default",
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(
                "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                {
                    "bg-blue-600 text-white shadow hover:bg-blue-700": variant === "default",
                    "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground": variant === "outline",
                    "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
                    "h-9 px-4 py-2": size === "default",
                    "h-8 rounded-md px-3 text-xs": size === "sm",
                    "h-10 rounded-md px-8": size === "lg",
                },
                className
            )}
            {...props}
        />
    );
}
