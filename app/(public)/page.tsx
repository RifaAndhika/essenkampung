"use client";

import ProductSection from "../section/ProductSection";
import BlogSection from "../section/BlogSection";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
export default function Home() {
  return (
    <section
      id="home"
      className="relative overflow-visible max-w-7xl mx-auto px-6 pt-28 md:pt-32 pb-24 scroll-mt-28"
    >
      {/* Soft background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-48 -left-48 w-[520px] h-[520px] bg-sky-400/25 rounded-full blur-[140px]" />
        <div className="absolute top-64 -right-40 w-[480px] h-[480px] bg-indigo-400/25 rounded-full blur-[140px]" />
      </div>

      {/* HERO */}
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl"
        >
          <span className="inline-block text-xs uppercase tracking-widest text-sky-500 font-semibold mb-3">
            Essen Kampung Pilihan Angler
          </span>

          <h3 className="text-3xl md:text-4xl font-semibold leading-snug mb-5 text-slate-800">
            Murah Tapi Berkualitas <br />
            <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent font-bold">
              Tambah Performa Mancing Biar Gacor
            </span>
          </h3>

          <p className="mb-8 text-base text-slate-500 leading-relaxed">
            Essen alami dengan standar lomba untuk meningkatkan nafsu makan,
            mempercepat pertumbuhan, dan menjaga kondisi ikan tetap prima.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#produk"
              className="px-7 py-3 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-sm font-medium shadow-md hover:shadow-sky-300/40 hover:-translate-y-0.5 transition"
            >
              Lihat Produk
            </a>

            <a
              href="#kontak"
              className="px-7 py-3 rounded-full border border-sky-400/40 text-sky-600 text-sm font-medium hover:bg-sky-50 transition"
            >
              Beli Sekarang
            </a>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="absolute -top-24 w-[440px] h-[440px] bg-gradient-to-tr from-sky-400/30 to-indigo-400/30 rounded-full blur-[100px]" />

          <Image
            src="/essen.png"
            width={250}
            height={250}
            alt="Essen Ikan"
            className="relative z-10 drop-shadow-2xl hover:scale-[1.04] transition duration-500"
            priority
          />
        </motion.div>
      </div>

      {/* PRODUK */}
      <div
        id="produk"
        className="mt-44 scroll-mt-28
"
      >
        <ProductSection />
      </div>

      {/* BLOG */}
      <div
        id="blog"
        className="mt-44 scroll-mt-28
"
      >
        <BlogSection />
      </div>

      {/* CTA */}
      <motion.div
        id="kontak"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-44 scroll-mt-28
 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-slate-800">
          Beli Sekarang
        </h2>
        <p className="text-slate-500 mb-12 max-w-2xl mx-auto">
          Konsultasikan Dan Pembelian Untuk Pemakaian ESSEN KAMFUNG Yang Tepat
          Sesuai Kebutuhan.
        </p>

        <a
          href="https://wa.me/6282121907020"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 px-12 py-5 rounded-full
            bg-gradient-to-r from-green-500 to-emerald-500
            text-white font-semibold shadow-xl
            hover:shadow-green-400/40 hover:-translate-y-0.5 transition"
        >
          <MessageCircle
            size={22}
            className="group-hover:scale-110 transition"
          />
          WhatsApp
        </a>
      </motion.div>
    </section>
  );
}
