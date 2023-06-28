import { useState } from 'react';
import './App.scss';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';

function App(): JSX.Element {
  const [todos, setTodos]: [string[], Function] = useState([]);

  const addTodoHandler = (text: string): void => {
    setTodos([...todos, text]);
  };

  const deleteTodoHandler = (index: number) => {
    setTodos(todos.filter((_, i: number) => i !== index));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
