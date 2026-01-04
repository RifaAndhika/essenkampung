export default function ProductCard() {
  return (
    <div className="card-glass p-5 hover:scale-105 transition">
      <img src="/product.png" className="h-40 mx-auto mb-4" />
      <h3 className="font-semibold text-lg">Essen Ikan Nila</h3>
      <p className="text-sm text-slate-600">Meningkatkan nafsu makan ikan</p>
      <p className="text-sky-600 font-bold mt-2">Rp 35.000</p>
      <button className="bg-sky-500 hover:bg-sky-600 text-white w-full mt-4 py-2 rounded-lg">
        Beli Sekarang
      </button>
    </div>
  );
}
