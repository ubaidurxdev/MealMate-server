import { NextFunction, Request, Response } from "express";
import { ordersService } from "./orders.service";

const createOrders = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id as string;
    const result = await ordersService.createOrders(userId, req.body);
    res.status(201).json({
      success: true,
      message: "Order created successfully ",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const ordersController = {
    createOrders
}