import * as types from "./actionTypes";

const initialState = {
        tasks: [],
        isLoading: false,
        isError: false
}

export const reducer = (state = initialState, action) => {
        const { type, payload } = action;

        switch (type) {
                case types.GET_TASK_REQUEST:
                        return {
                                ...state,
                                isLoading: true,
                                isError: false
                        };
                case types.GET_TASK_SUCCESS:
                        console.log("payload", payload)
                        return {
                                ...state,
                                isLoading: false,
                                tasks: payload,
                                isError: false
                        };
                case types.GET_TASK_FAILURE:
                        return {
                                ...state,
                                isLoading: false,
                                isError: true
                        };

                case types.ADD_TASK_REQUEST:
                        return {
                                ...state,
                                isLoading:true,
                                isError:false
                        }        
                case types.ADD_TASK_SUCCESS:
                        return {
                                ...state,
                                isLoading:false,
                                tasks:payload,
                                isError:false
                        } 
                case types.ADD_TASK_FAILURE:
                        return {
                                ...state,
                                isLoading:false,
                                isError:true
                        } 
                case types.DELETE_TASK_REQUEST:
                        return {
                                ...state,
                                isLoading:true,
                                isError:false
                        } 
                case types.DELETE_TASK_SUCCESS:
                        return {
                                ...state,
                                isLoading:false,
                                isError:false,
                                tasks:payload
                        }  
                case types.ADD_TASK_FAILURE:
                        return {
                                ...state,
                                isLoading:false,
                                isError:true
                        }                                   
                default:
                        return state;

        }
}

