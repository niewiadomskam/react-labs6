import React from 'react'
import { withRouter } from 'react-router-dom'


class PageEmployee extends React.Component{

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
        const newEmployee = {
            isActive: this.state.isActive,
            age: this.state.age,
            name: this.state.name,
            company: this.state.company,
            email: this.state.email
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
          }).catch((err)=>console.log(err)); 
          this.props.history.push('/');

    }
    Cancel(e){        
    e.preventDefault();
    this.props.history.push('/')
    }

render(){
    return(
        <div style={{border : 'solid', borderColor: 'blue', borderWidth: 'thin', padding: '1em', margin: '1em', textAlign: 'center'}}>
        <form>
            <div style={{margin: '10px'}}>
            <label>Name:
            <input type="text" defaultValue={this.state.name} onChange={this.NameChange} />
            </label>
            <br/>
            </div>
            <div style={{margin: '10px'}}>
            <label>Age:
                <input typeof="number" defaultValue={this.state.age} onChange={this.AgeChange} />
            </label>
            <br/>
            </div>
            <div style={{margin: '10px'}}>
            <label>Comapny: 
                <input typeof="text" defaultValue={this.state.company} onChange={this.CompanyChange} />
            </label>
            <br/>
            </div>
            <div style={{margin: '10px'}}>
            <label>Email: 
                <input typeof="text" defaultValue={this.state.email} onChange={this.EmailChange} />
            </label>
            <br/>
            </div>
            <div style={{margin: '10px'}}>
            <label>Is active:
                <input type="checkbox" defaultChecked onChange={this.IsActiveChange} />
            </label>
            <br/>
            </div>
            <button onClick={this.Submit}>Submit</button>
            <button onClick={this.Cancel}>Cancel</button>
        </form>
        </div>
    );
}
}
export default withRouter(PageEmployee)