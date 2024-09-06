import { Request, Response } from "express";
import * as orderService from "../services/orderService.ts";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const newOrder = await orderService.createOrder(req.body);
    res.json(newOrder);
  } catch (error) {
    res.status(400).json({ error: "Error creating order" });
  }
};

export const getOrder = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const order = await orderService.getOrderById(Number(id));
    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ error: "Order not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error fetching order" });
  }
};

export const getOrderByUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const orders = await orderService.getOrderByUser(Number(userId));
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Error fetching orders" });
  }
};
