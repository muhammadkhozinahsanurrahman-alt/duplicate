"use client";

import { useState } from "react";
import {
  Plus,
  Building2,
  Users,
  UserPlus,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button"
import {TambahPerusahaanForm} from "@/components/admin/tambahperusahaan";

export default function DashboardWelcome() {
  const [openTambahPerusahaan, setOpenTambahPerusahaan] = useState(false);

  return (
    <>
      <div className="mx-4 md:mx-8 mb-8">
        {/* ================= MOBILE LAYOUT ================= */}
        <div className="md:hidden flex flex-col gap-6">
          <h1 className="text-[32px] font-medium leading-[100%]">
            <span className="text-[#282C30]">Selamat datang,</span>
            <br />
            <span className="text-[#FF684D] font-bold">Admin</span>
            <span className="text-[#282C30]">!</span>
          </h1>

          <div className="grid grid-cols-2 gap-4">
            {/* ===== Ringkasan ===== */}
            <div className="flex flex-col gap-3">
              <span className="text-[#282C30]/75 text-sm">Ringkasan Cepat</span>

              <div className="flex items-center justify-between px-3 py-2 bg-white rounded-lg">
                <div className="flex items-center gap-2">
                  <Building2 size={14} />
                  <span className="text-xs font-bold">Total Perusahaan :</span>
                </div>
                <div className="px-1 bg-[#FF684D] rounded">
                  <span className="text-white text-xs font-bold">24</span>
                </div>
              </div>

              <div className="flex items-center justify-between px-3 py-2 bg-white rounded-lg">
                <div className="flex items-center gap-2">
                  <Users size={14} />
                  <span className="text-xs font-bold">Karyawan Aktif</span>
                </div>
                <div className="px-1 bg-[#FF684D] rounded">
                  <span className="text-white text-xs font-bold">245</span>
                </div>
              </div>
            </div>

            {/* ===== ACTION ButtonS ===== */}
            <div className="flex flex-col items-end gap-3">
              <Button
                onClick={() => setOpenTambahPerusahaan(true)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#FF684D]"
              >
                <Plus size={16} className="text-white" />
                <span className="text-white text-xs font-bold">
                  Tambah Perusahaan
                </span>
              </Button>

              <Button className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#FF684D]">
                <UserPlus size={16} className="text-white" />
                <span className="text-white text-xs font-bold">
                  Tambah Karyawan
                </span>
              </Button>

              <Button className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#FF684D]">
                <Wallet size={16} className="text-white" />
                <span className="text-white text-xs font-bold">
                  Buat Payroll
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* ================= DESKTOP LAYOUT ================= */}
        <div className="hidden md:block">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-4">
              <h1 className="text-[40px] font-medium">
                <span className="text-[#282C30]">Selamat datang, </span>
                <span className="text-[#FF684D] font-bold">Admin</span>!
              </h1>
            </div>

            <div className="flex items-center gap-5">
              <Button
                onClick={() => setOpenTambahPerusahaan(true)}
                className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#FF684D]"
              >
                <Plus size={20} className="text-white" />
                <span className="text-white text-sm font-bold">
                  Tambah Perusahaan
                </span>
              </Button>

              <Button className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#FF684D]">
                <UserPlus size={16} className="text-white" />
                <span className="text-white text-sm font-bold">
                  Tambah Karyawan
                </span>
              </Button>

              <Button className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#FF684D]">
                <Wallet size={16} className="text-white" />
                <span className="text-white text-sm font-bold">
                  Buat Payroll
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MODAL TAMBAH PERUSAHAAN ================= */}
      {openTambahPerusahaan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <TambahPerusahaanForm
            onClose={() => setOpenTambahPerusahaan(false)}
          />
        </div>
      )}
    </>
  );
}
