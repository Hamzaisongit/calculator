import {configureStore} from '@reduxjs/toolkit'
import myReducer from './Slice1'

export const store = configureStore({
    reducer: myReducer
})