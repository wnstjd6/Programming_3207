import { useState } from 'react';
import Button from './Button.jsx';
export default function TodoAdder({addTodo}){ //const props = {addTodo: addTodo}
    const [inputTodo, setInputTodo] = useState('');
    const handleSubmit = (event)=>{
        event.preventDefault();
        addTodo(inputTodo); //input에 있는 text를 value를 할일 내용으로
        setInputTodo(''); // 입력 후 입력창 비우기

    }

    return(
         <form className="todo__form" onSubmit={handleSubmit}>
                <input 
                type="text" 
                className="todo__input" 
                placeholder="할 일을 입력하세요."
                value = {inputTodo}
                onChange = {(event)=> setInputTodo(event.target.value)}
                />
                <Button type="submit" className="todo__button todo__button--add">Add</Button>
            </form>
    )
}