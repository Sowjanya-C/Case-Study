import axios from "axios";
import React, { Component } from "react";

class AdminLogin extends Component {
    constructor(props){
        super(props)
        this.state = {
            users :[],
            userID:'',
            userName:'',
            password:'',
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
        axios.get("http://localhost:8080/username/"+this.state.userName+"/password/"+this.state.password)
        .then(response => {
            this.setState({users:response.data})
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })

    }

    render(){
        const {userName,password,users} = this.state
        return (
            <div>
                
            <div className="login-wrapper" >
                <div  className="card">
                    <div className="card-body">
                        <form className="form-signin" onSubmit={this.submitHandler}>
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        
        <input type="text" className="form-control" name="userName" value={userName} placeholder="User Name" onChange={this.changeHandler} required/>
        
        <input type="password" className="form-control" name="password" value={password} placeholder="Password" onChange={this.changeHandler} required/>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
            {
                    users.map( user =>
                        <h5>ID : {user.userID}</h5>
                    )
                }
            </div>
           
        )
    }
}
export default AdminLogin