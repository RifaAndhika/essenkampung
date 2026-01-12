"use client";

import { supabase } from "@/lib/supabase";
import { useEffect, useState, useCallback } from "react";
import { Database } from "@/types/database";

type Product = Database["public"]["Tables"]["products"]["Row"];
type ProductInsert = Database["public"]["Tables"]["products"]["Insert"];

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  // ===== GET PRODUCTS =====
  const getProducts = useCallback(async (): Promise<void> => {
    const { data, error } = await supabase.from("products").select("*");

    if (error) {
      console.error(error.message);
      return;
    }

    setProducts((data ?? []) as Product[]);
  }, []);

  // ===== FIRST LOAD =====
  useEffect(() => {
    let mounted = true;

    const load = async () => {
      const { data, error } = await supabase.from("products").select("*");

      if (!mounted || error) return;

      setProducts(data ?? []);
    };

    load();

    return () => {
      mounted = false;
    };
  }, []);

  // ===== ADD PRODUCT =====
  // const addProduct = async () => {
  //   const payload: ProductInsert = {
  //     name: form.name,
  //     description: form.description || null,
  //     price: Number(form.price),
  //     image: form.image || null,
  //   };

  //   const { error } = await supabase.from("products").insert([payload]);

  //   if (error) {
  //     alert(error.message);
  //     return;
  //   }

  //   setForm({ name: "", description: "", price: "", image: "" });

  //   const { data } = await supabase.from("products").select("*");
  //   setProducts(data ?? []);
  // };

  // ===== DELETE PRODUCT =====
  const deleteProduct = async (id: string) => {
    const { error } = await supabase.from("products").delete().eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    getProducts();
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Kelola Produk</h1>

      {/* ===== FORM INPUT ===== */}
      <div className="bg-white p-6 rounded-xl shadow mb-10 grid grid-cols-2 gap-4">
        <input
          className="input"
          placeholder="Nama Produk"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="input"
          placeholder="Harga"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <input
          className="input col-span-2"
          placeholder="Image URL"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />
        <textarea
          className="input col-span-2"
          placeholder="Deskripsi"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        {/* <button onClick={addProduct} className="btn-primary col-span-2">
          Tambah Produk
        </button> */}
      </div>

      {/* ===== TABLE ===== */}
      <table className="w-full bg-white shadow rounded-xl">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left">Nama</th>
            <th className="text-left">Harga</th>
            <th className="text-left">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="border-t">
              <td className="p-3">{p.name}</td>
              <td>Rp {p.price}</td>
              <td>
                <button
                  onClick={() => deleteProduct(p.id)}
                  className="text-red-600 hover:underline"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
