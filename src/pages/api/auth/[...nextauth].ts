import NextAuth from "next-auth";

import { authOptions } from "t5/server/auth";

export default NextAuth(authOptions);
