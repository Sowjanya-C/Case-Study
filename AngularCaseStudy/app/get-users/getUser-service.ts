import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { UserInterface } from "./user";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class GetUserService{
    private url : string = "http://localhost:8080/users";

    constructor(private http:HttpClient){}

    getUsers(): Observable<UserInterface[]>{
        return this.http.get<UserInterface[]>(this.url)
    }
}