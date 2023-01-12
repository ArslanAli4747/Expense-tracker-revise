

export const ReducerApi = (state,action)=>{
    switch(action.type){
        case 'del':
            return{
                ...state,
                transactions:state.transactions.filter(trans=>trans.id!==action.value)
            }
        case 'add':
            return{
                ...state,
                transactions:[action.value,...state.transactions]
            }
        default:
            return state
    }
}