"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Testimonial } from "@/components/ui/Testimonial";

export default function OurDifferencePage() {
    return (
        <div className="min-h-screen container mx-auto px-6 py-24">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">
                    The vCRO <span className="text-teal-400">Difference</span>
                </h1>

                <div className="bg-navy-800 rounded-2xl p-8 border border-navy-700 shadow-2xl mb-12">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden border-2 border-teal-400/20 shadow-lg">
                                <img
                                    src="/images/berk-algan.jpg"
                                    alt="Berk Algan"
                                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        <div className="flex-1">
                            <h2 className="text-3xl font-semibold text-white mb-2">
                                Meet the Founder: <span className="text-teal-400">Berk Algan</span>
                            </h2>
                            <p className="text-teal-400/80 mb-6 font-medium">Cybersecurity Risk Executive & Former Auditor</p>

                            <p className="text-slate-300 text-lg leading-relaxed mb-6 italic border-l-4 border-teal-400 pl-4 bg-navy-900/50 py-2 rounded-r-lg">
                                &quot;Behind vCRO stands Berk Algan, a seasoned cybersecurity risk executive and former auditor renowned for his expertise in delivering exceptional cybersecurity solutions.&quot;
                            </p>

                            <div className="space-y-4 mb-4">
                                <div className="flex items-start group">
                                    <span className="text-teal-400 mr-3 text-xl mt-0.5 group-hover:scale-110 transition-transform">✓</span>
                                    <div>
                                        <strong className="text-white block mb-1">Advisory Background</strong>
                                        <p className="text-slate-400 leading-relaxed">
                                            A decade of domestic and international experience with EY advising and auditing mega corporations (Google, Apple, Meta, Chevron, Intel etc.) on cybersecurity and technology risk. Ranked among <span className="text-teal-400 font-semibold">&quot;40 Under 40&quot;</span> business leaders.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start group">
                                    <span className="text-teal-400 mr-3 text-xl mt-0.5 group-hover:scale-110 transition-transform">✓</span>
                                    <div>
                                        <strong className="text-white block mb-1">Building Exceptional GRC</strong>
                                        <p className="text-slate-400 leading-relaxed">
                                            12 years of experience building and running bespoke cybersecurity and governance programs at a global bank (SVB). Frequent speaker at <span className="text-teal-400 font-semibold">ISACA and IIA Global Conferences</span> on GRC innovation.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start group">
                                    <span className="text-teal-400 mr-3 text-xl mt-0.5 group-hover:scale-110 transition-transform">✓</span>
                                    <div>
                                        <strong className="text-white block mb-1">The Builder&apos;s DNA</strong>
                                        <p className="text-slate-400 leading-relaxed">
                                            We don&apos;t believe in &quot;compliance as a checkbox.&quot; Our mission is to build robust, scalable security functions that enable high-growth Fintech and Healthcare companies to close deals faster.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-20">
                    <Testimonial
                        quote="Berk understands the unique challenges that early to mid-stage career professionals face and has an abundance of experience in navigating them. I have witnessed firsthand that his guidance has helped many reach new heights."
                        title="Technology Risk Leader | SVB | Former Big 4"
                    />
                </div>

                <div className="text-center">
                    <h3 className="text-2xl text-white font-bold mb-6">Why Choose vCRO?</h3>
                    <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                        We don&apos;t just provide reports; we provide leadership. Our vCISO model ensures you have an executive partner, not just a vendor.
                    </p>
                    <Link href="/engagement-model">
                        <Button>Explore Our Engagement Model</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
