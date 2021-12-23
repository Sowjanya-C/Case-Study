import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { postData } from "./task";


@Injectable({
    providedIn:'root'
})
export class TaskCreateService{
    postUrl : string = "http://localhost:8080/createTask";
    httpOptions = {
        headers : new HttpHeaders({
            'Content-Type': 'application/json', 'Authorization': 'my-auth-token'
        })
    };
    constructor(private httpClient : HttpClient){}

    addTask(data: postData){
        return this.httpClient.post(this.postUrl, data, this.httpOptions)
    }
}