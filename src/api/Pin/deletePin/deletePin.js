import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    deletePin: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { id } = args;
      const { user } = request;
      const pin = await prisma.$exists.pin({ id, author: { id: user.id } });
      if (pin) {
        return prisma.deletePin({ id });
      } else {
        throw Error("잘못된 요청입니다.");
      }
    }
  }
};
