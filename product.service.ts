import { prisma } from "../config/database";

export const searchProducts = (q: string) => {
  const query = q.toLowerCase(); // convert user input to lowercase
  return prisma.product.findMany({
    where: {
      name: {
        contains: query,
      },
    },
  });
};
