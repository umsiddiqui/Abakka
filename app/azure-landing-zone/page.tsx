import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AzureLandingZoneBundles from "../components/AzureLandingZoneBundles";
import AnimateIn from "../components/AnimateIn";

/* ── Management Group hierarchy tree ──
   Same technique as PlatformDiagram on /bundles: explicit absolute
   x/y positions per node, no layout math library, one shared canvas. */
function ALZDiagram() {
  const cx = 380, cy = 90;

  type Node = { x: number; y: number; label: string; color: string; r: number };

  const level2: Node[] = [
    { x: 160, y: 290, label: "Platform MG", color: "#249EDC", r: 9 },
    { x: 380, y: 290, label: "Landing Zones MG", color: "#C9A227", r: 9 },
    { x: 600, y: 290, label: "Sandbox", color: "#E3E0D8", r: 9 },
  ];

  const level3: Node[] = [
    { x: 70, y: 480, label: "Management", color: "#249EDC", r: 6 },
    { x: 160, y: 480, label: "Connectivity", color: "#249EDC", r: 6 },
    { x: 250, y: 480, label: "Identity", color: "#249EDC", r: 6 },
    { x: 330, y: 480, label: "Corp", color: "#C9A227", r: 6 },
    { x: 430, y: 480, label: "Online", color: "#C9A227", r: 6 },
  ];

  const branches: Array<{ from: Node; to: Node[] }> = [
    { from: level2[0], to: level3.slice(0, 3) },
    { from: level2[1], to: level3.slice(3, 5) },
  ];

  return (
    <svg viewBox="0 0 760 640" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className="w-full h-full">
      <defs>
        <pattern id="alz-dots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.7" fill="rgba(255,255,255,0.04)" />
        </pattern>
        <filter id="alz-gr" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="6" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="alz-node-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="2" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="alz-amb" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#C9A227" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#C9A227" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background */}
      <rect width="760" height="640" fill="url(#alz-dots)" />
      <ellipse cx={cx} cy="320" rx="380" ry="300" fill="url(#alz-amb)" />

      {/* Subtle rotating ring around root */}
      <circle cx={cx} cy={cy} r="70" stroke="#C9A227" strokeWidth="1.2" strokeDasharray="4 8" opacity="0.4">
        <animateTransform attributeName="transform" type="rotate" from={`0 ${cx} ${cy}`} to={`360 ${cx} ${cy}`} dur="70s" repeatCount="indefinite" />
      </circle>

      {/* Root → level 2 spokes */}
      {level2.map((n) => (
        <line key={`root-${n.label}`} x1={cx} y1={cy} x2={n.x} y2={n.y} stroke="#C9A227" strokeWidth="1" strokeDasharray="3 3" opacity="0.35">
          <animate attributeName="stroke-dashoffset" values="12;0" dur="1.2s" repeatCount="indefinite" />
        </line>
      ))}

      {/* level 2 → level 3 branches */}
      {branches.map((b) =>
        b.to.map((n) => (
          <line key={`branch-${n.label}`} x1={b.from.x} y1={b.from.y} x2={n.x} y2={n.y} stroke={b.from.color} strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
        ))
      )}

      {/* ── CORE: TENANT ROOT ── */}
      <g filter="url(#alz-gr)">
        <circle cx={cx} cy={cy} r="50" stroke="#C9A227" strokeWidth="1.5" fill="none" opacity="0">
          <animate attributeName="r" values="50;68;50" dur="3.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0;0.4" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <circle cx={cx} cy={cy} r="50" fill="#070B0D" stroke="#C9A227" strokeWidth="2" />
        <circle cx={cx} cy={cy} r="42" stroke="#C9A227" strokeWidth="0.4" fill="none" opacity="0.25" />
      </g>
      <text x={cx} y={cy - 4} textAnchor="middle" fill="white" fontSize="13" fontFamily="monospace" fontWeight="bold" letterSpacing="1.5">TENANT</text>
      <text x={cx} y={cy + 14} textAnchor="middle" fill="white" fontSize="13" fontFamily="monospace" fontWeight="bold" letterSpacing="1.5">ROOT</text>

      {/* level 2 nodes */}
      {level2.map((n) => (
        <g key={`l2-${n.label}`}>
          <circle cx={n.x} cy={n.y} r={n.r} fill={n.color} filter="url(#alz-node-glow)" />
          <text x={n.x} y={n.y - 18} textAnchor="middle" fill={n.color} fontSize="13" fontFamily="monospace" fontWeight="600">
            {n.label}
          </text>
        </g>
      ))}
      <text x={600} y={330} textAnchor="middle" fill="#9BA3A7" fontSize="11" fontFamily="monospace">
        (R&amp;D playgrounds)
      </text>

      {/* level 3 leaves */}
      {level3.map((n) => (
        <g key={`l3-${n.label}`}>
          <circle cx={n.x} cy={n.y} r={n.r} fill={n.color} filter="url(#alz-node-glow)" />
          <text x={n.x} y={n.y + 22} textAnchor="middle" fill={n.color} fontSize="12" fontFamily="monospace" fontWeight="600">
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ── Add-ons data ── */
const addons = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <circle cx="12" cy="12" r="9" /><path d="M12 7v10M9 10a2.5 2.5 0 0 1 2.5-2h1a2.25 2.25 0 0 1 0 4.5h-1a2.25 2.25 0 0 0 0 4.5h1a2.5 2.5 0 0 0 2.5-2" />
      </svg>
    ),
    name: "FinOps Cost Governance Pack",
    desc: "Auto-stop policies on non-production resources, budget alerts, and cost-allocation tag enforcement. Drops idle landing-zone spend from the industry-typical $2,200–$3,500/mo down to a $150–$450/mo lean base.",
    tags: ["Budget alerts", "Auto-stop policies", "Tag enforcement"],
    price: "$2k–$4k",
    time: "~1 week",
    accentClass: "text-[#C9A227]",
    borderClass: "border-[#C9A227]/30",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M12 2 4 5v6c0 5 3.4 8.7 8 11 4.6-2.3 8-6 8-11V5l-8-3z" /><path d="M9 12l2 2 4-4" />
      </svg>
    ),
    name: "Compliance Mapping Pack",
    desc: "SOC 2 / ISO 27001 / HIPAA / NIST 800-53 control-to-framework mapping deck plus exportable audit artifacts, ready to hand your external auditors.",
    tags: ["SOC 2", "ISO 27001", "NIST 800-53"],
    price: "$3k–$5k",
    time: "1–2 weeks",
    accentClass: "text-[#C9A227]",
    borderClass: "border-[#C9A227]/30",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 4 6 4 9s-1.5 6.5-4 9c-2.5-2.5-4-6-4-9s1.5-6.5 4-9z" />
      </svg>
    ),
    name: "Multi-Region / DR Expansion",
    desc: "A second-region spoke with geo-redundant hub connectivity and a tested failover runbook.",
    tags: ["Multi-region", "Geo-redundancy", "IaC included"],
    price: "$4k–$8k",
    time: "2–3 weeks",
    accentClass: "text-[#0A1114]",
    borderClass: "border-[#0A1114]/40",
  },
];

