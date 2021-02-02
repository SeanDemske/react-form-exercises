import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm"
import Todo from "./Todo";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    }

    const editTodo = (updatedTodo) => {
        setTodos(todos.map(t => {
            return updatedTodo.id === t.id ? updatedTodo : t
        }));
    }

    const removeTodo = (id) => {
        setTodos(todos.filter(t => t.id !== id));
    }

    return (
        <div className="Todolist">
            <NewTodoForm addTodo={addTodo}/>
            <ul>
                {todos.map(t => <Todo removeTodo={removeTodo} editTodo={editTodo} todo={t.todo} key={t.id} id={t.id}/>)}
            </ul>
        </div>
    )
}

export default TodoList;