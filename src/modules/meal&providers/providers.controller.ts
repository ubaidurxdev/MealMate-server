import { NextFunction, Request, Response } from "express";
import { providerService } from "./providers.service";

const getAllMeals = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await providerService.getAllMeals();
    res.status(200).json({
      success: true,
      message: "Fetched all meals",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllProviders = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await providerService.getAllProviders();
    res.status(200).json({
      success: true,
      message: "Fetched all providers",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getMealsById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  try {
    const result = await providerService.getMealsById(id as string);
    res.status(200).json({
      success: true,
      message: "Fetched meal by id",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const providerController = {
  getAllMeals,
  getMealsById,
  getAllProviders,
};
