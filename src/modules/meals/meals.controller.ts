import { NextFunction, Request, Response } from "express";
import { mealsService } from "./meals.service";

const createMeals = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await mealsService.createMeals(req.body);
    res.status(201).json({
      success: true,
      message: "Meal has been created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const mealsController = {
  createMeals,
};
