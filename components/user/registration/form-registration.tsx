"use client";

import React from "react";
import { useActionState } from "react";
import { registerEmployee } from "./actions";
import { redirect } from "next/navigation";

interface FormEmployeeProps {
  companies: { id: string; name: string }[];
}

export const FormRegistration = ({ companies = [] }: FormEmployeeProps) => {
  const [state, formState, isPending] = useActionState(registerEmployee, {
    error: undefined,
    success: false,
  });

  if (state?.success) {
    redirect("/companies");
  }

  return (
    <>
      <form className="flex flex-col gap-2.5" action={formState}>
        <input type="text" name="name" placeholder="Nama anda" />
        <input type="email" name="email" placeholder="Email anda" />

        <select name="companyId" defaultValue={"0"}>
          <option value="0" disabled>
            Pilih Company
          </option>
          {companies.map((company) => (
            <option key={company.id} value={company.id}>
              {company.name}
            </option>
          ))}
        </select>

        <input type="tel" name="phoneNumber" placeholder="Nomor Telepon" />

        <select name="gender" defaultValue={"0"}>
          <option value="0" disabled>
            Jenis Kelamin
          </option>
          <option value="male">Laki-Laki</option>
          <option value="female">Perempuan</option>
        </select>

        <input type="date" name="dob" placeholder="Tanggal Lahir" />
        <input type="text" name="nationalId" placeholder="NIK" />
        <input type="text" name="address" placeholder="Alamat Rumah" />

        {state?.error && <p className="text-red-500 text-sm">{state.error}</p>}

        <button type="submit" className="submit">
          {isPending ? "Mendaftarkan..." : "Daftar"}
        </button>
      </form>
    </>
  );
};
