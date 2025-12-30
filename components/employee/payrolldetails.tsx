import { ScrollArea } from "@/components/ui/scroll-area";
import { HelpCircle, Download } from "lucide-react";

export default function PayrollTable() {
  return (
    <ScrollArea className="h-full w-full pr-2">
      <table className="w-full border-collapse text-sm">
        {/* Header */}
        <thead className="sticky top-0 bg-white z-10">
          <tr className="text-left text-gray-500 border-b">
            <th className="pb-2 font-medium">Gaji</th>
            <th className="pb-2 font-medium">Periode</th>
            <th className="pb-2 font-medium">Bonus</th>
            <th className="pb-2 font-medium">Pinalti</th>
            <th className="pb-2 font-medium text-center">Action</th>
          </tr>
        </thead>

        <tbody className="text-gray-800">
          {[...Array(10)].map((_, i) => (
            <tr key={i} className="border-b last:border-b-0">
              <td className="py-2">Rp 5.000.000</td>
              <td className="py-2">Januari - Februari</td>

              <td className="py-2">
                <div className="flex gap-1 flex-wrap">
                  <span className="px-2 py-1 text-[11px] rounded bg-lime-400 font-medium">
                    Nataru
                  </span>
                  <span className="px-2 py-1 text-[11px] rounded bg-lime-400 font-medium">
                    Akhir Tahun
                  </span>
                </div>
              </td>

              <td className="py-2">
                <span className="px-2 py-1 text-[11px] rounded bg-red-500 text-white font-medium">
                  Bolos
                </span>
              </td>

              <td className="py-2">
                <div className="flex justify-center gap-2">
                  <button className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center">
                    <HelpCircle size={12} />
                  </button>
                  <button className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center">
                    <Download size={12} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </ScrollArea>
  );
}
