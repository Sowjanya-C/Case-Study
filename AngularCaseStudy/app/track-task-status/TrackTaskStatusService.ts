import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { TaskInterface } from "./TaskInterface";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class TrackTaskStatusService{
    constructor(private http:HttpClient){}
    trackTaskStatus(status:string):Observable<TaskInterface[]>{
        return this.http.get<TaskInterface[]>("http://localhost:8080/status/"+status);
    }
}