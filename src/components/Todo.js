import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Todo = ({task,toggleCompleted,deletedTodo,editTodo}) => {
    // console.log(task.title)
  return (
    <div className='Todo'>
        <p onClick={()=>toggleCompleted(task.id)} className={`${task.completed ? 'completed' : ''}`}>{task.task}</p>
        <div>
            <FontAwesomeIcon icon={faPenToSquare} onClick={()=>editTodo(task.id)} />
            <FontAwesomeIcon icon={faTrash} onClick={()=>deletedTodo(task.id)}/>
        </div>
    </div>
  )
}

export default Todo