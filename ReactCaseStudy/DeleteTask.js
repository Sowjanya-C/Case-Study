import axios from "axios";
import React, { Component } from "react";

class DeleteTask extends Component {
    constructor(props){
        super(props)
        this.state = {
            taskID:''
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
        axios.get("http://localhost:8080/task/"+this.state.taskID,this.state)
        .then(response => {
            console.log(response)
            
        })
        .catch(error => {
            console.log(error)
         
        })
    }

    render(){
        const {taskID} = this.state
        return (
            <div className="login-wrapper" >
                <div  className="card">
                    <div className="card-body">
                        <form className="form-signin" onSubmit={this.submitHandler}>
                            <div>
                                <input className="form-control" type="number" name="taskID" value={taskID} onChange={this.changeHandler} placeholder="Task ID" required/>
                            </div>
                            
                            <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default DeleteTask