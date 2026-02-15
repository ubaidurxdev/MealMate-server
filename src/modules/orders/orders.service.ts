import { prisma } from "../../lib/prisma";
import { orderDTO } from "../../types/order.types";

const getAllOrders = async () => {
  return await prisma.order.findMany({
    orderBy: { createdAt: "desc" },
  });
};

const createOrders = async (userId: string, data: orderDTO) => {
  return await prisma.order.create({
    data: {
      ...data,
      userId,
    },
  });
};

export const ordersService = {
  createOrders,
  getAllOrders,
};
