"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import Link, { LinkProps } from "next/link"; // Import LinkProps
import { ReactNode } from "react";

// Define a type that combines motion props with either button or link props
type ButtonBaseProps = {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    className?: string;
};

// If href is provided, it behaves like Next.js Link
type LinkButtonProps = ButtonBaseProps & LinkProps & {
    href: string | object;
    target?: string;
    rel?: string;
};

// If no href, it behaves like a standard button
type StandardButtonProps = ButtonBaseProps & HTMLMotionProps<"button"> & { href?: never };

type ButtonProps = LinkButtonProps | StandardButtonProps;

export function Button({
    children,
    variant = "primary",
    size = "md",
    className = "",
    ...props
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-navy-900 cursor-pointer";

    const sizeStyles = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    const variants = {
        primary:
            "bg-teal-400 text-navy-900 hover:bg-teal-300 shadow-[0_0_15px_rgba(100,255,218,0.3)] hover:shadow-[0_0_20px_rgba(100,255,218,0.5)]",
        secondary:
            "bg-navy-700 text-white hover:bg-navy-800 hover:text-teal-400",
        outline:
            "border border-teal-400 text-teal-400 hover:bg-teal-400/10",
    };

    const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${className}`;

    if (props.href) {
        // Cast props to LinkButtonProps to satisfy TS for Link
        const linkProps = props as LinkButtonProps;
        const { href, ...rest } = linkProps;

        return (
            <Link
                href={href}
                className={`${combinedClassName} hover:-translate-y-0.5`}
                {...rest}
            >
                {children}
            </Link>
        );
    }

    return (
        <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={combinedClassName}
            {...(props as HTMLMotionProps<"button">)}
        >
            {children}
        </motion.button>
    );
}
