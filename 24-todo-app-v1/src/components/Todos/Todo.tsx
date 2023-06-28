import styles from './Todo.module.scss';
import { RiTodoFill } from 'react-icons/ri';

interface Props {
  key: number,
  index: number,
  deleteTodo: any,
  readonly todo: string;
}

function Todo(props: Props): JSX.Element {
  const { todo, deleteTodo, index }: Props = props;

  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo}</div>
    </div>
  );
}

export default Todo;
