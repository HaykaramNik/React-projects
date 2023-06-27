import Styles from './Todo.module.css';

function Todo(props) {
  const { todoName } = props;

  return (
    <div className={Styles.todo}>
      <p>{todoName}</p>
    </div>
  );
}

export default Todo;
