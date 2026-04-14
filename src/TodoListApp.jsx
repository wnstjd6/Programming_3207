import { useState } from 'react';
import './TodoListApp.css';
import Button from './components/Button.jsx';
import Checkbox from './components/Checkbox.jsx';
import TodoItemEmpty from './components/TodoItemEmpty.jsx';
import TodoHeader from './components/TodoHeader.jsx';
import TodoAdder from './components/TodoAdder.jsx';
import TodoItem from './components/TodoItem.jsx';
import TodoList from './components/TodoList.jsx';

class Todo{
  constructor(id, text, isCompleted){
    this.id = id;
    this.text = text;
    this.isCompleted = isCompleted;
  
  }
}

function TodoListApp() {
  const [todos, setTodos] = useState([]);
  function addTodo(text){
    //이전 todos에 newTodo 만들어서 추가하자 -> 그것을 setTodos() 하자
    setTodos((todos)=>[...todos,
       new Todo(Date.now(), 
       text, false)]);


  }
  return (
    <div className="todo">
      <TodoHeader />
      <TodoAdder addTodo={addTodo} />
      <TodoList/>
    </div>
  )
}

//자바스크립트에는 for가 있어서 for가 아닌 htmlFor를 사용한다.
export default TodoListApp;