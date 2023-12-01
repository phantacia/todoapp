import PropTypes from "prop-types";
import ToDoListItem from "./ToDoListItem";
import ToDoEdit from "./ToDoEdit";
import { useState } from "react";

const ToDoList = ({ todos, setTodos }) => {
  const [editingTodoId, setEditingTodoId] = useState(null);

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setEditingTodoId(id);
  };

  const editTask = (id, updatedText) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: updatedText, isEditing: false } : todo
      )
    );
    setEditingTodoId(null); // Reset editing state after editing task
  };

  return (
    <ul>
      {todos.map((todo, index) =>
        editingTodoId === todo.id ? (
          <ToDoEdit key={index} editTodo={editTask} todo={todo} />
        ) : (
          <ToDoListItem
            key={index}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </ul>
  );
};

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  setTodos: PropTypes.func.isRequired,
};

export default ToDoList;
