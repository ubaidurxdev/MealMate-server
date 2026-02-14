import { NextFunction, Request, Response } from "express";
import { auth } from "../lib/auth";
export enum UserRole {
  User = "USER",
  Admin = "ADMIN",
}
export const authentication = (...roles: UserRole[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const session = await auth.api.getSession({
        headers: req.headers as any,
      });
      if (!session) {
        return res.status(401).json({
          success: false,
          message: "You are not authorized",
        });
      }
    } catch (error: any) {
      next(error);
    }
  };
};
