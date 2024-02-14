import { NextAuthOptions, User, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { resourceUsage } from "process";
const SERVER = process.env.SERVER;

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/Login",
    newUser: "/Register",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Username",
          type: "text",
          placeholder: "Enter Your Email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        try {
          const email = credentials?.email;
          const password = credentials?.password;

          const payload = {
            email: email,
            password: password,
          };

          const data = await axios.post(SERVER + "/auth/checkCred", payload);
          const dbuser = data.data;
          const user = {
            email: dbuser.User_Email,
            name: dbuser.User_fullName,
            id: dbuser.UserId,
          };
          if (dbuser) {
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, session, user }) {
      if (user) {
        token.id = token.sub;
        token.picture = token.sub;
      }
      return token;
    },
    async session({ session, token, user }) {
      return {
        ...session,
        user: {
          ...session.user,
        },
      };
    },
    redirect({ baseUrl, url }) {
      return "/";
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

export const authSsessions = () => getServerSession(authOptions);
