"use server";

import prisma from "../../../prisma/seed";

export default async function createUser(currState: string, fd: FormData) {
  const formData = {
    name: fd.get("name") as string,
    email: fd.get("email") as string,
    password: fd.get("password") as string,
  };

  const exsistUser = await prisma.user.findFirst({
    where: {
      OR: [
        {
          name: { equals: formData.name },
        },
        {
          email: { equals: formData.email },
        },
      ],
    },
  });
  if (!exsistUser) {
    if (formData.password.length <= 5) {
      return { message: ["Password has small length"], payload: formData };
    }
    await prisma.user.create({
      data: formData,
    });
    return { message: ["succesfully"], payload: formData };
  } else {
    if (formData.password.length <= 5) {
      return {
        message: ["Password has small length", "Name or email is useing"],
        payload: formData,
      };
    }
    return { message: ["Name or email is useing"], payload: formData };
  }
}
