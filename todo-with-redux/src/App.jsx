import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { AddTodo, DelTodo, DelAll } from './Store/actions/index'
const App = () => {
  const todoList = useSelector((state) => state.todoReducer)
  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()
  const Watch = () => {
    console.log("wacthcing", todo)
  }
  return (
    <div className='App'>
      <h3>Todo App</h3>
      <div className='conatining-elements'>
        <input
          placeholder='Enter Todo'
          className='todo-input'
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button
          onClick={() => {
            dispatch(AddTodo(todo))

          }}
          className='btn-add'>+</button>
      </div>
      <div>
        {todoList.length > 0 &&

          todoList.map((todo, Index) => (
            <div className='todo' key={Index}>
              <div>
                {todo}
              </div>
              <div onClick={() => dispatch(DelTodo(Index + 1))}>X</div>
            </div>
          ))

        }
      </div>
      <div onClick={() => dispatch(DelAll())} className='clr-all'>
        Clear All
      </div>
    </div>
  )
}

export default App