const differences = [
  {
    a: "Hub-and-spoke connectivity, centralized firewall",
    b: "+ Private AKS / App Service enclaves, isolated workload subscriptions",
    label: "Network posture",
  },
  {
    a: "80+ MCSB policy guardrails",
    b: "+ CMK/BYOK encryption, exfiltration protection",
    label: "Governance",
  },
  {
    a: "Architecture spec + Day-2 runbooks",
    b: "Compliance-ready deck: SOC 2/ISO/NIST control mapping",
    label: "Handover",
  },
  {
    a: "1× post-handover support call",
    b: "2× post-handover support calls",
    label: "Support",
  },
];

export default function AzureLandingZonePage() {
  return (
    <>
      <Nav />
      <main className="pt-16">

        {/* ── HERO ── */}
        <section className="bg-[#070B0D] relative overflow-hidden pt-16 pb-14 px-6 lg:px-8">
          <div className="absolute inset-0 dot-grid-dark pointer-events-none" />
          <div
            className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(235,22,0,0.08) 0%, transparent 70%)" }}
          />

          <div className="max-w-6xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-10 items-center">

              {/* Left: copy */}
              <div>
                <div className="hero-fade-up inline-flex items-center gap-2 mb-5">
                  <span className="w-1.5 h-1.5 bg-[#C9A227] rounded-full" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A227]">
                    Productized bundles · Azure Landing Zone
                  </span>
                </div>

                <h1 className="hero-fade-up delay-100 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
                  Launch your audit-ready<br />
                  Azure foundation in{" "}
                  <span className="gradient-text-red">14 days.</span>
                </h1>

                <p className="hero-fade-up delay-200 text-lg text-[#9BA3A7] leading-relaxed max-w-lg mb-8">
                  Two bundles. Fixed scope, fixed price, fixed timeline. Engineered to Microsoft&apos;s Cloud Adoption Framework —
                  80+ guardrails enforced from day one, not bolted on after an audit finding.
                </p>

                <div className="hero-fade-up delay-300 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="#assessment"
                    className="inline-flex items-center justify-center px-7 py-3.5 bg-[#C9A227] text-white text-sm font-bold hover:bg-[#A7861F] transition-colors"
                  >
                    Book Free Readiness Check
                  </Link>
                  <Link
                    href="#bundles"
                    className="inline-flex items-center justify-center px-7 py-3.5 border border-[#2a2d30] text-[#9BA3A7] text-sm font-semibold hover:border-white hover:text-white transition-colors"
                  >
                    See Bundles ↓
                  </Link>
                </div>
              </div>

              {/* Right: management group hierarchy diagram */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="hero-fade-right delay-400 float-slow w-full aspect-[760/640]">
                  <ALZDiagram />
                </div>
              </div>
            </div>

            {/* Stats strip */}
            <div className="hero-fade-up delay-500 mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#2a2d30]">
              {[
                { value: "80+", label: "enforced guardrails" },
                { value: "<14 days", label: "deployment velocity" },
                { value: "$150/mo", label: "FinOps base run-cost" },
                { value: "100%", label: "audit-ready day 1" },
              ].map((s) => (
                <div key={s.label} className="bg-[#0A1114] px-6 py-4">
                  <div className="font-mono text-xl font-bold text-white">{s.value}</div>
                  <div className="text-xs text-[#5E686D] uppercase tracking-widest mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Step 0: Free Assessment ── */}
        <section className="bg-[#F2F0EA] line-grid-light py-12 px-6 lg:px-8 border-b border-[#E3E0D8]" id="assessment">
          <div className="max-w-6xl mx-auto">
            <AnimateIn className="mb-7">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A227]">Step 0 · Always free</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1114] mt-2">Azure Cloud Foundation Readiness Check</h2>
              <p className="text-base text-[#5E686D] mt-1.5 max-w-xl">
                Before we lay down a single management group, we confirm your CAF maturity gaps and which bundle makes sense — zero obligation.
              </p>
            </AnimateIn>

            <AnimateIn delay={100}>
              <div className="bg-white border-t-2 border-[#C9A227] grid grid-cols-1 lg:grid-cols-2 gap-0 card-lift">
                {/* Left */}
                <div className="p-7 border-b lg:border-b-0 lg:border-r border-[#E3E0D8]">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#FAFAF8] text-[#C9A227] px-3 py-1 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                    Free · 0–3 days
                  </span>
                  <h3 className="text-xl font-bold text-[#0A1114] mb-3">
                    Azure Landing Zone Readiness Check
                  </h3>
                  <p className="text-sm text-[#5E686D] leading-relaxed mb-5">
                    We review your subscription sprawl, security posture, billing hierarchy, and compliance targets — then return
                    a 4–6 page PDF plus a 30-min call with a clear recommendation: which bundle, and what gaps to close first.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-widest text-[#5E686D] border-b border-[#E3E0D8] pb-2 mb-3">You Get</span>
                      <ul className="space-y-2">
                        {[
                          "Scored findings report (governance + security posture)",
                          "Right bundle recommendation",
                          "Gap checklist against 80+ MCSB guardrails",
                          "FinOps cost-exposure estimate",
                          "30-min debrief with a senior cloud architect",
                        ].map((d) => (
                          <li key={d} className="flex items-start gap-2 text-sm text-[#0A1114]">
                            <svg className="shrink-0 mt-0.5 text-[#C9A227]" width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                              <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 1 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />
                            </svg>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-widest text-[#5E686D] border-b border-[#E3E0D8] pb-2 mb-3">You Provide</span>
                      <ul className="space-y-2">
                        {[
                          "Azure tenant read access (or architecture docs)",
                          "60-min discovery call (async-friendly)",
                        ].map((p) => (
                          <li key={p} className="flex items-start gap-2 text-sm text-[#5E686D]">
                            <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full bg-[#5E686D] block" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="p-7">
                  <span className="block text-xs font-semibold uppercase tracking-widest text-[#5E686D] mb-4">What We Assess</span>
                  <ul className="space-y-2 mb-7">
                    {[
                      "Management group hierarchy & subscription sprawl",
                      "Security posture against Microsoft Cloud Security Benchmark",
                      "Networking topology (hub-spoke readiness, ExpressRoute/VPN)",
                      "Identity & PKI maturity",
                      "Compliance targets (SOC 2, ISO 27001, HIPAA, NIST 800-53)",
                    ].map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-[#0A1114]">
                        <svg className="shrink-0 mt-0.5 text-[#C9A227]" width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                          <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 1 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />
                        </svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-[#5E686D] mb-4">Applies to greenfield and brownfield Azure tenants — EA, MCA, or CSP billing.</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3.5 bg-[#C9A227] text-white text-sm font-bold hover:bg-[#A7861F] transition-colors glow-red-sm"
                  >
                    Book Free Readiness Check →
                  </Link>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Bundles ── */}
        <section className="bg-white py-12 px-6 lg:px-8 border-b border-[#E3E0D8]" id="bundles">
          <div className="max-w-6xl mx-auto">
            <AnimateIn className="mb-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A227]">Paid bundles · Fixed price &amp; timeline</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1114] mt-2">Two bundles. One audit-ready foundation.</h2>
              <p className="text-base text-[#5E686D] mt-1.5 max-w-xl">
                Both bundles include the full Enterprise Root Management Group hierarchy, 80+ policy guardrails, and centralized telemetry.
                The difference is workload readiness.
              </p>
            </AnimateIn>
            <AnimateIn delay={100}>
              <AzureLandingZoneBundles />
            </AnimateIn>
          </div>
        </section>

        {/* ── Add-ons ── */}
        <section className="bg-[#F2F0EA] py-12 px-6 lg:px-8 border-b border-[#E3E0D8]" id="addons">
          <div className="max-w-6xl mx-auto">
            <AnimateIn className="mb-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A227]">Add-ons · Fixed-price modules</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1114] mt-2">Extend your foundation</h2>
              <p className="text-base text-[#5E686D] mt-1.5 max-w-lg">
                Each module is a standalone fixed-price add-on — bolt onto either bundle.
                Priced after your free assessment.
              </p>
            </AnimateIn>

            <div className="flex flex-col gap-3">
              {addons.map((a, i) => (
                <AnimateIn key={a.name} delay={i * 80}>
                  <div className={`bg-white border border-[#E3E0D8] border-l-2 ${a.borderClass} p-5 grid grid-cols-[44px_1fr_auto] items-start gap-5 card-lift`}>
                    <div className={`w-10 h-10 border border-[#E3E0D8] flex items-center justify-center ${a.accentClass}`}>
                      {a.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0A1114] mb-1">{a.name}</h3>
                      <p className="text-sm text-[#5E686D] leading-relaxed max-w-xl mb-2.5">{a.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {a.tags.map((t) => (
                          <span key={t} className="text-xs font-mono px-2 py-0.5 border border-[#E3E0D8] text-[#5E686D] bg-[#F2F0EA]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-mono text-base font-bold text-[#0A1114]">{a.price}</div>
                      <div className="text-xs text-[#5E686D] mt-0.5">{a.time}</div>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
            <p className="mt-4 text-xs text-[#5E686D]">
              Add-on pricing confirmed after your free Readiness Check. Each is a separate fixed-price SOW.
            </p>
          </div>
        </section>

        {/* ── Bundle comparison ── */}
        <section className="bg-white py-12 px-6 lg:px-8 border-b border-[#E3E0D8]">
          <div className="max-w-6xl mx-auto">
            <AnimateIn className="mb-7">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A227]">Bundle comparison</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1114] mt-2">What changes between Foundation and Zero Trust Workloads?</h2>
              <p className="text-base text-[#5E686D] mt-1.5 max-w-xl">
                Foundation gets your enterprise governed and connected fast. Zero Trust Workloads adds your first production-grade,
                pipeline-deployed applications.
              </p>
            </AnimateIn>
            <AnimateIn delay={100}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Cloud Foundation card */}
                <div className="border border-[#E3E0D8] p-6">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-xl font-bold text-[#0A1114]">Bundle A · Cloud Foundation</h3>
                    <span className="text-xs font-mono bg-[#F2F0EA] border border-[#E3E0D8] px-2 py-1 text-[#5E686D]">2–4 weeks</span>
                  </div>
                  <ul className="space-y-3">
                    {differences.map((d) => (
                      <li key={d.label} className="flex items-start gap-3">
                        <span className="text-xs font-semibold text-[#5E686D] uppercase tracking-widest w-24 shrink-0 mt-0.5">{d.label}</span>
                        <span className="text-sm text-[#0A1114]">{d.a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Zero Trust Workloads card */}
                <div className="bg-[#0A1114] p-6">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-xl font-bold text-white">Bundle B · Zero Trust Workloads</h3>
                    <span className="text-xs font-mono bg-[#0A1114] border border-[#2a2d30] px-2 py-1 text-[#9BA3A7]">4–8 weeks</span>
                  </div>
                  <ul className="space-y-3">
                    {differences.map((d) => (
                      <li key={d.label} className="flex items-start gap-3">
                        <span className="text-xs font-semibold text-[#5E686D] uppercase tracking-widest w-24 shrink-0 mt-0.5">{d.label}</span>
                        <span className="text-sm text-white">{d.b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#F2F0EA] p-4">
                  <span className="block text-xs font-semibold uppercase tracking-widest text-[#5E686D] mb-1">Cloud Foundation</span>
                  <span className="text-sm text-[#0A1114]">For startups, scale-ups, and teams that need a governed foundation before their first workload.</span>
                </div>
                <div className="bg-[#F2F0EA] p-4">
                  <span className="block text-xs font-semibold uppercase tracking-widest text-[#5E686D] mb-1">Zero Trust Workloads</span>
                  <span className="text-sm text-[#0A1114]">For enterprises shipping regulated workloads that need audit-ready evidence on day one.</span>
                </div>
                <div className="bg-[#F2F0EA] p-4">
                  <span className="block text-xs font-semibold uppercase tracking-widest text-[#5E686D] mb-1">Not sure?</span>
                  <span className="text-sm text-[#0A1114]">The free Readiness Check recommends the right bundle.</span>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Not sure? ── */}
        <section className="bg-[#0A1114] py-14 px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 dot-grid-dark pointer-events-none opacity-60" />
          <div className="max-w-6xl mx-auto relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <AnimateIn direction="left">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">Not sure which bundle fits your Azure tenant?</h2>
              <p className="text-sm text-[#9BA3A7] max-w-lg">
                Book a free 30-min call. We&apos;ll recommend the right bundle — or tell you honestly if neither fits and why.
                No pitch, no obligation.
              </p>
            </AnimateIn>
            <AnimateIn direction="right" className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#C9A227] text-white text-sm font-bold hover:bg-[#A7861F] transition-colors glow-red-sm"
              >
                Book Free Readiness Check
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-[#2a2d30] text-[#9BA3A7] text-sm font-semibold hover:border-white hover:text-white transition-colors"
              >
                Send an email
              </Link>
            </AnimateIn>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
