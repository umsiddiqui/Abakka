import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PlatformBundles from "../components/PlatformBundles";
import AnimateIn from "../components/AnimateIn";

/* ── Concentric capability rings ──
   Simple, robust: 3 static rings + a glowing core. Items placed at fixed
   top/right/bottom/left positions per ring — no math, no drift. */
function PlatformDiagram() {
  // Wider canvas so left/right labels never clip. Centered inside viewBox.
  const cx = 320, cy = 280;

  // Each ring: items at explicit absolute positions on the ring circumference.
  // Positions are chosen so that labels (which radiate outward) never overlap.
  // Ring 2 (ENABLERS) uses cardinal points; Ring 3 (DEPLOY) uses diagonals so
  // its side labels sit above/below Ring 2's, avoiding horizontal collisions.
  // Simpler, roomier layout. All item labels share one font size;
  // all dots share one size; labels sit outside the ring with generous padding.
  const r1 = 92, r2 = 152, r3 = 210;
  const rings = [
    {
      r: r1,
      stroke: "#EB1600",
      nodes: [
        { x: cx, y: cy - r1, label: "Databricks", color: "#FF8552" },
        { x: cx, y: cy + r1, label: "Cloudera CDP", color: "#FF9A5C" },
      ],
    },
    {
      r: r2,
      stroke: "#9BB0B8",
      nodes: [
        { x: cx, y: cy - r2, label: "Apache Spark", color: "#FF8A5C" },
        { x: cx + r2, y: cy, label: "Unity / Ranger", color: "#6BE0A8" },
        { x: cx, y: cy + r2, label: "Terraform", color: "#B084E8" },
        { x: cx - r2, y: cy, label: "Delta Lake", color: "#7BD4E0" },
      ],
    },
    {
      r: r3,
      stroke: "#6B7B82",
      nodes: [
        { x: cx, y: cy - r3, label: "Azure", color: "#5CC8FF" },
        { x: cx + r3 * 0.87, y: cy - r3 * 0.5, label: "AWS", color: "#FFC85C" },
        { x: cx + r3 * 0.87, y: cy + r3 * 0.5, label: "GCP", color: "#7AB8FF" },
        { x: cx - r3 * 0.87, y: cy - r3 * 0.5, label: "Zero Trust", color: "#A8E6F0" },
        { x: cx - r3 * 0.87, y: cy + r3 * 0.5, label: "Private Link", color: "#A8E6F0" },
      ],
    },
  ];

  // Label position: 28px outside the node, aligned to the center of the dot.
  const labelPos = (n: typeof rings[0]["nodes"][0], r: number): { x: number; y: number; anchor: "start" | "middle" | "end" } => {
    const pad = 28;
    const dx = n.x - cx;
    const dy = n.y - cy;
    const len = Math.sqrt(dx * dx + dy * dy) || 1;
    const ux = dx / len, uy = dy / len;
    return {
      x: n.x + ux * pad,
      y: n.y + uy * pad,
      anchor: Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? "start" : "end") : "middle",
    };
  };

  return (
    <svg viewBox="0 0 760 640" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className="w-full h-full">
      <defs>
        <pattern id="eco-dots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.7" fill="rgba(255,255,255,0.04)" />
        </pattern>
        <filter id="eco-gr" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="6" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="node-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="2" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="eco-amb" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#EB1600" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#EB1600" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background */}
      <rect width="760" height="640" fill="url(#eco-dots)" />
      <ellipse cx={cx} cy={cy} rx="360" ry="300" fill="url(#eco-amb)" />

      {/* ── Three rotating rings (measured strokes, all visible) ── */}
      {rings.map((ring, i) => {
        const dir = i % 2 === 0 ? -360 : 360;
        const dur = 90 - i * 25;
        return (
          <circle
            key={`ring-${i}`}
            cx={cx} cy={cy} r={ring.r}
            stroke={ring.stroke} strokeWidth="1.2" strokeDasharray="4 8" opacity={0.45 + i * 0.08}
          >
            <animateTransform attributeName="transform" type="rotate" from={`0 ${cx} ${cy}`} to={`${dir} ${cx} ${cy}`} dur={`${dur}s`} repeatCount="indefinite" />
          </circle>
        );
      })}

      {/* ── Spoke lines core → primary platforms ── */}
      {rings[0].nodes.map((n) => (
        <line key={`spoke-${n.label}`} x1={cx} y1={cy} x2={n.x} y2={n.y} stroke="#EB1600" strokeWidth="1" strokeDasharray="3 3" opacity="0.35">
          <animate attributeName="stroke-dashoffset" values="12;0" dur="1.2s" repeatCount="indefinite" />
        </line>
      ))}

      {/* ── CORE: ABAKKA ── */}
      <g filter="url(#eco-gr)">
        <circle cx={cx} cy={cy} r="52" stroke="#EB1600" strokeWidth="1.5" fill="none" opacity="0">
          <animate attributeName="r" values="52;72;52" dur="3.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0;0.4" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <circle cx={cx} cy={cy} r="52" fill="#0d1e24" stroke="#EB1600" strokeWidth="2" />
        <circle cx={cx} cy={cy} r="44" stroke="#EB1600" strokeWidth="0.4" fill="none" opacity="0.25" />
      </g>
      <text x={cx} y={cy + 7} textAnchor="middle" fill="white" fontSize="22" fontFamily="monospace" fontWeight="bold" letterSpacing="3">ABAKKA</text>

      {/* ── Ring nodes: uniform dots + measured labels ── */}
      {rings.map((ring, ri) =>
        ring.nodes.map((n) => {
          const lp = labelPos(n, ring.r);
          return (
            <g key={`node-${n.label}`}>
              <circle cx={n.x} cy={n.y} r="5.5" fill={n.color} filter="url(#node-glow)" />
              <text
                x={lp.x}
                y={lp.y}
                textAnchor={lp.anchor}
                dominantBaseline="middle"
                fill={n.color}
                fontSize="13"
                fontFamily="monospace"
                fontWeight="600"
                letterSpacing="0.2"
              >
                {n.label}
              </text>
            </g>
          );
        })
      )}
    </svg>
  );
}

