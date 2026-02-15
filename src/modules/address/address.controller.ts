import { NextFunction, Request, Response } from "express";
import { addressService } from "./address.service";

const createAddress = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id as string;
    const result = await addressService.createAddress(userId, req.body);
    res.status(201).json({
      success: true,
      message: "Address is created",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const addressController = {
    createAddress
}