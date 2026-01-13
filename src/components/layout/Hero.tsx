"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-900 pt-16">
            {/* Background Decor */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-[25%] -right-[10%] w-[600px] h-[600px] rounded-full bg-teal-400/10 blur-[100px]" />
                <div className="absolute bottom-[10%] -left-[10%] w-[500px] h-[500px] rounded-full bg-orange-500/10 blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-teal-400 font-medium tracking-wide uppercase mb-4">
                        Virtual Cyber Risk Office
                    </h2>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                >
                    Security Leadership. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                        On Demand.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
                >
                    We provide specialized vCISO advisory, risk assessments, and compliance
                    strategies to securing your business without the overhead.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button href="/services" size="lg" className="w-full sm:w-auto">
                        Explore Services
                    </Button>
                    <Button href="/engagement-model" variant="outline" size="lg" className="w-full sm:w-auto">
                        How We Work
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
