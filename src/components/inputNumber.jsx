import { useState } from "react";
import { update } from "../redux/slices/formSlice.js";
import {useDispatch, useSelector} from "react-redux";

function InputNumber({ label, inputId, fieldKey, min = 0, max = 1000000000 }) {
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const state_form = useSelector(state=> state.form);
    const validateInput = (value) => {
        if (!/^\d+$/.test(value)) { // Vérifie si c'est bien un nombre
            setError("Veuillez entrer un nombre valide.");
        }
        const numericValue = Number(value);
        if (!Number.isInteger(numericValue)) {
            setError("Les nombres décimaux ne sont pas autorisés.");
            dispatch(update({ error: true }));
        } else if (numericValue < min) {
            setError(`Le nombre doit être supérieur ou égal à ${min}.`);
            dispatch(update({ error: true }));
        } else if (numericValue > max) {
            setError(`Le nombre ne peut pas dépasser ${max}.`);
            dispatch(update({ error: true }));
        } else{
            setError("");
            state_form.error && dispatch(update({ error: false }));
        }
    };
    const handleChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        dispatch(update({ [fieldKey]: value }));
        validateInput(value);
    };
    return (
        <div className={'input-wrap'}>
            <label htmlFor={inputId}>{label}</label>
            <input value={state_form[fieldKey] ?? ""} type="number" style={{
                border: error ? "1px solid red" : "1px solid #ccc", }} min={min} max={max} step={1} id={inputId} onChange={(e) => handleChange(e)}/>
            {error && <p style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>{error}</p>}
        </div>
    );
};

export default InputNumber;