// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Menu, X } from "lucide-react";

// export default function LandingNavbar() {
//   const [open, setOpen] = useState(false);

//   const NavItem = ({ href, label }: { href: string; label: string }) => (
//     <Link
//       href={href}
//       className="text-lg font-medium text-slate-700 hover:text-sky-500 transition"
//     >
//       {label}
//     </Link>
//   );

//   return (
//     <>
//       <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/80 border-b shadow-sm">
//         <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
//           <div className="flex items-center gap-3">
//             <Image src="/essen.png" alt="Logo" width={40} height={40} />
//             <span className="text-xl font-bold text-sky-500">
//               ESSEN KAMPUNG
//             </span>
//           </div>

//           {/* Desktop */}
//           <div className="hidden md:flex gap-8">
//             <NavItem href="#home" label="Home" />
//             <NavItem href="#produk" label="Produk" />
//             <NavItem href="#blog" label="Blog" />
//             <NavItem href="#kontak" label="Kontak" />
//             <Link
//               href="/login"
//               className="px-4 py-2 rounded-lg border border-sky-500 text-sky-600 hover:bg-sky-50"
//             >
//               Login
//             </Link>
//           </div>

//           {/* Mobile */}
//           <button
//             className="md:hidden p-2 rounded-lg hover:bg-slate-100"
//             onClick={() => setOpen(true)}
//           >
//             <Menu size={26} />
//           </button>
//         </div>
//       </nav>

//       {/* Backdrop */}
//       <div
//         onClick={() => setOpen(false)}
//         className={`fixed inset-0 bg-black/30 z-40 transition-opacity ${
//           open ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//       />

//       {/* Sidebar Mobile */}
//       <aside
//         className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-2xl transform transition-transform duration-300 ${
//           open ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex items-center justify-between px-6 py-4 border-b">
//           <span className="font-bold text-sky-500 text-lg">ESSEN KAMPUNG</span>
//           <button onClick={() => setOpen(false)}>
//             <X size={24} />
//           </button>
//         </div>
//         <div className="flex flex-col gap-6 px-6 py-10">
//           <NavItem href="#home" label="Home" />
//           <NavItem href="#produk" label="Produk" />
//           <NavItem href="#blog" label="Blog" />
//           <NavItem href="#kontak" label="Kontak" />
//           <Link
//             href="/login"
//             className="px-4 py-2 rounded-lg border border-sky-500 text-sky-600 hover:bg-sky-50 text-center"
//           >
//             Login
//           </Link>
//         </div>
//       </aside>
//     </>
//   );
// }
