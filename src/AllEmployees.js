import React from 'react'
import { render } from 'react-dom'

class AllEmployees extends React.Component{

    constructor(props)
    {
        super(props);
        this.FetchDataFromApi = this.FetchDataFromApi.bind(this);
        // this.CheckIfReaload = this.CheckIfReaload.bind(this);
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
                        <div>
                            <label>Id:</label>
                            < div id="employee_id">{empl.id}</div>
                            <label>Name:</label>
                            <div id="employee_Name">{empl.name}</div>
                            <label>Company:</label>
                            <div id="employee_company">{empl.company}</div>
                <br/>
                        </div>
                    )
                })
                this.setState({employees : employees, isLoading: false})
            }
            )

    }
    // CheckIfReaload()
    // {
    //     console.log('check if reload')
    //     console.log(this.props.ReloadCallBack)
    //     if(this.props.ReloadCallBack)
    //     {
    //         this.FetchDataFromApi();
    //     }
    // }

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