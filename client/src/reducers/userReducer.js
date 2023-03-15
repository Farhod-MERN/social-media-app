export const initialStata = null

export const reducer = (state, action)=>{
    if(action.type === "USER"){
        return action.payload  // userni malulotlariga qaytarib beradi
    }

    return state
}