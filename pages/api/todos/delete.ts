import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "./index";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const deleteId = parseInt(req.body.id)
  const deleteTodo = await prisma.todo.delete({
    where: {
      id: deleteId
    }
  })
  res.send(deleteTodo)
}