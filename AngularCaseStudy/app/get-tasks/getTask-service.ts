import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { TaskInterface } from "./task";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class GetTaskService{
    private url : string = "http://localhost:8080/tasks";

    constructor(private http:HttpClient){}

    getTasks(): Observable<TaskInterface[]>{
        return this.http.get<TaskInterface[]>(this.url)
    }
}