import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { postData } from "./user";


@Injectable({
    providedIn:'root'
})
export class UserCreateService{
    postUrl : string = "http://localhost:8080/createUser";
    httpOptions = {
        headers : new HttpHeaders({
            'Content-Type': 'application/json', 'Authorization': 'my-auth-token'
        })
    };
    constructor(private httpClient : HttpClient){}

    addUser(data: postData){
        return this.httpClient.post(this.postUrl, data, this.httpOptions)
    }
}