import Image from "next/image";
import { IconLocation, IconEmail } from "@/components/icons/Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white" id="kontak">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative flex-shrink-0" style={{ width: "48px", height: "48px" }}>
                <Image
                  src="/logo.png"
                  alt="PT. Bintang Boga Semesta Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold font-display text-white leading-tight">
                PT. Bintang Boga Semesta
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Distributor terpercaya kebutuhan rumah tangga yang melayani mitra bisnis
              dengan produk berkualitas dan pengiriman tepat waktu.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold font-display mb-5 text-sm uppercase tracking-wider">
              Kontak
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <IconLocation size={18} color="#00B4B4" className="mt-0.5 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Jl+Fatmawati+Raya+Blok+A18+Cilandak+Jakarta+Selatan+12430"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 text-sm leading-relaxed hover:text-[#00B4B4] transition-colors cursor-pointer"
                >
                  Jl. Fatmawati Raya Blok A18,<br />
                  Cilandak, Jakarta Selatan 12430
                </a>
              </li>
              <li className="flex items-center gap-3">
                <IconEmail size={18} color="#00B4B4" className="flex-shrink-0" />
                <a
                  href="mailto:bintangbogasemesta@gmail.com"
                  className="text-gray-400 text-sm hover:text-[#00B4B4] transition-colors"
                >
                  bintangbogasemesta@gmail.com
                </a>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0!2d106.7957!3d-6.2905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14d30a7cb43%3A0x1!2sJl.%20Fatmawati%20Raya%2C%20Cilandak%2C%20Jakarta%20Selatan!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
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
