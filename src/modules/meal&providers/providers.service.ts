import { prisma } from "../../lib/prisma";

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

const getAllProviders = async()=>{
    return await prisma.providerProfile.findMany()
}

export const providerService = {
  getAllMeals,
  getMealsById,
  getAllProviders
};
