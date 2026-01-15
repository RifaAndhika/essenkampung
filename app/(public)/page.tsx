"use client";

import ProductSection from "../section/ProductSection";
import BlogSection from "../section/BlogSection";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, CheckCircle } from "lucide-react";
import { Product } from "@/types/product";

const WA_NUMBER = "6282121907020";
const waLink = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

export default function Home() {
  return (
    <section
      id="home"
      className="relative max-w-7xl mx-auto px-6 pt-28 md:pt-32 pb-24"
    >
      {/* HERO */}
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-widest text-sky-500 font-semibold">
            ESSEN IKAN MAS TERBUKTI LAPANGAN
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mt-4 mb-6">
            Spot Sepi Jadi Ramai <br />
            <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
              Dalam 30 Menit
            </span>
          </h1>

          <ul className="space-y-3 text-slate-600 mb-8">
            {[
              "Meningkatkan nafsu makan ikan mas",
              "Aroma tahan lama, tidak cepat basi",
              "Dipakai angler lomba & harian",
            ].map((v, i) => (
              <li key={i} className="flex gap-2 items-center">
                <CheckCircle className="text-green-500" size={18} /> {v}
              </li>
            ))}
          </ul>

          <div className="flex gap-4">
            <a
              href="#produk"
              className="px-7 py-3 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-medium"
            >
              Lihat Produk
            </a>

            <a
              href={waLink(
                "Halo, saya mau tanya essen ikan mas yang paling laris."
              )}
              className="px-7 py-3 rounded-full border border-green-400 text-green-600"
            >
              Chat WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center"
        >
          <Image
            src="/essen.png"
            width={260}
            height={260}
            alt="Essen Ikan Mas"
            priority
          />
        </motion.div>
      </div>

      {/* TRUST */}
      <div className="mt-24 grid md:grid-cols-3 gap-8 text-center">
        {["500+ Botol Terjual", "Digunakan di 12 Kota", "Repeat Order 70%"].map(
          (v, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white shadow-lg text-slate-700 font-semibold"
            >
              {v}
            </div>
          )
        )}
      </div>

      {/* PRODUK */}
      <div id="produk" className="mt-40">
        <ProductSection />
      </div>
      <div className="">
        <motion.div
          id="sosial"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-44 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-800">
            Temukan Kami di Sosial Media
          </h2>
          <p className="text-slate-500 mb-10 max-w-xl mx-auto">
            Lihat bukti strike harian, review pemancing lain, dan tanya langsung
            lewat platform favorit kamu.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a
              href="https://www.youtube.com/@hj-obenx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-3 px-10 py-4 rounded-full 
  bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold shadow"
            >
              YouTube
            </a>

            <a
              href="https://tiktok.com/@jajanghermawan554"
              className="inline-flex justify-center items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-slate-800 to-black text-white font-semibold shadow"
            >
              TikTok
            </a>
          </div>
        </motion.div>
      </div>

      {/* FORM PESAN */}
      <div className="mt-40 max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-slate-800">
          Pesan Sekarang
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const formData = new FormData(form);

            const name = formData.get("name") as string;
            const varian = formData.get("varian") as string;
            const qty = formData.get("qty") as string;

            window.location.href = waLink(
              `Halo, saya ${name} mau pesan Essen Varian ${varian} sebanyak ${qty} botol.`
            );
          }}
          className="space-y-4"
        >
          <input
            name="name"
            placeholder="Nama"
            required
            className="w-full border rounded-lg p-3"
          />
          <input
            name="varian"
            placeholder="Varian rasa"
            required
            className="w-full border rounded-lg p-3"
          />
          <input
            name="qty"
            placeholder="Jumlah botol"
            required
            className="w-full border rounded-lg p-3"
          />
          <button
            type="submit"
            className="w-full py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold"
          >
            Kirim ke WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
