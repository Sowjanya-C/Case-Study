import { Component, OnInit } from '@angular/core';
import { GetUserService } from './getUser-service';
import { UserInterface } from './user';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {

  public users!:UserInterface[];

  constructor(private getUserService : GetUserService) { }

  ngOnInit(): void {
    this.getUserService.getUsers()
    .subscribe(data => this.users = data)
  }

}
