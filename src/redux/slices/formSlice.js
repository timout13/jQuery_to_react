import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    firstname: 'Olive',
    lastname: 'Pétale',
    birthday: '20/02/2006',
    startday: '01/01/202',
    street:'Avenue du Pré',
    city:'Clermont-Ferrand',
    state:'France',
    zipcode:63000,
    departement:'IT',
    data_states:[],
    data_departements:[],
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
        },
        addRow: (state, action) => {
            // Ajoute une nouvelle ligne
            state.rows.push(action.payload);
        },
    },
});

export const {  update } = formSlice.actions;

export default formSlice.reducer;