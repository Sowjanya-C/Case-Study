import { Component, OnInit } from '@angular/core';
import { UpdateInterface } from './updateInterface';
import { UpdatePriorityService } from './UpdatePriorityService';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-update-priority',
  templateUrl: './update-priority.component.html',
  styleUrls: ['./update-priority.component.css']
})
export class UpdatePriorityComponent implements OnInit {
  public tasks!:UpdateInterface[];
  form:any;
  taskID!:number;
  priority!:string;

  constructor(private ups : UpdatePriorityService) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      taskID:new FormControl("",Validators.compose([Validators.required])),
      priority:new FormControl("",Validators.compose([Validators.required]))
    });
      
  }
  onSubmit(task:any) {
    alert("Priority updated successfully");
    this.ups.updatePriority(task.taskID,task.priority).subscribe(data=>this.tasks=data)
  }


}
