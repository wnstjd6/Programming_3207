import Button from './Button.jsx'
import Checkbox from './Checkbox.jsx'
export default function TodoItem({ todo }){
    return(
        <li className={`todo__item${todo.isCompleted ? " todo__item--completed" : ""}`}>
        <Checkbox type="checkbox" className="todo__check" id={todo.id}>
          {todo.text}
        </Checkbox>
        <Button className="todo__button todo__button--edit">✏️</Button>
        <Button className="todo__button todo__button--delete">🗑️</Button>
        </li>
    )
}