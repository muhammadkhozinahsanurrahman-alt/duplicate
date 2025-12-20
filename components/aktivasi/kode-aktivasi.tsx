import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export function KodeAktivasiForm({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col items-center", className)} {...props}>

      {/* RELATIVE WRAPPER AGAR BUTTON BACK PRESISI */}
      <div className="relative">

        {/* 🔙 BUTTON BACK — Nempel di pojok kiri atas Card */}
        <Link href="/aktivasi" className="absolute -top-4 -left-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-[#FF684D] text-[#FF684D] bg-white"
          >
            <ArrowLeft size={18} />
          </Button>
        </Link>

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

            </FieldGroup>


            <CardDescription className="font-['Manrope'] text-[12px] text-[#737373]">
              Masuk menggunakan kode aktivasi dari admin
            </CardDescription>
          </CardHeader>

          {/* INPUT KODE */}
          <Field className="flex flex-col gap-2">
            <FieldLabel className="font-['Manrope'] font-bold text-[12px] text-[#52525B]">
              Kode Aktivasi
            </FieldLabel>

            <Input
              type="text"
              placeholder="Masukkan kode aktivasi"
              className="
                bg-[#FAFAFA]
                border border-[#E5E5E5]
                shadow-[0_1px_2px_rgba(0,0,0,0.11)]
                rounded-[4px]
                text-[10px]
                text-[#52525B]
                placeholder:opacity-50
                h-[31px]
              "
            />
          </Field>

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
                      Verifikasi Kode
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
