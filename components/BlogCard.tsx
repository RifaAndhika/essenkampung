"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BlogCard() {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group bg-white rounded-3xl shadow-lg overflow-hidden"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src="/paket.png"
          width={400}
          height={250}
          alt="Blog"
          className="h-44 w-full object-cover group-hover:scale-110 transition duration-500"
        />
        {/* <span className="absolute top-4 left-4 bg-sky-500/90 text-white text-xs px-3 py-1 rounded-full">
          Tips & Trik
        </span> */}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2 leading-snug group-hover:text-sky-500 transition">
          Cara Meningkatkan Nafsu Makan Ikan
        </h3>

        <p className="text-sm text-slate-500 mb-6 line-clamp-2">
          Pelajari cara meningkatkan performa ikan dengan essen berkualitas agar
          hasil ternak semakin maksimal.
        </p>

        {/* <div className="flex items-center justify-between">
          <span className="text-xs text-slate-400">12 Januari 2026</span>
          <span className="text-sky-500 text-sm font-medium">
            Baca Selengkapnya →
          </span>
        </div> */}
      </div>
    </motion.article>
  );
}
