import Image from "next/image";
import { User, IdCard } from "lucide-react";

export default function ProfileDetailCard() {
  return (
    <div className="w-full h-full relative">
      {/* Decorative image */}
      <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none">
        <Image
          src="/pattern.png" // ganti dengan pattern kamu
          alt="decoration"
          width={160}
          height={160}
        />
      </div>

      <div className="flex h-full gap-3">
        {/* ===== Personal Info ===== */}
        <div
          className="
            relative flex-1
            border border-orange-300
            rounded-2xl
            px-4 py-3
            bg-white
          "
        >
          {/* Badge */}
          <span
            className="
              absolute -top-2 left-4
              px-2 py-0.5
              text-[11px] font-medium
              text-white
              bg-orange-500
              rounded-full
            "
          >
            Personal Info
          </span>

          <ul className="mt-3 space-y-1.5 text-[13px] text-gray-800">
            <li>• NIK: <strong>348231293123</strong></li>
            <li>• Kelamin: <strong>Laki - Laki</strong></li>
            <li>• Telp: <strong>+62123124512</strong></li>
            <li>• DoB: <strong>18/02/1992</strong></li>
            <li>
              • Alamat:{" "}
              <strong>
                Meranggi Barat, Jakarta Selatan
              </strong>
            </li>
          </ul>

          {/* Icon */}
          <div className="absolute bottom-3 right-3 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
            <User size={12} />
          </div>
        </div>

        {/* ===== Employee Info ===== */}
        <div
          className="
            relative flex-1
            border border-orange-300
            rounded-2xl
            px-4 py-3
            bg-white
          "
        >
          {/* Badge */}
          <span
            className="
              absolute -top-2 left-4
              px-2 py-0.5
              text-[11px] font-medium
              text-white
              bg-orange-500
              rounded-full
            "
          >
            Employee Info
          </span>

          <ul className="mt-3 space-y-1.5 text-[13px] text-gray-800">
            <li>• Posisi: <strong>Project Manager</strong></li>
            <li>• Base salary: <strong>Rp 4.500.000</strong></li>
            <li>• Hire Date: <strong>18/02/2025</strong></li>
            <li>• Status Kerja: <strong>Aktif</strong></li>
            <li>• Tipe Kerja: <strong>Kontrak</strong></li>
            <li>
              • Periode Kontrak:{" "}
              <strong>
                02/02/2024 - 03/06/2025
              </strong>
            </li>
          </ul>

          {/* Icon */}
          <div className="absolute bottom-3 right-3 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
            <IdCard size={12} />
          </div>
        </div>
      </div>
    </div>
  );
}
