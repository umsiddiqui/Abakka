"use client";
import { useState } from "react";
import Link from "next/link";

type Platform = "Databricks" | "Cloudera CDP";

const PLATFORMS: Platform[] = ["Databricks", "Cloudera CDP"];

const platformMeta: Record<Platform, { cloud: string; note?: string }> = {
  Databricks: { cloud: "Azure · AWS" },
  "Cloudera CDP": { cloud: "AWS · Azure · GCP", note: "Enterprise focus" },
};

const launchpadDetails: Record<Platform, { network: string; governance: string; iac: string }> = {
  Databricks: {
    network: "VNet/VPC-integrated workspaces with Secure Cluster Connectivity (no public IP on nodes)",
    governance: "Unity Catalog — metastore, RBAC roles, access model baseline",
    iac: "Terraform + Databricks Bundles (jobs, pipelines, clusters)",
  },
  "Cloudera CDP": {
    network: "Public deployment — Security Groups tightened, network access rules per workload",
    governance: "CDP environment with Ranger policies + Atlas basic catalog config",
    iac: "cloudera-deploy (Ansible) + cloud networking Terraform",
  },
};

const zeroTrustDetails: Record<Platform, { network: string; governance: string; iac: string }> = {
  Databricks: {
    network: "Isolated workspace — Private Link (frontend, backend, browser auth), hub-spoke with Firewall/NAT egress, no public endpoint",
    governance: "Unity Catalog + fine-grained access, CMK/BYOK encryption, data exfiltration protection policy",
    iac: "Terraform (hub-spoke networking + workspaces) + Databricks Bundles",
  },
  "Cloudera CDP": {
    network: "Private / semi-private — restricted public endpoints, VPN or bastion entry point, VPC peering to data sources",
    governance: "CDP security zones, Ranger policies, Atlas lineage, log shipping to SIEM",
    iac: "cloudera-deploy (Ansible) + Terraform networking (hub-spoke or VPN gateway)",
  },
};

const launchpadDeliverables = [
  "3 environments (DEV / UAT / PRO) stood up on your chosen platform",
  "Baseline networking, identity, and governance configured and tested",
  "IaC repo (Terraform / Ansible) — redeploy in any account with one command",
  "One reference workload wired end-to-end: ingest → transform → schedule → monitor",
  "Architecture + Runbook PDF handover pack",
  "1× post-handover support call (30 days)",
];

const launchpadPrereqs = [
  "Cloud account + subscription-level admin access",
  "Technical owner and security owner who can make decisions quickly",
  "High-level security/compliance requirements (or confirmation there are none)",
];

const zeroTrustDeliverables = [
  "Everything in Launchpad, plus:",
  "Zero-trust network architecture — no public exposure to the platform control plane",
  "Private connectivity for platform, storage, secret management, and key services",
  "CMK / BYOK encryption configured where the platform supports it",
  "Data exfiltration protection policy (allowlist egress)",
  "Compliance-ready handover deck: diagrams, threat model, control-to-framework mapping (SOC2 / ISO / Azure ZT)",
  "2× post-handover support calls (30 days)",
];

