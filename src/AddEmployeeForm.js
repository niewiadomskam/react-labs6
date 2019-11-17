import React from 'react'
import { render } from 'react-dom'


class AddEmployeeForm extends React.Component{

    constructor(props)
    {
        super(props);
        this.NameChange = this.NameChange.bind(this);
        this.IsActiveChange = this.IsActiveChange.bind(this);
        this.AgeChange = this.AgeChange.bind(this);
        this.CompanyChange = this.CompanyChange.bind(this);
        this.EmailChange = this.EmailChange.bind(this);
        this.Submit= this.Submit.bind(this);
        this.Cancel=this.Cancel.bind(this);
        this.state={
            name:'',
            isActive : true,
            age : 0,
            company: "",
            email: ""
        }
    }
    NameChange(e){
        this.setState({name : e.target.value});
    }
    IsActiveChange(e){
        this.setState({isActive : e.target.checked});
    }
    AgeChange(e){
        this.setState({age: parseInt(e.target.value)});
    }
    CompanyChange(e){
        this.setState({company: e.target.value});
    }
    EmailChange(e){
        this.setState({email:e.target.value});
    }
    Submit(e){
        e.preventDefault();
        this.props.SubmitForm(this.state);

    }
    Cancel(e){        
    e.preventDefault();
    this.props.CancelForm(e);
    }

render(){
    return(
        <div style={{border : 'solid', borderColor: 'blue', borderWidth: 'thin', padding: '1em', margin: '1em'}}>
        <form>
            <label>Name:
            <input type="text" defaultValue={this.state.name} onChange={this.NameChange} />
            </label>
            <br/>
            <label>Age:
                <input typeof="number" defaultValue={this.state.age} onChange={this.AgeChange} />
            </label>
            <br/>
            <label>Comapny: 
                <input typeof="text" defaultValue={this.state.company} onChange={this.CompanyChange} />
            </label>
            <br/>
            <label>Email: 
                <input typeof="text" defaultValue={this.state.email} onChange={this.EmailChange} />
            </label>
            <br/>
            <label>Is active:
                <input type="checkbox" defaultChecked onChange={this.IsActiveChange} />
            </label>
            <br/>
            <button onClick={this.Submit}>Submit</button>
            <button onClick={this.Cancel}>Cancel</button>
        </form>
        </div>
    );
}
}
export default AddEmployeeForm