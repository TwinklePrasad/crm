import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { UserRightComponent } from './user-right/user-right.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule, MatIconModule, MatSidenavModule, MatListModule} from '@angular/material'
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
// import {MatFormFieldModule, MatSuffix,MatLabel, MatPlaceholder, MatPrefix} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import { AddEmployeeComponent } from './user/add-employee/add-employee.component';
import { FormsModule }   from '@angular/forms';
import { EnquiryComponent } from './lead-management/enquiry/enquiry.component';
import { LayoutModule } from '@angular/cdk/layout';
import { EnquiryNavComponent } from './lead-management/enquiry-nav/enquiry-nav.component';
import { HeaderComponent } from './header/header.component';
import { UserEnquiryComponent } from './lead-management/user-enquiry/user-enquiry.component';
 
@NgModule({
  declarations: [
    AppComponent,
    UserRightComponent,
    HomeComponent,
    AddUserComponent,
    AddEmployeeComponent,
    EnquiryComponent,
    EnquiryNavComponent,
    HeaderComponent,
    UserEnquiryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    ReactiveFormsModule,
    
    MatRadioModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    MatGridListModule,
    MatIconModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule 
    
     
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
