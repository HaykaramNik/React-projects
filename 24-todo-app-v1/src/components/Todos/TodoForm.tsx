import { useState } from 'react';
import styles from './TodoForm.module.scss';

interface Props {
  addTodo: Function;
}

function TodoForm(props: Props): JSX.Element {
  const { addTodo } = props;
  const [text, setText]: [string, Function] = useState('');

  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Enter new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TodoForm;