const zeroTrustPrereqs = [
  "Cloud account + subscription-level admin access",
  "Final decision on private vs semi-private topology (especially for CDP)",
  "Existing hub VNet or greenfield topology decision",
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

export default function PlatformBundles() {
  const [platform, setPlatform] = useState<Platform>("Databricks");

  const launchpad = launchpadDetails[platform];
  const zt = zeroTrustDetails[platform];
  const meta = platformMeta[platform];

  return (
    <div>
      {/* Platform picker */}
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#5E686D] mb-3">
          Choose your platform
        </p>
        <div className="inline-flex border border-[#E3E0D8] bg-[#F2F0EA]">
          {PLATFORMS.map((p) => (
            <button
              key={p}
              onClick={() => setPlatform(p)}
              className={`px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                platform === p
                  ? "bg-[#0A1114] text-white"
                  : "text-[#5E686D] hover:text-[#0A1114] hover:bg-white"
              }`}
            >
              {p}
              {p === "Cloudera CDP" && (
                <span className="ml-2 text-xs font-semibold bg-[#C9A227] text-white px-1.5 py-0.5">
                  ENT
                </span>
              )}
            </button>
          ))}
        </div>
        <div className="mt-2.5 flex items-center gap-3">
          <span className="font-mono text-xs text-[#5E686D]">Clouds: {meta.cloud}</span>
          {meta.note && (
            <>
              <span className="text-[#E3E0D8]">·</span>
              <span className="text-xs font-semibold text-[#C9A227]">{meta.note}</span>
            </>
          )}
        </div>
      </div>

      {/* Bundle cards — constrained width so they don't over-stretch */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        {/* ── Bundle A — Launchpad ── */}
        <div className="flex flex-col border border-[#E3E0D8] hover:border-[#0A1114]/30 transition-colors duration-300 group">
          {/* Accent top bar */}
          <div className="h-0.5 bg-gradient-to-r from-[#E3E0D8] via-[#0A1114] to-[#E3E0D8] group-hover:via-[#C9A227] transition-all duration-500" />

          {/* Header */}
          <div className="p-6 border-b border-[#E3E0D8] bg-white">
            <div className="flex items-start justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A227]">Bundle A · Standard</span>
              <span className="text-xs font-mono bg-[#F2F0EA] border border-[#E3E0D8] px-2 py-1 text-[#5E686D]">2–4 weeks</span>
            </div>
            <h3 className="text-xl font-bold text-[#0A1114] mb-1.5">Launchpad</h3>
            <p className="text-sm text-[#5E686D] leading-relaxed">
              Launch a production-ready governed data platform in 2–4 weeks. Opinionated, time-boxed, and safe to buy before your security review is done.
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
              {platform} specifics
            </p>
            <div className="space-y-1.5">
              <SpecRow label="Network" value={launchpad.network} />
              <SpecRow label="Governance" value={launchpad.governance} />
              <SpecRow label="IaC" value={launchpad.iac} />
            </div>
          </div>

          {/* Body */}
          <div className="p-6 flex flex-col gap-5 flex-1 bg-white">
            <div>
              <span className="block text-xs font-semibold uppercase tracking-widest text-[#5E686D] border-b border-[#E3E0D8] pb-2 mb-3">
                You Get
              </span>
              <ul className="space-y-2">
                {launchpadDeliverables.map((d) => (
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
                {launchpadPrereqs.map((p) => (
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
              Book Launchpad →
            </Link>
          </div>
        </div>

        {/* ── Bundle B — Zero Trust ── */}
        <div className="flex flex-col bg-[#070B0D] shimmer-track group" style={{ border: "1px solid rgba(235,22,0,0.25)" }}>
          {/* Accent top bar — always glowing red */}
          <div className="h-0.5 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />

          {/* "Enterprise" badge ribbon */}
          <div className="absolute" style={{ display: "none" }} />

          {/* Header */}
          <div className="p-6 border-b border-[#0A1114]">
            <div className="flex items-start justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A227]">Bundle B · Enterprise</span>
              <span className="text-xs font-mono bg-[#0A1114] border border-[#2a2d30] px-2 py-1 text-[#9BA3A7]">4–8 weeks</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1.5">Zero Trust Enterprise</h3>
            <p className="text-sm text-[#9BA3A7] leading-relaxed">
              Zero-trust lakehouse with private connectivity and exfiltration controls. Gives CISOs something tangible — network diagrams, policies, IaC — not just &ldquo;we set it up.&rdquo;
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
              {platform} specifics
            </p>
            <div className="space-y-1.5">
              <SpecRow label="Network" value={zt.network} dark />
              <SpecRow label="Governance" value={zt.governance} dark />
              <SpecRow label="IaC" value={zt.iac} dark />
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
              Book Zero Trust →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
