import { prisma } from "../models/prisma.ts";

export const createOrder = async (data: any) => {
  return await prisma.order.create({ data });
};

export const getOrderById = async (id: number) => {
  return await prisma.order.findUnique({ where: { id } });
};

export const getOrderByUser = async (userId: number) => {
  return await prisma.order.findMany({ where: { userId } });
};
