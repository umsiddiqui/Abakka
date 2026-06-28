import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AnimateIn from "../components/AnimateIn";

const profiles = [
  {
    role: "Delivery Lead · Commercial · Program Governance",
    bio: "16 years in technology, 11 in the UAE. Led billion-AED national programs including sovereign cloud, national genome infrastructure, and a national cyber-threat SOC. Expert in program delivery, vendor management, and C-suite engagement. PMP, PSM I, Azure certified.",
    focus: "Strategy, platform decisions, client leadership, AI overlay",
    certs: ["PMP", "PSM I", "Azure Certified"],
  },
  {
    role: "Principal Engineer · Architect · Hands-on Build",
    bio: "13 years in data engineering. Databricks-certified architect with deep expertise in enterprise lakehouse, Spark, Unity Catalog, and Hadoop/Cloudera → cloud migrations. Has delivered platforms for energy, semiconductor, and other enterprise accounts. Published author.",
    focus: "Architecture, hands-on build, migrations, governance, technical content",
    certs: ["Databricks Certified Architect", "Published Author"],
  },
];

const platforms = [
  { name: "Databricks", desc: "Lakehouse, Unity Catalog, Delta Live Tables, Photon" },
  { name: "Cloudera CDP", desc: "Hadoop ecosystem, CDP migrations to cloud" },
  { name: "Apache Spark", desc: "Batch + streaming, optimization, migration" },
];

/* ── Vetted bench: skill categories ── */
const benchCategories = [
  {
    name: "Cloud & Infrastructure",
    accent: "#9BB0B8",
    skills: ["Terraform", "Kubernetes / AKS / EKS", "Networking & VNet Peering", "Azure / AWS / GCP"],
  },
  {
    name: "Data Engineering",
    accent: "#FF6B35",
    skills: ["Apache Spark", "Delta Lake", "Kafka / Streaming", "ETL / ELT Pipelines"],
  },
  {
    name: "Governance & Catalog",
    accent: "#3FB68B",
    skills: ["Unity Catalog", "Ranger / Atlas", "Data Lineage", "RBAC Models"],
  },
  {
    name: "Security & Compliance",
    accent: "#EB1600",
    skills: ["Zero Trust Networking", "CMK / BYOK", "Exfiltration Controls", "SOC2 / ISO Mapping"],
  },
  {
    name: "DevOps & Operations",
    accent: "#4BA3C3",
    skills: ["CI / CD Pipelines", "Observability & Alerting", "Cost Optimization", "Performance Tuning"],
  },
];

