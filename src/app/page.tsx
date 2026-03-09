"use client";

import { Hero } from "@/components/layout/Hero";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

import { Testimonial } from "@/components/ui/Testimonial";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Hero />

      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Our Core <span className="text-teal-400">Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {[
            { title: "Assessment", icon: "Shield", desc: "Identify risks before attackers do." },
            { title: "Advisory", icon: "BrainCircuit", desc: "Strategic guidance for complex security landscapes." },
            { title: "Compliance", icon: "CheckCircle", desc: "Simplify your path to regulatory standards." },
            { title: "Program Dev", icon: "FileText", desc: "Build tailored security programs that scale." }
          ].map((service) => (
            <div key={service.title} className="bg-navy-800 p-6 rounded-xl border border-navy-700 hover:border-teal-400/30 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-slate-400 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <Testimonial
            quote="Berk is an outstanding executive with a commitment to continuous improvement. He is a true leader in creating best-in-class risk management processes, which have been instrumental in driving organizational success."
            title="Chief Information Security Officer | CIO | Author"
          />
        </div>

        <div className="text-center">
          <Button href="/services" variant="outline" size="lg">
            View All Services
          </Button>
        </div>
      </section>

      {/* Humanization Section: The Embedded Advisor */}
      <section className="bg-navy-800/50 py-24 border-y border-navy-700">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16 max-w-5xl mx-auto">
            <div className="w-full md:w-1/3">
              <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-teal-400/20 shadow-2xl">
                <img
                  src="/images/berk-algan.jpg"
                  alt="Berk Algan, Founder of vCRO"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-white font-bold text-lg">Berk Algan</p>
                  <p className="text-teal-400 text-xs uppercase tracking-widest font-semibold">Founder & Lead Advisor</p>
                </div>
              </div>
            </div>

            <div className="flex-1 text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Your <span className="text-teal-400">Embedded</span> Security Partner
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                We believe that security leadership shouldn&apos;t be an external checklist. At vCRO, we integrate seamlessly with your leadership team, providing the same strategic depth as a full-time CISO but with the agility of an on-demand model.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6 italic border-l-4 border-teal-400 pl-4 bg-navy-900/50 py-3 rounded-r-lg">
                &quot;vCRO was founded on a simple principle: high-growth companies shouldn&apos;t have to choose between speed and security.&quot;
              </p>
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400">✓</div>
                  <span className="text-slate-400 font-medium">Bespoke strategies built for Fintech & Healthcare</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400">✓</div>
                  <span className="text-slate-400 font-medium">25+ years of security, risk and compliance leadership</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400">✓</div>
                  <span className="text-slate-400 font-medium">Outcome-driven approach to global compliance standards</span>
                </div>
              </div>
              <Button href="/our-difference">
                Learn About Our Difference
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Preview Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Modern <span className="text-teal-400">Security</span> Insights
            </h2>
            <p className="text-slate-400 text-lg">
              Thought leadership at the intersection of GRC, startup agility, and continuous validation.
            </p>
          </div>
          <Button href="/insights" variant="outline">
            View All Insights
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-navy-800 p-8 rounded-2xl border border-navy-700 hover:border-teal-400/30 transition-all flex flex-col items-start text-left">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-bold text-orange-400 uppercase tracking-[0.2em] bg-orange-400/10 px-2 py-1 rounded">🔥 Trending</span>
              <span className="text-teal-400 text-xs font-bold uppercase tracking-widest">Emerging Risk</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 italic">&quot;AI Governance for Startups&quot;</h3>
            <p className="text-slate-400 mb-6 flex-grow">
              Why AI governance isn&apos;t optional anymore. Building responsible AI programs that enable innovation while managing regulatory and reputational risk.
            </p>
            <Link href="/insights/ai-governance-startups" className="text-teal-400 font-semibold hover:translate-x-1 transition-transform flex items-center gap-2">
              Read More <span>→</span>
            </Link>
          </div>
          <div className="bg-navy-800 p-8 rounded-2xl border border-navy-700 hover:border-teal-400/30 transition-all flex flex-col items-start text-left">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-bold text-orange-400 uppercase tracking-[0.2em] bg-orange-400/10 px-2 py-1 rounded">🔥 Trending</span>
              <span className="text-teal-400 text-xs font-bold uppercase tracking-widest">Technology</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 italic">&quot;Compliance Automation Platforms&quot;</h3>
            <p className="text-slate-400 mb-6 flex-grow">
              How automation platforms transformed compliance workflows—and why they can&apos;t replace strategic leadership and expert guidance.
            </p>
            <Link href="/insights/compliance-automation-platforms" className="text-teal-400 font-semibold hover:translate-x-1 transition-transform flex items-center gap-2">
              Read More <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Secure Your Growth?</h2>
        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
          Get in touch today for a preliminary risk assessment and see how our vCISO model can accelerate your roadmap.
        </p>
        <Button href="/contact" size="lg" className="px-12">
          Get Started
        </Button>
      </section>
    </div>
  );
}
