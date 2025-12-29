import {
  Plus,
  Building2,
  Users,
  UserPlus,
  Wallet,
} from "lucide-react";

export default function DashboardWelcome() {
  return (
    <div className="mx-4 md:mx-8 mb-8">
      {/* ================= MOBILE LAYOUT ================= */}
      <div className="md:hidden flex flex-col gap-6">
        {/* Judul */}
        <h1
          className="text-[32px] font-medium leading-[100%] tracking-[0.2px]"
          style={{
            fontFamily: "Manrope, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        >
          <span className="text-[#282C30]">Selamat datang,</span>
          <br />
          <span className="text-[#FF684D] font-bold">Admin</span>
          <span className="text-[#282C30]">!</span>
        </h1>

        <div className="grid grid-cols-2 gap-4">
          {/* ===== KIRI : Ringkasan Cepat ===== */}
          <div className="flex flex-col gap-3">
            <span
              className="text-[#282C30]/75 text-sm"
              style={{
                fontFamily:
                  "Manrope, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              Ringkasan Cepat
            </span>

            {/* Total Perusahaan */}
            <div className="flex items-center justify-between px-3 py-2 bg-white rounded-lg">
              <div className="flex items-center gap-2">
                <Building2 size={14} className="text-[#282C30]" />
                <span
                  className="text-[12px] font-bold text-[#282C30]"
                  style={{
                    fontFamily:
                      "Manrope, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Total Perusahaan :
                </span>
              </div>
              <div className="px-1 bg-[#FF684D] rounded-[2px]">
                <span className="text-white text-[12px] font-bold">24</span>
              </div>
            </div>

            {/* Karyawan Aktif */}
            <div className="flex items-center justify-between px-3 py-2 bg-white rounded-lg">
              <div className="flex items-center gap-2">
                <Users size={14} className="text-[#282C30]" />
                <span
                  className="text-[12px] font-bold text-[#282C30]"
                  style={{
                    fontFamily:
                      "Manrope, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Karyawan Aktif
                </span>
              </div>
              <div className="px-1 bg-[#FF684D] rounded-[2px]">
                <span className="text-white text-[12px] font-bold">245</span>
              </div>
            </div>
          </div>

          {/* ===== KANAN : ACTION BUTTONS (MOBILE) ===== */}
          <div className="flex flex-col items-end gap-3">
            {/* Tambah Perusahaan */}
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#FF684D]">
              <Plus size={16} className="text-white" />
              <span
                className="text-white text-xs font-bold leading-[150%]"
                style={{
                  fontFamily:
                    "Manrope, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                Tambah Perusahaan
              </span>
            </button>

            {/* Tambah Karyawan */}
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#FF684D]">
              <UserPlus size={16} className="text-white" />
              <span
                className="text-white text-xs font-bold leading-[150%]"
                style={{
                  fontFamily:
                    "Manrope, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                Tambah Karyawan
              </span>
            </button>

            {/* Buat Payroll */}
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#FF684D]">
              <Wallet size={16} className="text-white" />
              <span
                className="text-white text-xs font-bold leading-[150%]"
                style={{
                  fontFamily:
                    "Manrope, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                Buat Payroll
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP LAYOUT (ASLI, TIDAK DIUBAH) ================= */}
      <div className="hidden md:block">
        <div className="mx-8 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-4">
              <h1
                className="text-[40px] font-medium leading-[100%] tracking-[0.2px]"
                style={{
                  fontFamily:
                    "Manrope, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                <span className="text-[#282C30]">Selamat datang, </span>
                <span className="text-[#FF684D] font-bold">Admin</span>
                <span className="text-[#282C30]">!</span>
              </h1>
              <div className="flex items-center gap-3.5">
                <span
                  className="text-[#282C30]/75 text-base font-normal leading-[100%] tracking-[0.08px]"
                  style={{
                    fontFamily:
                      "Manrope, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Ringkasan Cepat
                </span>
                <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white">
                  <Building2 size={12} className="text-[#282C30]" />

                  <span
                    className="text-[#282C30] text-[10px] font-bold leading-[150%] tracking-[0.05px]"
                    style={{
                      fontFamily:
                        "Manrope, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Total Perusahaan :
                  </span>
                  <div className="px-0.5 bg-[#FF684D] rounded-[2px]">
                    <span
                      className="text-white text-[10px] font-bold leading-[100%] tracking-[0.05px]"
                      style={{
                        fontFamily:
                          "Montserrat Alternates, -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      24
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white">
                  <Users size={12} className="text-[#282C30]" />

                  <span
                    className="text-[#282C30] text-[10px] font-bold leading-[150%] tracking-[0.05px]"
                    style={{
                      fontFamily:
                        "Manrope, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Karyawan Aktif
                  </span>
                  <div className="px-0.5 bg-[#FF684D] rounded-[2px]">
                    <span
                      className="text-white text-[10px] font-bold leading-[100%] tracking-[0.05px]"
                      style={{
                        fontFamily:
                          "Montserrat Alternates, -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      245
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="flex items-center gap-5">
              <button className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#FF684D]">
                <Plus size={20} strokeWidth={2.5} className="text-white" />

                <span
                  className="text-white text-sm font-bold leading-[150%] tracking-[0.07px]"
                  style={{
                    fontFamily:
                      "Manrope, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Tambah Perusahaan
                </span>
              </button>
              <button className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#FF684D]">
                <UserPlus size={16} className="text-white" />

                <span
                  className="text-white text-sm font-bold leading-[150%] tracking-[0.07px]"
                  style={{
                    fontFamily:
                      "Manrope, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Tambah Karyawan
                </span>
              </button>
              <button className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#FF684D]">
                <Wallet size={16} className="text-white" />

                <span
                  className="text-white text-sm font-bold leading-[150%] tracking-[0.07px]"
                  style={{
                    fontFamily:
                      "Manrope, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Buat Payroll
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
