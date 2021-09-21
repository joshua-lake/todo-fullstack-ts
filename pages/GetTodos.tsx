import { useEffect, useState } from "react"
import { useRecoilValue, selector, useRecoilState } from "recoil";
import { todoState, updateList } from "./Atoms";
import { todoList } from "./Atoms";
import styles from './index.module.scss'


const todoUpdate = selector({
  key: 'todoUpdate', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
     return get(updateList);
  },
});


export default function GetTodos () {

  const [data, setData] = useRecoilState(todoList)

    // const [data, setData] = useState<{id: number,  title: string}[]>([])

    const update = useRecoilValue(todoUpdate)

    useEffect(() => {
      fetch('/api/todos/all')
        .then((res) => {
          return res.json()
        })
        .then((todos) => {
          setData(todos)
        })
    }, [update])



    return (
      <div>
        {data.map(todo => {
          return (
            <div key={todo.id} className={styles.todo}>
              {todo.title}
              <div>x</div>
            </div>
          )
        })}
      </div>
    )
}

// className={styles.title