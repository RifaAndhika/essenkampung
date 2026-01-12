import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) redirect("/login");

  return <>{children}</>;
}
