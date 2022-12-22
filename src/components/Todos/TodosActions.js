import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri"
import styles from "./TodosActions.module.css"
import Button from "../UI/Button"

function TodosActions({
  resetTodos,
  deleteComletedTodos,
  completedTodosExist,
}) {
  return (
    <div className={styles.totodosActionContainerdo}>
      <Button title="Очистить заметки" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Очистить выполненные задачи"
        onClick={deleteComletedTodos}
        disabled={!completedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  )
}

export default TodosActions
