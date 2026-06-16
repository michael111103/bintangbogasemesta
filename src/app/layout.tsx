import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PT. Bintang Boga Semesta | Distributor Kebutuhan Rumah Tangga",
  description:
    "PT. Bintang Boga Semesta adalah perusahaan distribusi terpercaya untuk kebutuhan rumah tangga, menyediakan produk berkualitas seperti Indomie, Pampers, Susu UHT, dan masih banyak lagi.",
  keywords: "bintang boga semesta, distributor, kebutuhan rumah tangga, indomie, pampers, susu uht",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
