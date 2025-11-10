"use client";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        <div className="flex items-center gap-2">
          <Image src="/adbnb-logo.png" alt="ADBNB logo" width={40} height={40} />
          <span className="text-green-700 font-bold text-xl">ADBNB</span>
        </div>
        <div className="flex gap-6 text-green-700 font-semibold">
          <a href="/" className="hover:text-green-800 transition">Avaleht</a>
          <a href="/register" className="hover:text-green-800 transition">Lisa oma pind</a>
          <a href="/signup" className="hover:text-green-800 transition">Loo konto</a>
          <a href="/login" className="hover:text-green-800 transition">Logi sisse</a>
          <a href="#contact" className="hover:text-green-800 transition">Kontakt</a>
        </div>
      </div>
    </nav>
  );
}
