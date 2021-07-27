import React from 'react';

const Form = ({setInputText,todos,setTodos,inputText,setStatus}) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed:false, id: Math.random() *1000 }
        ]);
        setInputText("");
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    const emptySubmitHandler = (e) => {
        alert("Snažíš sa pridať prázdnu úlohu")
        e.preventDefault();
    }

    return (
        <div>
            <form>
                <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
                <button onClick={inputText === "" ? emptySubmitHandler : submitTodoHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square" />
                </button>
                <div className="select">
                    <select onChange={statusHandler} name="todos" className="filter-todo">
                        <option value="all">Všetky</option>
                        <option value="completed">Dokončené</option>
                        <option value="uncompleted">Nedokončené</option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default Form;
