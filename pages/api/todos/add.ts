import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "./index";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const todo = await prisma.todo.create({data: req.body})
  res.send(todo)
}