import { prisma } from "../../../generated/prisma-client";

export default {
  Comment: {
    author: ({ id }) => prisma.comment({ id }).author()
  }
};
