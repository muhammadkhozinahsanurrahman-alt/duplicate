import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from 'next/link';

export function AktivasiForm({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            className={cn("flex flex-col items-center", className)}
            {...props}
        >
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

                        <Button variant="outline" size="icon">
                            1
                        </Button>
                        <Button variant="outline" size="icon">
                            2
                        </Button>
                        <Button variant="outline" size="icon">
                            3
                        </Button>
                    </FieldGroup>
                    <CardTitle
                        className="
                            font-['Montserrat_Alternates']
                            font-bold
                            text-[24px]
                            text-[#282C30]
                        "
                    >
                        Aktivasi Akun
                    </CardTitle>

                    <CardDescription
                        className="
                            font-['Manrope']
                            text-[12px]
                            text-[#737373]
                        "
                    >
                        Pilih cara aktivasi akun: lewat kode aktivasi dari admin atau aktivasi manual dengan mengisi data.
                    </CardDescription>
                </CardHeader>

                <CardContent className="w-full p-0">
                    <form className="flex flex-col gap-[12px]">
                        <FieldGroup className="flex flex-col gap-[12px] w-full">

                            {/* USERNAME */}
                            <Field className="flex flex-col gap-2">
                                <FieldLabel
                                    className="
                                        font-['Manrope']
                                        font-bold
                                        text-[12px] text-[#52525B]
                                    "
                                >
                                    Pilih Metode Aktivasi Akun
                                </FieldLabel>
                            </Field>

                            <div className="flex flex-row gap-2 w-full justify-center">

                                {/* BUTTON: Kode Aktivasi */}
                                <Button
                                    className="
      w-[135.5px] h-[31px]
      flex items-center justify-center
      bg-[#FAFAFA]
      border border-[#FF684D]
      rounded-[4px]
      shadow-[0_1px_2px_rgba(0,0,0,0.11)]
      font-['Manrope'] font-bold
      text-[10px] leading-[14px]
      text-[#FF684D]
    "
                                >
                                    Kode Aktivasi
                                </Button>

                                {/* BUTTON: Manual */}
                                <Button
                                    className="
      w-[135.5px] h-[31px]
      flex items-center justify-center
      bg-[#FAFAFA]
      border border-[#FF684D]
      rounded-[4px]
      shadow-[0_1px_2px_rgba(0,0,0,0.11)]
      font-['Manrope'] font-bold
      text-[10px] leading-[14px]
      text-[#FF684D]
    "
                                >
                                    Manual
                                </Button>

                            </div>


                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
