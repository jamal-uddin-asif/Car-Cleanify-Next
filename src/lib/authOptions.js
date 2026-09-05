export const authOptions = {
  providers: [
    CredentialsProvider({
      // sign in form
      name: "Credentials",

      // credentials: {
      //   username: { label: "Username", type: "text", placeholder: "jsmith" },
      //   password: { label: "Password", type: "password" }
      // },
      async authorize(credentials, req) {
        console.log("credentials form authOptions: ", credentials);
        return null;
      },
    }),
    // ...add more providers here
  ],
};
