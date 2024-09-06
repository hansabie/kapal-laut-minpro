import bcrypt from "bcryptjs";
import { prisma } from "../models/prisma.ts";

export interface User {
  name?: string;
  email: string;
  password: string;
  phonenumber?: number;
  image?: string;
}

export const register = async (auth: User) => {
  const existingUser = await prisma.user.findUnique({
    where: { email: auth.email },
  });
  if (existingUser) {
    throw new Error("Email is already in use");
  }

  const hashedPassword = await bcrypt.hash(auth.password, 10);
  return await prisma.user.create({
    data: {
      name: auth.name,
      email: auth.email,
      password: hashedPassword,
      phonenumber: auth.phonenumber,
      image: auth.image,
    },
  });
};

export const login = async (auth: User) => {
  const user = await prisma.user.findUnique({
    where: { email: auth.email },
  });
  if (!user) throw new Error("User not found");

  const valid = await bcrypt.compare(auth.password, user.password);
  if (!valid) throw new Error("Invalid password");
  return user;
};
