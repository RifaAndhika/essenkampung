"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import useActiveSection from "@/hooks/useActiveSection";
import { motion, AnimatePresence } from "framer-motion";

type NavItemProps = {
  href: string;
  label: string;
  onClick?: () => void;
  active?: boolean;
};

function NavItem({ href, label, onClick, active }: NavItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative text-sm font-semibold transition
        ${active ? "text-sky-500" : "text-slate-600 hover:text-sky-500"}`}
    >
      {label}
      {active && (
        <motion.span
          layoutId="nav-indicator"
          className="absolute -bottom-2 left-0 w-full h-0.5 bg-sky-500 rounded-full"
        />
      )}
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const link = (hash: string) => (isHome ? hash : `/${hash}`);
  const active = useActiveSection(["home", "produk", "blog", "kontak"]);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setIsTop(window.scrollY < 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navs = [
    { label: "Home", id: "home" },
    { label: "Produk", id: "produk" },
    { label: "Blog", id: "blog" },
    { label: "Kontak", id: "kontak" },
  ];

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-xl border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <Link href={link("#home")} className="flex items-center gap-3">
            <Image src="/essen.png" width={44} height={44} alt="Logo" />
            <span className="text-xl font-extrabold bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
              ESSEN KAMPUNG
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navs.map((item) => (
              <NavItem
                key={item.id}
                href={link(`#${item.id}`)}
                label={item.label}
                active={
                  item.id === "home"
                    ? active === "home" || isTop
                    : active === item.id
                }
              />
            ))}

            <Link
              href="/login"
              className="ml-6 px-6 py-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-medium shadow hover:shadow-sky-300/40 transition"
            >
              Login
            </Link>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 rounded-full hover:bg-slate-100 transition"
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: 320 }}
            animate={{ x: 0 }}
            exit={{ x: 320 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-2xl"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b">
              <span className="font-extrabold text-sky-500">ESSEN KAMPUNG</span>
              <button onClick={() => setOpen(false)}>
                <X size={22} />
              </button>
            </div>

            <div className="flex flex-col gap-6 px-6 py-10">
              {navs.map((item) => (
                <NavItem
                  key={item.id}
                  href={link(`#${item.id}`)}
                  label={item.label}
                  active={
                    item.id === "home"
                      ? active === "home" || isTop
                      : active === item.id
                  }
                  onClick={() => setOpen(false)}
                />
              ))}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
