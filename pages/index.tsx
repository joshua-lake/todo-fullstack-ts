import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './index.module.scss'

export default function Home() {
  const [data, setData] = useState<{id: number, createdAt: string, updatedAt: string, title: string}[]>([])

  useEffect(() => {
    // fetch('/api/todos/all', {method: 'POST', body: JSON.stringify({name: 'josh'}), headers: {'content-type': 'application/json'}})
    fetch('/api/todos/all')
      .then((res) => {
        return res.json()
      })
      .then((todos) => {
        setData(todos)
      })
  }, [])
  console.log(styles)
  return (
    <div className={styles.title}>
      {data.map(todo => {
        return (
          <div key={todo.id}>
            {todo.title}
          </div>
        )
      })}
    </div>
  )
}


// docker-compose --project-name todo up -d ==> spin up docker
// npx prisma migrate dev --name init ==> migrate db