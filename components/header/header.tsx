"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const menu = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Perusahaan", path: "/perusahaan" },
    { label: "Karyawan", path: "/karyawan" },
  ];

  const isActive = (path: string) => pathname === path;

  const buttonClass = (path: string) =>
    clsx(
      "px-6 py-2 h-[41px] rounded-[50px] font-['Montserrat Alternates'] font-semibold text-[14px]",
      isActive(path)
        ? "bg-[#FF684D] text-white"
        : "bg-[#E8EAEC] text-black"
    );

  return (
    <>
      {/* ================= MOBILE HEADER ================= */}
      <div className="md:hidden px-4 pt-4">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 bg-white rounded-xl shadow flex items-center justify-center">
            <img src="/logo.svg" alt="Logo" className="w-7 h-7" />
          </div>

          <button
            onClick={() => setOpen(true)}
            className="w-12 h-12 bg-white rounded-xl shadow flex items-center justify-center"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* ================= DESKTOP HEADER (ASLI) ================= */}
      <div className="hidden md:block p-8">
        <header className="w-full h-[72px] bg-white rounded-[16px] shadow-[2px_2px_8px_rgba(0,0,0,0.15)] flex items-center justify-between px-4">
          {/* LOGO */}
          <div className="relative w-12 h-12">
            <div className="w-12 h-12 bg-[#E8EAEC] rounded-[12px]" />
            <img
              src="/logo.svg"
              alt="Icon"
              className="absolute inset-0 m-auto w-[28px] h-[30px]"
            />
          </div>

          {/* MENU */}
          <nav className="flex gap-4 w-[427px] h-[41px] justify-center">
            {menu.map((item) => (
              <Button
                key={item.path}
                onClick={() => router.push(item.path)}
                className={buttonClass(item.path)}
              >
                {item.label}
              </Button>
            ))}
          </nav>

          {/* AVATAR */}
          <div className="relative w-12 h-12">
            <div className="w-12 h-12 bg-[#E8EAEC] rounded-full overflow-hidden" />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/d23ae1f8399ee9e8ea71d316e4fb4a6af1a5732b?width=136"
              alt="User"
              className="absolute inset-0 w-12 h-12 rounded-full object-cover"
            />
          </div>
        </header>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/30">
          <div className="bg-white h-full p-6 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6"
            >
              <X size={28} color="#FF684D" />
            </button>

            <div className="flex justify-center mt-10">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-[#E8EAEC]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d23ae1f8399ee9e8ea71d316e4fb4a6af1a5732b?width=136"
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-6 text-center">
              {menu.map((item) => (
                <Button
                  key={item.path}
                  onClick={() => {
                    router.push(item.path);
                    setOpen(false);
                  }}
                  className={buttonClass(item.path)}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
