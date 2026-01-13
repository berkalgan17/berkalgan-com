import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, Shield, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Info Section */}
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Start Your <span className="text-teal-400">Journey</span>
                            </h1>
                            <p className="text-slate-400 text-lg mb-12 max-w-md">
                                Whether you're a high-growth startup or a regulated entity, we're here to provide the security leadership you need to scale safely.
                            </p>

                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 bg-navy-800 rounded-xl border border-navy-700 flex items-center justify-center text-teal-400">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold mb-1">Direct Communication</h3>
                                        <p className="text-slate-400">Connect directly with our advisors for a personalized conversation.</p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 bg-navy-800 rounded-xl border border-navy-700 flex items-center justify-center text-teal-400">
                                        <Shield size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold mb-1">Tailored Response</h3>
                                        <p className="text-slate-400">We analyze your specific industry needs before our first discovery call.</p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 bg-navy-800 rounded-xl border border-navy-700 flex items-center justify-center text-teal-400">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold mb-1">Rapid Turnaround</h3>
                                        <p className="text-slate-400">Expect a response within 24 hours to accelerate your compliance timelines.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16 p-6 bg-navy-800/50 rounded-2xl border border-navy-700">
                                <p className="text-slate-300 text-sm italic">
                                    "vCRO was the missing link in our security strategy. They didn't just tell us what to fix, they led the implementation."
                                </p>
                                <div className="mt-4 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 text-xs font-bold">FA</div>
                                    <div className="text-xs">
                                        <div className="text-white font-semibold">Fintech Architect</div>
                                        <div className="text-slate-500">Series B Startup Client</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Section */}
                        <div className="bg-navy-800/30 p-8 md:p-12 rounded-3xl border border-navy-700 shadow-2xl">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
