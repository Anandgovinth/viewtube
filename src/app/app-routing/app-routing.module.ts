import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MidComponent } from '../mid/mid.component';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from '../shell/shell.component';
import { UploadComponent } from '../upload/upload.component';
import { LiveComponent } from '../live/live.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../auth.guard';


const routes: Routes = [{
  path:"",
  component:ShellComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
  path:"videocall",
  children:[{
    path:"",
    component:MidComponent
  },{
    path:"upload",
    canActivate:[AuthGuard],
    component:UploadComponent
  },{
    path:"live",
    component:LiveComponent
  }]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

