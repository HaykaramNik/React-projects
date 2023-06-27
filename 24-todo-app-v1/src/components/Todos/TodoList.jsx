import Todo from './Todo';
import Styles from './TodoList.module.css';

function TodoList(props) {
  const list = ['todo1', 'todo2', 'todo3'];

  return (
    <div className={Styles.todoList}>
      {!list.length ? (
        <p>Todo list is empty</p>
      ) : (
        list.map((todo) => {
          return <Todo todoName={todo} />;
        })
      )}
    </div>
  );
}

export default TodoList;
