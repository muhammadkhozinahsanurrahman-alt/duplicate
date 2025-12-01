"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronDown } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useState } from "react";

export function ManualAktivasiForm2({ className, ...props }: React.ComponentProps<"div">) {
  // STATE UNTUK MENYIMPAN PERUSAHAAN YANG DIPILIH
  const [selectedCompany, setSelectedCompany] = useState("");

  // LIST PERUSAHAAN (nanti bisa kamu ganti dengan fetch dari API)
  const companies = [
    "PT. Sumber Makmur",
    "CV. Teknologi Jaya",
    "PT. Cahaya Mandiri",
    "PT. Nusantara Abadi"
  ];

  return (
    <div className={cn("flex flex-col items-center", className)} {...props}>
      <div className="relative">

        {/* 🔙 BUTTON BACK */}
        <Link href="/aktivasi" className="absolute -top-4 -left-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-[#FF684D] text-[#FF684D] bg-white"
          >
            <ArrowLeft size={18} />
          </Button>
        </Link>

        {/* CARD */}
        <Card
          className="
            w-[351px]
            bg-[#FAFAFA]
            border border-[rgba(255,104,77,0.25)]
            shadow-[8px_8px_12px_rgba(0,0,0,0.15)]
            rounded-[10px]
            px-[36px] py-[34px]
            flex flex-col gap-5
          "
        >
          <CardHeader className="flex flex-col gap-[7px] p-0">
            <FieldGroup className="flex flex-row gap-2">

              {/* ACTIVE BUTTON */}
              <Button
                size="icon"
                className="
      bg-[#FF684D] 
      opacity-100
      text-white
      font-['Montserrat_Alternates']
      italic
      font-bold
      text-[10px]
      leading-[12px]
      rounded-[5px]
      shadow-none
      border-none
      w-[20px] h-[20px] 
      p-0
    "
              >
                1
              </Button>

              <Button
                size="icon"
                className="
      bg-[#FF684D] 
      opacity-100
      text-white
      font-['Montserrat_Alternates']
      italic
      font-bold
      text-[10px]
      leading-[12px]
      rounded-[5px]
      shadow-none
      border-none
      w-[20px] h-[20px] 
      p-0
    "
              >
                2
              </Button>

              <Button
                size="icon"
                className="
      bg-[#FF684D] 
      opacity-100
      text-white
      font-['Montserrat_Alternates']
      italic
      font-bold
      text-[10px]
      leading-[12px]
      rounded-[5px]
      shadow-none
      border-none
      w-[20px] h-[20px] 
      p-0
    "
              >
                3
              </Button>

            </FieldGroup>

            <CardTitle className="font-['Montserrat_Alternates'] font-bold text-[24px] text-[#282C30]">
              Pilih Perusahaan
            </CardTitle>

            <CardDescription className="font-['Manrope'] text-[12px] text-[#737373]">
              Pilih perusahaan yang akan mengelola penggajianmu. Jika tidak menemukan perusahaan, minta admin menambahkanmu.
            </CardDescription>
          </CardHeader>

          {/* INPUT SELECT PERUSAHAAN */}
          <Field className="flex flex-col gap-2">
            <FieldLabel className="font-['Manrope'] font-bold text-[12px] text-[#52525B]">
              Perusahaan
            </FieldLabel>

            <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button
      variant="outline"
      className="
        w-full
        justify-between
        bg-[#FAFAFA]
        border border-[#E5E5E5]
        shadow-[0_1px_2px_rgba(0,0,0,0.11)]
        rounded-[4px]
        text-[10px]
        text-[#52525B]
        h-[31px]
      "
    >
      {selectedCompany || "Pilih perusahaan sesuai pekerjaanmu"}
      <ChevronDown size={14} />
    </Button>
  </DropdownMenuTrigger>

  <DropdownMenuContent
    className="
      w-[var(--radix-popper-anchor-width)]
      bg-white
      border border-[#E5E5E5]
      rounded-[4px]
      shadow-[0_1px_2px_rgba(0,0,0,0.11)]
    "
  >
    {companies.map((company) => (
      <DropdownMenuItem
        key={company}
        onClick={() => setSelectedCompany(company)}
        className="text-[10px] text-[#52525B]"
      >
        {company}
      </DropdownMenuItem>
    ))}
  </DropdownMenuContent>
</DropdownMenu>

          </Field>

          {/* BUTTON SUBMIT */}
          <CardContent className="w-full p-0">
            <form className="flex flex-col gap-[12px]">
              <FieldGroup className="flex flex-col gap-[12px] w-full">

                <div className="flex flex-row gap-2 w-full justify-center">
                  <Link href="/dashboard" className="w-full">
                    <Button
                      type="button"
                      className="
                        bg-[#FF684D]
                        text-[#FAFAFA]
                        font-['Montserrat_Alternates']
                        font-bold
                        text-[12px]
                        shadow-[0_1px_2px_rgba(0,0,0,0.11)]
                        rounded-[4px]
                        h-[31px]
                        w-full
                      "
                    >
                      Simpan & Lanjutkan
                    </Button>
                  </Link>
                </div>

              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
