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
        <div className="flex items-center justify-center">
          {/* Content - centered */}
          <div className="max-w-2xl text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-gray-900 leading-tight mb-6">
              Mitra Distribusi{" "}
              <span className="text-gradient">Kebutuhan</span>{" "}
              Rumah Tangga
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              PT. Bintang Boga Semesta menghadirkan produk-produk terbaik seperti
              Indomie, Pampers, Susu UHT, dan ribuan produk kebutuhan sehari-hari
              langsung ke mitra bisnis Anda.
            </p>

            {/* Value props */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center">
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
