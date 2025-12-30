import { Info } from "lucide-react";

type CircleCardProps = {
  title: string;
  value: string;
  subtitle?: string;
  footer: string;
  progress?: number; // 0 - 100
  color?: "orange" | "dark";
};

function CircleCard({
  title,
  value,
  subtitle,
  footer,
  progress = 100,
  color = "orange",
}: CircleCardProps) {
  const strokeColor =
    color === "orange" ? "#FF6A4D" : "#4B5563";

  return (
    <div className="relative flex-1 border border-orange-300 rounded-2xl p-4 bg-white flex flex-col items-center">
      {/* Title badge */}
      <span className="px-3 py-1 text-xs font-medium text-white bg-orange-500 rounded-full mb-3">
        {title}
      </span>

      {/* Info icon */}
      <div className="absolute top-[72px] z-10 bg-black text-white w-6 h-6 rounded-full flex items-center justify-center">
        <Info size={12} />
      </div>

      {/* Circle */}
      <div className="relative w-32 h-32 mb-3">
        <svg
          className="w-full h-full rotate-[-90deg]"
          viewBox="0 0 120 120"
        >
          {/* Background */}
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="6"
          />
          {/* Progress */}
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke={strokeColor}
            strokeWidth="6"
            strokeDasharray={339.292}
            strokeDashoffset={
              339.292 - (339.292 * progress) / 100
            }
            strokeLinecap="round"
          />
        </svg>

        {/* Value */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span
            className={`text-2xl font-semibold ${
              color === "orange"
                ? "text-orange-500"
                : "text-gray-700"
            }`}
          >
            {value}
          </span>
          {subtitle && (
            <span className="text-xs text-gray-500">
              {subtitle}
            </span>
          )}
        </div>
      </div>

      {/* Footer */}
      <p className="text-xs text-gray-600 text-center">
        {footer}
      </p>
    </div>
  );
}

export default function EmployeeInformationCard() {
  return (
    <div className="w-full h-full flex gap-3">
      <CircleCard
        title="Jatah Cuti"
        value="9"
        subtitle="dari 12"
        footer="Akan cuti pada : 18/6/2025"
        progress={75}
      />

      <CircleCard
        title="Pengembalian Pinjaman"
        value="75%"
        footer="Jatuh tempo pada : 18/6/2025"
        progress={75}
      />

      <CircleCard
        title="Gaji Bersih"
        value="4.521.231"
        footer="Bulan : Juni"
        progress={100}
        color="dark"
      />
    </div>
  );
}
