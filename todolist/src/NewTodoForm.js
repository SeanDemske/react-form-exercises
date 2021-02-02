import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

const NewTodoForm = ({addTodo}) => {
    const [input, setInput] = useState("")

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const todoObj = {
            todo: input,
            id: uuid()
        }
        addTodo(todoObj);
        setInput("");
    }

    return (
        <form className="NewTodoForm" onSubmit={handleSubmit}>
            <label htmlFor="todo-input">Todo:</label>
            <input name="todoName" id="todo-input" type="text" onChange={handleInputChange} required/>
            <button>+Add Todo</button>
        </form>
    )
}

export default NewTodoForm;