import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styles from "./SingleTask.module.css";
import { RxCross2 } from "react-icons/rx";
import { deleteFailure, deleteRequest, deleteSuccess, deleteTask, getTasks } from '../Redux/action';
import { DELETE_TASK_SUCCESS } from '../Redux/actionTypes';
import axios from 'axios';
const SingleTask = () => {
  const [currentTask, setCurrentTask] = useState({});
  const { id } = useParams();
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const navigate = useNavigate()

 const handleDelete =()=>{
        dispatch(deleteRequest());
        axios.delete(`/tasks/${id}`).then((res)=>{
          dispatch(deleteSuccess(id))
          dispatch(getTasks())
          navigate("/")
        }).catch((err)=>{
          dispatch(deleteFailure())
        })
  }

  useEffect(() => {
    if (tasks.length != 0 && id) {
      const currentT = tasks.find((item) => item.id === id);
      currentT && setCurrentTask(currentT)
    }
  }, [])
  return (
    <div className={styles.singleContainer}>
      <div className={styles.taskContainer}>
        <div> <span> Task_id - {currentTask?.id}</span></div>
        <div><span>Task - {currentTask?.task}</span></div>
        <div><span>Status - {currentTask?.status === false ? "Not Done" : "Done"}</span></div>

        <div> 
           <button className={styles.editButton}>edit</button>
          <RxCross2 size={"25px"} className={styles.delete} onClick={handleDelete}/>
          </div>
      </div>
    </div>
  )
}

export default SingleTask
