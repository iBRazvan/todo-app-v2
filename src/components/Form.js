import React from "react";

function Form({ inputText, setInputText, setTodos, todos, setStatus }) {
  const handleInputText = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const handleSubmitTodo = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-lone-blocks
    {
      inputText.length > 0 &&
        setTodos([
          ...todos,
          {
            id: Math.random() * 1000,
            text: inputText,
            completed: false,
          },
        ]);
    }
    setInputText("");
  };

  const handleStatus = (e) => {
    console.log(e.target.value);
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        onChange={handleInputText}
        value={inputText}
        type="text"
        className="todo-input"
      />
      <button onClick={handleSubmitTodo} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={handleStatus} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
