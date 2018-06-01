import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { InterviewComponent } from './interview/interview.component';


@NgModule({
  declarations: [
    AppComponent,
    RecruiterComponent,
    InterviewComponent
],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
