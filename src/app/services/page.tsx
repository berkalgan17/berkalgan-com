"use client";

import { ServiceCard } from "@/components/ui/ServiceCard";
import { motion } from "framer-motion";
import { Testimonial } from "@/components/ui/Testimonial";

export default function ServicesPage() {
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
                        Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Services</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        Comprehensive cybersecurity solutions tailored to your unique needs.
                        From strategic advisory to hands-on assessments, we cover every angle.
                    </motion.p>
                </div>
            </section>

            {/* Detailed Services Grid */}
            <section className="container mx-auto px-6 py-12 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <ServiceCard
                        title="Assessment Services"
                        description="Comprehensive evaluation of your security posture to identify risks and gaps before attackers do."
                        iconName="Shield"
                        items={[
                            {
                                title: "Risk Assessments",
                                description: "We identify and prioritize your cybersecurity threats with our comprehensive Risk Assessments, designed to identify security risks and recommend strategic measures to safeguard your assets."
                            },
                            {
                                title: "Continuous Security Validation",
                                description: "Move beyond periodic audits with 24/7 validation. We create the programs to ensure your controls are resilient against real-world threats at all times."
                            },
                            {
                                title: "Maturity Assessments",
                                description: "We evaluate the effectiveness of your current cybersecurity protocols, providing a clear roadmap for achieving industry best practices and operational excellence."
                            }
                        ]}
                    />
                    <ServiceCard
                        title="Advisory Services"
                        description="Strategic guidance to navigate complex security landscapes and make informed technology decisions."
                        iconName="BrainCircuit"
                        items={[
                            {
                                title: "Data-Driven Risk Analytics",
                                description: "We replace abstract security concepts with quantifiable risk scoring. Our analytics help your Board understand high-risk areas in financial terms."
                            },
                            {
                                title: "AI Risk Advisory",
                                description: "Stay ahead of emerging risks in AI technologies with specialized strategies to ensure responsible AI deployment and identify shadow AI within your organization."
                            },
                            {
                                title: "Vendor & Tool Selection",
                                description: "We help you select the right security stack tailored to your growth stage, ensuring optimal alignment with your business objectives."
                            }
                        ]}
                    />
                    <ServiceCard
                        title="Compliance Services"
                        description="Simplifying the path to regulatory compliance and industry certifications."
                        iconName="CheckCircle"
                        items={[
                            {
                                title: "SOC2 Compliance",
                                description: "We enhance the trustworthiness of your systems and services with our SOC2 Compliance services, preparing your organization to adhere to industry-standard security, availability, processing integrity, confidentiality, and privacy principles."
                            },
                            {
                                title: "HIPAA Compliance",
                                description: "We help you safeguard patient data and uphold healthcare industry standards with our HIPAA Compliance solutions, ensuring your organization's adherence to the stringent regulations governing the protection of sensitive health information."
                            },
                            {
                                title: "Alignment with Industry Frameworks",
                                description: "With our support, you can align your cybersecurity practices with industry frameworks such as NIST, ISO, and CIS with our expert guidance, ensuring that your organization meets regulatory requirements and industry best practices for data protection and security."
                            },
                            {
                                title: "GDPR & GLBA Compliance",
                                description: "We provide strategic guidance to ensure your data privacy and financial services security programs meet the stringent requirements of GDPR and GLBA, safeguarding consumer data and maintaining regulatory trust."
                            }
                        ]}
                    />
                    <ServiceCard
                        title="Program Development"
                        description="Building tailored security programs that scale with your business growth."
                        iconName="FileText"
                        items={[
                            {
                                title: "End-to-end Cybersecurity",
                                description: "From initial assessment to ongoing management, our End-to-end Cybersecurity Program Development ensures comprehensive protection across all digital fronts of your business."
                            },
                            {
                                title: "Vendor Management",
                                description: "We help secure your supply chain with our Vendor Management services, designed to assess and manage the security protocols of your third-party providers."
                            },
                            {
                                title: "Incident Response",
                                description: "We help your organization prepare for and swiftly manage any cybersecurity incident with our proactive Incident Response services, designed to minimize impact and restore operations efficiently."
                            },
                            {
                                title: "Security Awareness",
                                description: "We empower your team with our Security Awareness training, fostering a security-conscious culture that recognizes and mitigates risks effectively."
                            },
                            {
                                title: "Disaster Recovery",
                                description: "You can ensure business continuity with our Disaster Recovery services, providing rapid recovery solutions to protect and restore your critical operations in the face of disruptions."
                            }
                        ]}
                    />
                </div>

                <div className="max-w-4xl mx-auto mt-24">
                    <Testimonial
                        quote="Berk has an innate ability to navigate the complexities of interacting with federal regulators and auditors. His unique perspective makes him the ideal advisor for companies suddenly exposed to regulatory scrutiny."
                        title="Engineering Leader | Google"
                    />
                </div>
            </section>
        </div>
    );
}
