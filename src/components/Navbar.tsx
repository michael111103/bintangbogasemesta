"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { IconMenu, IconClose } from "@/components/icons/Icons";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Produk", href: "#produk" },
  { label: "Gudang", href: "#gudang" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-white/95 backdrop-blur-sm py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#beranda"
            onClick={(e) => handleNavClick(e, "#beranda")}
            className="flex items-center group"
          >
            <div className="relative flex-shrink-0" style={{ width: "180px", height: "80px" }}>
              <Image
                src="/logo.jpg"
                alt="PT. Bintang Boga Semesta Logo"
                fill
                className="object-contain object-left"
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:text-[#00B4B4] hover:bg-teal-50 transition-all duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontak"
              onClick={(e) => handleNavClick(e, "#kontak")}
              className="ml-4 px-5 py-2 text-sm font-semibold text-white bg-teal-gradient rounded-full hover:opacity-90 transition-all duration-200 shadow-teal cursor-pointer"
            >
              Hubungi Kami
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-teal-50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <IconClose size={24} color="#374151" />
            ) : (
              <IconMenu size={24} color="#374151" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:text-[#00B4B4] hover:bg-teal-50 transition-all cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 pb-1">
            <a
              href="#kontak"
              onClick={(e) => handleNavClick(e, "#kontak")}
              className="block w-full text-center px-5 py-3 text-sm font-semibold text-white bg-teal-gradient rounded-full hover:opacity-90 transition-all cursor-pointer"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
