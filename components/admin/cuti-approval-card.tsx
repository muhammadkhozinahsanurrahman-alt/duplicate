import { ScrollArea } from "@/components/ui/scroll-area";
import { BadgeCheck } from "lucide-react";

export default function CutiApprovalCard() {
  return (
    <div className="w-[445px] h-[315px] bg-white rounded-2xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-[18px] font-semibold text-[#282C30] font-manrope">
          Cuti Approval
        </h3>

        <button className="flex items-center gap-2 px-4 py-2 bg-[#282C30] rounded-full">
          <BadgeCheck size={16} color="#fff" />
          <span className="text-[12px] font-bold text-white">Approve All</span>
        </button>
      </div>

      {/* Table Header */}
      <div className="flex text-[14px] font-medium border-b border-[#E8EAEC] pb-2">
        <span className="flex-1">Employee</span>
        <span className="w-[80px] text-center">Action</span>
      </div>

      {/* Scroll Area */}
      <ScrollArea className="mt-2 h-[178px] simple-scroll">
        {[
          "Ilyas Irfan Syiraaj",
          "Irfan Bachdim",
          "Muhammad Ozin Ahsanurrahman",
          "Chairul Amirudin",
          "Nadya Laurentia",
          "Rizki Ramadhan Pratama",
        ].map((name, i) => (
          <div
            key={i}
            className="flex items-center h-[36px] border-b border-[#E8EAEC]"
          >
            <div className="flex-1 flex items-center gap-2 min-w-0">
              <div className="w-3 h-3 rounded-full bg-[#FF684D]/50 shrink-0" />
              <span className="truncate text-[14px] transition hover:text-[#FF684D] hover:underline">
                {name}
              </span>
            </div>

            <div className="w-[80px] flex justify-center">
              <span className="px-2 py-[2px] text-[8px] text-white bg-[#FF684D] rounded-full">
                <BadgeCheck size={12} className="inline-block mr-1" />
                Approve
              </span>
            </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}
