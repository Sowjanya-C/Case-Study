import axios from "axios";
import React, { Component } from "react";

class UpdatePriority extends Component {
    constructor(props){
        super(props)
        this.state = {
            taskID:'',
            priority:'',
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
        axios.get("http://localhost:8080/taskid/"+this.state.taskID+"/priority/"+this.state.priority,this.state)
        .then(response => {
            console.log(response)
            alert("Priority updated to "+this.state.priority)
        })
        .catch(error => {
            console.log(error)
            alert("Priority not updated")
        })
    }

    render(){
        const {taskID,priority} = this.state
        return (
            <div className="login-wrapper" >
                <div  className="card">
                    <div className="card-body">
                        <form className="form-signin" onSubmit={this.submitHandler}>
                            <div>
                                <input className="form-control" type="number" name="taskID" value={taskID} onChange={this.changeHandler} placeholder="Task ID" required/>
                            </div>
                            
                            <div>
                            Priority :
                            <select className="form-control" name="priority" value={priority} onChange={this.changeHandler} >
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>
                            </div>
                            
                            <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default UpdatePriority