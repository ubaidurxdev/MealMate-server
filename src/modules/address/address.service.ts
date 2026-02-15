import { prisma } from "../../lib/prisma";
import { addressDTO } from "../../types/address.types";

const createAddress = async (id: string, data: addressDTO) => {
  return await prisma.address.create({
    data: {
      ...data,
      userId: id,
    },
  });
};

export const addressService = {
    createAddress
}