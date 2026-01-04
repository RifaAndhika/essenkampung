import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white/70 backdrop-blur sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-sky-600">🐟 ESSEN KAMPUNG</h1>
        <ul className="hidden md:flex gap-6 font-medium text-slate-600">
          <li className="hover:text-sky-600">Home</li>
          <li className="hover:text-sky-600">Produk</li>
          <li className="hover:text-sky-600">Artikel</li>
          <li className="hover:text-sky-600">Login</li>
        </ul>
      </div>
    </nav>
  );
}
