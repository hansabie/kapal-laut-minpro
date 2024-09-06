import { prisma } from "../models/prisma.ts";

export const createReview = async (data: any) => {
  return await prisma.review.create({ data });
};

export const getReviewByEvent = async (eventId: number) => {
  return await prisma.review.findMany({ where: { eventId } });
};

export const getReviewByUser = async (userId: number) => {
  return await prisma.review.findMany({ where: { userId } });
};
