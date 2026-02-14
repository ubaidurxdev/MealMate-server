import { prisma } from "../../lib/prisma";
import { mealInterface } from "../../types/meal.types";

const createMeals = async (data: mealInterface) => {
  return await prisma.meal.create({
    data,
  });
};

const updateMeals = async (
  mealId: string,
  data: {
    title: string;
    description: string;
    price: number;
    isAvailable: boolean;
    image: string;
  },
) => {
  const mealData = await prisma.meal.findFirst({
    where: {
      id: mealId,
    },
  });
  if (!mealData) {
    return new Error("Meal doesn't exist");
  }
  return await prisma.meal.update({
    where: {
      id: mealId,
    },
    data,
  });
};

export const mealsService = {
  createMeals,
  updateMeals
};
