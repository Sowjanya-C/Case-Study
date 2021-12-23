import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskInterface } from './TaskInterface';
import { TrackTaskStatusService } from './TrackTaskStatusService';

@Component({
  selector: 'app-track-task-status',
  templateUrl: './track-task-status.component.html',
  styleUrls: ['./track-task-status.component.css']
})
export class TrackTaskStatusComponent implements OnInit {
  public tasks!:TaskInterface[];
  form:any;
  status !: string;

  constructor(private ttss : TrackTaskStatusService) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      status:new FormControl("",Validators.compose([Validators.required]))
    });
  }
  onSubmit(task:any) {
    this.ttss.trackTaskStatus(task.status).subscribe(data=>this.tasks=data)
    
  }

}
