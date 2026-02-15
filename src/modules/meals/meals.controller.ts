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

const updateMeals = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await mealsService.updateMeals(id as string, req.body);
    res.status(200).json({
      success: true,
      message: "Meal updated successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateOrderStatus = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await mealsService.updateOrderStatus(id as string, req.body);
    res.status(200).json({
      success : true,
      message : "Order status is updated",
      data : result
    })
  } catch (error) {
    next(error);
  }
};

const deleteMeals = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await mealsService.deleteMeals(id as string);
    res.status(200).json({
      success: true,
      message: "Meal is deleted",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
export const mealsController = {
  createMeals,
  updateMeals,
  updateOrderStatus,
  deleteMeals,
};
