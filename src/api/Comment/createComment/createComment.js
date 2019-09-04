import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createComment: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { text, pinId } = args;
      const { user } = request;
      return prisma.createComment({
        author: {
          connect: {
            id: user.id
          }
        },
        pin: {
          connect: {
            id: pinId
          }
        },
        text
      });
    }
  }
};
