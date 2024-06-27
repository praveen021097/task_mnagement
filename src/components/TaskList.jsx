import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTasks } from '../Redux/action';
import styles from "./TaskList.module.css";
import { Link } from 'react-router-dom';

const TaskList = () => {
   const tasks = useSelector((state)=>state.tasks);
   const dispatch = useDispatch();


   useEffect(()=>{
    if(tasks?.length===0){
      dispatch(getTasks())
    }
   },[])
   console.log("datatasklist",tasks)
  return (
    <div className={styles.container}>
      {tasks.length!=0 && tasks.map((item)=>{
        console.log("item",item.status)
        return <div key={item.id}><Link to={`/single-task/${item.id}`}><span className={styles.taskName}>{item.task}</span> <span className={styles.taskStatus}> {item.status == true?"done...":"pending..."}</span></Link></div>
      })}
    </div>
  )
}

export default TaskList
