import PropTypes from "prop-types";
import { MdDelete, MdEdit } from "react-icons/md";

const ToDoListItem = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <li>
      <div className="w-full flex items-center p-3 gap-5 font-poppins font-md border-b-2 border-secondary">
        <p
          onClick={() => toggleComplete(todo.id)}
          className={`flex-auto ${todo.checked ? "line-through" : ""}`}
        >
          {todo.text}
        </p>

        <div className="flex gap-2 items-center">
          <button onClick={() => deleteTodo(todo.id)}>
            <MdDelete className="bg-red-500 rounded-md p-1 text-white text-3xl" />
          </button>
          <button onClick={() => editTodo(todo.id)}>
            <MdEdit className="bg-accent rounded-md p-1 text-white text-3xl" />
          </button>
        </div>
      </div>
    </li>
  );
};

ToDoListItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
  }).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};

export default ToDoListItem;
