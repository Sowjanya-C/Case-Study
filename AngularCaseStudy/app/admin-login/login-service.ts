import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { LoginInterface } from "./user";


@Injectable({ providedIn: 'root' })

export class LoginService {
    constructor(private http:HttpClient) { }
    login(uname:string,pwd:string):Observable<LoginInterface[]>{
    return this.http.get<LoginInterface[]>("http://localhost:8080/username/"+uname+"/password/"+pwd);
    }
}