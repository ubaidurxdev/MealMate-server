import { NextFunction, Request, Response } from "express";
import { auth } from "../../lib/auth";
import { usersService } from "./users.service";

const getCurrentUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id
    const result = await usersService.getCurrentUser(userId as string);
    res.status(200).json({
      success: true,
      message: "This is users profile",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};


export const usersController = {
    getCurrentUser
}