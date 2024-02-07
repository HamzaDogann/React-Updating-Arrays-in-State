import { useState } from 'react';
import AddTodo from './AddTodo.jsx';
import TaskList from './TaskList.jsx';
import initialTodos from './veriler.jsx';

let nextId = 6;


export default function TaskApp() {
  const [todos, setTodos] = useState(
    initialTodos
  );

  function handleAddTodo(title) {

    setTodos([
      ...todos,
      {
        id: nextId++, title: title, done: false
      }])
  }

  function handleChangeTodo(nextTodo) {
    setTodos(todos.map(t => {
      if (t.id === nextTodo.id) {
        return nextTodo;
      } else {
        return t;
      }
    }));
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter(t => t.id !== todoId));
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
