"use client";
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainer.current) return;
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [24.7536, 59.437],
      zoom: 8,
    });
    return () => map.remove();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="flex flex-col items-center text-gray-900 bg-white">
      {/* ÜLEMINE MENÜÜRIBA */}
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
          <div className="flex items-center gap-2">
            <Image src="/adbnb-logo.png" alt="ADBNB logo" width={40} height={40} />
            <span className="text-green-700 font-bold text-xl">ADBNB</span>
          </div>
          <div className="flex gap-6 text-green-700 font-semibold">
            <Link href="/" className="hover:text-green-800 transition">Avaleht</Link>
            <Link href="/register" className="hover:text-green-800 transition">Lisa oma pind</Link>
            <Link href="/signup" className="hover:text-green-800 transition">Loo konto</Link>
            <Link href="/login" className="hover:text-green-800 transition">Logi sisse</Link>
            <a href="#contact" className="hover:text-green-800 transition">Kontakt</a>
          </div>
        </div>
      </nav>

      {/* HERO SEKTSIOON */}
      <section className="relative h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden">
        {/* Video taust */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Hele läbipaistev kiht */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />

        {/* Tekstid ja nupud */}
        <div className="relative z-10 px-4 mt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-green-700 drop-shadow-sm">
            Teenige tulu oma maa või autoga
          </h1>
          <p className="text-lg md:text-2xl mt-4 mb-8 max-w-2xl mx-auto text-gray-800">
            Aita ettevõtetel nähtav olla kogu Eestis. Märgi oma pind või auto ja alusta teenimist.
          </p>

          {/* 🔘 NUPUD */}
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => scrollToSection("map")}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition"
            >
              Vaata kaarti
            </button>

            <Link
              href="/register"
              className="bg-white/80 text-green-700 border border-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
            >
              Lisa oma pind
            </Link>

            <Link
              href="/signup"
              className="bg-green-50 text-green-700 border border-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-100 transition"
            >
              Loo konto
            </Link>

            <Link
              href="/login"
              className="bg-white/80 text-green-700 border border-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
            >
              Logi sisse
            </Link>
          </div>
        </div>
      </section>

      {/* KAART */}
      <section id="map" className="w-full h-[80vh] relative">
        <div ref={mapContainer} className="w-full h-full" />
      </section>

      {/* KONTAKT */}
      <section id="contact" className="w-full bg-gray-100 py-16 text-center">
        <h2 className="text-3xl font-semibold text-green-700 mb-4">Võta ühendust</h2>
        <p className="text-gray-700 mb-2">📧 info@adbnb.ee</p>
        <p className="text-gray-700 mb-2">📞 +372 5555 5555</p>

        <p className="text-gray-500 mt-6">
          © {new Date().getFullYear()} ADBNB. Kõik õigused kaitstud.
        </p>
        <p className="text-gray-500 mt-4">
          <Link href="/privacy" className="underline text-green-700">
            Privaatsuspoliitika
          </Link>
        </p>
      </section>
    </main>
  );
}
