import ProductCard from "@/components/ProductCard";
import { products } from "@/data/product";

export default function Home() {
  return (
    <>
      <div className="mb-10 text-center px-4">
        <span className="block text-xs uppercase tracking-widest text-sky-500 font-medium mb-1">
          MOAL GAGAL
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-[2.6rem] font-semibold text-slate-800 leading-snug break-words">
          Produk Unggulan
        </h1>

        <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </>
  );
}
