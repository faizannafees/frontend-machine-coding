import { useState } from 'react';
import './App.css'

function TodoApp() {

  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {

    if(input.trim() === "") return;
    const item = {
      id: todoList.length + 1,
      text: input.trim(),
      completed: false
    }

    setTodoList(prev => [...prev, item])
    setInput("");
  }

  const toggleCompleted = (id) => {
    setTodoList(todoList.map(t => {
      if(t.id === id){
        return {
          ...t,
          completed: !t.completed
        }
      }
      else{
        return t
      }
  }))
  }

  const deleteTodo = (id) => {
    setTodoList(todoList.filter(t => t.id !== id ))
  }

  return (
    <div className='container'>
      <div>
        <h1>Todo List</h1>
        <input type='text' placeholder='Enter todo...' value={input} onChange={e => setInput(e.target.value)} />
        <button onClick={addTodo}>Add</button>

        <ul>
          {todoList.map(todo => (
            <li key={todo.id}>
              <input type='checkbox' checked={todo.completed} onChange={() => toggleCompleted(todo.id)} />
              <span className={todo.completed ? "strikeThrough" : ""}>{todo.text}</span>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TodoApp;
