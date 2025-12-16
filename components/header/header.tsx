"use client";

import { Menu } from "lucide-react";

export default function Header() {
  return (
    <div className="p-8"> {/* JARAK ATAS-KANAN-KIRI-BAWAH 32px */}
      <header
        className="
          w-full h-[72px]
          bg-white rounded-[16px]
          shadow-[2px_2px_8px_rgba(0,0,0,0.15)]
          flex items-center justify-between
          px-4 
        "
      >
        {/* LEFT ICON */}
        <div className="relative w-12 h-12">
          <div className="w-12 h-12 bg-[#E8EAEC] rounded-[12px]" />
          <img
            src="/logo.svg"
            alt="Icon"
            className="absolute inset-0 m-auto w-[28px] h-[30px]"
          />
        </div>

        {/* CENTER MENU (hidden on mobile) */}
        <nav
          className="
            hidden md:flex
            flex-row items-center justify-center
            gap-4
            w-[427px] h-[41px]
          "
        >
          {/* Dashboard Active */}
          <div
            className="
              px-6 py-2 h-[41px]
              bg-[#FF684D]
              rounded-[50px]
              flex items-center justify-center
            "
          >
            <span className="font-['Montserrat Alternates'] font-semibold text-[14px] text-white">
              Dashboard
            </span>
          </div>

          {/* Perusahaan */}
          <div
            className="
              px-6 py-2 h-[41px]
              bg-[#E8EAEC]
              rounded-[50px]
              flex items-center justify-center
            "
          >
            <span className="font-['Montserrat Alternates'] font-semibold text-[14px] text-black">
              Perusahaan
            </span>
          </div>

          {/* Karyawan */}
          <div
            className="
              px-6 py-2 h-[41px]
              bg-[#E8EAEC]
              rounded-[50px]
              flex items-center justify-center
            "
          >
            <span className="font-['Montserrat Alternates'] font-semibold text-[14px] text-black">
              Karyawan
            </span>
          </div>
        </nav>

        {/* AVATAR (hidden on mobile) */}
        <div className="relative w-12 h-12 hidden md:block">
          <div className="w-12 h-12 bg-[#E8EAEC] rounded-full overflow-hidden" />
          <img
            src="/next.svg"
            alt="User"
            className="absolute inset-0 w-12 h-12 rounded-full object-center"
          />
        </div>

        {/* BURGER (mobile only) */}
        <button
          className="
            md:hidden
            w-12 h-12 bg-[#E8EAEC] rounded-full
            flex items-center justify-center
          "
        >
          <Menu size={24} />
        </button>
      </header>
    </div>
  );
}
