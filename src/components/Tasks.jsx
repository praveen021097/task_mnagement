import React, { useEffect, useState } from 'react'
import TaskInput from './TaskInput';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../Redux/action';
import TaskList from './TaskList';
import styles from "./Tasks.module.css";


const Tasks = () => {
    const tasks = useSelector((state)=>state.tasks);
    const [newTask, setNewTask] = useState("") ;
    const dispatch = useDispatch();

    useEffect(()=>{
 
        dispatch(getTasks())
           
    },[])

    console.log("tasks",tasks)
    const handleAddNewTask = (value) =>{
        setNewTask()
    }
   
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Task Management</h1>
        <TaskInput />
        <TaskList />
    </div>
  )
}

export default Tasks
