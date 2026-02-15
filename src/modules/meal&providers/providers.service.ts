import { prisma } from "../../lib/prisma";
import { providerDTO } from "../../types/providers.types";

const getAllMeals = async () => {
  return await prisma.meal.findMany();
};

const getMealsById = async (id: string) => {
  return await prisma.meal.findMany({
    where: {
      id,
    },
  });
};

const getAllProviders = async () => {
  return await prisma.providerProfile.findMany();
};

const createProviders = async (id: string, data: providerDTO) => {
  return await prisma.providerProfile.create({
    data: {
      ...data,
      userId: id,
    },
  });
};

export const providerService = {
  getAllMeals,
  getMealsById,
  createProviders,
  getAllProviders,
};
