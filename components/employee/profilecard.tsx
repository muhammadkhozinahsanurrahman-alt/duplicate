import Image from "next/image";
import { Building2, Clock } from "lucide-react";

export default function ProfileCard() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center">
      {/* Avatar */}
      <div className="relative mb-4">
        <div className="w-35 h-35 rounded-full border-4 border-orange-400 overflow-hidden">
          <Image
            src="/avatar.png" // ganti dengan image kamu
            alt="Profile"
            width={135}
            height={135}
            className="object-cover"
          />
        </div>
      </div>

      {/* Name */}
      <h2 className="text-base font-semibold text-gray-900">
        Muhammad Ilyas Irfan
      </h2>

      {/* Role */}
      <p className="text-sm text-gray-500 mb-4">Project Manager</p>

      <div className="flex gap-2 flex-wrap justify-center">
        <div
          className="
    flex items-center gap-1.5
    px-3 py-1.5
    rounded-full
    bg-white shadow
    text-xs text-gray-700
    whitespace-nowrap
    max-w-full
  "
        >
          <Building2 size={12} className="text-orange-500 shrink-0" />
          <span className="truncate">PT Anugrah Berkah Bersama</span>
        </div>

        <div
          className="
    flex items-center gap-1.5
    px-3 py-1.5
    rounded-full
    bg-white shadow
    text-xs text-gray-700
    whitespace-nowrap
  "
        >
          <Clock size={12} className="text-orange-500 shrink-0" />
          152 Hari
        </div>
      </div>
    </div>
  );
}
