import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { update } from "../../redux/slices/formSlice.js";
import {useDispatch, useSelector} from "react-redux";
import { fr } from "date-fns/locale";
import DatepickerCustomHeader from "../datepickerCustomHeader.jsx";
import { months } from '@data';
import { getMonth, getYear } from "date-fns";
import range from "lodash/range.js";

function InputDate({ label,inputId, fieldKey, minDate= new Date(1900, 0, 1), maxDate= new Date() }) {
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const state_form = useSelector(state=> state.form);
    const years = range(1990, getYear(new Date()) + 10, 1);

    const getBackToToday = ({e,changeYear, changeMonth,})=>{
        e.preventDefault();
        const today = new Date();
        changeYear(getYear(today));
        changeMonth(getMonth(today));
    }
    const validateDate = (date) => {
        if (!date) {
            setError("Veuillez sélectionner une date.");
            dispatch(update({ error: true }));
        } else if (minDate && date < minDate) {
            setError(`La date doit être après le ${minDate.toLocaleDateString()}.`);
            dispatch(update({ error: true }));
        } else if (maxDate && date > maxDate) {
            setError(`La date doit être avant le ${maxDate.toLocaleDateString()}.`);
            dispatch(update({ error: true }));
        } else {
            setError("");
            state_form.error && dispatch(update({ error: false }));
        }
    };
    const handleChange = (date) => {
        dispatch(update({ [fieldKey]: date }));
        validateDate(date);
    };

    return (
        <div className={'input-wrap'}>
            <label htmlFor={inputId}>{label}</label>
            <DatePicker
                id={inputId}
                name={inputId}
                selected={state_form[fieldKey]}
                onChange={(date)=>handleChange(date)}
                locale={fr}
                dateFormat="dd/MM/yyyy"
                minDate={minDate}
                maxDate={maxDate}
                showYearDropdown
                scrollableYearDropdown
                showIcon={true}
                placeholderText="Sélectionnez une date"
                renderCustomHeader={(props) => (
                    <DatepickerCustomHeader
                        {...props}
                        getBackToToday={getBackToToday}
                        years={years}
                        months={months}
                    />
                )}
                className="custom-input-style"
                style={{
                    border: error ? "1px solid red" : "1px solid #ccc",
                    padding: "5px",
                    display: "block",
                    width: "100%"
                }}
            />
            {error && <p style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>{error}</p>}
        </div>
    );
}

export default InputDate;