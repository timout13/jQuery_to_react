import { states, departements, months } from '@data';
import {useEffect, useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import { fr } from 'date-fns/locale/fr';
registerLocale('fr', fr)
import Select from 'react-select';
import { getMonth, getYear } from "date-fns";
import range from "lodash/range";
import "react-datepicker/dist/react-datepicker.css";
import {Modal} from "@timout13/oc-modal-library";
import '@timout13/oc-modal-library/dist/index.css';
import DatepickerCustomHeader from "../../components/datepickerCustomHeader.jsx";
import {useDispatch, useSelector} from "react-redux";
import {reset, update} from "../../redux/slices/formSlice.js";
import Tools from "../../utils/Tools.js";
import {addRow} from "../../redux/slices/tableSlice.js";
import InputText from "../../components/inputText.jsx";
import InputNumber from "../../components/inputNumber.jsx";
import InputDate from "../../components/datePicker/inputDate.jsx";
import InputSelect from "../../components/inputSelect.jsx";



function Create() {
    const root = document.getElementById("root");
    root.classList.add('create');
    const state_form = useSelector(state=> state.form);
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    useEffect(() => {
        states && dispatch(update({data_states: states}));
        departements && dispatch(update({data_departements: departements}));
    }, []);
    const stateOptions = state_form.data_states.map(state=> {
        return {value: state.abbreviation, label: state.name}
    });
    const departementOptions = state_form.data_departements.map(departement=> {
        return {value: departement.value, label: departement.label}
    });

    const handleSubmit = (e)=>{
        e.preventDefault();
        let isError = false;
        if(!state_form.birthday || !state_form.startday){
            isError= true ;
        }
        if(!state_form.state || !state_form.department)
            isError= true ;

        if(isError){
            dispatch(update({error:true}));
            setError("Remplissez le formulaire correctement.");
            return;
        }
        setError("");
        const row = {
            firstname: state_form.firstname,
            lastname: state_form.lastname,
            startday: state_form.startday,
            department: state_form.department,
            birthday: state_form.birthday,
            street: state_form.street,
            city: state_form.city,
            state: state_form.state,
            zipcode: state_form.zipcode,
        }
        dispatch(addRow({rows : row}));
        dispatch(update({modal:true}));
        dispatch(reset());
    }
    return (
        <div className="content">
            <header className="header">
                <h1>HRnet</h1>
                <a className={'link'} href="/list">View Current Employees &gt;</a>
            </header>
            <div className="container">
                <h2>Create Employee</h2>
                <form action="#" id="create-employee">
                    <div className={'left'}>
                        <InputText label={'First Name'} inputId={'first-name'} fieldKey={'firstname'} />
                        <InputText label={'Last Name'} inputId={'last-name'} fieldKey={'lastname'} />

                        <InputDate label={'Date of Birth'} inputId={'date-of-birth'} fieldKey={'birthday'} />
                        <InputDate label={'Start Date'} inputId={'start-date'} fieldKey={'startday'} maxDate={new Date(2050, 11, 31)} />
                        <InputSelect label={'Department'} inputId={'department'} fieldKey={'department'} options={departementOptions}/>
                    </div>

                    <fieldset className="address right">
                        <legend>Address</legend>
                        <InputText label={'Street'} inputId={'street'} fieldKey={'street'} />
                        <InputText label={'City'} inputId={'city'} fieldKey={'city'} />

                        <InputSelect label={'State'} inputId={'state'} fieldKey={'state'} options={stateOptions}/>
                        <InputNumber label="Zip Code" inputId="zip-code" fieldKey="zipcode" />
                    </fieldset>
                </form>
                {error && <p style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>{error}</p>}
                <button disabled={state_form.error} id="saveEmployee" onClick={handleSubmit}>Save</button>
            </div>
            <Modal isOpen={state_form.modal} onClose={() => dispatch(update({modal:false}))}>
                <p>Employee Created!</p>
            </Modal>
        </div>
    );
}

export default Create
