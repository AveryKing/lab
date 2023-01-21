import { z } from "zod";
import noblox from "noblox.js";

import { createTRPCRouter, publicProcedure } from "../trpc";
import { env } from "../../../env/server.mjs";

export const groupRouter = createTRPCRouter({
  salesLog: publicProcedure
    .input(z.object({ groupId: z.string() }))
    .query(async ({ input }) => {
      await noblox.setCookie(env.COOKIE);
      return {
        salesLog: await noblox.getGroupTransactions(
          Number(input.groupId),
          "Sale",
          10
        ),
      };
    }),
});
