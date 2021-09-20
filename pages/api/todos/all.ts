import { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from '@prisma/client'
import { prisma } from "./index";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body)
  const todo = await prisma.todo.findMany({
    where: {
      title: {
        equals: 'vacuuming'
      }
    }
  });
  res.send(todo)
}
