import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    firstname: '',
    lastname: '',
    birthday: null,
    startday: null,
    street:'',
    city:'',
    state: null,
    zipcode:undefined,
    department:null,
    data_states:[],
    data_departements:[],
    modal:false,
    error:false
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
        },
        reset: (state) => {
            const modalState = state.modal;
            Object.assign(state, { ...initialState, modal: modalState });
}
    },
});

export const {  update,reset } = formSlice.actions;

export default formSlice.reducer;