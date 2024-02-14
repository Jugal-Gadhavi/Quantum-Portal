import type { DefaultSession, Session, User } from "next-auth";
import type { JWT } from "next-auth/jwt";

type UserID = string;



declare module "next-auth" {
  interface Session {
    user: {
      id: UserID | undefined;
    } & DefaultSession['user']
  }
}
