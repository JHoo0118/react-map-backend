import { prisma } from "../../../generated/prisma-client";

export default {
  Pin: {
    author: ({ id }) => prisma.pin({ id }).author(),
    comments: ({ id }) => prisma.pin({ id }).comments()
  }
};
