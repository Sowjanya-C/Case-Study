import axios from "axios";
import React, { Component } from "react";

class CreateTask extends Component {
    constructor(props){
        super(props)
        this.state = {
            taskID:'',
            ownerID:'',
            creator:'',
            name:'',
            description:'',
            status:'',
            priority:'',
            isBookmarked:'',
            createdOn:'',
            statusChangedOn:''
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
        axios.post('http://localhost:8080/createTask',this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render(){
        const {taskID,ownerID,creatorID,name,description,status,priority,notes,isBookmarked,createdOn,statusChangedOn} = this.state
        return (
            <div className="login-wrapper" >
                <div  className="card">
                    <div className="card-body">
                        <form className="form-signin" onSubmit={this.submitHandler}>
                            <div>
                                <input className="form-control" type="number" name="taskID" value={taskID} onChange={this.changeHandler} placeholder="Task ID" required/>
                            </div>
                            <div>
                                <input className="form-control" type="number" name="ownerID" value={ownerID} onChange={this.changeHandler} placeholder="Owner ID"/>
                            </div>
                            <div>
                                <input className="form-control" type="number" name="creatorID" value={creatorID} onChange={this.changeHandler} placeholder="Creator ID"/>
                            </div>
                            <div>
                                <input className="form-control" type="text" name="name" value={name} onChange={this.changeHandler} placeholder="Task Name"/>
                            </div>
                            <div>
                                <textarea className="form-control" type="text" name="description" value={description} onChange={this.changeHandler} placeholder="Description"></textarea>
                            </div>
                            <div>
                            Status : 
                                <select className="form-control" name="status" value={status} onChange={this.changeHandler} >
                                    <option value="InProgress">InProgress</option>
                                    <option value="OnHold">OnHold</option>
                                    <option value="Cancelled">Cancelled</option>
                                    <option value="Closed">Closed</option>
                                </select>
                            </div>
                            <div>
                            Priority :
                            <select className="form-control" name="priority" value={priority} onChange={this.changeHandler} >
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>
                            </div>
                            <div>
                                <textarea className="form-control" type="text" name="notes" value={notes} onChange={this.changeHandler} placeholder="Notes"></textarea>
                            </div>
                            <div>
                                IsBookmarked :
                                <select className="form-control" name="isBookmarked" value={isBookmarked} onChange={this.changeHandler} >
                                <option value="True">True</option>
                                <option value="False">False</option>
                                </select>
                            </div>
                            <div>
                                Created On :
                                <input className="form-control" type="datetime-local" name="createdOn" value={createdOn} onChange={this.changeHandler} />
                            </div>
                            <div>
                                Status Changed On :
                                <input className="form-control" type="datetime-local" name="statusChangedOn" value={statusChangedOn} onChange={this.changeHandler} />
                            </div>
                            <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default CreateTask