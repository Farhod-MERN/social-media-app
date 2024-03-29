export const initialStata = null

export const reducer = (state, action)=>{
    if(action.type === "USER"){
        return {...action.payload}
        // return {...action.payload, followers: [], following: []}  // userni malulotlariga qaytarib beradi
    }
    if(action.type === "CLEAR"){
        return null // dispatch({type: "CLEAR"}) b'lsa state ni tozala
    }
    if(action.type === "UPDATE"){
        return {
            ...state,
            followers: action.payload.followers,
            following: action.payload.following,
        }
    }
    if(action.type === "UPDATEPIC"){
        return {
            ...state,
            pic: action.payload
        }
    }
    if(action.type === "UPDATENAME"){
        return {
            ...state,
            name: action.payload
        }
    }
    return state
}