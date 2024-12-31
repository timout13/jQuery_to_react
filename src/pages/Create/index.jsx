import {states} from "../../../data/states.js";
import {useEffect, useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import { fr } from 'date-fns/locale/fr';
registerLocale('fr', fr)
import Select from 'react-select';
const options = [
    { value: 'Sales', label: 'Sales' },
    { value: 'Marketing', label: 'Marketing' },
    { value: 'Engineering', label: 'Engineering' },
    { value: 'Human Resources', label: 'Human Resources' },
    { value: 'Legal', label: 'Legal' },
];

function Create() {
    const [dataStates, setDataStates] = useState([]);
    useEffect(() => {
        states && setDataStates(states);
    }, []);
    const [startDate, setStartDate] = useState(new Date());
    const [birthDate, setbirthDate] = useState(new Date());
    const [selectedOption, setSelectedOption] = useState(null);
    console.log(states);
    console.log(dataStates);
    const stateOptions = dataStates.map(state=> {
        return {value: state.abbreviation, label: state.name}
    })

    return (
        <>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <a href="/list">View Current Employees</a>
                <h2>Create Employee</h2>
                <form action="#" id="create-employee">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name"/>

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name"/>

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <DatePicker showIcon locale={fr} dateFormat="dd/mm/yyyy" selected={birthDate} onChange={(date) => setbirthDate(date)}></DatePicker>
                    <label htmlFor="start-date">Start Date</label>
                    <DatePicker showIcon locale={fr} dateFormat="dd/mm/yyyy" selected={startDate} onChange={(date) => setStartDate(date)}></DatePicker>

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text"/>

                        <label htmlFor="city">City</label>
                        <input id="city" type="text"/>

                        <label htmlFor="state">State</label>
                        <Select
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={stateOptions}
                            isSearchable={false}
                            name="state"
                            value={stateOptions[0]}
                        />

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number"/>
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        isSearchable={false}
                        name="departement"
                        value={options[0]}
                    />
                </form>
                <button id="saveEmployee">Save</button>
            </div>
            <div id="confirmation" className="modal">Employee Created!</div>
        </>
    );
}

export default Create
