"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { IconArrowRight } from "@/components/icons/Icons";

const productImages = [
  "/produk.JPG",
  "/produk1.jpg",
  "/produk2.jpg",
  "/produk3.jpg",
  "/produk4.jpg",
  "/produk5.jpg",
];

export default function ProductSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const autoRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (next: number, dir: "left" | "right") => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent(next);
        setAnimating(false);
      }, 500);
    },
    [animating]
  );

  const startAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % productImages.length;
        setDirection("left");
        setAnimating(true);
        setTimeout(() => setAnimating(false), 500);
        return next;
      });
    }, 3500);
  }, []);

  const stopAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
  }, []);

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, [startAuto, stopAuto]);

  const handlePrev = () => {
    stopAuto();
    const prev = (current - 1 + productImages.length) % productImages.length;
    goTo(prev, "right");
    setTimeout(startAuto, 5000);
  };

  const handleNext = () => {
    stopAuto();
    const next = (current + 1) % productImages.length;
    goTo(next, "left");
    setTimeout(startAuto, 5000);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    stopAuto();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        const next = (current + 1) % productImages.length;
        goTo(next, "left");
      } else {
        const prev = (current - 1 + productImages.length) % productImages.length;
        goTo(prev, "right");
      }
    }
    touchStartX.current = null;
    setTimeout(startAuto, 5000);
  };

  const nextIndex = (current + 1) % productImages.length;

  // incoming slide starts offscreen right (left swipe) or left (right swipe)
  const incomingStart = direction === "left" ? "translateX(100%)" : "translateX(-100%)";
  const currentExit = direction === "left" ? "translateX(-100%)" : "translateX(100%)";

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

        {/* Carousel */}
        <div className="mb-12">
          <div
            className="relative w-full rounded-2xl overflow-hidden shadow-lg"
            style={{ height: "420px" }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Current image sliding out */}
            <div
              className="absolute inset-0"
              style={{
                transform: animating ? currentExit : "translateX(0)",
                opacity: animating ? 0 : 1,
                transition: animating ? "transform 0.5s ease, opacity 0.5s ease" : "none",
              }}
            >
              <Image
                src={productImages[current]}
                alt={`Produk ${current + 1}`}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>

            {/* Incoming image sliding in */}
            {animating && (
              <div
                className="absolute inset-0"
                style={{
                  transform: animating ? "translateX(0)" : incomingStart,
                  opacity: 1,
                  animation: `slideIn 0.5s ease forwards`,
                }}
              >
                <style>{`
                  @keyframes slideIn {
                    from { transform: ${incomingStart}; opacity: 0.7; }
                    to { transform: translateX(0); opacity: 1; }
                  }
                `}</style>
                <Image
                  src={productImages[nextIndex]}
                  alt={`Produk ${nextIndex + 1}`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            )}

            {/* Prev/Next buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Previous"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Next"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {productImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    stopAuto();
                    goTo(i, i > current ? "left" : "right");
                    setTimeout(startAuto, 5000);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-white w-5" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
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
