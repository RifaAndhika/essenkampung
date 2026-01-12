"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Test() {
  const [msg, setMsg] = useState("loading...");

  useEffect(() => {
    supabase.auth.getSession().then(({ data, error }) => {
      if (error) setMsg("❌ GAGAL: " + error.message);
      else setMsg("✅ TERHUBUNG KE SUPABASE");
    });
  }, []);

  return <h1>{msg}</h1>;
}
