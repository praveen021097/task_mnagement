import React, { useEffect, useState } from 'react'
import TaskInput from './TaskInput';
import { useDispatch, useSelector } from 'react-redux';


const Tasks = () => {
    const tasks = useSelector((state)=>state.tasks);
    const [newTask, setNewTask] = useState("") ;
    const dispatch = useDispatch();

    useEffect(()=>{
            
    },[])

    const handleAddNewTask = (value) =>{
        setNewTask()
    }
   
  return (
    <div>
        <TaskInput />
    </div>
  )
}

export default Tasks