/* ── Add-ons data ── */
const addons = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    name: "Key Vault / Secrets Manager",
    desc: "Databricks secret scopes backed by Azure Key Vault or AWS Secrets Manager. Credentials never stored in notebooks. Includes RBAC policy setup and IaC.",
    tags: ["Azure Key Vault", "AWS Secrets Manager", "IaC included"],
    price: "$2k–$4k",
    time: "~1 week",
    accentClass: "text-[#EB1600]",
    borderClass: "border-[#EB1600]/30",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" /><path d="M12 8v4l3 3" />
      </svg>
    ),
    name: "Azure OpenAI / AWS Bedrock Integration",
    desc: "Connect your platform to LLM endpoints over private networking — no public internet hop. Includes model gateway config, token quota setup, and a sample workload.",
    tags: ["Azure OpenAI", "AWS Bedrock", "Private endpoint"],
    price: "$3k–$6k",
    time: "1–2 weeks",
    accentClass: "text-[#FF5F46]",
    borderClass: "border-[#FF5F46]/30",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12" /><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    name: "Kubernetes (AKS / EKS) Integration",
    desc: "Deploy platform jobs that interact with your Kubernetes cluster. Includes service account setup, IAM binding, network peering, and a CI/CD trigger example.",
    tags: ["AKS (Azure)", "EKS (AWS)", "IaC included"],
    price: "$4k–$8k",
    time: "2–3 weeks",
    accentClass: "text-[#1B3139]",
    borderClass: "border-[#1B3139]/40",
  },
];

const differences = [
  {
    a: "Public / semi-private platform access",
    b: "Private connectivity, no public endpoints",
    label: "Network posture",
  },
  {
    a: "Baseline governance and access model",
    b: "Fine-grained controls, encryption, exfil protection",
    label: "Governance",
  },
  {
    a: "Standard handover pack",
    b: "Compliance-ready handover deck (SOC2 / ISO)",
    label: "Handover",
  },
  {
    a: "1× post-handover support call",
    b: "2× post-handover support calls",
    label: "Support",
  },
];

