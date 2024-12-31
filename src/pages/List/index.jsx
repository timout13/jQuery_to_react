import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import { useState } from 'react';
function List() {
    DataTable.use(DT);
    const [tableData, setTableData] = useState([
        [
            'Tiger Nixon',
            'System Architect',
            'Edinburgh',
            '5421',
            '2011-04-25',
            '$320,800',
        ],
        [
            'Garrett Winters',
            'Accountant',
            'Tokyo',
            '8422',
            '2011-07-25',
            '$170,750',
        ],
        [
            'Ashton Cox',
            'Junior Technical Author',
            'San Francisco',
            '1562',
            '2009-01-12',
            '$86,000',
        ],
        [
            'Cedric Kelly',
            'Senior Javascript Developer',
            'Edinburgh',
            '6224',
            '2012-03-29',
            '$433,060',
        ],[
            'Cedric Kelly',
            'Senior Javascript Developer',
            'Edinburgh',
            '6224',
            '2012-03-29',
            '$433,060',
        ],[
            'Cedric Kelly',
            'Senior Javascript Developer',
            'Edinburgh',
            '6224',
            '2012-03-29',
            '$433,060',
        ],[
            'Cedric Kelly',
            'Senior Javascript Developer',
            'Edinburgh',
            '6224',
            '2012-03-29',
            '$433,060',
        ],[
            'Cedric Kelly',
            'Senior Javascript Developer',
            'Edinburgh',
            '6224',
            '2012-03-29',
            '$433,060',
        ],[
            'Cedric Kelly',
            'Senior Javascript Developer',
            'Edinburgh',
            '6224',
            '2012-03-29',
            '$433,060',
        ],[
            'Cedric Kelly',
            'Senior Javascript Developer',
            'Edinburgh',
            '6224',
            '2012-03-29',
            '$433,060',
        ],[
            'Cedric Kelly',
            'Senior Javascript Developer',
            'Edinburgh',
            '6224',
            '2012-03-29',
            '$433,060',
        ],[
            'Cedric Kelly',
            'Senior Javascript Developer',
            'Edinburgh',
            '6224',
            '2012-03-29',
            '$433,060',
        ],
    ]);
    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <DataTable data={tableData} >
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Extn.</th>
                    <th>Start date</th>
                    <th>Salary</th>
                </tr>
                </thead>
            </DataTable>
            <a href="/">Home</a>
        </div>
    );
}

export default List
