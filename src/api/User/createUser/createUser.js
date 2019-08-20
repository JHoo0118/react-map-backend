import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createUser: async (_, args) => {
      const { name, email, password, picture } = args;
      const exists = await prisma.$exists.user({ email });
      if (exists) {
        throw Error("이미 있는 이메일 입니다.");
      }
      await prisma.createUser({
        name,
        email,
        password,
        picture
      });
      return true;
    }
  }
};
