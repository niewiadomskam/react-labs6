import React from 'react'
import { render } from 'react-dom'
import EmployeeRow from './EmployeeRow'
import { Link } from 'react-router-dom'

class PageEmployeesList extends React.Component{

    constructor(props)
    {
        super(props);
        this.FetchDataFromApi = this.FetchDataFromApi.bind(this);
        this.state={
            employees : [],
            isLoading : true,
        };
    }

    componentDidMount(){
        this.FetchDataFromApi()        
    }
    FetchDataFromApi()
    {
        this.setState({isLoading:true})
        fetch('//localhost:3000/employees')
            .then(results =>{
                return results.json();
            }).then(data =>
                {
                    console.log(data);
                let employees = data.map((empl)=>{
                    return(
                        <EmployeeRow name={empl.name} age ={empl.age} company={empl.company} id={empl.id} isActive={empl.isActive} fetchNewData={this.FetchDataFromApi} />
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
        <div>
            <Link to='/new'>
                <button>Create new employee</button>
            </Link>
        </div>
        </div>
    );
}
}
export default PageEmployeesList