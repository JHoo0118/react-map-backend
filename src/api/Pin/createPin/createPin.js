import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createPin: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { title, content, image, latitude, longitude } = args;
      const { user } = request;
      return await prisma.createPin({
        title,
        content,
        image,
        latitude,
        longitude,
        author: { connect: { id: user.id } }
      });
    }
  }
};
