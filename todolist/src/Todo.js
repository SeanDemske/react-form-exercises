import React, { useState } from "react";
import EditTodo from "./EditTodo";
import "./Todo.css"

const Todo = ({id, todo, removeTodo, editTodo}) => {
    const [editMode, setEditMode] = useState(false);

    const handleDeleteBtn = () => {
        removeTodo(id);
    }

    const handleEditBtn = () => {
        setEditMode(!editMode);
    }

    return (
        <li className="Todo">
            -{todo}
            <button onClick={handleDeleteBtn}>X</button>
            <button onClick={handleEditBtn}>Edit</button>
            {editMode === true ? <EditTodo handleEditBtn={handleEditBtn} editTodo={editTodo} id={id} todo={todo} /> : ""}
        </li>

    );
}

export default Todo;