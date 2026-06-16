import { IconWarehouse, IconTruck, IconBox, IconShield } from "@/components/icons/Icons";

const warehouseFeatures = [
  {
    icon: IconWarehouse,
    title: "Gudang Luas & Modern",
    desc: "Fasilitas gudang seluas lebih dari 5.000 m² dengan sistem penyimpanan berstandar tinggi.",
  },
  {
    icon: IconTruck,
    title: "Armada Pengiriman",
    desc: "Armada kendaraan pengiriman yang terawat dan siap mengirimkan pesanan ke seluruh wilayah.",
  },
  {
    icon: IconBox,
    title: "Manajemen Stok",
    desc: "Sistem manajemen inventaris digital yang memastikan ketersediaan produk selalu terjaga.",
  },
  {
    icon: IconShield,
    title: "Keamanan Terjaga",
    desc: "Pengamanan 24 jam dan CCTV di seluruh area gudang untuk menjaga keamanan produk.",
  },
];

// Dummy warehouse images placeholder (grid layout)
const warehousePlaceholders = [
  { label: "Area Penyimpanan Utama", size: "large" },
  { label: "Loading Dock", size: "small" },
  { label: "Area Sortir Produk", size: "small" },
  { label: "Armada Pengiriman", size: "small" },
  { label: "Ruang Kontrol", size: "small" },
];

export default function WarehouseSection() {
  return (
    <section id="gudang" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#00B4B4]/10 text-[#007a7a] text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
            Fasilitas Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-gray-900 mb-5">
            Gudang &amp; Fasilitas
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Fasilitas gudang dan distribusi kami dirancang untuk memastikan produk
            selalu dalam kondisi terbaik hingga sampai ke tangan Anda.
          </p>
        </div>

        {/* Image Gallery Grid (Placeholder) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {/* Large image (spans 2 cols on large screens) */}
          <div className="col-span-2 lg:col-span-2 row-span-2">
            <div className="relative w-full h-64 lg:h-80 bg-gradient-to-br from-[#00B4B4]/20 to-[#007a7a]/30 rounded-2xl overflow-hidden flex flex-col items-center justify-center border-2 border-dashed border-[#00B4B4]/30 group hover-lift">
              <div className="w-16 h-16 bg-[#00B4B4]/20 rounded-2xl flex items-center justify-center mb-4">
                <IconWarehouse size={32} color="#00B4B4" />
              </div>
              <p className="font-semibold text-[#007a7a] font-display">Area Penyimpanan Utama</p>
              <p className="text-[#00B4B4]/70 text-xs mt-1">Foto akan ditambahkan</p>
            </div>
          </div>

          {/* Small images */}
          {[
            { label: "Loading Dock", icon: IconTruck },
            { label: "Area Sortir", icon: IconBox },
            { label: "Armada Pengiriman", icon: IconTruck },
            { label: "Ruang Kontrol", icon: IconShield },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="relative w-full h-36 lg:h-36 bg-gradient-to-br from-gray-100 to-[#e6f7f7] rounded-2xl overflow-hidden flex flex-col items-center justify-center border-2 border-dashed border-gray-200 group hover-lift">
                <div className="w-10 h-10 bg-[#00B4B4]/15 rounded-xl flex items-center justify-center mb-2">
                  <Icon size={22} color="#00B4B4" />
                </div>
                <p className="font-medium text-gray-600 text-xs text-center px-2">{item.label}</p>
                <p className="text-gray-400 text-xs mt-0.5">Foto akan ditambahkan</p>
              </div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {warehouseFeatures.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div key={i} className="p-6 bg-gray-50 rounded-2xl hover-lift">
                <div className="w-12 h-12 bg-teal-gradient rounded-xl flex items-center justify-center mb-4 shadow-teal">
                  <Icon size={24} color="#fff" />
                </div>
                <h4 className="font-bold font-display text-gray-900 mb-2">{feat.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
