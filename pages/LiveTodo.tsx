import { useRecoilValue, selector } from "recoil";
import { todoState } from "./Atoms";
import styles from './index.module.scss'


const LiveTodoState = selector({
  key: 'LiveTodoState', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const text = get(todoState);
    return text;
  },
});

export default function LiveTodo () {
  const word = useRecoilValue(LiveTodoState)

  return (
    <div className={styles.notConfirmed}>
      {word}
    </div>
  )
}