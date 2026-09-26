import Link from "next/link";

const foundationDetails = {
  network: "Hub-and-spoke transit network / Virtual WAN hub, Azure Firewall Premium, centralized route tables",
  governance: "Enterprise Root Management Group hierarchy (Platform / LandingZones / Sandbox), 80+ Microsoft Cloud Security Benchmark guardrails enforced by policy",
  iac: "Terraform / Bicep landing zone modules — Platform-Management, Platform-Connectivity, Platform-Identity subscriptions provisioned as code",
};

const zeroTrustDetails = {
  network: "Private AKS cluster or App Service Environment enclave, first 2 workload subscriptions vended with network isolation",
  governance: "CMK/BYOK encryption, data exfiltration protection (allowlist egress), compliance-ready control mapping (SOC 2 / ISO 27001 / NIST 800-53)",
  iac: "End-to-end automated CI/CD deployment pipelines across workload subscriptions",
};

const foundationDeliverables = [
  "Enterprise Root Management Group hierarchy (Platform, LandingZones — Corp & Online, Sandbox)",
  "80+ automated Microsoft Cloud Security Benchmark policy guardrails",
  "Centralized baseline monitoring & telemetry engine (Platform-Management subscription)",
  "Hub-and-spoke transit network / Virtual WAN hub with Azure Firewall Premium",
  "Platform-Identity subscription with centralized PKI, ExpressRoute / Site-to-Site VPN linkage",
  "Turnkey architecture specification + Day-2 runbooks",
  "1× post-handover support call (30 days)",
];

const foundationPrereqs = [
  "Azure EA / MCA billing scope + tenant-level admin access",
  "Technical owner and security owner who can sign off quickly",
  "High-level compliance requirements (or confirmation there are none)",
];

const zeroTrustDeliverables = [
  "Everything in Cloud Foundation, plus:",
  "First 2 workload subscriptions vended & configured via automated subscription vending",
  "Private AKS cluster or App Service Environment enclave",
  "CMK / BYOK encryption + data exfiltration protection policy",
  "End-to-end automated CI/CD deployment pipelines",
  "Compliance-ready handover deck: control-to-framework mapping (SOC 2 / ISO 27001 / NIST 800-53), audit artifacts",
  "Full architectural knowledge transfer & enablement workshop",
  "2× post-handover support calls (30 days)",
];

const zeroTrustPrereqs = [
  "Azure EA / MCA billing scope + tenant-level admin access",
  "Final decision on workload subscription topology (existing hub VNet or greenfield)",
  "Security lead available for 2–3 sign-off workshops",
  "Compliance requirements doc or POC",
];

function CheckIcon({ dark }: { dark?: boolean }) {
  return (
    <svg className={`shrink-0 mt-0.5 ${dark ? "text-[#C9A227]" : "text-[#C9A227]"}`} width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 1 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />
    </svg>
  );
}

