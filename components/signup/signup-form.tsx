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

export function SignupForm({ className, ...props }: React.ComponentProps<"div">) {
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
                <CardHeader className="flex flex-col items-center gap-[7px] p-0">
                    <CardTitle
                        className="
                            font-['Montserrat_Alternates']
                            font-bold
                            text-[24px]
                            text-[#282C30]
                        "
                    >
                        SELAMAT DATANG
                    </CardTitle>

                    <CardDescription
                        className="
                            font-['Manrope']
                            text-[12px]
                            text-[#737373]
                            text-center
                        "
                    >
                        Registrasi akunmu untuk masuk
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
                                    Username
                                </FieldLabel>

                                <Input
                                    type="text"
                                    placeholder="Masukkan username atau email"
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

                            {/* EMAIL — FIXED VERSION */}
                            <Field className="flex flex-col gap-2">
                                <FieldLabel
                                    className="
                                        font-['Manrope']
                                        font-bold
                                        text-[12px]
                                        text-[#52525B]
                                    "
                                >
                                    Email
                                </FieldLabel>

                                <Input
                                    type="email"
                                    placeholder="Masukkan email"
                                    className="
                                        bg-[#FAFAFA]
                                        border border-[#E5E5E5]
                                        shadow-[0_1px_2px_rgba(0,0,0,0.11)]
                                        rounded-[4px]
                                        h-[31px]
                                        text-[10px]
                                        text-[#52525B]
                                        placeholder:opacity-50
                                    "
                                />
                            </Field>

                            {/* PASSWORD */}
                            <Field className="flex flex-col gap-2">
                                <div className="flex items-center w-full">
                                    <FieldLabel
                                        className="
                                            font-['Manrope']
                                            font-bold text-[12px] text-[#52525B]
                                        "
                                    >
                                        Password
                                    </FieldLabel>

                                    <a
                                        href="#"
                                        className="
                                            ml-auto
                                            font-['Manrope']
                                            font-bold
                                            text-[10px]
                                            text-[#52525B]/75
                                        "
                                    >
                                        Lupa Password
                                    </a>
                                </div>

                                <Input
                                    type="password"
                                    placeholder="Masukkan password"
                                    className="
                                        bg-[#FAFAFA]
                                        border border-[#E5E5E5]
                                        shadow-[0_1px_2px_rgba(0,0,0,0.11)]
                                        rounded-[4px]
                                        h-[31px]
                                        text-[10px]
                                        text-[#52525B]
                                        placeholder:opacity-50
                                    "
                                />
                            </Field>

                            {/* BUTTON */}
                            <Link href="/aktivasi" className="w-full">
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
                                    Lanjutkan
                                </Button>
                            </Link>

                            {/* SIGN IN */}
                            <FieldDescription
                                className="
                                    font-['Manrope']
                                    text-[12px]
                                    text-[#737373]
                                    text-center
                                "
                            >
                                Sudah punya akun?{" "}
                                <Link
                                    href="/login"
                                    className="hover:underline font-bold"
                                    style={{ color: '#FF684D' }}
                                >
                                    Signin
                                </Link>
                            </FieldDescription>

                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
