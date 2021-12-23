import { Component, OnInit } from '@angular/core';
import { AddBookmarkInterface } from './AddBookmarkInterface';
import { AddBookmarkService } from './AddBookmarkService';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.css']
})
export class AddBookmarkComponent implements OnInit {
  public tasks!:AddBookmarkInterface[];
  form:any;
  taskID!:number;
  isBookmarked!:Boolean;


  constructor(private abs : AddBookmarkService) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      taskID:new FormControl("",Validators.compose([Validators.required])),
      isBookmarked:new FormControl("",Validators.compose([Validators.required]))
    });
  }
  onSubmit(task:any) {
    alert("Bookmark added Successfully");
    this.abs.addBookmark(task.taskID,task.isBookmarked).subscribe(data=>this.tasks=data)
  }

}
