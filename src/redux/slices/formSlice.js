import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    firstname: 'test',
    lastname: '',
    birthday: '',
    startday: '',
    street:'',
    city:'',
    state:'',
    data_states:[],
    data_departements:[],
    zipcode:null,
    departement:null,
    modal:false
};

// For token

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        update:(state, action)=>{
            Object.keys(action.payload).forEach((key) => {
                if (state.hasOwnProperty(key)) {
                    state[key] = action.payload[key];
                }
            });
        }
    },
});

export const {  update } = formSlice.actions;

export default formSlice.reducer;