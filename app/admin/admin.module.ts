import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminAddBookComponent } from './admin-add-book/admin-add-book.component';
import { RouterModule, Routes } from '@angular/router';
import { LibrarymemberComponent } from './librarymember/librarymember.component';

const adminRoutes:Routes =[
{
  path:'',
  component:AdminDashboardComponent,
  children:[
    {path:'addbook',
     component:AdminAddBookComponent
   },
   {
    path:'members',
    component:LibrarymemberComponent
   }
  ]
}

];
//localhost:4200/admin/

@NgModule({
  declarations: [
   
  
    AdminDashboardComponent,
           AdminAddBookComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AdminModule { }
