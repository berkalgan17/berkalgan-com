"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Zap, ShieldCheck, BookOpen, BarChart3, Brain, Settings, ArrowRight } from "lucide-react";
import { Testimonial } from "@/components/ui/Testimonial";

const insights = [
    {
        title: "AI Governance for Startups",
        slug: "ai-governance-startups",
        category: "Emerging Risk",
        description: "Why AI governance isn't optional anymore. Building responsible AI programs that enable innovation while managing regulatory and reputational risk.",
        icon: Brain,
        date: "Nov 18, 2025",
        trending: true
    },
    {
        title: "Compliance Automation Platforms",
        slug: "compliance-automation-platforms",
        category: "Technology",
        description: "How automation platforms transformed compliance workflows—and why they can't replace strategic leadership and expert guidance.",
        icon: Settings,
        date: "Feb 8, 2025",
        trending: true
    },
    {
        title: "Continuous Security Validation (CSV)",
        slug: "continuous-security-validation",
        category: "Methodology",
        description: "Moving beyond periodic audits. How 24/7 validation through the right programs keeps your security posture resilient in real-time.",
        icon: ShieldCheck,
        date: "Mar 10, 2025"
    },
    {
        title: "Data-Driven Risk Analytics",
        slug: "data-driven-risk-analytics",
        category: "Analytics",
        description: "Translating abstract security risks into quantifiable metrics that the Board and leadership teams can act upon with confidence.",
        icon: BarChart3,
        date: "Jun 15, 2025"
    },
    {
        title: "Building Exceptional GRC Functions",
        slug: "exceptional-grc",
        category: "Philosophy",
        description: "Why compliance shouldn't be a checkbox, but a performance engine that enables high-growth startups to move faster and scale safely.",
        icon: Zap,
        date: "Jan 12, 2026"
    },
    {
        title: "The Modern Three Lines of Defense",
        slug: "modern-three-lines-of-defense",
        category: "Strategy",
        description: "Adapting the classic GRC framework for agile Fintech and Healthcare companies. acting as a bridge between engineering and oversight.",
        icon: BookOpen,
        date: "Sep 20, 2024"
    }
];

export default function InsightsPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Header */}
            <div className="container mx-auto px-6 mb-16 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-6"
                >
                    Modern Security <span className="text-teal-400">Insights</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-slate-400 text-lg max-w-2xl mx-auto mb-16"
                >
                    Strategic perspectives on Governance, Risk, and Compliance for high-growth enterprises.
                </motion.p>

                <div className="max-w-4xl mx-auto mb-24">
                    <Testimonial
                        quote="Berk is a true leader in creating best-in-class technology risk management processes, which have been instrumental in driving organizational success in today's fast-paced environment."
                        title="Chief Information Security Officer | CIO | Author"
                    />
                </div>
            </div>

            {/* Grid */}
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {insights.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-navy-800 rounded-2xl p-8 border border-navy-700 hover:border-teal-400/50 transition-all group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 rounded-xl bg-navy-900 text-teal-400">
                                    <item.icon size={28} />
                                </div>
                                <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">{item.date}</span>
                            </div>

                            <div className="mb-2 flex items-center gap-3">
                                {item.trending && (
                                    <span className="text-[10px] font-bold text-orange-400 uppercase tracking-[0.2em] bg-orange-400/10 px-2 py-1 rounded">🔥 Trending</span>
                                )}
                                <span className="text-[10px] font-bold text-teal-400 uppercase tracking-[0.2em]">{item.category}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors">{item.title}</h3>
                            <p className="text-slate-400 leading-relaxed mb-8">
                                {item.description}
                            </p>

                            <Button
                                href={`/insights/${item.slug}`}
                                variant="outline"
                                size="sm"
                                className="group-hover:bg-teal-400 group-hover:text-navy-900 transition-all"
                            >
                                Read Insight
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
