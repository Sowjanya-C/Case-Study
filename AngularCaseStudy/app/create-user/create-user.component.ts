import { Component, OnInit } from '@angular/core';
import { postData } from './user';
import { UserCreateService } from './UserCreateService';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  form:any;
  userID!: number;
	userName!: string;
	email!: string;
	firstName!: string;
	lastName!: string;
	contactNumber!: number;
	role !: string;
  isActive !: Boolean;
	dob!: string;
	createdOn!: string;
	password!: string;

  data !:string;
  posData!:postData;
  public users:any=[];


  constructor(private userCreateService : UserCreateService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      userID : new FormControl("",Validators.compose([Validators.required])),
      userName : new FormControl("",Validators.compose([Validators.required])),
      email : new FormControl("",Validators.compose([Validators.required])),
      firstName : new FormControl(""),
      lastName : new FormControl(""),
      contactNumber : new FormControl(""),
      role : new FormControl(""),
      isActive : new FormControl(""),
      dob: new FormControl(""),
      createdOn : new FormControl("",Validators.compose([Validators.required])),
      password : new FormControl("",Validators.compose([Validators.required]))
    });
  }
  onSubmit(user:any){
    console.log(user);
    this.posData = new postData();
    this.posData.userID = user.userID;
    this.posData.userName = user.userName;
    this.posData.email = user.email;
    this.posData.firstName = user.firstName;
    this.posData.lastName = user.lastName;
    this.posData.contactNumber = user.contactNumber;
    this.posData.role = user.role;
    this.posData.isActive = user.isActive;
    this.posData.dob = user.dob;
    this.posData.createdOn = user.createdOn;
    this.posData.password = user.password;
    console.log(this.posData);
    this.userCreateService.addUser(this.posData).subscribe((data)=>{
      if(data == true)
      {
        alert("User not created");
      }
      else
      {
      alert("User Created Successfully");
      }

    })
  }


}
