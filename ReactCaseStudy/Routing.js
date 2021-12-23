import React from "react";
import { Route,Link, BrowserRouter as Router, Routes} from "react-router-dom";
import CreateTask from "./CreateTask";
import GetTask from "./GetTask";
import UpdatePriority from "./UpdatePriority";
import DeleteTask from "./DeleteTask";
import AssignTask from "./AssignTask";
import SearchTask from "./SearchTask";
import TrackTask from "./TrackTask";
import AdminLogin from "./AdminLogin";

const route = (
    <Router>
    <div>
        <ul className="nav nav-pills">
            <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/createTask">Create Task</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/getAllTasks">View All Tasks</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/updatePriority">Update Priority</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/assignTask">Assign Task</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/searchTask">Search Task</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/trackTask">Track Task</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/deleteTask">Delete Task</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/login">Log Out</Link>
            </li>
           
        </ul>
        <Routes>
            <Route path="/login" element={<AdminLogin/>}/>
            <Route path="/createTask" element={<CreateTask/>}/>
            <Route path="/getAllTasks" element={<GetTask/>}/>
            <Route path="/updatePriority" element={<UpdatePriority/>}/>
            <Route path="/deleteTask" element={<DeleteTask/>}/>
            <Route path="/assignTask" element={<AssignTask/>}/>
            <Route path="/searchTask" element={<SearchTask/>}/>
            <Route path="/trackTask"  element= {<TrackTask/>}/>
        </Routes>
    </div>
</Router>

)
export default route