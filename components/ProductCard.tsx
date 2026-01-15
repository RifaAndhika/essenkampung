"use client";

import Image from "next/image";
import { Product } from "@/types/product";
import { motion } from "framer-motion";
import { MessageCircle, Star } from "lucide-react";

const WA_NUMBER = "6282121907020";
const waLink = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="relative bg-white rounded-3xl shadow-md hover:shadow-xl overflow-hidden group border border-slate-100"
    >
      {/* BADGE */}
      {product.isBestSeller && (
        <span
          className="absolute top-4 left-4 z-10 flex items-center gap-1 text-xs font-semibold 
          bg-amber-100 text-amber-700 px-3 py-1 rounded-full"
        >
          <Star size={12} />
          Paling Laris
        </span>
      )}

      {/* IMAGE */}
      <div className="overflow-hidden">
        <Image
          src={`/${product.images[0]}`}
          alt={product.name}
          width={600}
          height={600}
          className="object-cover h-56 w-full group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col gap-4">
        <div>
          <h3 className="font-semibold text-lg text-slate-800 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-slate-500 text-sm line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sky-500 font-bold text-lg">
            Rp {product.price.toLocaleString("id-ID")}
          </span>

          <a
            href={waLink(
              `Halo, saya mau pesan ${
                product.name
              } dengan harga Rp ${product.price.toLocaleString("id-ID")}.`
            )}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
              bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-medium 
              opacity-0 group-hover:opacity-100 transition"
          >
            <MessageCircle size={16} />
            Pesan
          </a>
        </div>
      </div>
    </motion.div>
  );
}
