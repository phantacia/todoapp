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
    <form onSubmit={handleSubmit} className="flex w-full md:w-[90%] gap-5">
      <input
        type="text"
        placeholder="Add #TODO"
        value={input}
        onChange={handleChange}
        className="flex-grow bg-gray-200 rounded-xl flex justify-start p-4 font-poppins text-md w-3/4"
      />
      <button
        type="submit"
        className="flex-grow bg-accent rounded-xl flex justify-center items-center font-poppins text-md text-white w-1/4"
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
