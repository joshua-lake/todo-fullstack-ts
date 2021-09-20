import { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({log: ['query']})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const todo = await prisma.todo.create({data: {title: 'vacuuming'}});
  res.send(todo)
}