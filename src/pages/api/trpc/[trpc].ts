import { createNextApiHandler } from "@trpc/server/adapters/next";

import { env } from "t5/env";
import { appRouter } from "t5/server/api/root";
import { createTRPCContext } from "t5/server/api/trpc";

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  onError:
    env.NODE_ENV === "development"
      ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
          );
        }
      : undefined,
});
