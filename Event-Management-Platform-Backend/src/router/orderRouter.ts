import { Router } from "express";
import {
  createOrder,
  getOrder,
  getOrderByUser,
} from "../controller/orderController.ts";
import { authMiddleware } from "../middleware/authMiddleware.ts";

const router = Router();

router.post("/", authMiddleware, createOrder);
router.get("/:id", authMiddleware, getOrder);
router.get("/user/:userId", authMiddleware, getOrderByUser);

export default router;
