import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@/shared/lib/prisma";
import { Adapter } from "next-auth/adapters";

export const optionsAuth = {
    pages: {
        signIn: '/auth/signin',
        signOut: '/',
        error: '/auth/error',
        verifyRequest: '/auth/verify-request', 
        newUser: '/auth/new-user'
    },
    adapter: PrismaAdapter(db) as Adapter,
    providers: [
        // CredentialsProvider({
        //     name: "credentials",
        //     credentials: {
        //         email: { label: "email", type: "email"},
        //         password: { label: "password", type: "password"}
        //     },
        //     async authorize(credentials, req) {
        //         const response
        //     },
        // }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],
    secret: process.env.NEXTAUTH_SECRET as string

} satisfies NextAuthOptions;

const handler = NextAuth(optionsAuth)

export { handler as GET, handler as POST }