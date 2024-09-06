import { prisma } from "../models/prisma.ts";

export interface Event {
  name: string;
  description: string;
  category: string;
  date: Date;
  location: string;
  price: number;
  availableSeats: number;
  image: string;
}

export const createEvent = async (event: Event) => {
  return await prisma.event.create({
    data: event,
  });
};

export const getAllEvents = async () => {
  return await prisma.event.findMany();
};

export const getEventById = async (id: number) => {
  return await prisma.event.findUnique({
    where: { id },
  });
};

export const updateEvent = async (id: number, event: Event) => {
  return await prisma.event.update({
    where: { id },
    data: event,
  });
};

export const deleteEvent = async (id: number) => {
  return await prisma.event.delete({
    where: { id },
  });
};
