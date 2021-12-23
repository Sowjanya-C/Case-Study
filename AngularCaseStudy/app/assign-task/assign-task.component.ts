import { Component, OnInit } from '@angular/core';
import { AssignTaskInterface } from './AssignTaskInterface';
import { AssignTaskService } from './AssignTaskService';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-assign-task',
  templateUrl: './assign-task.component.html',
  styleUrls: ['./assign-task.component.css']
})
export class AssignTaskComponent implements OnInit {
  public tasks!:AssignTaskInterface[];
  form:any;
  taskID!:number;
  ownerID!:number;

  constructor(private ats : AssignTaskService) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      taskID:new FormControl("",Validators.compose([Validators.required])),
      ownerID:new FormControl("",Validators.compose([Validators.required]))
    });
  }
  onSubmit(task:any) {
    alert("Task assigned successfully");
    this.ats.assignTask(task.taskID,task.ownerID).subscribe(data=>this.tasks=data)
  }

}
