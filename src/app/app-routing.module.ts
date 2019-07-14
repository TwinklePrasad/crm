import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRightComponent } from './user-right/user-right.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { AddEmployeeComponent } from './user/add-employee/add-employee.component';
import { EnquiryComponent } from './lead-management/enquiry/enquiry.component';
import { EnquiryNavComponent } from './lead-management/enquiry-nav/enquiry-nav.component';
import { HeaderComponent } from './header/header.component';
import { UserEnquiryComponent } from './lead-management/user-enquiry/user-enquiry.component';


const routes: Routes = [
  
  {path:'',redirectTo:'header',pathMatch:'full'},
  {path:'header',component:HeaderComponent, 
 
children:[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
   
  {
    path:'user-right', component: UserRightComponent
  },
  {path:'lead',component:AddUserComponent},
  {path:'add-user',component:AddEmployeeComponent},
  // {path:'enquiry',component:EnquiryComponent}
  // {path:'enquiry',component:EnquiryNavComponent}
  {path:'enquiry',component:UserEnquiryComponent}
]
},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
