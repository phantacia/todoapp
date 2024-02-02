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
    <div className="w-full md:w-[60%] bg-white rounded-xl shadow-md overflow-hidden flex flex-col gap-5 items-center">
      <Header />
      <div className="flex flex-col gap-5 w-full p-5 items-center">
        <ToDoForm addTodo={addTodo} />
        <ToDoList todos={todos} setTodos={setTodos} />
      </div>
      <span className="font-poppins text-sm italic mb-7 mx-5 text-center">
        Nothing worth having comes easy. - Theodore Roosevelt
      </span>
    </div>
  );
};

export default ToDoTemplate;
