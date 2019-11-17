import React from 'react'
import { render } from 'react-dom'
import AllEmployees from  './AllEmployees'
import AddEmployee from './AddEmployee'
import { callbackify } from 'util';

class Employees extends React.Component{

    constructor()
    {
        super();

        this.ReloadEmployeesCallback = this.ReloadEmployeesCallback.bind(this);
        this._child = React.createRef();


        this.state={
            ReloadEmployees : false,
        }
    }
    ReloadEmployeesCallback(e)
    {
        console.log('relaod callback');
        this._child.current.FetchDataFromApi(); 
    }


    render(){
        return(
        <div>
            <AllEmployees ref={this._child} />
            <AddEmployee ReloadEmployeesCallback={this.ReloadEmployeesCallback} />
        </div>
        );
    }


}
export default Employees

  