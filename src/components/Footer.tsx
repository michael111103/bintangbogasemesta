import Link from "next/link";
import {
  IconLocation,
  IconPhone,
  IconEmail,
  IconWhatsapp,
} from "@/components/icons/Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white" id="kontak">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3 className="text-xl font-bold font-display text-white leading-tight">
                PT. Bintang Boga
              </h3>
              <p className="text-[#00B4B4] font-semibold tracking-wide">Semesta</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Distributor terpercaya kebutuhan rumah tangga yang melayani mitra bisnis
              dengan produk berkualitas dan pengiriman tepat waktu.
            </p>
            {/* Social / WA */}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#00B4B4] hover:bg-[#007a7a] text-white text-sm font-semibold rounded-full transition-colors duration-200"
            >
              <IconWhatsapp size={18} color="#fff" />
              Chat WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold font-display mb-5 text-sm uppercase tracking-wider">
              Menu
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Beranda", href: "#beranda" },
                { label: "Tentang Kami", href: "#tentang" },
                { label: "Produk", href: "#produk" },
                { label: "Gudang", href: "#gudang" },
                { label: "Kontak", href: "#kontak" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-[#00B4B4] text-sm transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold font-display mb-5 text-sm uppercase tracking-wider">
              Kontak
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <IconLocation size={18} color="#00B4B4" className="mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  Jl. Raya Industri No. 123,<br />
                  Jakarta Utara, DKI Jakarta 14000
                  <br />
                  <span className="text-xs text-gray-500">(Lokasi dummy — akan diperbarui)</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <IconPhone size={18} color="#00B4B4" className="flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  +62 812-3456-7890
                  <br />
                  <span className="text-xs text-gray-500">(Nomor dummy — akan diperbarui)</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <IconEmail size={18} color="#00B4B4" className="flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  info@bintangbogasemesta.com
                  <br />
                  <span className="text-xs text-gray-500">(Email dummy — akan diperbarui)</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Google Maps Embed */}
          <div>
            <h4 className="text-white font-semibold font-display mb-5 text-sm uppercase tracking-wider">
              Lokasi Kami
            </h4>
            <div className="rounded-xl overflow-hidden border border-gray-700 shadow-lg">
              <iframe
                title="Lokasi PT. Bintang Boga Semesta"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666564798!2d106.8227!3d-6.1275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDcnMzkuMCJTIDEwNsKwNDknMjEuNyJF!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              * Lokasi dummy — akan diperbarui
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            &copy; {currentYear} PT. Bintang Boga Semesta. Semua hak dilindungi.
          </p>
          <p className="text-gray-600 text-xs">
            Distributor Kebutuhan Rumah Tangga Terpercaya
          </p>
        </div>
      </div>
    </footer>
  );
}