function DotIcon() {
  return <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full bg-[#5E686D] block" aria-hidden />;
}

function SpecRow({ label, value, dark }: { label: string; value: string; dark?: boolean }) {
  return (
    <div className="text-xs">
      <span className={`font-semibold ${dark ? "text-[#9BA3A7]" : "text-[#0A1114]"} uppercase tracking-wide`}>{label}: </span>
      <span className={dark ? "text-[#5E686D]" : "text-[#5E686D]"}>{value}</span>
    </div>
  );
}

export default function AzureLandingZoneBundles() {
  return (
    <div>
      {/* Product strip — single product, no platform picker */}
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#5E686D] mb-3">
          Built to Microsoft&apos;s standard
        </p>
        <div className="inline-flex items-center gap-2 border border-[#E3E0D8] bg-[#F2F0EA] px-5 py-2.5">
          <span className="w-1.5 h-1.5 bg-[#C9A227] rounded-full" />
          <span className="text-sm font-semibold text-[#0A1114]">
            Microsoft Cloud Adoption Framework (CAF) certified
          </span>
        </div>
        <div className="mt-2.5 flex items-center gap-3">
          <span className="font-mono text-xs text-[#5E686D]">Architecture: Multi-subscription</span>
          <span className="text-[#E3E0D8]">·</span>
          <span className="text-xs font-semibold text-[#C9A227]">Azure</span>
        </div>
      </div>

      {/* Bundle cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        {/* ── Bundle A — Cloud Foundation ── */}
        <div className="flex flex-col border border-[#E3E0D8] hover:border-[#0A1114]/30 transition-colors duration-300 group">
          {/* Accent top bar */}
          <div className="h-0.5 bg-gradient-to-r from-[#E3E0D8] via-[#0A1114] to-[#E3E0D8] group-hover:via-[#C9A227] transition-all duration-500" />

          {/* Header */}
          <div className="p-6 border-b border-[#E3E0D8] bg-white">
            <div className="flex items-start justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A227]">Bundle A · Standard</span>
              <span className="text-xs font-mono bg-[#F2F0EA] border border-[#E3E0D8] px-2 py-1 text-[#5E686D]">2–4 weeks</span>
            </div>
            <h3 className="text-xl font-bold text-[#0A1114] mb-1.5">Cloud Foundation</h3>
            <p className="text-sm text-[#5E686D] leading-relaxed">
              Launch a CAF-aligned Azure landing zone in 2–4 weeks — governed, connected, and safe to buy before your security review is done.
            </p>
          </div>

          {/* Price */}
          <div className="px-6 py-3.5 bg-[#F2F0EA] border-b border-[#E3E0D8] flex items-baseline gap-3">
            <span className="font-mono text-2xl font-bold text-[#0A1114]">$8k</span>
            <span className="font-mono text-sm text-[#5E686D]">— $18k</span>
            <span className="ml-auto text-xs font-semibold text-[#C9A227] uppercase tracking-widest">Fixed price</span>
          </div>

          {/* Platform specifics */}
          <div className="px-6 py-4 border-b border-[#E3E0D8] bg-white">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#5E686D] mb-2.5">
              Azure specifics
            </p>
            <div className="space-y-1.5">
              <SpecRow label="Network" value={foundationDetails.network} />
              <SpecRow label="Governance" value={foundationDetails.governance} />
              <SpecRow label="IaC" value={foundationDetails.iac} />
            </div>
          </div>

          {/* Body */}
          <div className="p-6 flex flex-col gap-5 flex-1 bg-white">
            <div>
              <span className="block text-xs font-semibold uppercase tracking-widest text-[#5E686D] border-b border-[#E3E0D8] pb-2 mb-3">
                You Get
              </span>
              <ul className="space-y-2">
                {foundationDeliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-[#0A1114]">
                    <CheckIcon />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-widest text-[#5E686D] border-b border-[#E3E0D8] pb-2 mb-3">
                You Provide
              </span>
              <ul className="space-y-2">
                {foundationPrereqs.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-[#5E686D]">
                    <DotIcon />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="p-6 pt-0 bg-white">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full px-6 py-3 border-2 border-[#0A1114] text-[#0A1114] text-sm font-bold hover:bg-[#0A1114] hover:text-white transition-all duration-200"
            >
              Book Cloud Foundation →
            </Link>
          </div>
        </div>

        {/* ── Bundle B — Zero Trust Workloads ── */}
        <div className="flex flex-col bg-[#070B0D] shimmer-track group" style={{ border: "1px solid rgba(235,22,0,0.25)" }}>
          {/* Accent top bar — always glowing */}
          <div className="h-0.5 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />

          {/* Header */}
          <div className="p-6 border-b border-[#0A1114]">
            <div className="flex items-start justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A227]">Bundle B · Enterprise</span>
              <span className="text-xs font-mono bg-[#0A1114] border border-[#2a2d30] px-2 py-1 text-[#9BA3A7]">4–8 weeks</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1.5">Zero Trust Workloads</h3>
            <p className="text-sm text-[#9BA3A7] leading-relaxed">
              Everything in Cloud Foundation, plus your first production workload subscriptions vended, hardened, and pipeline-deployed — audit-ready from day one.
            </p>
          </div>

          {/* Price */}
          <div className="px-6 py-3.5 bg-[#0A1114] border-b border-[#2a2d30] flex items-baseline gap-3">
            <span className="font-mono text-2xl font-bold text-white">$18k</span>
            <span className="font-mono text-sm text-[#9BA3A7]">— $38k</span>
            <span className="ml-auto text-xs font-semibold text-[#C9A227] uppercase tracking-widest">Fixed price</span>
          </div>

          {/* Platform specifics */}
          <div className="px-6 py-4 border-b border-[#0A1114]">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#5E686D] mb-2.5">
              Azure specifics
            </p>
            <div className="space-y-1.5">
              <SpecRow label="Network" value={zeroTrustDetails.network} dark />
              <SpecRow label="Governance" value={zeroTrustDetails.governance} dark />
              <SpecRow label="IaC" value={zeroTrustDetails.iac} dark />
            </div>
          </div>

          {/* Body */}
          <div className="p-6 flex flex-col gap-5 flex-1">
            <div>
              <span className="block text-xs font-semibold uppercase tracking-widest text-[#5E686D] border-b border-[#0A1114] pb-2 mb-3">
                You Get
              </span>
              <ul className="space-y-2">
                {zeroTrustDeliverables.map((d) => (
                  <li key={d} className={`flex items-start gap-2 text-sm ${d.includes("plus") ? "text-[#C9A227] font-semibold" : "text-white"}`}>
                    {!d.includes("plus") && <CheckIcon dark />}
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-widest text-[#5E686D] border-b border-[#0A1114] pb-2 mb-3">
                You Provide
              </span>
              <ul className="space-y-2">
                {zeroTrustPrereqs.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-[#9BA3A7]">
                    <DotIcon />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="p-6 pt-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#C9A227] text-white text-sm font-bold hover:bg-[#A7861F] transition-colors glow-red-sm"
            >
              Book Zero Trust Workloads →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
