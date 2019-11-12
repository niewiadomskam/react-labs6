import React from 'react'
import { render } from 'react-dom'

class AllEmployees extends React.Component{

    constructor()
    {
        super();
        this.state={
            employees : [],
            isLoading : true,
        };
    }

    componentDidMount(){
        this.setState({isLoading : true});
        fetch('//localhost:3000/employees')
        .then(results =>{
            return results.json();
        }).then(data =>
            {
            let employees = data.map((empl)=>{
                return(
                    <div>
                        <label>Id:</label>
                        < div id="employee_id">{empl._id}</div>
                        <label>Name:</label>
                        <div id="employee_Name">{empl.name}</div>
                        <label>Company:</label>
                        <div id="employee_company">{empl.company}</div>
                        <div className="clearfix" />
                    </div>
                )
            })
            this.setState({employees : employees, isLoading: false})
           }
        )
    }
render(){
    return(
        <div style={{border : 'solid', borderColor: 'pink', borderWidth: 'thin', padding: '1em', margin: '1em'}}>
        <div>
            {this.state.isLoading? 'Loading ....' : this.state.employees }
        </div>
        </div>
    );
}
}
export default AllEmployees