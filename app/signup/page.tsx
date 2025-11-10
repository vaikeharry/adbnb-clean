"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("adbnb_user", JSON.stringify(user));
    alert("Kasutaja loodud!");
    router.push("/login");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Loo konto</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          <input
            type="email"
            name="email"
            placeholder="E-post"
            required
            onChange={handleChange}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Parool"
            required
            onChange={handleChange}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="bg-green-600 text-white rounded-lg py-3 hover:bg-green-700 transition"
          >
            Registreeru
          </button>
        </form>
        <p className="text-gray-600 text-sm mt-4">
          Juba konto olemas?{" "}
          <a href="/login" className="text-green-700 underline">
            Logi sisse
          </a>
        </p>
      </div>
    </main>
  );
}
