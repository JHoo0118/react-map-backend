import { OAuth2Client } from "google-auth-library";
import { prisma } from "./generated/prisma-client";

const client = new OAuth2Client(process.env.OAUTH_CLIENT_ID);

exports.findOrCreateUser = async token => {
  const googleUser = await verifyAuthToken(token);
  const user = await checkIfUserExists(googleUser.email);
  return user ? user : await prisma.createUser(googleUser);
};

const verifyAuthToken = async token => {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.OAUTH_CLIENT_ID
    });
    return ticket.getPayload();
  } catch (err) {
    console.error("토큰 검증 실패", err);
  }
};

const checkIfUserExists = async email => await User.findOne({ email }).exec();
