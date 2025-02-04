import DataTable from "datatables.net-react";
import DT from "datatables.net";
import {useSelector} from "react-redux";
function List() {
    const root = document.getElementById("root");
    root.classList.add('list');
    DataTable.use(DT);
    const rows = useSelector(state=> state.table.rows);
    return (
        <div className="content">
                <header className="header">
                    <h1>HRnet</h1>
                    <a className="link" href="/">Home &gt;</a>
                </header>
            <div id="employee-div" className="container">
                <DataTable data={rows} className="dataTable">
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
            </div>
        </div>
    );
}

export default List
