import './TodoListApp.css'
import Button from './components/Button.jsx'
import Checkbox from './components/Checkbox.jsx'
import TodoItemEmpty from './components/TodoItemEmpty.jsx'
import TodoHeader from './components/TodoHeader.jsx'
import TodoAdder from './components/TodoAdder.jsx'
import TodoItem from './components/TodoItem.jsx'
import TodoList from './components/TodoList.jsx'

function TodoListApp() {
  return (
    <div className="todo">
      <TodoHeader />
      <TodoAdder/>
      <TodoList/>
    </div>
  )
}

//자바스크립트에는 for가 있어서 for가 아닌 htmlFor를 사용한다.
export default TodoListApp;