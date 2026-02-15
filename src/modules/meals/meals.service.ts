import { OrderStatus } from "../../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";
import { mealDTO } from "../../types/meal.types";

const createMeals = async (data: mealDTO) => {
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

const deleteMeals = async (id: string) => {
  return await prisma.meal.delete({
    where: {
      id,
    },
  });
};

const updateOrder = async (id: string, data: { status: OrderStatus }) => {
  return await prisma.order.update({
    where: {
      id,
    },
    data,
  });
};
export const mealsService = {
  createMeals,
  updateMeals,
  deleteMeals,
  updateOrder
};
