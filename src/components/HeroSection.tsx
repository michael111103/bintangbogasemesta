import Link from "next/link";
import { IconArrowRight, IconTruck, IconShield, IconHandshake } from "@/components/icons/Icons";

const stats = [
  { value: "500+", label: "Mitra Bisnis" },
  { value: "1000+", label: "Produk Tersedia" },
  { value: "15+", label: "Tahun Pengalaman" },
  { value: "24/7", label: "Layanan Pelanggan" },
];

export default function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e6f7f7] via-white to-[#f0fafa] z-0" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00B4B4]/8 to-transparent z-0" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#00B4B4]/10 blur-3xl z-0" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-[#00B4B4]/8 blur-2xl z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#00B4B4]/10 border border-[#00B4B4]/20 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-[#00B4B4] animate-pulse" />
              <span className="text-[#007a7a] text-xs font-semibold tracking-wide uppercase">
                Distributor Resmi &amp; Terpercaya
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-gray-900 leading-tight mb-6">
              Mitra Distribusi{" "}
              <span className="text-gradient">Kebutuhan</span>{" "}
              Rumah Tangga
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
              PT. Bintang Boga Semesta menghadirkan produk-produk terbaik seperti
              Indomie, Pampers, Susu UHT, dan ribuan produk kebutuhan sehari-hari
              langsung ke mitra bisnis Anda.
            </p>

            {/* Value props */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <IconTruck size={18} color="#00B4B4" />
                <span>Pengiriman Tepat Waktu</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <IconShield size={18} color="#00B4B4" />
                <span>Produk Bergaransi</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <IconHandshake size={18} color="#00B4B4" />
                <span>Harga Kompetitif</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#produk"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-teal-gradient text-white font-semibold rounded-full hover:opacity-90 transition-all duration-200 shadow-teal group"
              >
                Lihat Produk
                <IconArrowRight size={18} color="#fff" className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#tentang"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-[#00B4B4] text-[#00B4B4] font-semibold rounded-full hover:bg-[#00B4B4] hover:text-white transition-all duration-200"
              >
                Tentang Kami
              </Link>
            </div>
          </div>

          {/* Right: Visual card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-md">
              {/* Main card */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 lg:p-8">
                {/* Header card */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-teal-gradient flex items-center justify-center">
                    <span className="text-white font-bold text-sm font-display">BBS</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm font-display">PT. Bintang Boga Semesta</p>
                    <p className="text-[#00B4B4] text-xs font-medium">Distributor Kebutuhan Rumah Tangga</p>
                  </div>
                </div>

                {/* Product preview */}
                <div className="space-y-3 mb-6">
                  {[
                    { name: "Indomie (Karton)", category: "Mie Instan", stock: "Tersedia" },
                    { name: "Pampers (Pack)", category: "Popok Bayi", stock: "Tersedia" },
                    { name: "Susu UHT (Dus)", category: "Minuman Susu", stock: "Tersedia" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">{item.name}</p>
                        <p className="text-gray-500 text-xs">{item.category}</p>
                      </div>
                      <span className="text-xs font-semibold text-[#00B4B4] bg-[#00B4B4]/10 px-3 py-1 rounded-full">
                        {item.stock}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <p className="text-xs text-gray-400">+1000 produk lainnya tersedia</p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-[#00B4B4] text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                15+ Tahun
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-4 bg-white/70 backdrop-blur rounded-2xl border border-white shadow-sm">
              <p className="text-3xl font-bold font-display text-gradient">{stat.value}</p>
              <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
