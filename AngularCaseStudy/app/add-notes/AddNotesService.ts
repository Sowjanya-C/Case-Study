import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { AddNotesInterface } from "./AddNotesInterface";

@Injectable({ providedIn: 'root' })

export class AddNotesService {
    constructor(private http:HttpClient) { }
    addNotes(taskID:number,notes:string):Observable<AddNotesInterface[]>{
    return this.http.get<AddNotesInterface[]>("http://localhost:8080/taskid/"+taskID+"/notes/"+notes);
    }
}