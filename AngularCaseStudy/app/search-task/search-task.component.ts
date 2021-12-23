import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchTaskService } from './SearchTaskService';
import { TaskInterface } from './TaskInterface';


@Component({
  selector: 'app-search-task',
  templateUrl: './search-task.component.html',
  styleUrls: ['./search-task.component.css']
})
export class SearchTaskComponent implements OnInit {
  public tasks!:TaskInterface[];
  form:any;
  taskID!:number;

  constructor(private sts : SearchTaskService) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      taskID:new FormControl("",Validators.compose([Validators.required]))
    });
  }
  onSubmit(task:any) {
    this.sts.searchTask(task.taskID).subscribe(data=>this.tasks=data)
    
  }
}
