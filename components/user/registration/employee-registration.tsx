import React from "react";
import { FormRegistration } from "./form-registration";
import prisma from "@/src/lib/prisma";

export const EmployeeRegistration = async () => {
  const companies = await prisma.company
    .findMany()
    .then((res) =>
      res.map((company) => ({ id: company.id, name: company.name }))
    )
    .catch(() => null);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl font-bold">Employee Registration</h1>

      <FormRegistration companies={companies ? companies : []} />
    </div>
  );
};
