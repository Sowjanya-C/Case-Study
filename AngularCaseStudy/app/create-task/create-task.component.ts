import { Component, OnInit } from '@angular/core';
import { postData } from './task';
import { TaskCreateService } from './TaskCreateService';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  form:any;
    taskID! :number;
    ownerID! : number;
    creatorID!: number;
    name !: string;
    description! : string;
    status! : string;
    priority !: string;
    notes !: string;
    isBookmarked !: Boolean;
    createdOn !: string;
    statusChangedOn ! : string;

    data !:string;
    posData!:postData;
    public users:any=[];

  constructor(private taskCreateService : TaskCreateService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      taskID : new FormControl("",Validators.compose([Validators.required])),
      ownerID : new FormControl(""),
      creatorID : new FormControl(""),
      name : new FormControl("",Validators.compose([Validators.required])),
      description : new FormControl(""),
      status : new FormControl(""),
      priority : new FormControl(""),
      notes : new FormControl(""),
      isBookmarked: new FormControl(""),
      createdOn : new FormControl("",Validators.compose([Validators.required])),
      statusChangedOn : new FormControl("")
    });
  }
  onSubmit(task:any){
    console.log(task);
    this.posData = new postData();
    this.posData.taskID = task.taskID;
    this.posData.ownerID = task.ownerID;
    this.posData.creatorID = task.creatorID;
    this.posData.name = task.name;
    this.posData.description = task.description;
    this.posData.status = task.status;
    this.posData.priority = task.priority;
    this.posData.notes = task.notes;
    this.posData.isBookmarked = task.isBookmarked;
    this.posData.createdOn = task.createdOn;
    this.posData.statusChangedOn = task.statusChangedOn;
    console.log(this.posData);
    this.taskCreateService.addTask(this.posData).subscribe((data)=>{
      if(data == true)
        {
          alert("Task not created");
        }
        else
        {
        alert("Task Created Successfully");
        }
    })
  }

}
