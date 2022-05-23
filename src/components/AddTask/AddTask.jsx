import React, { useState } from "react";
import styles from "./addTask.module.css";
import Task from "../Task/Task";
// import { useState } from "react";



  // NOTE: do not delete `data-cy` key value pair
  //  const [isCompleted, setIsCompleted] = useState(task.isCompleted);
  const AddTask = () => {
    const [query, setQuery] = useState("uttam")
    const [todo, setTodo] = useState([])


    const onDelete = (id) => {
      let newTodo = todo.filter(item => item.id !== id)
      setTodo(newTodo)
    
  }
  return (
    <div className={styles.todoForm}>
      <input data-cy='add-task-input' type='text' onChange={(e)=>setQuery(e.target.value)} />
      <button data-cy='add-task-button' onClick={() => {
        if (query) {
          setTodo([...todo, { id: Date.now(), value: query }]);
          setQuery("")
        }
      }}>add</button>

      {todo.map((item) => 
        
      
       return(
        <Task key={item.id} item={item} onDelete={onDelete}/>
      ))}
    </div>
  );
};;

export default AddTask;


