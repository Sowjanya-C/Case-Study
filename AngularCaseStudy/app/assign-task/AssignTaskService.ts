import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { AssignTaskInterface } from "./AssignTaskInterface";

@Injectable({ providedIn: 'root' })

export class AssignTaskService {
    constructor(private http:HttpClient) { }
    assignTask(taskID:number,ownerID:number):Observable<AssignTaskInterface[]>{
    return this.http.get<AssignTaskInterface[]>("http://localhost:8080/taskid/"+taskID+"/userid/"+ownerID);
    }
}