import * as types from "./actionTypes";
import axios from "axios";



export const getTasks =(payload)=>(dispatch)=>{
    dispatch({type:types.ADD_TASK_REQUEST});
    return axios.get("/tasks").then((res)=>{
        console.log("data",res.data)
     dispatch({type:types.ADD_TASK_SUCCESS,payload:res.data})
    }).catch((err)=>{
        dispatch({type:types.ADD_TASK_FAILURE,payload:err})
    })

}

export const addTask =(payload)=>(dispatch)=>{
    dispatch({type:types.ADD_TASK_REQUEST});
    axios.post("/tasks",payload).then((res)=>{
        dispatch({type:types.ADD_TASK_SUCCESS,payload:res.data})
       dispatch(getTasks())
    }).catch((err)=>{
        dispatch({type:types.ADD_TASK_FAILURE,payload:err})
    })
}

export const deleteTask =(id)=>(dispatch)=>{
        dispatch({type:types.DELETE_TASK_REQUEST});
        axios.delete(`/tasks/${id}`).then((res)=>{
            dispatch({type:types.DELETE_TASK_SUCCESS,payload:res.data})
            dispatch(getTasks())
            return types.DELETE_TASK_SUCCESS;
        }).catch((err)=>{
            dispatch({type:types.DELETE_TASK_FAILURE,payload:err})
        })
}

export const deleteRequest =()=>{
    return {
        type:types.DELETE_TASK_REQUEST
    }
}
export const deleteSuccess =(payload)=>{
    return {
        type:types.DELETE_TASK_SUCCESS,payload
    }
}

export const deleteFailure =()=>{
    return {
        type:types.DELETE_TASK_SUCCESS
    }
}