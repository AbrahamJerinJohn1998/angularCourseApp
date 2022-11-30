import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCoursesComponent } from './add-courses/add-courses.component';
import { ViewCoursesComponent } from './view-courses/view-courses.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
const myRoute:Routes=[
  {
    path:"",
    component:AddCoursesComponent
  },
  {
    path:"viewcourses",
    component:ViewCoursesComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,
    AddCoursesComponent,
    ViewCoursesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
