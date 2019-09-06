import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    editProfile: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { name, picture } = args;
      const { user } = request;
      return prisma.updateUser({
        where: { id: user.id },
        data: { name, picture }
      });
    }
  }
};
