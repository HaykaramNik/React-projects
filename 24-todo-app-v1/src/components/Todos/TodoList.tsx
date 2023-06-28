import Todo from './Todo';
import styles from './TodoList.module.scss';

interface Props {
  todos: string[];
  readonly deleteTodo: Function;
}

function TodoList(props: Props): JSX.Element {
  const { todos, deleteTodo } = props;

  return (
    <div className={styles.todoListContainer}>
      {!todos.length ? (
        <h2>Todo list is empty</h2>
      ) : (
        todos.map((todo: string, index: number) => {
          return <Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo} />;
        })
      )}
    </div>
  );
}

export default TodoList;
