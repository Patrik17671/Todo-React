import React from 'react';
import Todo from "./Todo";
/* eslint-disable */
const ToDoList = ({ todos,setTodos, filteredTodos }) => {

    return (
        <div className="todo-container">
            <div
                className="color"
            >
                <div draggable="true">

                <input type="color"/>
                </div>
            </div>
            <ul className="todo-list" >
                {filteredTodos.map(todo => (
                    <Todo setTodos={setTodos}
                          todos={todos}
                          key={todo.id}
                          todo={todo}
                          text={todo.text} />
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;
