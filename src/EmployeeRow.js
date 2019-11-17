import React from 'react'

class EmmployeeRow extends React.Component{
    constructor(props){
        super(props);
        this.DeleteEmployee = this.DeleteEmployee.bind(this);
        this.state={
            isDeleting:false
        }
    }

    DeleteEmployee(e)
    {
        this.setState({isDeleting:true});
        
        let id = e.target.value;
        fetch('http://localhost:3000/employees/'+id, {
            method: 'DELETE',
            headers: {'content-type': 'application/json'},
          }).then(() => this.setState({isDeleting: false}) )
          .then(() => this.props.fetchNewData())
        
    }


    render(){
        return(
            <div>
                {this.state.isDeleting? 'Deleting' :
                <div>
                            <label>Id:</label>
                            < div id="employee_id">{this.props.id}</div>
                            <label>Name:</label>
                            <div id="employee_Name">{this.props.name}</div>
                            <label>Age:</label>
                            <div id="employee_Age">{this.props.age}</div>
                            <label>Company:</label>
                            <div id="employee_company">{this.props.company}</div>
                            <label>IsActive:</label>
                            <div id="employee_Isactive">{this.props.isActive}</div>
                            <button value={this.props.id} onClick={e=>this.DeleteEmployee(e)}>Delete</button>
                <br/>
                <br/>
                        </div> }
            
                        </div>
        );
    }

}

export default EmmployeeRow
