import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    expression : "",
    ans : ""
}

export const mySlice = createSlice({
    name: 'mySlice',
    initialState,
    reducers : {
        numberPressed : (state,action)=>{
        state.expression += action.payload
    },
        signPressed : (state,action)=>{

        const testExp = state.expression + action.payload

        if(/^[^-\d][+\-*\/]|^[+*\/][-+*/]/.test(testExp.slice(0, 2))){
            alert('init not allowed')
            return;
        }else if(/(\+\*|\+\/|\-\*|\-\/|\*\/|\/\*|\*\*|\/\/)/.test(testExp)){
            state.expression = testExp.slice(0,-2) + action.payload
            return;
        }else if(/([+\-*/]{3})/.test(testExp)){
            state.expression = testExp.slice(0,-3) + action.payload
        }else{
            state.expression = testExp
        }

    
        },
        eqlPressed : (state)=>{
            try{
            
                state.ans = eval(state.expression)
                
            }catch(e){
                alert("plz enter valid format")
            }
            
        },
        clrPressed : (state)=>{
            state.ans = ""
            state.expression = ""
        }
}
})

export const {numberPressed, signPressed, eqlPressed, clrPressed} = mySlice.actions

export default mySlice.reducer