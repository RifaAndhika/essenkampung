import ProductCard from "@/components/ProductCard";
import BlogCard from "@/components/BlogCard";

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* HERO */}
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div>
          <span className="inline-block bg-sky-100 text-sky-700 px-4 py-1 rounded-full text-sm mb-4">
            🐟 Solusi Nafsu Makan Ikan
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
            Essen Premium <br />
            Penambah Nafsu Makan Ikan
          </h1>
          <p className="mb-7 text-slate-600 max-w-lg">
            Tingkatkan performa ikan ternak & lomba dengan essen alami yang
            terbukti membuat ikan lebih lahap, sehat, dan cepat besar.
          </p>
          <div className="flex gap-4">
            <button className="bg-sky-500 hover:bg-sky-600 text-white px-7 py-3 rounded-xl shadow-lg">
              Lihat Produk
            </button>
            <button className="border border-sky-500 text-sky-600 px-7 py-3 rounded-xl hover:bg-sky-50">
              Hubungi Kami
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-sky-200 rounded-full blur-3xl opacity-50" />
          <img
            src="/hero-fish.png"
            className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl"
            alt="Essen Ikan"
          />
        </div>
      </div>

      {/* PRODUK */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Produk Unggulan Kami
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <ProductCard key={i} />
          ))}
        </div>
      </div>

      {/* BLOG */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Tips & Artikel Terbaru
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <BlogCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
