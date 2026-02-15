import { prisma } from "../../lib/prisma";

const getCurrentUser = async (id: string) => {
  return await prisma.user.findUnique({
    where: {
      id,
    },
  });
};

export const usersService = {
  getCurrentUser,
};
