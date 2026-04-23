import TodoItemEmpty from './TodoItemEmpty.jsx'
import TodoItem from './TodoItem.jsx'


export default function TodoList({ todos, toggleTodo, deleteTodo }){
    return(
    <ul className="todo__list">
      {/* todos가 없으면, todoItemEmpty을 보여준다 */}
      {todos.length === 0 && <TodoItemEmpty />}
      {todos.length > 0 && todos.map((todo)=><TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>)}
    </ul>
    )
}