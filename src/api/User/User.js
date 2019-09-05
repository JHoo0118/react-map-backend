import { prisma } from "../../../generated/prisma-client";

export default {
  User: {
    comments: ({ id }) => prisma.user({ id }).comments(),
    pins: ({ id }) => prisma.user({ id }).pins(),
    isSelf: (parent, _, { request }) => {
      const { user } = request;
      const { id: parentId } = parent;
      return user.id === parentId;
    }
  }
};
