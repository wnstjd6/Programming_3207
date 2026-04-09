import './TodoListApp.css'
import Button from './components/Button.jsx'
import Checkbox from './components/Checkbox.jsx'
import TodoItemEmpty from './components/TodoItemEmpty.jsx'


function TodoListApp() {
  return (
    <div className="todo">
      <h1 className="todo__title">ToDo ToDo</h1>
      <form className="todo__form">
        <input type="text" className="todo__input" placeholder="할 일을 입력하세요."/>
        <Button type="submit" className="todo__button todo__button--add">Add</Button>
      </form>
      <ul className="todo__list">
        <TodoItemEmpty />
        <li className="todo__item todo__item--complete">
        <Checkbox type="checkbox" className="todo__check" id="chk-1" />
        <Button className="todo__button todo__button--edit">✏️</Button>
        <Button className="todo__button todo__button--delete">🗑️</Button>
        </li>
      </ul>
    </div>
  )
}

//자바스크립트에는 for가 있어서 for가 아닌 htmlFor를 사용한다.
export default TodoListApp;