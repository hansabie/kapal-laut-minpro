import { Request, Response } from "express";
import * as reviewService from "../services/reviewService.ts";

export const createReview = async (req: Request, res: Response) => {
  try {
    const newReview = await reviewService.createReview(req.body);
    res.json(newReview);
  } catch (error) {
    res.status(400).json({ error: "Error creating review" });
  }
};

export const getReviewByEvent = async (req: Request, res: Response) => {
  const { eventId } = req.params;
  try {
    const reviews = await reviewService.getReviewByEvent(Number(eventId));
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: "Error fetching reviews" });
  }
};

export const getReviewByUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const reviews = await reviewService.getReviewByUser(Number(userId));
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: "Error fetching reviews" });
  }
};
