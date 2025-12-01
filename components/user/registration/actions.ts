"use server";

import getCurrentUser from "@/src/lib/auth";
import prisma from "@/src/lib/prisma";

export async function registerEmployee(
  prevData: { error?: string; success?: boolean },
  data: FormData
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return { error: "User not authenticated" };
  }

  try {
    const name = data.get("name")?.toString();
    const email = data.get("email")?.toString();
    const companyId = data.get("companyId")?.toString();
    const phoneNumber = data.get("phoneNumber")?.toString();
    const gender = data.get("gender")?.toString();
    const dob = new Date(data.get("dob")?.toString() || "");
    const nationalId = data.get("nationalId")?.toString();
    const address = data.get("address")?.toString();

    if (
      !name ||
      !email ||
      !companyId ||
      !phoneNumber ||
      !gender ||
      !dob ||
      !nationalId ||
      !address
    ) {
      return { error: "All fields are required." };
    }

    // console.log({
    //   name,
    //   email,
    //   companyId,
    //   phoneNumber,
    //   gender,
    //   dob,
    //   nationalId,
    //   address,
    // });

    const registerEmployee = await prisma.employee.create({
      data: {
        fullName: name,
        email,
        companyId,
        accountId: currentUser.id,
        personalInfo: {
          create: {
            phoneNumber,
            gender,
            dateOfBirth: dob,
            nationalId,
            address,
          },
        },
      },
    });

    if (!registerEmployee) {
      return { error: "Failed to register employee." };
    }

    return { success: true };
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
}
