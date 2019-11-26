import React from 'react'
import { render } from 'react-dom'
import PageEmployeesList from  './PageEmployeesList'
import PageEmployee from './PageEmployee'

class Employees extends React.Component{

    constructor()
    {
        super();

    }
    


    render(){
        return(
        <div>
            <PageEmployeesList />
            <PageEmployee  />
        </div>
        );
    }


}
export default Employees

  