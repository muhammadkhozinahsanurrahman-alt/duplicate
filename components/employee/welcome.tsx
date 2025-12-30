"use client";

import { useState } from "react";
import { HousePlus, Building2, Users, Banknote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TambahPerusahaanForm } from "@/components/admin/tambahperusahaan";

export default function DashboardWelcomeEmployee() {
  const [openTambahPerusahaan, setOpenTambahPerusahaan] = useState(false);

  return (
    <>
      {/* ================= MODAL ================= */}
      {openTambahPerusahaan && (
        <TambahPerusahaanForm
          onClose={() => setOpenTambahPerusahaan(false)}
        />
      )}

      <div className="mx-4 md:mx-8 mb-8">

        {/* ================= MOBILE LAYOUT ================= */}
        <div className="md:hidden flex flex-col gap-6">
          <h1
            className="text-[32px] font-medium leading-[100%] tracking-[0.2px]"
            style={{ fontFamily: "Manrope, -apple-system, Roboto, Helvetica, sans-serif" }}
          >
            <span className="text-[#282C30]">Selamat datang,</span> <br />
            <span className="text-[#FF684D] font-bold">Username</span>
            <span className="text-[#282C30]">!</span>
          </h1>

          <div className="grid grid-cols-2 gap-4">

            {/* ===== KIRI ===== */}
            <div className="flex flex-col gap-3">
              <span className="text-[#282C30]/75 text-sm">Ringkasan Cepat</span>

              <div className="flex items-center justify-between px-3 py-2 bg-white rounded-lg">
                <div className="flex items-center gap-2">
                  <Building2 size={14} />
                  <span className="text-[12px] font-bold">Tanggal Terima Gaji</span>
                </div>
                <div className="px-1 bg-[#FF684D] rounded-[2px]">
                  <span className="text-white text-[12px] font-bold">24</span>
                </div>
              </div>

              <div className="flex items-center justify-between px-3 py-2 bg-white rounded-lg">
                <div className="flex items-center gap-2">
                  <Users size={14} />
                  <span className="text-[12px] font-bold">Ada Tanggungan?</span>
                </div>
                <div className="px-1 bg-[#FF684D] rounded-[2px]">
                  <span className="text-white text-[12px] font-bold">ya</span>
                </div>
              </div>
            </div>

            {/* ===== KANAN ===== */}
            <div className="flex flex-col items-end gap-3">
              <Button
                onClick={() => setOpenTambahPerusahaan(true)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#FF684D]"
              >
                <HousePlus size={16} className="text-white" />
                <span className="text-white text-xs font-bold">
                  Ajukan Cuti
                </span>
              </Button>

              <Button className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#FF684D]">
                <Banknote size={16} className="text-white" />
                <span className="text-white text-xs font-bold">
                  Ajukan Pinjaman
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* ================= DESKTOP LAYOUT (UTUH, TIDAK DIUBAH) ================= */}
        <div className="hidden md:block">
          <div className="mx-8 mb-8">
            <div className="flex items-center justify-between">

              {/* ===== KIRI ===== */}
              <div className="flex flex-col gap-4">
                <h1
                  className="text-[40px] font-medium leading-[100%] tracking-[0.2px]"
                  style={{ fontFamily: "Manrope, -apple-system, Roboto, Helvetica, sans-serif" }}
                >
                  <span className="text-[#282C30]">Selamat datang, </span>
                  <span className="text-[#FF684D] font-bold">Username</span>
                  <span className="text-[#282C30]">!</span>
                </h1>

                {/* 🔥 RINGKASAN CEPAT DESKTOP (ASLI, UTUH) */}
                <div className="flex items-center gap-3.5">
                  <span className="text-[#282C30]/75 text-base">
                    Ringkasan Cepat
                  </span>

                  <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white">
                    <Building2 size={12} />
                    <span className="text-[10px] font-bold">
                      Tanggal Terima Gaji
                    </span>
                    <div className="px-0.5 bg-[#FF684D] rounded-[2px]">
                      <span className="text-white text-[10px] font-bold">24</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white">
                    <Users size={12} />
                    <span className="text-[10px] font-bold">
                      Ada Tanggungan?
                    </span>
                    <div className="px-0.5 bg-[#FF684D] rounded-[2px]">
                      <span className="text-white text-[10px] font-bold">ya</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ===== ACTION BUTTONS ===== */}
              <div className="flex items-center gap-5">
                <Button
                  onClick={() => setOpenTambahPerusahaan(true)}
                  className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#FF684D]"
                >
                  <HousePlus size={20} className="text-white" />
                  <span className="text-white text-sm font-bold">
                    Ajukan Cuti
                  </span>
                </Button>

                <Button className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#FF684D]">
                  <Banknote size={16} className="text-white" />
                  <span className="text-white text-sm font-bold">
                    Ajukan Pinjaman
                  </span>
                </Button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
