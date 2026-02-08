import { prisma } from "../../lib/prisma";
import { mealInterface } from "../../types/meal.types";

const createMeals = async (data: mealInterface) => {
  return await prisma.meal.create({
    data,
  });
};


export const mealsService = {
    createMeals
}