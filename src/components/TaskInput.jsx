import React from 'react'
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addTask, getTasks } from '../Redux/action';
import styles from "./TaskInput.module.css";

const TaskInput = () => {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    
  const handleAddTask =()=>{
      const payload ={
          id:nanoid(4),
          task:task,
          status:false
      }

      if(payload){
          dispatch(addTask(payload))
      }
      setTask("")
  }
    
  return (
    <div className={styles.container}>
      <input type="text" value={task}  placeholder='add task....' onChange={(e)=>setTask(e.target.value)} />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  )
}

export default TaskInput