/* ── Bench network SVG: animated core → categories ── */
function BenchViz() {
  const cx = 75, cy = 150;
  const nodes = [
    { x: 250, y: 30,  label: "Cloud & Infra",    color: "#9BB0B8" },
    { x: 370, y: 72,  label: "Data Engineering", color: "#FF6B35" },
    { x: 410, y: 150, label: "Governance",       color: "#3FB68B" },
    { x: 370, y: 228, label: "Security",         color: "#EB1600" },
    { x: 250, y: 270, label: "DevOps & Ops",     color: "#4BA3C3" },
  ];
  return (
    <svg viewBox="0 0 560 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className="w-full">
      <defs>
        <filter id="bench-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Connection lines (animated draw-in) */}
      {nodes.map((n, i) => {
        const len = Math.sqrt((n.x - cx) ** 2 + (n.y - cy) ** 2);
        return (
          <line
            key={n.label}
            x1={cx} y1={cy} x2={n.x} y2={n.y}
            stroke={n.color} strokeWidth="1.2" strokeDasharray={len} strokeDashoffset={len} opacity="0.5"
          >
            <animate attributeName="stroke-dashoffset" from={len} to="0" dur="0.7s" begin={`${0.2 + i * 0.12}s`} fill="freeze" />
          </line>
        );
      })}

      {/* Core: BENCH */}
      <g filter="url(#bench-glow)">
        <circle cx={cx} cy={cy} r="38" fill="#1B3139" stroke="#EB1600" strokeWidth="1.8" />
        <circle cx={cx} cy={cy} r="32" stroke="#EB1600" strokeWidth="0.3" fill="none" opacity="0.2" />
      </g>
      <text x={cx} y={cy - 4} textAnchor="middle" fill="white" fontSize="11" fontFamily="monospace" fontWeight="bold" letterSpacing="0.5">VETTED</text>
      <text x={cx} y={cy + 9} textAnchor="middle" fill="#EB1600" fontSize="11" fontFamily="monospace" fontWeight="bold" letterSpacing="0.5">BENCH</text>

      {/* Category nodes */}
      {nodes.map((n, i) => (
        <g key={n.label} opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.4s" begin={`${0.6 + i * 0.12}s`} fill="freeze" />
          <circle cx={n.x} cy={n.y} r="14" fill="#1B3139" stroke={n.color} strokeWidth="1.6" />
          <circle cx={n.x} cy={n.y} r="4" fill={n.color} opacity="0.8" />
          <text x={n.x + 22} y={n.y + 4} fill={n.color} fontSize="9.5" fontFamily="monospace" fontWeight="bold">
            {n.label}
          </text>
        </g>
      ))}

      {/* Founders indicator — two small dots near core */}
      <g opacity="0">
        <animate attributeName="opacity" from="0" to="0.8" dur="0.5s" begin="1.4s" fill="freeze" />
        <circle cx={cx - 10} cy={cy + 52} r="3" fill="#9BB0B8" />
        <circle cx={cx + 10} cy={cy + 52} r="3" fill="#9BB0B8" />
        <text x={cx} y={cy + 70} textAnchor="middle" fill="#6B7B82" fontSize="7" fontFamily="monospace" letterSpacing="0.5">2 SENIOR FOUNDERS</text>
      </g>
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">

        {/* Header */}
        <section className="bg-white py-20 px-6 lg:px-8 border-b border-[#E8EAEB]">
          <div className="max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-[#EB1600]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#EB1600]">About</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B3139] leading-tight mb-6 max-w-3xl">
              Senior engineers, packaged for delivery.
            </h1>
            <p className="text-lg text-[#6B7B82] leading-relaxed max-w-2xl">
              Abakka is a lean, senior data engineering studio. We are a small team that has built
              national-scale platforms and packaged that experience into fixed-scope bundles anyone can buy.
            </p>
          </div>
        </section>

        {/* Profiles */}
        <section className="bg-white py-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#E8EAEB]">
              {profiles.map((p, i) => (
                <div key={i} className="bg-white p-10">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-14 h-14 bg-[#1B3139] flex items-center justify-center text-white font-mono font-bold text-lg shrink-0">
                      0{i + 1}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-[#1B3139]">{p.role}</h2>
                    </div>
                  </div>
                  <p className="text-sm text-[#6B7B82] leading-relaxed mb-6">{p.bio}</p>
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-[#6B7B82] mb-2">Focus</h4>
                    <p className="text-sm text-[#1B3139]">{p.focus}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.certs.map((c) => (
                      <span key={c} className="text-xs font-mono px-2.5 py-1 border border-[#E8EAEB] text-[#6B7B82] bg-[#F4F5F6]">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vetted Bench */}
        <section className="bg-[#0d1e24] py-20 px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 dot-grid-dark pointer-events-none opacity-50" />
          <div className="max-w-7xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center mb-14">
              <div className="lg:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#EB1600] mb-3">The bench</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
                  Two founders.<br />A vetted bench behind them.
                </h2>
                <p className="text-sm text-[#9BB0B8] leading-relaxed max-w-md">
                  For larger engagements, we draw on a curated network of senior specialists — vetted across
                  the skills any serious data platform delivery requires. Here&apos;s what&apos;s on the bench.
                </p>
              </div>
              <div className="lg:col-span-3">
                <AnimateIn direction="right">
                  <BenchViz />
                </AnimateIn>
              </div>
            </div>

            {/* Bench skill grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[#2a4550]">
              {benchCategories.map((cat, i) => (
                <AnimateIn key={cat.name} delay={i * 100} className="bg-[#1B3139]">
                  <div className="p-6 h-full flex flex-col">
                    <div className="w-4 h-0.5 mb-4" style={{ background: cat.accent }} />
                    <h3 className="text-xl font-bold text-white mb-4">{cat.name}</h3>
                    <ul className="space-y-2.5 flex-1">
                      {cat.skills.map((s) => (
                        <li key={s} className="text-xs font-mono text-[#9BB0B8] flex items-center gap-2 leading-relaxed">
                          <span className="w-1 h-1 rounded-full shrink-0" style={{ background: cat.accent }} />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateIn>
              ))}
            </div>
            <p className="mt-5 text-xs text-[#6B7B82]">
              Bench specialists are engaged per engagement, not retained. You get senior attention on every engagement — no junior staffing.
            </p>
          </div>
        </section>

        {/* Delivery model */}
        <section className="bg-[#F4F5F6] py-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#EB1600] mb-3">Delivery model</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1B3139] mb-6">
                  Remote-first, async-friendly.
                </h2>
                <p className="text-sm text-[#6B7B82] leading-relaxed">
                  We are based in the UAE (GMT+4), which bridges European mornings and APAC afternoons —
                  making us well-suited to async delivery across EU, US, and APAC time zones.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-px bg-[#E8EAEB]">
                {[
                  { label: "Markets", value: "EU/UK · US/Canada/AU · Singapore/ANZ" },
                  { label: "Delivery model", value: "Remote-first, async-first" },
                  { label: "Time zone", value: "GMT+4 (UAE) — bridges EU & APAC" },
                  { label: "Team model", value: "Senior founders + vetted bench" },
                ].map((item) => (
                  <div key={item.label} className="bg-white px-6 py-5">
                    <div className="text-xs font-semibold uppercase tracking-widest text-[#6B7B82] mb-1">{item.label}</div>
                    <div className="text-sm font-semibold text-[#1B3139]">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Platform expertise */}
        <section className="bg-white py-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#EB1600] mb-3">Platforms</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1B3139]">Deep on the platforms that matter.</h2>
              <p className="text-base text-[#6B7B82] mt-3 max-w-lg">
                We focus on Databricks and Cloudera CDP because that is where our deepest enterprise experience lies.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E8EAEB]">
              {platforms.map((p) => (
                <div key={p.name} className="bg-white p-6">
                  <div className="w-4 h-0.5 bg-[#EB1600] mb-4" />
                  <h3 className="text-xl font-bold text-[#1B3139] mb-2">{p.name}</h3>
                  <p className="text-sm text-[#6B7B82] leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hidden LinkedIn reference */}
        <section className="bg-[#F4F5F6] border-t border-[#E8EAEB] py-8 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs text-[#6B7B82]">
              Individual backgrounds are available on request. Company updates: {" "}
              <a href="https://linkedin.com/company/abakka-data" target="_blank" rel="noopener noreferrer" className="text-[#6B7B82] hover:text-[#1B3139] underline">
                LinkedIn
              </a>
              .
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#EB1600] py-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">Want to work with us?</h2>
              <p className="text-sm text-red-100 max-w-md">
                The best way to start is a free Readiness Check. No sales pitch — just a review of your platform and a clear report.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#EB1600] text-sm font-bold hover:bg-gray-50 transition-colors"
              >
                Book a Free Readiness Check
              </Link>
              <Link
                href="/bundles"
                className="inline-flex items-center justify-center px-8 py-4 border border-white text-white text-sm font-semibold hover:bg-red-700 transition-colors"
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