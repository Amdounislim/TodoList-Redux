import { ADD_TASK, DELETE_TASK, DONE_TASK } from "../actionsTypes/constants"



export const addTask = (payload)=>{
    return {
        type: ADD_TASK,
        payload
    }
}
export const deleteTask = (id)=>{
    return {
        type: DELETE_TASK,
        id
    }
}
export const doneTask = (payload)=>{
    return {
        type: DONE_TASK,
        payload
    }
}


