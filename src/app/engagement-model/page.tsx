"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Scale, Target, Users, ArrowRight } from "lucide-react";

const pillars = [
    {
        icon: Scale,
        title: "Adaptable & Scalable",
        description: "Security needs evolve. We scale our engagement up or down based on your growth stage, ensuring you always have the right level of protection without overspending.",
        color: "text-cyan-400",
        bg: "bg-cyan-400/10",
        border: "border-cyan-400/20"
    },
    {
        icon: Target,
        title: "Focus & Expertise",
        description: "We don't dabble; we specialize. You get dedicated strategic guidance and deep cybersecurity expertise that cuts through the noise and focuses on what matters most to your business.",
        color: "text-teal-400",
        bg: "bg-teal-400/10",
        border: "border-teal-400/20"
    },
    {
        icon: Users,
        title: "Personal Touch",
        description: "We are not just a vendor; we're an extension of your team. We build trust by understanding your unique culture and goals, acting as a true partner in your success.",
        color: "text-orange-400",
        bg: "bg-orange-400/10",
        border: "border-orange-400/20"
    }
];

export default function EngagementModelPage() {
    return (
        <div className="min-h-screen bg-navy-950">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900/20 via-navy-950 to-navy-950 pointer-events-none" />

                <div className="container mx-auto max-w-6xl relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
                    >
                        The vCRO <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Engagement Model</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        Security leadership that integrates seamlessly with your business.
                        We operate as an embedded part of your team, not an external outsider.
                    </motion.p>
                </div>
            </section>

            {/* Core Pillars Section */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
                    >
                        Our Core Pillars
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {pillars.map((pillar, index) => (
                            <motion.div
                                key={pillar.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`p-8 rounded-2xl bg-navy-900/50 backdrop-blur-sm border ${pillar.border} hover:border-opacity-50 transition-colors group`}
                            >
                                <div className={`w-14 h-14 rounded-xl ${pillar.bg} ${pillar.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <pillar.icon size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{pillar.title}</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    {pillar.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900 pointer-events-none" />

                <div className="container mx-auto max-w-4xl relative z-10 text-center bg-navy-800/30 border border-white/5 rounded-3xl p-12 backdrop-blur-md">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Ready to secure your future?
                    </h2>
                    <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                        Whether you need a full vCISO partnership or a targeted risk assessment,
                        we have a tailored solution for you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href="/contact" size="lg" className="w-full sm:w-auto text-lg px-8 py-6">
                            Schedule a Consultation
                        </Button>
                        <Button
                            href="https://www.linkedin.com/in/berkalgan/"
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto text-lg px-8 py-6 group"
                        >
                            Connect on LinkedIn <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
