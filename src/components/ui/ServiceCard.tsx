"use client";

import { motion } from "framer-motion";
import { CheckCircle, Shield, FileText, BrainCircuit, LucideIcon } from "lucide-react";

interface ServiceItem {
    title: string;
    description: string;
}

interface ServiceProps {
    title: string;
    description: string;
    items: ServiceItem[];
    iconName: "Shield" | "FileText" | "BrainCircuit" | "CheckCircle";
}

const icons: Record<string, LucideIcon> = {
    Shield: Shield,
    FileText: FileText,
    BrainCircuit: BrainCircuit,
    CheckCircle: CheckCircle,
};

export function ServiceCard({ title, description, items, iconName }: ServiceProps) {
    const Icon = icons[iconName];

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="p-8 bg-navy-800 rounded-xl border border-navy-700 hover:border-teal-400/50 transition-colors shadow-lg group"
        >
            <div className="w-12 h-12 bg-teal-400/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-400/20 transition-colors">
                <Icon className="text-teal-400 w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
                {description}
            </p>

            <ul className="space-y-4">
                {items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-300">
                        <span className="mr-3 text-teal-400 mt-1.5 shrink-0">
                            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
                        </span>
                        <div>
                            <strong className="text-white block mb-1">{item.title}</strong>
                            <span className="text-slate-400 leading-relaxed">{item.description}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}
