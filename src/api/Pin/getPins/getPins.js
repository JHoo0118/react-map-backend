import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    getPins: async (_, __, { request, isAuthenticated }) => {
      isAuthenticated(request);
      return await prisma.pins();
    }
  }
};
