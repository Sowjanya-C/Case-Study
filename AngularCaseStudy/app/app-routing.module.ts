import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AssignTaskComponent } from './assign-task/assign-task.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { GetTasksComponent } from './get-tasks/get-tasks.component';
import { GetUsersComponent } from './get-users/get-users.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchTaskComponent } from './search-task/search-task.component';
import { TrackTaskStatusComponent } from './track-task-status/track-task-status.component';
import { UpdatePriorityComponent } from './update-priority/update-priority.component';

const routes: Routes = [
  {path:'', component:AdminLoginComponent},
  {path:'home', component:HomePageComponent},
  {path:'createTask', component:CreateTaskComponent},
  {path:'getAllTasks', component:GetTasksComponent},
  {path:'assignTask', component:AssignTaskComponent},
  {path:'updatePriority', component:UpdatePriorityComponent},
  {path:'searchTask', component:SearchTaskComponent},
  {path:'addNotes',component:AddNotesComponent},
  {path:'addBookmarks', component:AddBookmarkComponent},
  {path:'trackTaskStatus', component:TrackTaskStatusComponent},
  {path:'deleteTask', component:DeleteTaskComponent},
  {path:'getAllUsers', component:GetUsersComponent},
  {path:'createUser', component:CreateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
