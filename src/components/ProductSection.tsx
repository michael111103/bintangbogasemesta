"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

const productImages = [
  "/produk.JPG",
  "/produk1.jpg",
  "/produk2.jpg",
  "/produk3.jpg",
  "/produk4.jpg",
  "/produk5.jpg",
];

const total = productImages.length;

export default function ProductSection() {
  const [displayed, setDisplayed] = useState(0);
  const [incoming, setIncoming] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const [dir, setDir] = useState<"left" | "right">("left");
  const autoRef = useRef<NodeJS.Timeout | null>(null);
  const animatingRef = useRef(false);
  const touchStartX = useRef<number | null>(null);

  const slide = useCallback((nextIdx: number, direction: "left" | "right") => {
    if (animatingRef.current) return;
    animatingRef.current = true;
    setDir(direction);
    setIncoming(nextIdx);
    setAnimating(true);
    setTimeout(() => {
      setDisplayed(nextIdx);
      setIncoming(null);
      setAnimating(false);
      animatingRef.current = false;
    }, 500);
  }, []);

  const startAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setDisplayed((prev) => {
        const next = (prev + 1) % total;
        slide(next, "left");
        return prev;
      });
    }, 3500);
  }, [slide]);

  const stopAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
  }, []);

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, [startAuto, stopAuto]);

  const handlePrev = () => {
    stopAuto();
    setDisplayed((prev) => {
      slide((prev - 1 + total) % total, "right");
      return prev;
    });
    setTimeout(startAuto, 5000);
  };

  const handleNext = () => {
    stopAuto();
    setDisplayed((prev) => {
      slide((prev + 1) % total, "left");
      return prev;
    });
    setTimeout(startAuto, 5000);
  };

  const handleDotClick = (i: number) => {
    stopAuto();
    setDisplayed((prev) => {
      if (i === prev) return prev;
      slide(i, i > prev ? "left" : "right");
      return prev;
    });
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
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
    setTimeout(startAuto, 5000);
  };

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
            {/* Gambar tampil — slide keluar */}
            <div
              className="absolute inset-0"
              style={{
                transform: animating ? `translateX(${dir === "left" ? "-100%" : "100%"})` : "translateX(0)",
                transition: animating ? "transform 0.5s ease" : "none",
                zIndex: 1,
              }}
            >
              <Image
                src={productImages[displayed]}
                alt={`Produk ${displayed + 1}`}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>

            {/* Gambar masuk */}
            {incoming !== null && (
              <div className="absolute inset-0" style={{ zIndex: 2 }}>
                <style>{`
                  @keyframes slideInFromRight {
                    from { transform: translateX(100%); }
                    to   { transform: translateX(0); }
                  }
                  @keyframes slideInFromLeft {
                    from { transform: translateX(-100%); }
                    to   { transform: translateX(0); }
                  }
                `}</style>
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    animation: `${dir === "left" ? "slideInFromRight" : "slideInFromLeft"} 0.5s ease forwards`,
                  }}
                >
                  <Image
                    src={productImages[incoming]}
                    alt={`Produk ${incoming + 1}`}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
              </div>
            )}

            {/* Tombol prev/next */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Previous"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Next"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            {/* Dot indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {productImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleDotClick(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === displayed ? "bg-white w-5" : "bg-white/50 w-2"
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
            href="#kontak"
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector("#kontak");
              if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#00B4B4] font-semibold rounded-full hover:bg-gray-50 transition-colors shadow-lg"
          >
            Hubungi Kami
          </a>
        </div>

      </div>
    </section>
  );
}
