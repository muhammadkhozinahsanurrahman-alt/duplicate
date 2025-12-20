import Link from "next/link"
import Image from "next/image"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      {/* Background circles */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="absolute rounded-full"
          style={{ width: "1788px", height: "1788px", background: "#E8EAEC" }}
        />
        <div
          className="absolute rounded-full"
          style={{ width: "1504px", height: "1504px", background: "#F4F4F4" }}
        />
        <div
          className="absolute rounded-full"
          style={{ width: "1186px", height: "1186px", background: "#FAFAFA" }}
        />
        <div
          className="absolute rounded-full"
          style={{ width: "906px", height: "906px", background: "#FFFFFF" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo & title */}
        <div className="flex items-center justify-center gap-3">
          <Image
            src="/logo.svg"
            alt="Payroll Dashboard Logo"
            width={30}
            height={30}
            priority
          />
          <h1 className="font-heading text-base font-bold text-foreground">
            Payroll Dashboard
          </h1>
        </div>

        {/* Subtitle */}
        <p
          className="font-body text-center text-2xl font-semibold opacity-75"
          style={{ color: "#282C30" }}
        >
          Layanan tidak ditemukan T.T
        </p>

        {/* 404 */}
        <div className="flex items-center gap-5">
          {["4", "0", "4"].map((item, index) => (
            <span
              key={index}
              className="font-heading font-bold leading-none"
              style={{
                fontSize: "197.44px",
                lineHeight: "241px",
                color: item === "0" ? "#E8EAEC" : "#FFFFFF",
                textShadow:
                  "-0.82px -0.82px 9.87px rgba(0,0,0,0.1), 9.87px 9.87px 9.87px rgba(0,0,0,0.25)",
              }}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Button */}
        <Link
          href="/"
          className="flex items-center gap-3 px-8 py-4 font-heading text-base font-bold"
          style={{
            background: "#FF684D",
            color: "#FAFAFA",
            borderRadius: "4px",
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.11)",
          }}
        >
          <Home className="h-6 w-6" />
          Kembali ke Dashboard
        </Link>
      </div>
    </div>
  )
}
