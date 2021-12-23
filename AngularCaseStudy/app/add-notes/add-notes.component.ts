import { Component, OnInit } from '@angular/core';
import { AddNotesInterface } from './AddNotesInterface';
import { AddNotesService } from './AddNotesService';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css']
})
export class AddNotesComponent implements OnInit {
  public tasks!:AddNotesInterface[];
  form:any;
  taskID!:number;
  notes!:string;

  constructor(private ans : AddNotesService) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      taskID:new FormControl("",Validators.compose([Validators.required])),
      notes:new FormControl("",Validators.compose([Validators.required]))
    });
  }
  onSubmit(task:any) {
    alert("Notes added Successfully");
    this.ans.addNotes(task.taskID,task.notes).subscribe(data=>this.tasks=data)
  }
}
