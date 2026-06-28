import Link from "next/link";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const platforms = ["Databricks", "Cloudera CDP", "Apache Spark", "Terraform", "Azure", "AWS", "GCP"];

const pillars = [
  {
    label: "Lean, senior team",
    desc: "A deliberately small, senior team. We take on only the clients we can give real attention to — the people who scope your work are the people who build it.",
  },
  {
    label: "Customer-centric",
    desc: "We recommend the right platform for your situation, not the one we are certified to push. If we are not the right fit, we will say so.",
  },
  {
    label: "Fixed & production-ready",
    desc: "Fixed scope, price, and timeline. IaC + CI/CD baked in. Every delivery is redeployable from day one.",
  },
];

const engagementModels = [
  {
    colorClass: "bg-[#F2F0EA]",
    badge: "Start here",
    badgeClass: "bg-[#C9A227] text-white",
    title: "Productized Bundle",
    icon: "→",
    desc: "Pre-defined package. Fixed scope, published price, fixed timeline. Pick the bundle that matches your need — no scoping call required.",
    best: "You know exactly what you need and want it fast.",
    cta: "Browse Bundles",
    href: "/bundles",
    dark: false,
  },
  {
    colorClass: "bg-white border border-[#E3E0D8]",
    badge: "Custom",
    badgeClass: "bg-[#0A1114] text-white",
    title: "Custom Engagement",
    icon: "⟐",
    desc: "Modules assembled to your situation. We define scope together in a discovery call, then quote a fixed price with a clear SOW.",
    best: "You have a known outcome, but it does not quite fit a standard bundle.",
    cta: "Talk to us",
    href: "/contact",
    dark: false,
  },
  {
    colorClass: "bg-[#0A1114]",
    badge: "Premium",
    badgeClass: "bg-[#C9A227] text-white",
    title: "Bespoke Build",
    icon: "◈",
    desc: "Fully tailored platform or program. Co-designed, phased, with milestones. The complex, one-of-a-kind work we love.",
    best: "You are building something large, novel, or ongoing.",
    cta: "Start a conversation",
    href: "/contact",
    dark: true,
  },
];

const bundles = [
  {
    category: "Step 0 · Free",
    name: "Platform Readiness Check",
    price: "Free",
    time: "0–3 days",
    desc: "Assess your cloud setup, security posture, and workloads. Returns a platform recommendation, right bundle choice, and gap checklist.",
    highlight: false,
    free: true,
  },
  {
    category: "Bundle A · Standard",
    name: "Launchpad",
    price: "$8k–$18k",
    time: "2–4 weeks",
    desc: "3 governed environments (DEV/UAT/PRO) + IaC repo + reference workload. Databricks or Cloudera CDP.",
    highlight: false,
    free: false,
  },
  {
    category: "Bundle B · Enterprise",
    name: "Zero Trust Enterprise",
    price: "$18k–$38k",
    time: "4–8 weeks",
    desc: "Everything in Launchpad plus private connectivity, CMK/BYOK, exfil controls, and a compliance-ready handover deck.",
    highlight: true,
    free: false,
  },
];

