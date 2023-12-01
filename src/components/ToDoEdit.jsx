import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const ToDoEdit = ({ editTodo, todo }) => {
  const [input, setInput] = useState(todo.text);

  useEffect(() => {
    setInput(todo.text);
  }, [todo]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(todo.id, input);
    setInput("");
  };

  if (!editTodo) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit} className="w-full flex gap-5 my-5">
      <input
        type="text"
        placeholder="Update #TODO"
        value={input}
        onChange={handleChange}
        className="grow bg-gray-200 rounded-md flex justify-start p-5 font-poppins text-md"
      />
      <button
        type="submit"
        className="grow bg-slate-500 rounded-md flex justify-center items-center font-poppins text-md text-white p-5"
      >
        Update
      </button>
    </form>
  );
};

ToDoEdit.propTypes = {
  editTodo: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ToDoEdit;
