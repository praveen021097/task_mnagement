import * as types from "./actionTypes";

const initialState  ={
        tasks:[],
        isLoading:false,
        isError:false
}

export const reducer =(state=initialState, action)=>{
    const {type , payload } = action;

    switch(type){
        case types.ADD_TASK_REQUEST:
            return {
                    isLoading:true,
                    isError:false
            }
            case types.ADD_TASK_SUCCESS:
            return {
                    isLoading:false,
                    tasks:payload,
                    isError:false
            }
            case types.ADD_TASK_FAILURE:
            return {
                    isLoading:false,
                    isError:true
            }
            default:
                return state;

    }
}

