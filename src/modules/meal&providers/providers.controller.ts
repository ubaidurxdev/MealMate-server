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

const createProviders = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const result = await providerService.createProviders(
      userId as string,
      req.body,
    );
    res.status(201).json({
      success: true,
      message: "Create new providers",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateProvider = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    if (userId === req.body.id) {
      throw new Error("You are not owner of this provider");
    }
    const { id } = req.params;
    const result = await providerService.updateProvider(id as string, req.body);
    res.status(200).json({
      success: true,
      message: "Provider information updated",
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


const getProviderById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  try {
    const result = await providerService.getProviderById(id as string);
    res.status(200).json({
      success: true,
      message: "Fetched provider profile by id",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
export const providerController = {
  getAllMeals,
  getMealsById,
  createProviders,
  updateProvider,
  getAllProviders,
  getProviderById
};
