import { createSlice, PayloadAction } from "@reduxjs/toolkit"


type Role = "doctor" | "admin" | "user"
interface User {
    name:string,
    email?:string,
    mobileNumber?: string,
    role?:Role | string,
    imgUrl?:string
    }
const initialState:User = {
    name:'',
    email:'',
    mobileNumber: '',
    role:'',
    imgUrl:''



}

export const UserTemp = createSlice({
name: "userTemp",
initialState,

reducers:{
setUserTemp:(state,action:PayloadAction<User>)=>{

return {...state, ...action.payload}
},
removeUserTemp: ()=> {
    return initialState
}

}

})

export default UserTemp.reducer;
export const {setUserTemp, removeUserTemp} = UserTemp.actions