"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialProps {
    quote: string;
    title: string;
    className?: string;
}

export function Testimonial({ quote, title, className = "" }: TestimonialProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`bg-navy-900/50 border border-teal-500/10 p-8 rounded-2xl relative ${className}`}
        >
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-teal-400 rounded-full flex items-center justify-center text-navy-900 shadow-lg">
                <Quote size={20} fill="currentColor" />
            </div>
            <p className="text-slate-300 italic text-lg leading-relaxed mb-6">
                &quot;{quote}&quot;
            </p>
            <div className="flex items-center gap-4 border-t border-navy-800 pt-6">
                <div>
                    <p className="text-teal-400 font-bold text-xs uppercase tracking-widest">{title}</p>
                </div>
            </div>
        </motion.div>
    );
}
