import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { GalaryComponent } from './galary/galary.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { UserRegiterationComponent } from './user-regiteration/user-regiteration.component';

const routes: Routes = [

  {
    path:"",
    pathMatch:'full',
    redirectTo:'/books'
  },
  {
    path:"books",
    component:BookComponent
  },
  {
    path:"galary",
    component:GalaryComponent
  },
  {
    path:'admin',
    loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule),
    canActivate:[AuthGuard]
    

  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:"register",
    component:UserRegiterationComponent
  },
  {
    path:"**",
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
