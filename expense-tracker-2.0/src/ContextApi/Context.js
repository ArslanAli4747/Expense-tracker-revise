import {createContext, useReducer} from "react"
import { ReducerApi } from "../Reducer/Reducer"

const initialSstate = {
    transactions:[]
}

export const GContext = createContext(initialSstate)



export const Provider = ({children})=>{
    let [state,dispatch] = useReducer(ReducerApi,initialSstate)
    function add(trans){
        dispatch({
            type:'add',
            value:trans
        })
    }
    function del(id){
        dispatch(
            {
                type:"del",
                value:id
            }
        )
    }
    return (
        <GContext.Provider value={
            {
                transactions:state.transactions,
                add,
                del
            }
        }>
            {children}
        </GContext.Provider> 
    )
}