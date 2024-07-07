export { default } from "next-auth/middleware"

// add the routes to be authorized
export const config = { matcher: ["/users"]}