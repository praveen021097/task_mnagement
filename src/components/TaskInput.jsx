import React from 'react'
import { useState } from 'react';
const TaskInput = () => {
    const [task, setTask] = useState("");
    

    
  return (
    <div>
      <input type="text" value={task}  placeholder='add task....' onChange={(e)=>setTask(e.target.value)} />
      <button >Add Task</button>
    </div>
  )
}

export default TaskInput
