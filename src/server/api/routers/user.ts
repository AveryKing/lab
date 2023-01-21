import { z } from "zod";
import noblox from "noblox.js";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  getOutfit: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ input }) => {
      return {
        outfit: await noblox.currentlyWearing(Number(input.userId)),
      };
    }),
});
