import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const phases = [
  {
    n: 1,
    title: "Tell us what's broken",
    time: "2 min",
    who: "You",
    desc: "Fill the short form or book a call. Tell us where it hurts — a stalled migration, fragile pipelines, a security audit looming, or just \"we don't know.\"",
    outcome: "Your situation, in our words back to you.",
    tone: "light",
  },
  {
    n: 2,
    title: "We triage honestly",
    time: "24–48 hrs",
    who: "Us",
    desc: "A senior engineer reviews your message. If we're a fit, we propose a path. If we aren't, we tell you so and point you to someone better suited.",
    outcome: "A yes/no, not a sales call.",
    tone: "dark",
  },
  {
    n: 3,
    title: "Discovery, no pressure",
    time: "30–45 min",
    who: "Both",
    desc: "We walk through scope, constraints, prerequisites, and what success looks like to you. This is free, and nothing is decided until you're ready.",
    outcome: "A shared picture of the work.",
    tone: "light",
  },
  {
    n: 4,
    title: "The SOW — clear, in writing",
    time: "2–3 days",
    who: "Us",
    desc: "Fixed scope. Fixed timeline. Acceptance criteria. Prerequisites. Everything we could find, on paper. If you'd rather shop it around, go ahead — this is the document to compare against.",
    outcome: "A contract you'd actually sign without a lawyer present (though bring one).",
    tone: "dark",
  },
  {
    n: 5,
    title: "Kickoff — the clock starts here",
    time: "Day 1",
    who: "Both",
    desc: "Prereqs confirmed. Access granted. A shared channel opened. Your slot is now locked. If anything's missing, we pause and sort it — no silent drift.",
    outcome: "A clean, unblocked start.",
    tone: "light",
  },
  {
    n: 6,
    title: "Build, with eyes on it",
    time: "Per bundle",
    who: "Us",
    desc: "Async updates every 2 days. A mid-point demo on longer engagements. If we hit a blocker — technical, access, or scope — you hear about it immediately, not at the end.",
    outcome: "You never have to ask \"so… where are we?\"",
    tone: "dark",
  },
  {
    n: 7,
    title: "Handover — you own everything",
    time: "Final 1–2 days",
    who: "Us",
    desc: "Code, IaC, configs, runbooks, a recorded walkthrough. Nothing lives only in our heads. You could fire us the next day and the platform still runs.",
    outcome: "Independence, by design.",
    tone: "light",
  },
  {
    n: 8,
    title: "Sign-off — and that's it",
    time: "Your pace",
    who: "Both",
    desc: "You verify against the SOW's acceptance criteria. If there's a gap, we close it before the engagement ends. No open tickets, no \"we'll handle it next phase.\"",
    outcome: "Done means done.",
    tone: "dark",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">

        {/* Header */}
        <section className="bg-white py-20 px-6 lg:px-8 border-b border-[#E8EAEB]">
          <div className="max-w-7xl mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-[#EB1600]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#EB1600]">The process</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B3139] leading-tight mb-6">
              You always know what happens next.
            </h1>
            <p className="text-lg text-[#6B7B82] leading-relaxed">
              Eight steps, published so you know exactly where you stand at every stage. No black boxes, no surprises at the end.
            </p>
          </div>
        </section>

        {/* Steps — alternating visual rhythm */}
        <section className="bg-white py-20 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto flex flex-col gap-6">
            {phases.map((s) => {
              const dark = s.tone === "dark";
              return (
                <div
                  key={s.n}
                  className={`relative flex flex-col md:flex-row ${dark ? "bg-[#1B3139]" : "bg-white border border-[#E8EAEB]"} group transition-colors`}
                >
                  {/* Step number column */}
                  <div className={`md:w-40 shrink-0 flex md:flex-col items-center md:items-start justify-between md:justify-between p-6 md:p-7 ${dark ? "border-b md:border-b-0 md:border-r border-[#2a4550]" : "border-b md:border-b-0 md:border-r border-[#E8EAEB]"}`}>
                    <div className={`flex items-center gap-3 md:gap-0 md:flex-col md:items-start`}>
                      <span className={`font-mono text-4xl md:text-5xl font-bold leading-none ${dark ? "text-[#EB1600]" : "text-[#1B3139]"}`}>
                        {String(s.n).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex md:flex-col gap-2 md:gap-1 items-end md:items-start">
                      <span className={`text-xs font-mono font-semibold ${dark ? "text-white" : "text-[#1B3139]"}`}>{s.time}</span>
                      <span className={`text-xs uppercase tracking-widest ${dark ? "text-[#9BB0B8]" : "text-[#6B7B82]"}`}>{s.who}</span>
                    </div>
                  </div>

                  {/* Content column */}
                  <div className="p-6 md:p-7 flex-1">
                    <h3 className={`text-xl font-bold mb-2 ${dark ? "text-white" : "text-[#1B3139]"}`}>
                      {s.title}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-4 max-w-2xl ${dark ? "text-[#9BB0B8]" : "text-[#6B7B82]"}`}>
                      {s.desc}
                    </p>
                    <div className={`mt-4 flex items-baseline gap-3 px-4 py-3 border-l-2 ${dark ? "bg-[#EB1600]/[0.07] border-[#EB1600]/60" : "bg-[#FFF8F7] border-[#EB1600]/50"}`}>
                      <span className="text-xs font-semibold uppercase tracking-widest shrink-0 text-[#EB1600]">
                        Outcome
                      </span>
                      <span className={`text-sm italic leading-snug ${dark ? "text-white" : "text-[#1B3139]"}`}>
                        {s.outcome}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* How we align on value — compact, non-salesy */}
        <section className="bg-[#F4F5F6] py-16 px-6 lg:px-8 border-y border-[#E8EAEB]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#EB1600] mb-3">How we align</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1B3139] leading-tight">
                Value first, then terms.
              </h2>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6">
                <h3 className="text-base font-bold text-[#1B3139] mb-2">Fixed scope protects everyone</h3>
                <p className="text-sm text-[#6B7B82] leading-relaxed">
                  Every SOW includes explicit scope, acceptance criteria, and prerequisites. If something new emerges, we handle it through a written change order — no surprises.
                </p>
              </div>
              <div className="bg-white p-6">
                <h3 className="text-base font-bold text-[#1B3139] mb-2">Milestones tied to outcomes</h3>
                <p className="text-sm text-[#6B7B82] leading-relaxed">
                  Payments are linked to delivery milestones, not calendar dates. You see working output before each step, so progress and value are visible throughout.
                </p>
              </div>
              <div className="bg-white p-6">
                <h3 className="text-base font-bold text-[#1B3139] mb-2">Flexible for larger programs</h3>
                <p className="text-sm text-[#6B7B82] leading-relaxed">
                  Bespoke engagements can be phased with monthly checkpoints. This keeps governance simple and lets us adapt as the program evolves.
                </p>
              </div>
              <div className="bg-white p-6">
                <h3 className="text-base font-bold text-[#1B3139] mb-2">You own the IP</h3>
                <p className="text-sm text-[#6B7B82] leading-relaxed">
                  All code, infrastructure definitions, documentation, and runbooks are transferred to you at handover. We do not build dependency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1B3139] py-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">Ready to get started?</h2>
              <p className="text-sm text-[#9BB0B8] max-w-lg">
                The free Readiness Check is the lowest-risk way to begin. Two days, a scored report, a clear roadmap — no commitment required.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#EB1600] text-white text-sm font-bold hover:bg-[#CC1300] transition-colors shrink-0"
            >
              Book a Free Readiness Check
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}