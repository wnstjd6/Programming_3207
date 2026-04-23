import { useState } from 'react'
import Button from './Button.jsx'
import Checkbox from './Checkbox.jsx'
export default function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
    const [isEditing, setIsEditing] = useState(false); //편집 모드인지 아닌지
    const [editText, setEditText] = useState(todo.text); //편집할 때 입력한 텍스트를 저장하는 상태
    const handleEditSubmit = (event) => {
        event.preventDefault(); //폼 제출 시 페이지 새로고침 방지
        if (!isEditing) {
            setIsEditing(true); //편집 모드로 전환
            setEditText(todo.text); //편집할 때 기존 텍스트로 초기화
            return;
        }
        if (editText.trim() === '') { //입력값이 빈 문자열이거나 공백으로만 이루어진 경우
            return; //아무것도 하지 않고 함수 종료
        }
        editTodo(todo.id, editText);
        setIsEditing(false); //편집 모드 종료
    }

    return (
        <li className={`todo__item${todo.isCompleted ? " todo__item--complete" : ""}`}>
            {!isEditing &&  
            <Checkbox id={todo.id} checked={todo.isCompleted} onChange={() => toggleTodo(todo.id)}>
                {todo.text}
            </Checkbox>
                }
           
           {isEditing &&
           <input
                        type="text"
                        className="todo__edit-input"    
                        value={editText}
                        onChange={(event) => setEditText(event.target.value)}
                        //Enter키로도 편집 완료할 수 있게 하자
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                handleEditSubmit(event);
                            }
                        }}
                        //onKeyDown은 키보드에서 키를 눌렀을 때 발생하는 이벤트입니다. 사용자가 입력 필드에서 Enter 키를 누르면 handleEditSubmit 함수가 호출되어 편집이 완료됩니다.
                        autoFocus
                    />
           }
            <Button
             className="todo__button todo__button--edit" 
             onClick={handleEditSubmit}>
                ✏️
            </Button>
            <Button 
            className="todo__button todo__button--delete"
            onClick={() => deleteTodo(todo.id)}
            >🗑️</Button>
        </li>
    )
}