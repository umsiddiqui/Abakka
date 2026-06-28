import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A1114] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-xl font-bold tracking-tight mb-4">
              Abakka
            </div>
            <p className="text-sm text-[#9BA3A7] leading-relaxed max-w-sm">
              A lean, senior data engineering studio. We design and deliver governed data platforms on Databricks and Cloudera CDP.
            </p>
            <p className="mt-4 text-xs text-[#5E686D]">
              Operated by Falcon42 LLC.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#5E686D] mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm text-[#9BA3A7]">
              <li><Link href="/bundles" className="hover:text-white transition-colors">Bundles & Packages</Link></li>
              <li><Link href="/bundles#assess" className="hover:text-white transition-colors">Health Check</Link></li>
              <li><Link href="/bundles#optimize" className="hover:text-white transition-colors">Cost Optimization</Link></li>
              <li><Link href="/bundles#migrate" className="hover:text-white transition-colors">Platform Migration</Link></li>
              <li><Link href="/bundles#operate" className="hover:text-white transition-colors">Fractional Data Team</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#5E686D] mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-[#9BA3A7]">
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li>
                <a href="https://linkedin.com/company/abakka-data" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#2a2d30] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-[#5E686D]">
            © {new Date().getFullYear()} Abakka / Falcon42 LLC. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-[#5E686D]">
            <span>Remote-delivered · EU · US · APAC</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
