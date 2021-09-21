import { atom } from 'recoil'
import styles from './index.module.scss'
import AddTodo from './AddTodo'
import LiveTodo from './LiveTodo'
import GetTodos from './GetTodos'

export default function Home() {

  // console.log(styles)
  return (
    <div className={styles.body}>
      <AddTodo/>
      <div className={styles.list}>
        <GetTodos/>
      </div>
      <LiveTodo/>
    </div>
  )
}


// docker-compose --project-name todo up -d ==> spin up docker
// npx prisma migrate dev --name init ==> migrate db