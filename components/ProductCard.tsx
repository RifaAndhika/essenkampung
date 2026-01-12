"use client";

import Image from "next/image";
import { Product } from "@/types/product";
import { motion } from "framer-motion";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      whileHover={{ x: 12 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative bg-white rounded-3xl shadow-lg overflow-hidden group"
    >
      {/* Badge */}

      {/* Image */}
      <div className="overflow-hidden">
        <Image
          src={`/${product.images[0]}`}
          alt={product.name}
          width={1000}
          height={1000}
          className="object-cover h-56 w-full group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-1 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-slate-500 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-sky-500 font-bold text-lg">
            Rp {product.price.toLocaleString("id-ID")}
          </span>

          {/* <button className="bg-sky-500 text-white text-sm px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition">
            Beli
          </button> */}
        </div>
      </div>
    </motion.div>
  );
}
