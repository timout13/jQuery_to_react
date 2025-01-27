import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import {useSelector} from "react-redux";
function List() {
    DataTable.use(DT);
    const rows = useSelector(state=> state.table.rows);
    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <DataTable data={rows} >
                <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Start Date</th>
                    <th>Department</th>
                    <th>Date of birth</th>
                    <th>Street</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zipcode</th>
                </tr>
                </thead>
            </DataTable>
            <a href="/">Home</a>
        </div>
    );
}

export default List
