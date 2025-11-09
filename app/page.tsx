"use client";
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

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
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

        {/* ADBNB logo ja pealkiri video peal */}
        <div className="relative z-10 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-wide mb-4 drop-shadow-lg">
            ADBNB
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-8 text-gray-200">
            Leia ja rendi nähtavus — reklaamipinnad üle Eesti, kiiresti ja mugavalt.
          </p>

          {/* Nupud */}
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => scrollToSection("map")}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition"
            >
              Vaata kaarti
            </button>
            <button
              onClick={() =>
                alert("“Lisa oma pind” funktsioon on kohe tulekul!")
              }
              className="bg-white/80 text-green-700 border border-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
            >
              Lisa oma pind
            </button>
          </div>
        </div>
      </section>

      {/* KAART */}
      <section id="map" className="w-full h-[80vh] relative">
        <div ref={mapContainer} className="w-full h-full" />
      </section>

      {/* KONTAKT */}
      <section id="contact" className="w-full bg-gray-100 py-16 text-center">
        <h2 className="text-3xl font-semibold text-green-700 mb-4">
          Võta ühendust
        </h2>
        <p className="text-gray-700 mb-2">📧 info@adbnb.ee</p>
        <p className="text-gray-700 mb-2">📞 +372 5555 5555</p>
        <p className="text-gray-500 mt-6">
          © {new Date().getFullYear()} ADBNB. Kõik õigused kaitstud.
        </p>
      </section>
    </main>
  );
}
