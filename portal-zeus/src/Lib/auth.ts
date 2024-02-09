import { NextAuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
const SERVER = process.env.SERVER;

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/Login",
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
      async authorize(credentials, req) {
        try {
          const email = credentials?.email;
          const password = credentials?.password;

          const payload = {
            email: email,
            password: password,
          };

          const data = await axios.post(SERVER + "/auth/checkCred", payload);
          const user = data.data;
          console.log("User:", user);

          if (user) {
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
    redirect() {
      return "/";
    },
  },
  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

export const authSsessions = () => getServerSession(authOptions);
