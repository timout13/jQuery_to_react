import { createSlice } from "@reduxjs/toolkit";
import {employees} from "@data/employees.js"
const tableSlice = createSlice({
    name: "table",
    initialState: {
        rows: employees,
    },
    reducers: {
        addRow: (state, action) => {
            const row = [
                action.payload.rows.firstname,
                action.payload.rows.lastname,
                action.payload.rows.startday,
                action.payload.rows.department,
                action.payload.rows.birthday,
                action.payload.rows.street,
                action.payload.rows.city,
                action.payload.rows.state,
                action.payload.rows.zipcode,
            ];
            state.rows.push(row);
        },
    },
});

export const { addRow } = tableSlice.actions;
export default tableSlice.reducer;