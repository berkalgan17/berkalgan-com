"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mpqyqdkz";

export function ContactForm() {
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;

        setStatus("loading");
        setErrorMessage("");

        const formData = new FormData(form.current);
        const data = {
            name: formData.get("user_name"),
            email: formData.get("user_email"),
            subject: formData.get("subject"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus("success");
                form.current.reset();
            } else {
                const result = await response.json();
                setErrorMessage(result?.errors?.[0]?.message || "Something went wrong. Please try again.");
                setStatus("error");
            }
        } catch {
            setErrorMessage("Network error. Please check your connection and try again.");
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-navy-800 border border-teal-500/30 p-12 rounded-2xl text-center shadow-xl"
            >
                <div className="flex justify-center mb-6">
                    <div className="bg-teal-500/10 p-4 rounded-full">
                        <CheckCircle2 size={64} className="text-teal-400" />
                    </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                <p className="text-slate-400 text-lg mb-8">
                    Thank you for reaching out. We&apos;ve received your inquiry and will be in touch within 24 hours.
                </p>
                <div className="border-t border-navy-700 pt-8 mb-8">
                    <p className="text-white italic mb-2">&quot;We integrate, we don&apos;t just advise.&quot;</p>
                    <p className="text-slate-500 text-sm">Berk Algan, Founder</p>
                </div>
                <button
                    onClick={() => setStatus("idle")}
                    className="text-teal-400 hover:text-teal-300 font-semibold transition-colors"
                >
                    Send another message
                </button>
            </motion.div>
        );
    }

    if (status === "error") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-navy-800 border border-red-500/30 p-12 rounded-2xl text-center shadow-xl"
            >
                <div className="flex justify-center mb-6">
                    <div className="bg-red-500/10 p-4 rounded-full">
                        <AlertCircle size={64} className="text-red-400" />
                    </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Something Went Wrong</h3>
                <p className="text-slate-400 text-lg mb-8">
                    {errorMessage}
                </p>
                <button
                    onClick={() => setStatus("idle")}
                    className="text-teal-400 hover:text-teal-300 font-semibold transition-colors"
                >
                    Try again
                </button>
            </motion.div>
        );
    }

    return (
        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="user_name" className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                    <input
                        type="text"
                        id="user_name"
                        name="user_name"
                        required
                        className="w-full bg-navy-900 border border-navy-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-400/50 transition-colors"
                        placeholder="John Doe"
                    />
                </div>
                <div>
                    <label htmlFor="user_email" className="block text-sm font-medium text-slate-300 mb-2">Work Email</label>
                    <input
                        type="email"
                        id="user_email"
                        name="user_email"
                        required
                        className="w-full bg-navy-900 border border-navy-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-400/50 transition-colors"
                        placeholder="john@company.com"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                <select
                    id="subject"
                    name="subject"
                    className="w-full bg-navy-900 border border-navy-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-400/50 transition-colors appearance-none"
                >
                    <option>vCISO On-Demand</option>
                    <option>Compliance Readiness (SOC2/HIPAA)</option>
                    <option>Risk Assessment</option>
                    <option>AI Security Advisory</option>
                    <option>Other Inquiry</option>
                </select>
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">How can we help?</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-navy-900 border border-navy-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-400/50 transition-colors resize-none"
                    placeholder="Tell us about your organization's security goals..."
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-teal-500 hover:bg-teal-400 text-navy-900 font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-teal-500"
            >
                {status === "loading" ? (
                    <>
                        Sending...
                        <Loader2 size={18} className="animate-spin" />
                    </>
                ) : (
                    <>
                        Send Message
                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                )}
            </button>

            <p className="text-center text-slate-500 text-xs mt-4">
                Prefer email? Reach out directly at <a href="mailto:berk@virtualcyberriskoffice.com" className="hover:text-teal-400 underline decoration-teal-400/30">berk@virtualcyberriskoffice.com</a>
            </p>
        </form>
    );
}
