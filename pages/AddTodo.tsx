import { useState, useEffect, KeyboardEvent } from "react"
import { atom, useRecoilState } from "recoil";
import { todoState, updateList } from "./Atoms";
import styles from './index.module.scss'

export default function AddTodo () {


  const [todo, setTodo] = useRecoilState<string>(todoState)
  const [toggle, setToggle] = useRecoilState<boolean>(updateList)
  
  function handleChange (event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    setTodo(event.target.value)
  }

  function handleClick () {
      // fetch('/api/todos/all', {method: 'POST', body: JSON.stringify({name: 'josh'}), headers: {'content-type': 'application/json'}})
        fetch('/api/todos/add', {method: 'POST', body: JSON.stringify({title: `${todo}`}), headers: {'content-type': 'application/json'}})
        .then((res) => {
          setTodo('')
          setToggle(!toggle)
          return res.json()
        })

  }

  function handleKeyDown (event: KeyboardEvent) {
    if (event.key === 'Enter') {
      handleClick()
    }
  }

  return (

    <div>
      <div className={styles.inputDiv}>
        <input className={styles.inputBox} type='text' placeholder='What needs doing?' onChange={handleChange} onKeyDown={handleKeyDown} value={todo}/>
      </div>
      <div className={styles.buttonDiv}>
        <button className={styles.button} onClick={handleClick}>Add to the list!</button>
      </div>
    </div>
  )
}