const steps = [
  { n: "01", title: "Inquire", desc: "Tell us what you need — or ask us to help figure it out." },
  { n: "02", title: "Triage", desc: "We confirm fit within 24–48 hours and suggest the right path." },
  { n: "03", title: "Discovery", desc: "A short, free call to align on scope, outcomes, and timing." },
  { n: "04", title: "SOW & kickoff", desc: "Fixed scope and timeline on paper. Then we start building." },
  { n: "05", title: "Delivery", desc: "Async updates, demos, and a clean handover. You own everything." },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main className="pt-16">

        {/* ── Hero ── */}
        <section className="bg-white pt-20 pb-24 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-[#C9A227]" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A227]">
                  Senior Data Engineering · Productized
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A1114] leading-tight tracking-tight mb-6">
                Your data platform should work.{" "}
                <span className="text-[#C9A227]">We make sure it does.</span>
              </h1>
              <p className="text-lg text-[#5E686D] leading-relaxed max-w-2xl mb-10">
                A lean, senior data engineering studio. Fixed scope. Fixed price. We stand up governed, production-ready
                data platforms on Databricks and Cloudera CDP in 2–8 weeks — with Terraform, CI/CD, and zero-trust controls built in.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#C9A227] text-white text-sm font-semibold hover:bg-[#A7861F] transition-colors"
                >
                  Book a Free Readiness Check
                </Link>
                <Link
                  href="/bundles"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#0A1114] text-white text-sm font-semibold hover:bg-[#070B0D] transition-colors"
                >
                  See Our Bundles
                </Link>
              </div>
            </div>

            {/* Platform tags */}
            <div className="mt-16 flex flex-wrap gap-3">
              {platforms.map((p) => (
                <span
                  key={p}
                  className="font-mono text-xs px-3 py-1.5 border border-[#E3E0D8] text-[#5E686D] bg-[#F2F0EA]"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Proof bar ── */}
        <section className="bg-[#F2F0EA] border-y border-[#E3E0D8] py-5 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-x-8 gap-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#5E686D] shrink-0">
              Delivered for teams in
            </span>
            {["Enterprise SaaS", "Fintech", "Healthcare", "Logistics", "Energy"].map((s) => (
              <span key={s} className="text-sm font-medium text-[#0A1114]">
                {s}
              </span>
            ))}
            <span className="ml-auto text-xs text-[#5E686D] font-mono shrink-0">EU · US · APAC · Remote</span>
          </div>
        </section>

        {/* ── The problem ── */}
        <section className="bg-white py-24 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1114] leading-tight mb-6">
                Teams buy a data platform. Then stall.
              </h2>
              <p className="text-base text-[#5E686D] leading-relaxed">
                Fragile pipelines. Runaway compute costs. Data no one trusts. Governance that lives only in a slide deck.
                We&apos;ve seen it at national-scale programs and Series-B startups alike. The fix is always the same:
                senior engineers, clear scope, and accountability to a finish line.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E3E0D8]">
              {pillars.map((p) => (
                <div key={p.label} className="bg-white p-10">
                  <div className="w-6 h-0.5 bg-[#C9A227] mb-6" />
                  <h3 className="text-xl font-bold text-[#0A1114] mb-3">{p.label}</h3>
                  <p className="text-sm text-[#5E686D] leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Engagement models ── */}
        <section className="bg-[#F2F0EA] py-24 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-xl mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A227] mb-3">How to work with us</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1114] leading-tight">
                Three ways to engage.<br />You pick the one that fits.
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {engagementModels.map((m) => (
                <div key={m.title} className={`p-8 ${m.colorClass} flex flex-col`}>
                  <div className="flex items-start justify-between mb-6">
                    <span className={`text-xs font-semibold uppercase tracking-widest px-2 py-1 ${m.badgeClass}`}>
                      {m.badge}
                    </span>
                    <span className="text-3xl font-bold text-[#C9A227]">{m.icon}</span>
                  </div>
                  <h3 className={`text-xl font-bold mb-4 ${m.dark ? "text-white" : "text-[#0A1114]"}`}>
                    {m.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-4 flex-1 ${m.dark ? "text-[#9BA3A7]" : "text-[#5E686D]"}`}>
                    {m.desc}
                  </p>
                  <p className={`text-xs font-medium mb-6 ${m.dark ? "text-[#9BA3A7]" : "text-[#5E686D]"}`}>
                    <span className={`font-semibold ${m.dark ? "text-white" : "text-[#0A1114]"}`}>Best for: </span>
                    {m.best}
                  </p>
                  <Link
                    href={m.href}
                    className="inline-flex items-center text-sm font-semibold gap-2 text-[#C9A227] hover:text-[#C9A227] transition-colors"
                  >
                    {m.cta} <span>→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bundles ── */}
        <section className="bg-white py-24 px-6 lg:px-8" id="bundles">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A227] mb-3">The offering</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1114] leading-tight">
                  Two bundles.<br />Every use case.
                </h2>
                <p className="text-base text-[#5E686D] mt-3 max-w-md">
                  Databricks · Cloudera CDP. Start free, then pick the bundle that matches your security posture.
                </p>
              </div>
              <Link
                href="/bundles"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A1114] border border-[#0A1114] px-5 py-3 hover:bg-[#0A1114] hover:text-white transition-colors shrink-0"
              >
                Full bundle details →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E3E0D8]">
              {bundles.map((b) => (
                <div
                  key={b.name}
                  className={`p-8 flex flex-col ${
                    b.highlight
                      ? "bg-[#0A1114]"
                      : b.free
                      ? "bg-[#F2F0EA]"
                      : "bg-white"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-xs font-semibold uppercase tracking-widest ${b.highlight ? "text-[#C9A227]" : "text-[#C9A227]"}`}>
                      {b.category}
                    </span>
                    {b.free && (
                      <span className="text-xs bg-[#0A1114] text-white px-2 py-0.5 font-semibold">
                        Free
                      </span>
                    )}
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${b.highlight ? "text-white" : "text-[#0A1114]"}`}>
                    {b.name}
                  </h3>
                  <p className={`text-sm leading-relaxed flex-1 mb-6 ${b.highlight ? "text-[#9BA3A7]" : "text-[#5E686D]"}`}>
                    {b.desc}
                  </p>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className={`font-mono text-xl font-bold ${b.highlight ? "text-[#C9A227]" : "text-[#0A1114]"}`}>
                        {b.price}
                      </div>
                      <div className={`text-xs mt-0.5 ${b.highlight ? "text-[#9BA3A7]" : "text-[#5E686D]"}`}>
                        {b.time}
                      </div>
                    </div>
                    <Link
                      href={b.free ? "/contact" : "/bundles"}
                      className="text-sm font-semibold text-[#C9A227] hover:text-[#C9A227] transition-colors"
                    >
                      {b.free ? "Book →" : "Details →"}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it works ── */}
        <section className="bg-[#0A1114] py-24 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A227] mb-3">The process</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                You always know what happens next.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {steps.map((s) => (
                <div key={s.n} className="flex flex-col">
                  <div className="w-10 h-10 bg-[#C9A227] flex items-center justify-center text-white font-mono text-xs font-bold mb-4">
                    {s.n}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{s.title}</h4>
                  <p className="text-sm text-[#9BA3A7] leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#C9A227] hover:text-[#C9A227] transition-colors"
              >
                Full process breakdown →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Why Abakka ── */}
        <section className="bg-[#F2F0EA] py-24 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-xl mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A227] mb-3">Why Abakka</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1114] leading-tight">
                Senior engineers.<br />Fixed price.<br />Real outcomes.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E3E0D8]">
              {[
                {
                  title: "Direct access",
                  desc: "You talk to the engineers doing the work — not an account manager or project coordinator.",
                },
                {
                  title: "No surprises",
                  desc: "Scope is in writing before work starts. Anything outside it goes through a change order.",
                },
                {
                  title: "Weeks, not quarters",
                  desc: "Productized bundles run 2–8 weeks. No 6-month SOWs to get something shipped.",
                },
                {
                  title: "You own everything",
                  desc: "All code, docs, IaC, and walkthroughs are yours. We don't create dependency.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white p-8">
                  <div className="w-4 h-0.5 bg-[#C9A227] mb-5" />
                  <h3 className="text-xl font-bold text-[#0A1114] mb-3">{item.title}</h3>
                  <p className="text-sm text-[#5E686D] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[#C9A227] py-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                Ready to fix your data platform?
              </h2>
              <p className="text-sm text-[#9BA3A7] max-w-lg">
                Start with a free Readiness Check. We review your current state and give you a scored findings report
                and 1-page roadmap — no strings attached.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#C9A227] text-sm font-bold hover:bg-[#F2F0EA] transition-colors"
              >
                Book a Free Readiness Check
              </Link>
              <Link
                href="/bundles"
                className="inline-flex items-center justify-center px-8 py-4 border border-white text-white text-sm font-semibold hover:bg-[#0A1114] transition-colors"
              >
                View Bundles
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
