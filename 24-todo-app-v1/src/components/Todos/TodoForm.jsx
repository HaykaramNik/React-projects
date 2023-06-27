import Styles from "./TodoForm.module.css";

function TodoForm(props) {

  return (
    <div className={Styles.todoForm}>
      <form action="">
        <input type="text" name="todoname" placeholder="Enter new todo"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
  
}

export default TodoForm;