import PropTypes from "prop-types";
import { useState } from "react";

const ToDoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ text: input });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-[90%] gap-5">
      <input
        type="text"
        placeholder="Add #TODO"
        value={input}
        onChange={handleChange}
        className="grow bg-gray-200 rounded-md flex justify-start p-5 font-poppins text-md"
      />
      <button
        type="submit"
        className="grow bg-black rounded-md flex justify-center items-center font-poppins text-md text-white p-5"
      >
        Enter
      </button>
    </form>
  );
};

ToDoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default ToDoForm;
