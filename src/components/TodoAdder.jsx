import { useState } from 'react';
import Button from './Button.jsx';
export default function TodoAdder({addTodo}){ //const props = {addTodo: addTodo}
    const [inputTodo, setInputTodo] = useState('');
    const handleSubmit = (event)=>{
        event.preventDefault();
        if(inputTodo.trim() === ''){ //입력값이 빈 문자열이거나 공백으로만 이루어진 경우
            return; //아무것도 하지 않고 함수 종료
        }
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