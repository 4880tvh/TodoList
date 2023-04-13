import React from 'react'
import {useState} from 'react'

const EditTodoForm = ({task,editTodo}) => {
  
    const [value ,setValue] = useState(task.task)

    const handleAdd = (e) =>{
        e.preventDefault();
        editTodo(value,task.id)
        // console.log(value)
        setValue("")
        
    }
    
  return (
    <form className='TodoForm' onSubmit={handleAdd} >
        <input 
        type="text" 
        className='todo-input'
        value={value} 
        placeholder='update task' 
        onChange={(e) => setValue(e.target.value) }
        
        />
        <button type='submit' className='todo-btn'>Save</button>
        
    </form>
  )
}

export default EditTodoForm