import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { AddBookmarkInterface } from "./AddBookmarkInterface";


@Injectable({ providedIn: 'root' })

export class AddBookmarkService {
    constructor(private http:HttpClient) { }
    addBookmark(taskID:number,isBookmarked:Boolean):Observable<AddBookmarkInterface[]>{
    return this.http.get<AddBookmarkInterface[]>("http://localhost:8080/taskid/"+taskID+"/isBookmarked/"+isBookmarked);
    }
}