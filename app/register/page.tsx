"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", location: "", description: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Pind lisatud! (demo)");
    setForm({ name: "", email: "", location: "", description: "" });
  };

  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-50 text-gray-900">
      {/* HERO */}
      <section className="w-full bg-green-700 text-white py-16 text-center shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Lisa oma reklaamipind</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Registreeri oma maa-ala, hoone või sõiduk ja teeni tulu nähtavuse pakkumise eest!
        </p>
      </section>

      {/* REGISTREERIMISVORM */}
      <section className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-8 mt-10">
        <h2 className="text-2xl font-semibold text-green-700 mb-6 text-center">
          Täida andmed oma reklaamipinna kohta
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Nimi"
            value={form.name}
            onChange={handleChange}
            required
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            name="email"
            placeholder="E-post"
            value={form.email}
            onChange={handleChange}
            required
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            name="location"
            placeholder="Asukoht (nt Tallinn, Tartu, Pärnu...)"
            value={form.location}
            onChange={handleChange}
            required
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            name="description"
            placeholder="Kirjelda oma reklaamipinda..."
            value={form.description}
            onChange={handleChange}
            required
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 h-32"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition duration-200"
          >
            Saada
          </button>
        </form>
      </section>

      {/* NÄIDISPINNAD */}
      <section className="mt-16 max-w-6xl mx-auto px-4 mb-20">
        <h2 className="text-3xl font-semibold text-green-700 mb-8 text-center">
          Näidispinnad
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* 1️⃣ Teeäärne stend */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition hover:-translate-y-2 hover:shadow-2xl">
            <img src="/teeäärnestend.jpg" alt="Teeäärne stend" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-700">Teeäärne stend</h3>
              <p className="text-gray-600 text-sm">Suure liiklusega teel nähtav ja tulemuslik reklaam.</p>
            </div>
          </div>

          {/* 2️⃣ Auto reklaam */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition hover:-translate-y-2 hover:shadow-2xl">
            <img src="/autoreklaam.jpg" alt="Auto reklaam" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-700">Auto reklaam</h3>
              <p className="text-gray-600 text-sm">Liikuv reklaam, mis jõuab igale poole Eestisse.</p>
            </div>
          </div>

          {/* 3️⃣ Hoone fassaad */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition hover:-translate-y-2 hover:shadow-2xl">
            <img src="/hoonefasaad.jpg" alt="Hoone fassaad" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-700">Hoone fassaad</h3>
              <p className="text-gray-600 text-sm">Suurepärane nähtavus linna südames ja ärihoonetel.</p>
            </div>
          </div>

          {/* 4️⃣ Valguskast */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition hover:-translate-y-2 hover:shadow-2xl">
            <img src="/valguskast.jpg" alt="Valguskast" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-700">Valguskast</h3>
              <p className="text-gray-600 text-sm">Efektne ja silmapaistev reklaam öises linnakeskkonnas.</p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

