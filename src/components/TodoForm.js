import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'

const TodoForm = ({ addTodo }) => {

  const [value, setValue] = useState("")

  const handleAdd = (e) => {
    e.preventDefault()
      addTodo(value)
      // console.log(value)
      setValue("")
  }

  return (
    <form className='TodoForm' onSubmit={handleAdd} >
      <input
        type="text"
        className='todo-input'
        value={value}
        placeholder='Task to do today'
        onChange={(e) => setValue(e.target.value)}
      />
      <button type='submit' className='todo-btn'  >Add</button>

    </form>
  )
}

export default TodoForm