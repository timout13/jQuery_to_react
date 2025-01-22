import { configureStore } from '@reduxjs/toolkit'
import formReducer from './slices/formSlice.js';
export default configureStore({
    reducer: {
        form: formReducer,
    }
})