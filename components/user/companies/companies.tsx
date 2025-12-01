import { getCurrentEmployee } from "@/src/lib/employee";
import { redirect } from "next/navigation";
import React from "react";

export const Companies = async () => {
  const employee = await getCurrentEmployee();

  if (!employee) {
    redirect("/employee-registration");
  }

  if (!employee.personalInfo) {
    redirect("/employee-registration");
  }

  return <div>Companies</div>;
};
