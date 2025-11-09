"use client";

import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

export default function Home() {
  const [showMap, setShowMap] = useState(false);
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showMap || !mapContainer.current) return;
    mapboxgl.accessToken = "pk.eyJ1IjoidmFpa2VoYXJyeSIsImEiOiJjbWhyb200NjYxMDhjMmxyMTg2Znh1aHlnIn0.WmjAWLq5M-zHUjESwrK_2A"; // kleebi siia oma Mapbox token
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [24.7536, 59.4370],
      zoom: 10,
    });

    return () => map.remove();
  }, [showMap]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Ülemine menüü */}
      <header className="flex justify-between items-center bg-white shadow px-8 py-4 sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-green-600">ADBNB</h1>
        <nav className="flex gap-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-green-600 transition">Avaleht</a>
          <a href="#" className="hover:text-green-600 transition">Meist</a>
          <a href="#" className="hover:text-green-600 transition">Kaart</a>
          <a href="#" className="hover:text-green-600 transition">Kontakt</a>
        </nav>
      </header>

      {/* Esileht taustapildiga */}
      {!showMap && (
        <main
          className="flex-1 flex flex-col items-center justify-center text-center relative bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 px-6 text-white max-w-2xl">
            <h2 className="text-5xl font-bold mb-4 drop-shadow-lg">
              Silmapaistev reklaam. Õiges kohas.
            </h2>
            <p className="text-lg mb-8 text-gray-200">
              ADBNB ühendab maaomanikud ja reklaamijad, et tuua nähtavus just
              sinna, kus seda kõige rohkem märgatakse – Eesti teede ja linnade ääres.
            </p>
            <button
              onClick={() => setShowMap(true)}
              className="px-8 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition"
            >
              Vaata kaarti
            </button>
          </div>
        </main>
      )}

      {/* Kaart */}
      {showMap && (
        <main className="flex-1 relative">
          <div ref={mapContainer} className="absolute inset-0" />
          <button
            onClick={() => setShowMap(false)}
            className="absolute top-4 right-4 z-10 bg-white shadow px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
          >
            Sulge kaart
          </button>
        </main>
      )}

      {/* Jalus */}
      <footer className="bg-white shadow-inner py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} ADBNB. Kõik õigused kaitstud.
      </footer>
    </div>
  );
}
