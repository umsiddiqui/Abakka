"use client";
import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const bundles = [
  "Data Platform Readiness Check (Free → $1.5k)",
  "Cost Optimization Sprint ($6–12k)",
  "Migration Readiness Assessment ($8–15k)",
  "Pipeline Rescue ($7–18k)",
  "Platform Quickstart ($18–35k)",
  "Governance & Catalog Setup ($12–25k)",
  "Fractional Data Team (Monthly retainer)",
  "Custom engagement",
  "Bespoke build — let's talk",
  "Not sure yet",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    bundle: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Nav />
      <main className="pt-16">

        {/* Header */}
        <section className="bg-white py-20 px-6 lg:px-8 border-b border-[#E3E0D8]">
          <div className="max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-[#C9A227]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A227]">Contact</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A1114] leading-tight mb-4">Let&apos;s talk.</h1>
            <p className="text-lg text-[#5E686D] max-w-xl">
              Tell us what you need. We&apos;ll confirm fit within 24–48 hours and suggest the right next step.
            </p>
          </div>
        </section>

        {/* Form + info */}
        <section className="bg-[#F2F0EA] py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white p-12 text-center">
                  <div className="w-12 h-12 bg-[#C9A227] flex items-center justify-center text-white font-mono text-xl mx-auto mb-6">
                    ✓
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1114] mb-3">We&apos;ve got it.</h2>
                  <p className="text-sm text-[#5E686D]">
                    Expect a reply within 24–48 hours. If you selected the Readiness Check, we&apos;ll reach out to schedule a
                    60-minute call to get started.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white p-8 lg:p-10 flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-widest text-[#5E686D] mb-2">
                        Name *
                      </label>
                      <input
                        required
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border border-[#E3E0D8] px-4 py-3 text-sm text-[#0A1114] bg-white focus:outline-none focus:border-[#C9A227] transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-widest text-[#5E686D] mb-2">
                        Work email *
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border border-[#E3E0D8] px-4 py-3 text-sm text-[#0A1114] bg-white focus:outline-none focus:border-[#C9A227] transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-[#5E686D] mb-2">
                      Company
                    </label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full border border-[#E3E0D8] px-4 py-3 text-sm text-[#0A1114] bg-white focus:outline-none focus:border-[#C9A227] transition-colors"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-[#5E686D] mb-2">
                      What are you interested in?
                    </label>
                    <select
                      name="bundle"
                      value={form.bundle}
                      onChange={handleChange}
                      className="w-full border border-[#E3E0D8] px-4 py-3 text-sm text-[#0A1114] bg-white focus:outline-none focus:border-[#C9A227] transition-colors appearance-none"
                    >
                      <option value="">Select a bundle or engagement type</option>
                      {bundles.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-[#5E686D] mb-2">
                      Tell us more (optional)
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full border border-[#E3E0D8] px-4 py-3 text-sm text-[#0A1114] bg-white focus:outline-none focus:border-[#C9A227] transition-colors resize-none"
                      placeholder="What's the situation? What platform are you on? What's broken, slow, or unclear?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#C9A227] text-white text-sm font-bold hover:bg-[#A7861F] transition-colors self-start"
                  >
                    Send enquiry
                  </button>
                  <p className="text-xs text-[#5E686D]">
                    We reply within 24–48 hours. No spam, no CRM nurture sequences.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-base font-bold text-[#0A1114] mb-3">What happens next</h3>
                <ol className="space-y-3">
                  {[
                    "We review your enquiry within 24–48 hours",
                    "If we're a fit, we suggest the right bundle and next step",
                    "We schedule a free 30–45 min discovery call",
                    "You receive a written SOW with fixed scope and price",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#5E686D]">
                      <span className="text-xs font-mono font-bold text-[#C9A227] mt-0.5 shrink-0">0{i + 1}</span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="bg-white p-6">
                <div className="w-4 h-0.5 bg-[#C9A227] mb-4" />
                <h3 className="text-base font-bold text-[#0A1114] mb-2">Start with the Readiness Check</h3>
                <p className="text-xs text-[#5E686D] leading-relaxed mb-4">
                  Not sure what you need? The free Readiness Check is the no-risk entry point. 2–3 days, scored findings,
                  1-page roadmap. No commitment required.
                </p>
                <p className="text-xs font-semibold text-[#0A1114]">Free → $1.5k · 2–3 days</p>
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0A1114] mb-3">Markets we serve</h3>
                <div className="flex flex-wrap gap-2">
                  {["UK", "EU", "Germany", "US", "Canada", "Australia", "Singapore"].map((m) => (
                    <span key={m} className="text-xs font-mono px-2.5 py-1 border border-[#E3E0D8] text-[#5E686D] bg-white">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
