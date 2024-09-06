import { Router } from "express";
import {
  createEvent,
  getAllEvents,
  getEventById,
  deleteEvent,
  updateEvent,
} from "../controller/eventController.ts";

const router = Router();

router.post("/event", createEvent);
router.get("/event", getAllEvents);
router.get("/event/:id", getEventById);
router.delete("/event/:id", deleteEvent);
router.put("/event/:id", updateEvent);

export default router;
