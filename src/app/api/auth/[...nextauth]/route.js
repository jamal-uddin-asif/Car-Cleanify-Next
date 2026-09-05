import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {

  providers: [
    CredentialsProvider({
    // sign in form 
    name: 'Credentials',
 
    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
    
      return null
    }
  })
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)