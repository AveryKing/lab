import { NextApiRequest, NextApiResponse } from "next";
import { env } from "../../env/server.mjs";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { group } = req.query;

  if (!group) {
    res.status(400).json({ error: "Missing group ID" });
    return;
  }

  fetch(
    env.NEXT_PUBLIC_URL +
      `/api/trpc/group.salesLog?batch=1&input={"0":{"json":{"groupId":"${group}"}}}`
  )
    .then((res) => res.json())
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
};

export default handler;
