import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCoursesComponent } from './add-courses/add-courses.component';
import { ViewCoursesComponent } from './view-courses/view-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCoursesComponent,
    ViewCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
