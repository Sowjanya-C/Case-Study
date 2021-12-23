import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateTaskComponent } from './create-task/create-task.component';
import { GetTasksComponent } from './get-tasks/get-tasks.component';
import { UpdatePriorityComponent } from './update-priority/update-priority.component';
import { AssignTaskComponent } from './assign-task/assign-task.component';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';
import { SearchTaskComponent } from './search-task/search-task.component';
import { TrackTaskStatusComponent } from './track-task-status/track-task-status.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { GetUsersComponent } from './get-users/get-users.component';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    CreateTaskComponent,
    GetTasksComponent,
    UpdatePriorityComponent,
    AssignTaskComponent,
    AddNotesComponent,
    AddBookmarkComponent,
    SearchTaskComponent,
    TrackTaskStatusComponent,
    HomePageComponent,
    DeleteTaskComponent,
    GetUsersComponent,
    CreateUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
