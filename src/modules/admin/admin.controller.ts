import { NextFunction, Request, Response } from "express";
import { adminService } from "./admin.service";

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await adminService.getAllUsers(req.user?.id as string);
    res.status(200).json({
      success: true,
      message: "Fetched all users",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const adminController = {
  getAllUsers,
};
