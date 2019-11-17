import React from 'react'
import { render } from 'react-dom'
import AddEmployeeForm from './AddEmployeeForm'

class AddEmployee extends React.Component{

    constructor(props)
    {
        super(props);
        this.AddEmployeeButtonClicked = this.AddEmployeeButtonClicked.bind(this);
        this.CancelForm = this.CancelForm.bind(this);
        this.SubmitForm = this.SubmitForm.bind(this);
        this.state={
            openForm : false,
            isSubmit : false,
        }
    }

    AddEmployeeButtonClicked(e){
        this.setState({openForm : true});

    }

    CancelForm(e){
        this.setState({openForm : false});
    }
    SubmitForm(e){

        this.setState({isSubmit:true});

        const newEmployee = {
          isActive: e.isActive,
          age: e.age,
          name: e.name,
          company: e.company,
          email: e.email
        }
        const newEmployeeStringified = JSON.stringify(newEmployee);

        fetch('http://localhost:3000/employees', {
            method: 'POST',
            headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                      },
            body: newEmployeeStringified
        }).then(function(response) {
            if(response.ok)
            {
                              
            return response.json();
            }
        }).then(function(data) {
            console.log(data);
        }).catch((err)=>console.log(err))       
        this.setState({isSubmit: false});
        this.props.ReloadEmployeesCallback();  
        
    }

render(){
    return(
        <div>
        <div style={{border : 'solid', borderColor: 'blue', borderWidth: 'thin', padding: '1em', margin: '1em'}}>
        <div>
        <button style={{margin: '1em'}} onClick={(e) => this.AddEmployeeButtonClicked(e)}>Add employee</button>
        <div>
            {this.state.openForm? <AddEmployeeForm CancelForm={this.CancelForm} SubmitForm={this.SubmitForm}/> : ''}
        </div>
        <div>
        {this.state.isSubmit? 'Saving...' : ''}
        </div>
        </div>
        </div>
        </div>
    );
}
}
export default AddEmployee