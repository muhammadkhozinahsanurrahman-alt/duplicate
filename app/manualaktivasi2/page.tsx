import { ManualAktivasiForm2 } from "@/components/aktivasi/manual-form2";

export default function ManualAktivasiPage() {
  return (
    <div className="grid min-h-svh grid-cols-1 lg:grid-cols-4 gap-4 p-4 bg-[#F5F5F5]">
      
      {/* LEFT PANEL */}
      <div className="hidden lg:block rounded-[25px] bg-[#ECEFF1]"></div>
      
      {/* CENTER PANEL */}
      <div className="
        rounded-[25px] bg-[#ECEFF1]
        flex flex-col items-center p-6 md:p-10 shadow-sm
        lg:col-span-2
      ">
        {/* Logo */}
        <div className="flex justify-center gap-2 mb-4">
          <a href="#" className="flex items-center gap-2 font-medium">
            <img src="/logo.svg" alt="Logo" className="size-6" />
            Payroll Dashboard
          </a>
        </div>

        {/* FORM */}
        <div className="flex flex-1 w-full justify-center items-center">
          <div className="w-full max-w-xs">
            <ManualAktivasiForm2/>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-center mt-6">
          <p
            className="
              font-['Manrope'] font-normal text-[10px] leading-[14px]
              text-[#282C30] opacity-35 text-center
            "
          >
            © 2025 IRVN Labs. All rights reserved.
          </p>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="hidden lg:block rounded-[25px] bg-[#ECEFF1]"></div>

    </div>
  );
}
