import { generateToken } from "../../../../utils";
import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    confirm: async (_, args) => {
      const { email, password } = args;
      const user = await prisma.user({ email });
      if (user.password === password) {
        return generateToken(user.id);
      } else {
        throw Error("잘못된 패스워드입니다.");
      }
    }
  }
};
