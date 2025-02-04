import { useState } from "react";
import { update } from "../redux/slices/formSlice.js";
import {useDispatch, useSelector} from "react-redux";

function InputText({ label, inputId, fieldKey }) {
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const state_form = useSelector(state=> state.form);
    const validateInput = (value) => {
        const sanitizedValue = value.replace(/[^a-zA-ZÀ-ÿ '-]/g, "");
        const trimmedValue = sanitizedValue.trim();

        if (trimmedValue.length < 2) {
            setError("Le champ doit contenir au moins 2 caractères.");
            dispatch(update({ error: true }));
            return null;
        }
        if (trimmedValue.length > 50) {
            setError("Le champ ne peut pas dépasser 50 caractères.");
            dispatch(update({ error: true }));
            return null;
        }

        setError("");
        state_form.error && dispatch(update({ error: false }));
        return trimmedValue;
    };
    const handleChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        const validatedValue = validateInput(value);

        if (validatedValue !== null) {
            dispatch(update({ [fieldKey]: validatedValue }));
        }
    };
    return (
        <div className={'input-wrap'}>
            <label htmlFor={inputId}>{label}</label>
            <input type="text" style={{
                border: error ? "1px solid red" : "1px solid #ccc", }} id={inputId} onChange={(e) => handleChange(e)}/>
            {error && <p style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>{error}</p>}
        </div>
    );
};

export default InputText;