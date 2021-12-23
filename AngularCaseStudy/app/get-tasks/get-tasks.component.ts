import { Component, OnInit } from '@angular/core';
import { TaskInterface } from './task';
import { GetTaskService } from './getTask-service';

@Component({
  selector: 'app-get-tasks',
  templateUrl: './get-tasks.component.html',
  styleUrls: ['./get-tasks.component.css']
})
export class GetTasksComponent implements OnInit {
  public tasks!:TaskInterface[];

  constructor(private getTaskService:GetTaskService) { }

  ngOnInit(): void {
    this.getTaskService.getTasks()
    .subscribe(data => this.tasks = data)
  }

}
