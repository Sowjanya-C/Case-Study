import { Component, OnInit } from '@angular/core';
import { DeleteTaskInterface } from './DeleteTaskInterface';
import { DeleteTaskService } from './DeleteTaskService';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css']
})
export class DeleteTaskComponent implements OnInit {
  public tasks!:DeleteTaskInterface[];
  form:any;
  taskID!:number;

  constructor(private dts : DeleteTaskService) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      taskID:new FormControl("",Validators.compose([Validators.required]))
    });
  }
  onSubmit(task:any) {
    alert("Task Deleted");
    this.dts.deleteTask(task.taskID).subscribe(data=>this.tasks=data)
  
  }

}
