import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { UpdateInterface } from "./updateInterface";

@Injectable({ providedIn: 'root' })

export class UpdatePriorityService {
    constructor(private http:HttpClient) { }
    updatePriority(taskID:number,priority:string):Observable<UpdateInterface[]>{
    return this.http.get<UpdateInterface[]>("http://localhost:8080/taskid/"+taskID+"/priority/"+priority);
    }
}