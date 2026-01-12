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
      className="relative overflow-hidden max-w-7xl mx-auto px-6 pt-36 pb-24"
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
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-5 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-6">
            ESSEN KAMPUNG GACOR KANGG!!
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8">
            ESSEN KAMPUNG MURAH GA MURAHAN <br />
            <span className="bg-gradient-to-r from-sky-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">
              Performa Ikan Juara
            </span>
          </h1>

          <p className="mb-12 text-lg text-slate-500 max-w-xl">
            Essen alami kualitas lomba yang membantu meningkatkan nafsu makan,
            mempercepat pertumbuhan, dan menjaga daya tahan ikan secara optimal.
          </p>

          <div className="flex flex-wrap gap-6">
            <a
              href="#produk"
              className="px-9 py-4 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-semibold shadow-lg hover:shadow-sky-300/50 hover:-translate-y-0.5 transition"
            >
              Lihat Produk
            </a>
            <a
              href="#kontak"
              className="px-9 py-4 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-semibold shadow-lg hover:shadow-sky-300/50 hover:-translate-y-0.5 transition"
            >
              Beli Disini
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
            width={460}
            height={460}
            alt="Essen Ikan"
            className="relative z-10 drop-shadow-2xl hover:scale-[1.04] transition duration-500"
            priority
          />
        </motion.div>
      </div>

      {/* PRODUK */}
      <div id="produk" className="mt-44 scroll-mt-36">
        <ProductSection />
      </div>

      {/* BLOG */}
      <div id="blog" className="mt-44 scroll-mt-36">
        <BlogSection />
      </div>

      {/* CTA */}
      <motion.div
        id="kontak"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-44 scroll-mt-36 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Tingkatkan Performa Ikan Anda Sekarang
        </h2>
        <p className="text-slate-500 mb-12 max-w-2xl mx-auto">
          Konsultasikan kebutuhan kolam Anda langsung dengan tim kami dan
          dapatkan rekomendasi essen terbaik secara gratis.
        </p>

        <a
          href="https://wa.me/6289636411763"
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
          Beli via WhatsApp
        </a>
      </motion.div>
    </section>
  );
}
