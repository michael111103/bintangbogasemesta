import {
  IconShield,
  IconTruck,
  IconHandshake,
  IconUsers,
  IconBuildingOffice,
} from "@/components/icons/Icons";

const values = [
  {
    icon: IconShield,
    title: "Kualitas Terjamin",
    desc: "Setiap produk yang kami distribusikan melewati proses seleksi ketat untuk memastikan kualitas terbaik sampai ke tangan konsumen.",
  },
  {
    icon: IconTruck,
    title: "Distribusi Luas",
    desc: "Jaringan distribusi kami menjangkau berbagai wilayah dengan armada pengiriman yang handal dan sistem logistik modern.",
  },
  {
    icon: IconHandshake,
    title: "Kemitraan Strategis",
    desc: "Kami membangun hubungan jangka panjang dengan mitra bisnis melalui kepercayaan, transparansi, dan saling menguntungkan.",
  },
  {
    icon: IconUsers,
    title: "Tim Profesional",
    desc: "Didukung oleh tim berpengalaman yang berdedikasi memberikan pelayanan terbaik kepada setiap mitra bisnis kami.",
  },
];

export default function AboutSection() {
  return (
    <section id="tentang" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-gray-900 mb-5">
            Siapa Kami?
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            PT. Bintang Boga Semesta adalah perusahaan distribusi terkemuka yang
            berfokus pada pemenuhan kebutuhan rumah tangga di seluruh Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Description */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-teal-gradient flex items-center justify-center shadow-teal">
                <IconBuildingOffice size={24} color="#fff" />
              </div>
              <div>
                <h3 className="font-bold font-display text-gray-900">PT. Bintang Boga Semesta</h3>
                <p className="text-[#00B4B4] text-sm font-medium">Est. 2009</p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-5">
              Berdiri sejak lebih dari 15 tahun yang lalu, PT. Bintang Boga Semesta
              telah menjadi salah satu distributor paling terpercaya untuk produk
              kebutuhan rumah tangga. Kami mendistribusikan berbagai produk dari
              merek-merek ternama seperti Indomie, Pampers, Susu UHT, dan masih
              banyak produk lainnya.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Dengan gudang yang luas dan sistem manajemen persediaan yang canggih,
              kami mampu memenuhi kebutuhan mitra bisnis kami — mulai dari toko
              kelontong kecil hingga supermarket besar — dengan efisiensi dan
              kecepatan yang tak tertandingi.
            </p>

            {/* Key figures */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Tahun Berdiri", value: "2009" },
                { label: "Karyawan", value: "200+" },
                { label: "Mitra Aktif", value: "500+" },
                { label: "Kota Terjangkau", value: "50+" },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-[#e6f7f7] rounded-xl">
                  <p className="text-2xl font-bold font-display text-[#00B4B4]">{item.value}</p>
                  <p className="text-gray-600 text-sm mt-0.5">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="p-5 bg-white border border-gray-100 rounded-2xl hover-lift shadow-sm"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#00B4B4]/10 flex items-center justify-center mb-4">
                    <Icon size={22} color="#00B4B4" />
                  </div>
                  <h4 className="font-bold font-display text-gray-900 mb-2 text-sm">{v.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 bg-teal-gradient rounded-2xl text-white">
            <h3 className="text-xl font-bold font-display mb-4">Visi Kami</h3>
            <p className="text-white/85 leading-relaxed">
              Menjadi perusahaan distribusi kebutuhan rumah tangga terkemuka di Indonesia
              yang dikenal atas keandalan, kualitas, dan komitmen terhadap kepuasan
              mitra bisnis dan konsumen akhir.
            </p>
          </div>
          <div className="p-8 bg-gray-900 rounded-2xl text-white">
            <h3 className="text-xl font-bold font-display mb-4">Misi Kami</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#00B4B4] mt-1">▸</span>
                Mendistribusikan produk berkualitas secara efisien dan tepat waktu
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00B4B4] mt-1">▸</span>
                Membangun kemitraan yang saling menguntungkan dan berkelanjutan
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00B4B4] mt-1">▸</span>
                Terus berinovasi dalam sistem logistik dan manajemen distribusi
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00B4B4] mt-1">▸</span>
                Memberikan harga terbaik tanpa mengorbankan kualitas layanan
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
