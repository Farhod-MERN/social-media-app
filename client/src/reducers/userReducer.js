export const initialStata = null

export const reducer = (state, action)=>{
    if(action.type === "USER"){
        return action.payload  // userni malulotlariga qaytarib beradi
    }
    if(action.type === "CLEAR"){
        return null // dispatch({type: "CLEAR"}) b'lsa state ni tozala
    }
    return state
}