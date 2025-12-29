import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

type TambahPerusahaanFormProps = {
  onClose: () => void;
  className?: string;
};

export function TambahPerusahaanForm({
  onClose,
  className,
}: TambahPerusahaanFormProps) {
  return (
    /* ===== OVERLAY ===== */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose} // 👉 klik luar = tutup
    >
      {/* ===== FORM CARD ===== */}
      <div onClick={(e) => e.stopPropagation()}>
        <Card
          className={cn(
            `
            w-[351px]
            bg-[#FAFAFA]
            border border-[rgba(255,104,77,0.25)]
            shadow-[8px_8px_12px_rgba(0,0,0,0.15)]
            rounded-[10px]
            px-[36px] py-[34px]
            flex flex-col gap-5
          `,
            className
          )}
        >
          <CardHeader className="flex flex-col gap-[7px] p-0">
            <CardTitle
              className="
                font-['Montserrat_Alternates']
                font-bold
                text-[24px]
                text-[#282C30]
              "
            >
              Tambah Perusahaan
            </CardTitle>

            <CardDescription className="font-['Manrope'] text-[12px] text-[#737373]">
              Isi identitas dasar agar sistem bisa memproses data payroll dengan
              benar.
            </CardDescription>
          </CardHeader>

          {/* Nama Perusahaan */}
          <Field className="flex flex-col gap-2">
            <FieldLabel className="font-['Manrope'] font-bold text-[12px] text-[#52525B]">
              Nama Perusahaan
            </FieldLabel>
            <Input
              placeholder="Masukkan nama perusahaan"
              className="h-[31px] text-[10px]"
            />
          </Field>

          {/* Lokasi */}
          <Field className="flex flex-col gap-2">
            <FieldLabel className="font-['Manrope'] font-bold text-[12px] text-[#52525B]">
              Lokasi
            </FieldLabel>
            <Input
              placeholder="Masukkan lokasi perusahaan"
              className="h-[31px] text-[10px]"
            />
          </Field>

          {/* Kategori */}
          <Field className="flex flex-col gap-2">
            <FieldLabel className="font-['Manrope'] font-bold text-[12px] text-[#52525B]">
              Kategori
            </FieldLabel>
            <Input
              placeholder="Masukkan kategori perusahaan"
              className="h-[31px] text-[10px]"
            />
          </Field>

          {/* Budget */}
          <Field className="flex flex-col gap-2">
            <FieldLabel className="font-['Manrope'] font-bold text-[12px] text-[#52525B]">
              Budget Bulanan
            </FieldLabel>
            <Input
              placeholder="Rencana budget bulanan"
              className="h-[31px] text-[10px]"
            />
          </Field>

          <CardContent className="p-0">
            <Button
              onClick={onClose}
              className="
                w-full
                h-[31px]
                bg-[#FF684D]
                text-white
                font-['Montserrat_Alternates']
                font-bold
                text-[12px]
              "
            >
              Simpan & Lanjutkan
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
