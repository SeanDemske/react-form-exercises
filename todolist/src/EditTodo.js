import React, { useState } from "react";

const EditTodo = ({id, todo, editTodo, handleEditBtn}) => {
    const [inputData, setInputData] = useState(todo);

    const handleChange = (e) => {
        setInputData(e.target.value);
    }

    const handleClick = () => {
        editTodo({id, todo: inputData});
        handleEditBtn();
    }

    return (
        <div className="EditTodo">
            <input type="text" value={inputData} onChange={handleChange}/>
            <button onClick={handleClick}>Update</button>
        </div>
    )
}

export default EditTodo;