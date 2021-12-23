import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { DeleteTaskInterface } from "./DeleteTaskInterface";


@Injectable({ providedIn: 'root' })

export class DeleteTaskService {
    constructor(private http:HttpClient) { }
    deleteTask(taskID:number):Observable<DeleteTaskInterface[]>{
    return this.http.get<DeleteTaskInterface[]>("http://localhost:8080/task/"+taskID);
    }
}