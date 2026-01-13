"use client";

import { motion } from "framer-motion";
import { Shield, Building, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Testimonial } from "@/components/ui/Testimonial";

const stories = [
    {
        id: "fintech",
        title: "Fintech Security Program Development",
        role: "Architecture & Compliance",
        image: "/images/success-fintech.png",
        icon: Shield,
        challenge: "A newly established fintech startup without a formal cybersecurity program, facing increased scrutiny from partner banks and auditors.",
        solution: "A comprehensive security program crafted with top-tier tools and in strict alignment with SOC2 and GLBA mandates, enabling rapid partnership approvals."
    },
    {
        id: "healthcare",
        title: "Healthcare Vendor Management",
        role: "Risk Management",
        image: "/images/success-healthcare.png",
        icon: Building,
        challenge: "A healthcare company heavily dependent on 3rd-party vendors for data processing, yet lacking a structured vendor risk management program.",
        solution: "Implemented a tiered vendor management program prioritizing critical vendors, aligned with HIPAA, drastically reducing supply chain risk exposure."
    },
    {
        id: "coaching",
        title: "Fintech Tool Selection & Risk Coaching",
        role: "Advisory & Strategy",
        image: "/images/success-coaching.png",
        icon: TrendingUp,
        challenge: "A fintech solutions provider seeking guidance on tool selection and risk mitigation to enable business growth and attain SOC2 Type II.",
        solution: "Assisted and coached the leadership team in selecting the right security stack and devising effective risk mitigation strategies to clear audit hurdles."
    }
];

export default function SuccessStoriesPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Header */}
            <div className="container mx-auto px-6 mb-16 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-6"
                >
                    Proven <span className="text-teal-400">Results</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-slate-400 text-lg max-w-2xl mx-auto"
                >
                    See how we&apos;ve helped high-growth companies navigate complex risk landscapes and build resilient security programs.
                </motion.p>
            </div>

            {/* Stories Grid */}
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {stories.map((story, index) => (
                        <motion.div
                            key={story.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-navy-800 rounded-2xl overflow-hidden border border-navy-700 shadow-xl group hover:border-teal-400/50 transition-colors"
                        >
                            {/* Image Section */}
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-800 to-transparent z-10" />
                                <img
                                    src={story.image}
                                    alt={story.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 right-4 z-20 bg-navy-900/80 backdrop-blur px-3 py-1 rounded-full border border-teal-400/30">
                                    <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">{story.role}</span>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-navy-700 text-teal-400">
                                        <story.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white leading-tight">{story.title}</h3>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">The Challenge</div>
                                        <p className="text-slate-300 text-sm leading-relaxed">{story.challenge}</p>
                                    </div>

                                    <div className="pt-4 border-t border-navy-700">
                                        <div className="text-xs uppercase tracking-wider text-teal-400 font-semibold mb-1">The Solution</div>
                                        <p className="text-slate-300 text-sm leading-relaxed">{story.solution}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Testimonial Bit */}
                <div className="max-w-4xl mx-auto mt-24">
                    <Testimonial
                        quote="As someone who has worked on both sides of the table, Berk has a unique perspective that makes him the ideal advisor for companies suddenly exposed to regulatory scrutiny."
                        title="Engineering Leader | Google"
                    />
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <h2 className="text-2xl text-white font-semibold mb-6">Ready to write your own success story?</h2>
                    <Button href="mailto:berk@virtualcyberriskoffice.com" target="_blank" className="px-8 py-4 text-lg">Start Your Journey</Button>
                </motion.div>
            </div>
        </div>
    );
}
