import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactviewComponent } from './user/contactview/contactview.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { DisplayComponent } from './user/display/display.component';

import { GetallContactsComponent } from './user/getall-contacts/getall-contacts.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [


    { path : 'signup', component : RegisterComponent},
    { path : 'login', component : LoginComponent},


    { path: 'dashboard', component:DashboardComponent,
    children:[
      { path:'',redirectTo:"/dashboard/contacts",pathMatch:'full'},
      { path:'contacts',component:GetallContactsComponent },
      { path:'contactview/:userId',component:ContactviewComponent}






    ]
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
