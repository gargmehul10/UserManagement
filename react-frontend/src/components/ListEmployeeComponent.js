import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';

class ListEmployeeComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employees: [],
        }

        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);
    }

    editEmployee(id) {
        this.props.history.push(`/update-employee/${id}`);
    }

    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id).then((res) => {

            // remove this from employees list 
            this.setState({
                employees: this.state.employees.filter((employee) => employee.id !== id),
            }) 
        });
    }

    viewEmployee(id) {
        this.props.history.push(`/view-employee/${id}`);
    }

    componentDidMount() {

        EmployeeService.getEmployees().then((res) => {
            this.setState({
                employees: res.data,
            });
        });
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center">Employees List</h1>
                <div className="row">
                    <Link to="/add-employee" className="btn btn-primary"> Add Employee</Link>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map((employee) => 
                                    <tr key={employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                        <td>
                                            <button className="btn btn-info" onClick={() => this.editEmployee(employee.id)}>Update</button>
                                            <button className="btn btn-danger" style={{marginLeft: "10px"}} onClick={() => this.deleteEmployee(employee.id)}>Delete</button> 
                                            <button className="btn btn-info" style={{marginLeft: "10px"}} onClick={() => this.viewEmployee(employee.id)}>View</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;
