import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createUser: async (_, args) => {
      const { name, email, password } = args;
      const exists = await prisma.$exists.user({ email });
      if (exists) {
        throw Error("이미 존재하는 이메일 입니다.");
      }
      await prisma.createUser({
        name,
        email,
        password
      });
      return true;
    }
  }
};
