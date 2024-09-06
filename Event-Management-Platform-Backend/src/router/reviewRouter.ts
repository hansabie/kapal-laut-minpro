import { Router } from "express";
import {
  createReview,
  getReviewByEvent,
  getReviewByUser,
} from "../controller/reviewController.ts";

const router = Router();

router.post("/review", createReview);
router.get("/event/:eventId", getReviewByEvent);
router.get("/user/:userId", getReviewByUser);

export default router;
