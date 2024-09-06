import { Request, Response } from "express";
import * as eventService from "../services/eventService.ts";

export const createEvent = async (req: Request, res: Response) => {
  try {
    const event = await eventService.createEvent(req.body);
    res.status(201).send(event);
  } catch (error: any) {
    res.status(400).send({
      error: error.message,
    });
  }
};

export const getAllEvents = async (req: Request, res: Response) => {
  try {
    const events = await eventService.getAllEvents();
    res.send(events);
  } catch (error: any) {
    res.status(500).send({
      error: error.message,
    });
  }
};

export const getEventById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const event = await eventService.getEventById(Number(id));
    if (!event) {
      return res.status(404).send({ message: "Event not found" });
    }
    res.send(event);
  } catch (error: any) {
    res.status(500).send({
      error: error.message,
    });
  }
};

export const updateEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedEvent = await eventService.updateEvent(Number(id), req.body);
    if (!updatedEvent) {
      return res.status(404).send({ message: "Event not found" });
    }
    res.send(updatedEvent);
  } catch (error: any) {
    res.status(400).send({
      error: error.message,
    });
  }
};

export const deleteEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedEvent = await eventService.deleteEvent(Number(id));
    if (!deletedEvent) {
      return res.status(404).send({ message: "Event not found" });
    }
    res.send(deletedEvent);
  } catch (error: any) {
    res.status(500).send({
      error: error.message,
    });
  }
};
