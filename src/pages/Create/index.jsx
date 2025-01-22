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
import {update} from "../../redux/slices/formSlice.js";
import Tools from "../../utils/Tools.js";



function Create() {
    const state_form = useSelector(state=> state.form);
    const dispatch = useDispatch();
    useEffect(() => {
        states && dispatch(update({data_states: states}));
        departements && dispatch(update({data_departements: departements}));
    }, []);
    const [startDate, setStartDate] = useState(new Date());
    const [birthDate, setbirthDate] = useState(new Date());
    const [selectedOption, setSelectedOption] = useState(null);
    console.log(states);
    const stateOptions = state_form.data_states.map(state=> {
        return {value: state.abbreviation, label: state.name}
    });
    const departementOptions = state_form.data_departements.map(departement=> {
        return {value: departement.value, label: departement.label}
    });
    const years = range(1990, getYear(new Date()) + 10, 1);

    const getBackToToday = ({e,changeYear, changeMonth,})=>{
        e.preventDefault();
        const today = new Date();
        changeYear(getYear(today));
        changeMonth(getMonth(today));
    }
    return (
        <>
            <div className="title">
                <h1>HRnet</h1>
                <p>{state_form.firstname}</p>
            </div>
            <button onClick={()=>dispatch(update({firstname:'Lisa'}))}>click</button>
            <div className="container">
                <a href="/list">View Current Employees</a>
                <h2>Create Employee</h2>
                <form action="#" id="create-employee">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name"/>

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name"/>

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <DatePicker showIcon locale={fr} dateFormat="dd/mm/yyyy" selected={birthDate}
                                onChange={(date) => setbirthDate(date)}></DatePicker>
                    <label htmlFor="start-date">Start Date</label>
                    <DatePicker
                        name={"start_day"}
                        showIcon
                        className="custom-input-style"
                        dateFormat="dd/MM/yyyy"
                        renderCustomHeader={(props) => (
                            <DatepickerCustomHeader
                                {...props}
                                getBackToToday={getBackToToday}
                                years={years}
                                months={months}
                            />
                        )}
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                    />
                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text"/>

                        <label htmlFor="city">City</label>
                        <input id="city" type="text"/>

                        <label htmlFor="state">State</label>
                        <Select
                            defaultValue={stateOptions.find(option => option.value === state_form.state) || null}
                            onChange={(option) => dispatch(update({ state: option.value }))}//dispatch update({state: abr }) state.abbreviation
                            options={stateOptions}
                            isSearchable={false}
                            name="state"
                            value={stateOptions.find(option => option.value === state_form.state) || null}
                        />

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number"/>
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    <Select
                        defaultValue={departementOptions.find(option => option.value === state_form.departement) || null}
                        onChange={(option) => dispatch(update({ departement: option.value }))}
                        options={departementOptions}
                        isSearchable={false}
                        name="departement"
                        value={departementOptions.find(option => option.value === state_form.departement) || null}
                    />
                </form>
                <button id="saveEmployee">Save</button>
            </div>
            <Modal isOpen={state_form.modal} onClose={() => dispatch(update({modal:false}))}>
                <p>Employee Created!</p>
            </Modal>
            <button onClick={() => dispatch(update({modal:true}))}>ouvrir</button>
        </>
    );
}

export default Create
