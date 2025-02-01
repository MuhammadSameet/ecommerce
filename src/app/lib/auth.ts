
import GithubProvider from "next-auth/providers/github";

const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID || "[]",
      clientSecret: process.env.AUTH_GITHUB_SECRET || "[]",
    }),
  ],
};

export default authOptions;
