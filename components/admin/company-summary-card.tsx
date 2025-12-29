import { ScrollArea } from "@/components/ui/scroll-area";

export function CompanySummaryCard() {
  const companies = [
    {
      name: "PT Maju Bersama",
      location: "Jakarta",
      employees: 45,
      salary: "Rp 675.000.000",
      highlighted: false,
    },
    {
      name: "PT Maju Bersama",
      location: "Jakarta",
      employees: 45,
      salary: "Rp 675.000.000",
      highlighted: false,
    },
    {
      name: "PT Maju Bersama",
      location: "Jakarta",
      employees: 45,
      salary: "Rp 675.000.000",
      highlighted: true,
    },
    {
      name: "PT Maju Bersama",
      location: "Jakarta",
      employees: 45,
      salary: "Rp 675.000.000",
      highlighted: false,
    },
    {
      name: "PT Maju Bersama",
      location: "Jakarta",
      employees: 45,
      salary: "Rp 675.000.000",
      highlighted: false,
    },
  ];

  return (
    <div className="relative w-[445px] h-[315px] bg-white rounded-2xl p-6 overflow-hidden">
      {/* Header */}
      <h3 className="text-[18px] font-semibold text-[#282C30] mb-4 font-manrope">
        Ringkasan Daftar Perusahaan
      </h3>

      {/* Scroll Area */}
      <ScrollArea className="h-[196px] pr-3 simple-scroll">
        <div className="flex flex-col gap-2">
          {companies.map((company, index) => (
            <div
              key={index}
              className={`flex items-center justify-between px-3 py-3 rounded-lg border ${
                company.highlighted
                  ? "border-[#FF684D]"
                  : "border-[rgba(40,44,48,0.25)]"
              }`}
            >
              {/* Left Section */}
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-6 h-6 rounded bg-[#FF684D] flex items-center justify-center shrink-0">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.72 12.1H13.68"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                <div className="flex flex-col gap-1 min-w-0">
                  <span className="text-xs font-semibold text-[#282C30] truncate">
                    {company.name}
                  </span>
                  <span className="text-xs text-[#6B7280] truncate">
                    {company.location}
                  </span>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex flex-col gap-1 text-right shrink-0">
                <span className="text-xs font-semibold text-[#282C30]">
                  {company.employees} Karyawan
                </span>
                <span className="text-[10px] text-[#6B7280]">
                  {company.salary}
                </span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Fade Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[32px] bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </div>
  );
}
