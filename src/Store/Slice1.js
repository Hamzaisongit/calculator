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
            state.expression += action.payload

        // const testExp = state.expression + action.payload

        // if (!(/^(?:-?\d{1,2}(?:\.\d+)?|-\b|\d[+\-*/]|-)(?=[+\-*/]|$)/.test(testExp))) {
        //     alert('Please ensure the expression starts with valid characters.');
        //     return; // Early exit if initial sequence is invalid
        // }

        // if(/^[0-9]*\.?[0-9]*([+\-*/][0-9]*\.?[0-9]*)*$/.test(testExp)){
        //     if(/([+\-*/]{3,})/.test(testExp)){
        //         state.expression = testExp.slice(0,-3).concat(action.payload)
        //         return;
        //     }else if(/(\+[*\/])|(\-[*\/])|(\*\*)|(\/\/)|(\*\/)|(\*\/)/.test(testExp)){
        //         state.expression = testExp.slice(0,-2).concat(action.payload)
        //         return
        //     }else{
        //         state.expression = testExp;
        //     }

        
        // }else{
        //    alert('plz ensure the expression remains valid')
        // }
        },
        eqlPressed : (state)=>{
            try{
            
                state.ans = eval(state.expression)
                
            }catch(e){
                alert("plz enter valid format")
            }finally{
                state.expression = ''
                
            }
            
        }
}
})

export const {numberPressed, signPressed, eqlPressed} = mySlice.actions

export default mySlice.reducer