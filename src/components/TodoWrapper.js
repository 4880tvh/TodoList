import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditTodoForm from './EditTodoForm';
uuidv4();


const TodoWrapper = () => {

  const [todos, setTodos] = useState([])


  const addTodo = (todo) => {
    console.log(todo==="")
    if(!todo)
    {
      toast.error('Invalid Input !', {
        position: toast.POSITION.TOP_RIGHT
    });
    }
    else{
      setTodos([...todos, { id: uuidv4(), task: todo, compeleted: false, isEdit: false }])
      toast.success('Successfully !', {
        position: toast.POSITION.TOP_RIGHT
    });
    }

    
  // console.log('success')
  }

 const toggleCompleted = (id) => {
  console.log(id)
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    
  }

  const deletedTodo = (id)=>{
    setTodos(todos.filter(todo => todo.id !== id))
    toast.warning('Deleted task !', {
      position: toast.POSITION.TOP_RIGHT
  });
  }

  const editTodo = (id)=>{
    setTodos(todos.map(todo => todo.id===id 
      ?{...todo,isEdit:!todo.isEdit}:todo))
  }

  const editTask = (task,id)=>{
    if(!task)
    {
      toast.error('Invalid Input !', {
        position: toast.POSITION.TOP_RIGHT
    });
    }
    else{
      setTodos(todos.map(todo => todo.id===id 
        ?{...todo,task,isEdit:!todo.isEdit}:todo))
        toast('Changed completed !', {
          position: toast.POSITION.TOP_RIGHT
      });
    }
    
  }

  return (
    <div className='TodoWrapper'>
      <h1>ToDoList</h1>
      <TodoForm addTodo={addTodo} />
      
      {todos.map((todo, index) => (
        todo.isEdit ?
        (<EditTodoForm editTodo={editTask} task={todo} key={index}/>) :
        (<Todo task={todo} key={index} 
          toggleCompleted={toggleCompleted} 
          deletedTodo={deletedTodo}
          editTodo={editTodo}
          />)
        
      ))}
      <ToastContainer />
    </div>
  )
}

export default TodoWrapper