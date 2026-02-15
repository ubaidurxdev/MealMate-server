import { prisma } from "../../lib/prisma";

const getAllUsers = async (id: string) => {
  return await prisma.user.findMany({
    where: {
      id: {
        not: id,
      },
    },
  });
};

export const adminService = {
  getAllUsers,
};
