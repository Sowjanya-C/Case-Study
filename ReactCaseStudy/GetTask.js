import React, { Component } from "react";
import axios from "axios";

class GetTask extends Component{
     
     
    constructor(props){
        super(props)
        this.state ={
            tasks :[]
        }
    
    }
    componentDidMount(){
        axios.get('http://localhost:8080/tasks')
        .then(response=>{
            this.setState({tasks:response.data})
            console.log(response.data)
        })
    
    }
    render(){

        const {tasks} = this.state

        return(
            <div>
        <table className="table" >
              <thead className="thead-light">
                  <tr>
                      <th scope="col">Task ID</th>
                      <th scope="col">Owner ID</th>
                      <th scope="col">Creator ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Status</th>
                      <th scope="col">Priority</th>
                      <th scope="col">IsBookmarked</th>
                      <th scope="col">Notes</th>
                      <th scope="col">Created On</th>
                      <th scope="col">Status Changed on</th> 
                  </tr> 
              </thead>
            <tbody>
            {
                tasks.map(task => 
              <tr>
                  <td>{task.taskID}</td>
                  <td>{task.ownerID}</td>
                  <td>{task.creatorID}</td>
                  <td>{task.name}</td>
                  <td>{task.description}</td>
                  <td>{task.status}</td>
                  <td>{task.priority}</td>
                  <td>{task.isBookmarked.toString()}</td>
                  <td>{task.notes}</td>
                  <td>{task.createdOn}</td>
                  <td>{task.statusChangedOn}</td>
              </tr>
                )}
            </tbody>

        </table>       
    </div>

        )
    }
    
}
export default GetTask;