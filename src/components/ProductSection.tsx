import { IconBox, IconArrowRight } from "@/components/icons/Icons";

const categories = [
  {
    name: "Mie Instan",
    brand: "Indomie, Mie Sedap, dll",
    items: ["Indomie Goreng", "Indomie Kuah", "Mie Sedap Goreng", "Indomie Rasa Soto"],
    color: "from-orange-400 to-yellow-400",
    bg: "bg-orange-50",
    border: "border-orange-100",
    tag: "bg-orange-100 text-orange-700",
  },
  {
    name: "Popok Bayi",
    brand: "Pampers, MamyPoko, dll",
    items: ["Pampers Active Baby", "Pampers Pants", "MamyPoko Extra Dry", "GoonPants"],
    color: "from-blue-400 to-cyan-400",
    bg: "bg-blue-50",
    border: "border-blue-100",
    tag: "bg-blue-100 text-blue-700",
  },
  {
    name: "Susu & Minuman",
    brand: "UHT, Susu Formula, Jus",
    items: ["Ultra Milk UHT", "Indomilk UHT", "Frisian Flag UHT", "Milo Activ-Go"],
    color: "from-purple-400 to-pink-400",
    bg: "bg-purple-50",
    border: "border-purple-100",
    tag: "bg-purple-100 text-purple-700",
  },
  {
    name: "Bumbu Masak",
    brand: "Royco, Masako, Indofood",
    items: ["Royco Ayam", "Masako Sapi", "Saos Sambal ABC", "Kecap Bango"],
    color: "from-red-400 to-rose-400",
    bg: "bg-red-50",
    border: "border-red-100",
    tag: "bg-red-100 text-red-700",
  },
  {
    name: "Kebersihan Rumah",
    brand: "Wipol, Soklin, Sunlight",
    items: ["Soklin Lantai", "Wipol Karbol", "Sunlight Pencuci", "Rinso Anti Noda"],
    color: "from-green-400 to-teal-400",
    bg: "bg-green-50",
    border: "border-green-100",
    tag: "bg-green-100 text-green-700",
  },
  {
    name: "Makanan Ringan",
    brand: "Chitato, Tango, Oreo",
    items: ["Chitato Reguler", "Tango Wafer", "Oreo Original", "Roma Marie"],
    color: "from-yellow-400 to-amber-400",
    bg: "bg-yellow-50",
    border: "border-yellow-100",
    tag: "bg-yellow-100 text-yellow-700",
  },
];

export default function ProductSection() {
  return (
    <section id="produk" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#00B4B4]/10 text-[#007a7a] text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
            Katalog Produk
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-gray-900 mb-5">
            Produk Yang Kami Distribusikan
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Kami menyediakan lebih dari 1.000 jenis produk kebutuhan rumah tangga
            dari merek-merek terpercaya pilihan konsumen Indonesia.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((cat, i) => (
            <div
              key={i}
              className={`bg-white border ${cat.border} rounded-2xl overflow-hidden hover-lift shadow-sm group`}
            >
              {/* Card header with gradient */}
              <div className={`bg-gradient-to-r ${cat.color} p-5 flex items-center gap-3`}>
                <div className="w-10 h-10 bg-white/30 rounded-xl flex items-center justify-center">
                  <IconBox size={22} color="#fff" />
                </div>
                <div>
                  <h3 className="font-bold font-display text-white text-base">{cat.name}</h3>
                  <p className="text-white/80 text-xs">{cat.brand}</p>
                </div>
              </div>

              {/* Card body */}
              <div className={`p-5 ${cat.bg}`}>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-3">
                  Contoh Produk
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, j) => (
                    <span
                      key={j}
                      className={`text-xs px-3 py-1.5 rounded-full font-medium ${cat.tag}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-teal-gradient rounded-2xl p-10 text-white">
          <h3 className="text-2xl font-bold font-display mb-3">
            Tertarik Menjadi Mitra Distribusi?
          </h3>
          <p className="text-white/80 mb-6 max-w-lg mx-auto">
            Hubungi kami sekarang untuk mendapatkan informasi lengkap mengenai
            katalog produk, harga, dan syarat kemitraan.
          </p>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#00B4B4] font-semibold rounded-full hover:bg-gray-50 transition-colors shadow-lg"
          >
            Hubungi Kami via WhatsApp
            <IconArrowRight size={18} color="#00B4B4" />
          </a>
        </div>
      </div>
    </section>
  );
}
