import Header from "./Header";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import { useState } from "react";

const ToDoTemplate = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        text: todo.text,
        checked: false,
        isEditing: false,
      },
    ]);
  };

  return (
    <div className="w-[50%] pb-10 bg-white rounded-md shadow-md overflow-hidden flex flex-col gap-10 items-center">
      <Header />
      <ToDoForm addTodo={addTodo} />
      <ToDoList todos={todos} setTodos={setTodos} />
      <p className="font-poppins text-sm italic p-5">
        Nothing worth having comes easy. - Theodore Roosevelt
      </p>
    </div>
  );
};

export default ToDoTemplate;
