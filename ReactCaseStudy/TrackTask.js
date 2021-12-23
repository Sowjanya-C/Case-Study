import axios from "axios";
import React, { Component } from "react";

class TrackTask extends Component {
    constructor(props){
        super(props)
        this.state = {
            status:'',
            tasks:[]
        }
        this.changeHandler=this.changeHandler.bind(this);
        this.submitHandler=this.submitHandler.bind(this);
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
        axios.get("http://localhost:8080/status/"+this.state.status,this.state)
        .then(response => {
            this.setState({tasks:response.data})
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render(){
        const {status,tasks} = this.state
        return (
            <div>
            <div className="login-wrapper" >
                <div  className="card">
                    <div className="card-body">
                        <form className="form-signin" onSubmit={this.submitHandler}>
                            
                        <div>
                            Status : 
                                <select className="form-control" name="status" value={status} onChange={this.changeHandler} >
                                    <option value="InProgress">InProgress</option>
                                    <option value="OnHold">OnHold</option>
                                    <option value="Cancelled">Cancelled</option>
                                    <option value="Closed">Closed</option>
                                </select>
                            </div>

                            <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
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
export default TrackTask