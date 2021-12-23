import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginInterface } from './user';
import { LoginService } from './login-service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  public users!:LoginInterface[];
  form:any;
  username!:string;
  password!:string;
  
  constructor(private ls:LoginService) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      username:new FormControl(
      "",
      Validators.compose([Validators.required])
      ),
      password:new FormControl("",Validators.compose([Validators.required]))
      
      });
  }

  onSubmit(user:any) {
    alert("Login Successful!");
    this.ls.login(user.username,user.password).subscribe(data=>this.users=data)
    }
  }