export default function BundlesPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">

        {/* ── HERO ── dark, two-column with animated SVG diagram ── */}
        <section className="bg-[#0d1e24] relative overflow-hidden pt-16 pb-14 px-6 lg:px-8">
          {/* Dot-grid texture */}
          <div className="absolute inset-0 dot-grid-dark pointer-events-none" />

          {/* Ambient red glow top-right */}
          <div
            className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(235,22,0,0.08) 0%, transparent 70%)" }}
          />

          <div className="max-w-6xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-10 items-center">

              {/* Left: copy */}
              <div>
                <div className="hero-fade-up inline-flex items-center gap-2 mb-5">
                  <span className="w-1.5 h-1.5 bg-[#EB1600] rounded-full" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#EB1600]">
                    Productized bundles · Databricks &amp; Cloudera CDP
                  </span>
                </div>

                <h1 className="hero-fade-up delay-100 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
                  Launch your governed<br />
                  data platform in{" "}
                  <span className="gradient-text-red">2–8 weeks.</span>
                </h1>

                <p className="hero-fade-up delay-200 text-lg text-[#9BB0B8] leading-relaxed max-w-lg mb-8">
                  Two bundles. Fixed scope, fixed price, fixed timeline. Delivered by a lean, senior team — no juniors, no hand-offs.
                  Pick a platform. Pick a bundle. We do the engineering.
                </p>

                <div className="hero-fade-up delay-300 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="#assessment"
                    className="inline-flex items-center justify-center px-7 py-3.5 bg-[#EB1600] text-white text-sm font-bold hover:bg-[#CC1300] transition-colors"
                  >
                    Book Free Readiness Check
                  </Link>
                  <Link
                    href="#bundles"
                    className="inline-flex items-center justify-center px-7 py-3.5 border border-[#2a4550] text-[#9BB0B8] text-sm font-semibold hover:border-white hover:text-white transition-colors"
                  >
                    See Bundles ↓
                  </Link>
                </div>
              </div>

              {/* Right: animated platform diagram */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="hero-fade-right delay-400 float-slow w-full aspect-[760/640]">
                  <PlatformDiagram />
                </div>
              </div>
            </div>

            {/* Stats strip */}
            <div className="hero-fade-up delay-500 mt-12 grid grid-cols-3 gap-px bg-[#2a4550]">
              {[
                { value: "2–8 wks",   label: "delivery timeline" },
                { value: "senior-led", label: "every engagement" },
                { value: "fixed",     label: "scope · price · time" },
              ].map((s) => (
                <div key={s.label} className="bg-[#1B3139] px-6 py-4">
                  <div className="font-mono text-xl font-bold text-white">{s.value}</div>
                  <div className="text-xs text-[#6B7B82] uppercase tracking-widest mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Step 0: Free Assessment ── */}
        <section className="bg-[#F4F5F6] line-grid-light py-12 px-6 lg:px-8 border-b border-[#E8EAEB]" id="assessment">
          <div className="max-w-6xl mx-auto">
            <AnimateIn className="mb-7">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#EB1600]">Step 0 · Always free</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1B3139] mt-2">Cloud Data Platform Readiness Check</h2>
              <p className="text-base text-[#6B7B82] mt-1.5 max-w-xl">
                Before we build anything, we confirm which platform fits and which bundle makes sense — zero obligation.
                Focused on Databricks and Cloudera CDP.
              </p>
            </AnimateIn>

            <AnimateIn delay={100}>
              <div className="bg-white border-t-2 border-[#EB1600] grid grid-cols-1 lg:grid-cols-2 gap-0 card-lift">
                {/* Left */}
                <div className="p-7 border-b lg:border-b-0 lg:border-r border-[#E8EAEB]">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#FFF0EE] text-[#EB1600] px-3 py-1 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EB1600]" />
                    Free · 0–3 days
                  </span>
                  <h3 className="text-xl font-bold text-[#1B3139] mb-3">
                    Databricks / Cloudera CDP Readiness Check
                  </h3>
                  <p className="text-sm text-[#6B7B82] leading-relaxed mb-5">
                    We review your cloud environment, security posture, workloads, and preferred platform — then return
                    a 4–6 page PDF plus a 30-min call with a clear recommendation: which platform, which bundle, and what gaps to close first.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-widest text-[#6B7B82] border-b border-[#E8EAEB] pb-2 mb-3">You Get</span>
                      <ul className="space-y-2">
                        {[
                          "Scored findings report (architecture + security)",
                          "Platform recommendation with rationale",
                          "Right bundle recommendation",
                          "Gap checklist + add-on roadmap",
                          "30-min debrief with a senior engineer",
                        ].map((d) => (
                          <li key={d} className="flex items-start gap-2 text-sm text-[#1B3139]">
                            <svg className="shrink-0 mt-0.5 text-[#EB1600]" width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                              <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 1 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />
                            </svg>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-widest text-[#6B7B82] border-b border-[#E8EAEB] pb-2 mb-3">You Provide</span>
                      <ul className="space-y-2">
                        {[
                          "Cloud environment read access (or architecture docs)",
                          "60-min discovery call (async-friendly)",
                        ].map((p) => (
                          <li key={p} className="flex items-start gap-2 text-sm text-[#6B7B82]">
                            <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full bg-[#6B7B82] block" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="p-7">
                  <span className="block text-xs font-semibold uppercase tracking-widest text-[#6B7B82] mb-4">What We Assess</span>
                  <ul className="space-y-2 mb-7">
                    {[
                      "Cloud subscription, networking topology, and region",
                      "Security posture and compliance requirements",
                      "Target workloads, integrations, and data sources",
                      "Preferred platform (or recommendation if undecided)",
                      "Team readiness and decision-making speed",
                    ].map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-[#1B3139]">
                        <svg className="shrink-0 mt-0.5 text-[#EB1600]" width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                          <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 1 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />
                        </svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-[#6B7B82] mb-4">Applies to Azure, AWS, and GCP across Databricks and Cloudera CDP.</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3.5 bg-[#EB1600] text-white text-sm font-bold hover:bg-[#CC1300] transition-colors glow-red-sm"
                  >
                    Book Free Readiness Check →
                  </Link>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Platform picker + bundles ── */}
        <section className="bg-white py-12 px-6 lg:px-8 border-b border-[#E8EAEB]" id="bundles">
          <div className="max-w-6xl mx-auto">
            <AnimateIn className="mb-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#EB1600]">Paid bundles · Fixed price &amp; timeline</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1B3139] mt-2">Two bundles. Every use case.</h2>
              <p className="text-base text-[#6B7B82] mt-1.5 max-w-xl">
                Both bundles include DEV / UAT / PRO environments, IaC, and a reference workload.
                The difference is your security posture.
              </p>
            </AnimateIn>
            <AnimateIn delay={100}>
              <PlatformBundles />
            </AnimateIn>
          </div>
        </section>

        {/* ── Add-ons ── */}
        <section className="bg-[#F4F5F6] py-12 px-6 lg:px-8 border-b border-[#E8EAEB]" id="addons">
          <div className="max-w-6xl mx-auto">
            <AnimateIn className="mb-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#EB1600]">Add-ons · Fixed-price modules</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1B3139] mt-2">Extend your platform</h2>
              <p className="text-base text-[#6B7B82] mt-1.5 max-w-lg">
                Each integration is a standalone fixed-price module — bolt onto either bundle.
                Priced after your free assessment.
              </p>
            </AnimateIn>

            <div className="flex flex-col gap-3">
              {addons.map((a, i) => (
                <AnimateIn key={a.name} delay={i * 80}>
                  <div className={`bg-white border border-[#E8EAEB] border-l-2 ${a.borderClass} p-5 grid grid-cols-[44px_1fr_auto] items-start gap-5 card-lift`}>
                    <div className={`w-10 h-10 border border-[#E8EAEB] flex items-center justify-center ${a.accentClass}`}>
                      {a.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1B3139] mb-1">{a.name}</h3>
                      <p className="text-sm text-[#6B7B82] leading-relaxed max-w-xl mb-2.5">{a.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {a.tags.map((t) => (
                          <span key={t} className="text-xs font-mono px-2 py-0.5 border border-[#E8EAEB] text-[#6B7B82] bg-[#F4F5F6]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-mono text-base font-bold text-[#1B3139]">{a.price}</div>
                      <div className="text-xs text-[#6B7B82] mt-0.5">{a.time}</div>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
            <p className="mt-4 text-xs text-[#6B7B82]">
              Add-on pricing confirmed after your free Readiness Check. Each is a separate fixed-price SOW.
            </p>
          </div>
        </section>

        {/* ── Bundle comparison (rethought UI) ── */}
        <section className="bg-white py-12 px-6 lg:px-8 border-b border-[#E8EAEB]">
          <div className="max-w-6xl mx-auto">
            <AnimateIn className="mb-7">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#EB1600]">Bundle comparison</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1B3139] mt-2">What changes between Launchpad and Zero Trust?</h2>
              <p className="text-base text-[#6B7B82] mt-1.5 max-w-xl">
                Launchpad gets you a governed, production-ready platform fast. Zero Trust adds the controls enterprises need.
              </p>
            </AnimateIn>
            <AnimateIn delay={100}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Launchpad card */}
                <div className="border border-[#E8EAEB] p-6">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-xl font-bold text-[#1B3139]">Bundle A · Launchpad</h3>
                    <span className="text-xs font-mono bg-[#F4F5F6] border border-[#E8EAEB] px-2 py-1 text-[#6B7B82]">2–4 weeks</span>
                  </div>
                  <ul className="space-y-3">
                    {differences.map((d) => (
                      <li key={d.label} className="flex items-start gap-3">
                        <span className="text-xs font-semibold text-[#6B7B82] uppercase tracking-widest w-24 shrink-0 mt-0.5">{d.label}</span>
                        <span className="text-sm text-[#1B3139]">{d.a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Zero Trust card */}
                <div className="bg-[#1B3139] p-6">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-xl font-bold text-white">Bundle B · Zero Trust</h3>
                    <span className="text-xs font-mono bg-[#1B3139] border border-[#2a4550] px-2 py-1 text-[#9BB0B8]">4–8 weeks</span>
                  </div>
                  <ul className="space-y-3">
                    {differences.map((d) => (
                      <li key={d.label} className="flex items-start gap-3">
                        <span className="text-xs font-semibold text-[#6B7B82] uppercase tracking-widest w-24 shrink-0 mt-0.5">{d.label}</span>
                        <span className="text-sm text-white">{d.b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#F4F5F6] p-4">
                  <span className="block text-xs font-semibold uppercase tracking-widest text-[#6B7B82] mb-1">Launchpad</span>
                  <span className="text-sm text-[#1B3139]">For scale-ups, internal teams, and non-regulated workloads.</span>
                </div>
                <div className="bg-[#F4F5F6] p-4">
                  <span className="block text-xs font-semibold uppercase tracking-widest text-[#6B7B82] mb-1">Zero Trust</span>
                  <span className="text-sm text-[#1B3139]">For enterprises, regulated industries, and CISO-led requirements.</span>
                </div>
                <div className="bg-[#F4F5F6] p-4">
                  <span className="block text-xs font-semibold uppercase tracking-widest text-[#6B7B82] mb-1">Not sure?</span>
                  <span className="text-sm text-[#1B3139]">The free Readiness Check recommends the right bundle.</span>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Not sure? ── */}
        <section className="bg-[#1B3139] py-14 px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 dot-grid-dark pointer-events-none opacity-60" />
          <div className="max-w-6xl mx-auto relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <AnimateIn direction="left">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">Not sure which bundle fits?</h2>
              <p className="text-sm text-[#9BB0B8] max-w-lg">
                Book a free 30-min call. We&apos;ll recommend the right bundle — or tell you honestly if neither fits and why.
                No pitch, no obligation.
              </p>
            </AnimateIn>
            <AnimateIn direction="right" className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#EB1600] text-white text-sm font-bold hover:bg-[#CC1300] transition-colors glow-red-sm"
              >
                Book Free Readiness Check
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-[#2a4550] text-[#9BB0B8] text-sm font-semibold hover:border-white hover:text-white transition-colors"
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
