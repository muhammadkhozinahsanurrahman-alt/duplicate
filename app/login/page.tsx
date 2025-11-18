import { LoginForm } from "@/components/login/login-form"

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="relative hidden lg:block m-4 rounded-[25px] overflow-hidden">
        <div className="absolute inset-0 h-full w-full bg-[#FF684D]">
          {/* Konten panel kiri Anda bisa ditambahkan di sini */}
        </div>
      </div>

      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2">
          <a href="#" className="flex items-center gap-2 font-medium">
            <img
              src="/logo.svg"
              alt="Logo"
              className="size-6"
            />
            Payroll Dashboard
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
        <div className="flex justify-center">
          <a
            href="#"
            className="
      font-['Manrope']
      font-normal
      text-[10px]
      leading-[14px]
      text-center
      text-[#282C30]
      opacity-35
    "
          >
            © 2025 IRVN Labs. All rights reserved.
          </a>
        </div>
      </div>

    </div>
  )
}