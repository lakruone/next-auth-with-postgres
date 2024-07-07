
import { NextAuthOptions, User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

interface CustomUser extends User {
    // id: number;
    username: string;
  password: string;
}

export const options: NextAuthOptions = {

    providers: [
        CredentialsProvider({
        // The name to display on the sign in form (e.g. 'Sign in with...')
        name: 'Credentials',
        // The credentials is used to generate a suitable form on the sign in page.
        // You can specify whatever fields you are expecting to be submitted.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
            username: { label: "Username", type: "text", placeholder: "Provide the username" },
            password: { label: "Password", type: "password" }
        },
        async authorize(credentials) {
            const user = {
                // id: 55,
                username: 'lakruwan',
                password: "123"
            }

            if (credentials?.username === user.username && credentials.password === user.password) {
                return user as CustomUser
            } else {
                return null
            }
        }
        })
    ],
    pages: {
        // signIn: '/auth/signin',
        signOut: '/signout',
        // error: '/auth/error', // Error code passed in query string as ?error=
        // verifyRequest: '/auth/verify-request', // (used for check email message)
        // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
      }

}
