"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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

const ruangKontrolImages = ["/gudang4.jpg", "/gudang5.jpg"];

export default function WarehouseSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("left");

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(activeSlide === 0 ? "left" : "right");
      setSliding(true);
      setTimeout(() => {
        setActiveSlide((prev) => (prev === 0 ? 1 : 0));
        setSliding(false);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeSlide]);

  const slideStyle = sliding
    ? {
        transform: direction === "left" ? "translateX(-100%)" : "translateX(100%)",
        opacity: 0,
        transition: "transform 0.5s ease, opacity 0.5s ease",
      }
    : {
        transform: "translateX(0)",
        opacity: 1,
        transition: "transform 0.5s ease, opacity 0.5s ease",
      };

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

        {/* Image Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {/* Area Penyimpanan Utama - large */}
          <div className="col-span-2 lg:col-span-2 row-span-2">
            <div className="relative w-full h-64 lg:h-80 rounded-2xl overflow-hidden hover-lift">
              <Image
                src="/gudang.jpg"
                alt="Area Penyimpanan Utama"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent px-4 py-3">
                <p className="text-white font-semibold text-sm">Area Penyimpanan Utama</p>
              </div>
            </div>
          </div>

          {/* Loading Dock */}
          <div className="relative w-full h-36 lg:h-36 rounded-2xl overflow-hidden hover-lift">
            <Image
              src="/gudang1.jpg"
              alt="Loading Dock"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent px-3 py-2">
              <p className="text-white font-semibold text-xs">Loading Dock</p>
            </div>
          </div>

          {/* Area Sortir */}
          <div className="relative w-full h-36 lg:h-36 rounded-2xl overflow-hidden hover-lift">
            <Image
              src="/gudang2.jpg"
              alt="Area Sortir"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent px-3 py-2">
              <p className="text-white font-semibold text-xs">Area Sortir</p>
            </div>
          </div>

          {/* Armada Pengiriman */}
          <div className="relative w-full h-36 lg:h-36 rounded-2xl overflow-hidden hover-lift">
            <Image
              src="/gudang3.jpg"
              alt="Armada Pengiriman"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent px-3 py-2">
              <p className="text-white font-semibold text-xs">Armada Pengiriman</p>
            </div>
          </div>

          {/* Ruang Kontrol - auto slider */}
          <div className="relative w-full h-36 lg:h-36 rounded-2xl overflow-hidden hover-lift">
            <div className="w-full h-full" style={slideStyle}>
              <Image
                src={ruangKontrolImages[activeSlide]}
                alt="Ruang Kontrol"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent px-3 py-2">
              <p className="text-white font-semibold text-xs">Ruang Kontrol</p>
            </div>
            {/* Dot indicator */}
            <div className="absolute top-2 right-2 flex gap-1">
              {ruangKontrolImages.map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    i === activeSlide ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
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
