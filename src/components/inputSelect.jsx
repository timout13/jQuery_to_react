import { useState } from "react";
import Select from "react-select";
import { update } from "../redux/slices/formSlice.js";
import {useDispatch, useSelector} from "react-redux";

function InputSelect({ label,inputId, fieldKey, options }) {
    const dispatch = useDispatch();
    const [selectedOption, setSelectedOption] = useState(null);
    const state_form = useSelector(state=> state.form);
    const [error, setError] = useState("");

    const isValidOption = (option) => {
        return options.some(opt => opt.value === option?.value);
    };
    const validateSelection = (option) => {
        if (!option) {
            setError("Veuillez sélectionner une option.");
            dispatch(update({ error: true }));
            return null;
        }

        if (!isValidOption(option)) {
            setError("Option invalide. Veuillez en choisir une valide.");
            dispatch(update({ error: true }));
            return null;
        }

        setError("");
        state_form.error && dispatch(update({ error: false }));
        return option;
    };
    const handleChange = (option) => {
        const validatedOption = validateSelection(option);
        if (validatedOption) {
            setSelectedOption(validatedOption);
            dispatch(update({ [fieldKey]: validatedOption.value }));
        }
    };
    const customStyles = {
        control: (provided) => ({
            ...provided,
            border: error ? "1px solid red" : "1px solid #ccc",
            minHeight: "30px",
            height: "30px",
            padding: "0 8px"
        }),
        valueContainer: (provided) => ({
            ...provided,
            height: "30px",
            padding: "0 8px"
        }),
        indicatorsContainer: (provided) => ({
            ...provided,
            height: "30px"
        })
    };
    return (
        <div className={'input-wrap'}>
            <label htmlFor={inputId}>{label}</label>
            <Select
                id={inputId}
                name={inputId}
                value={selectedOption}
                defaultValue={options[0]}
                onChange={handleChange}
                options={options}
                isSearchable={false}
                placeholder="Sélectionnez une option"
                styles={customStyles}
            />
            {error && <p style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>{error}</p>}
        </div>
    );
}

export default InputSelect;