import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit {

  recruiters: any;
  constructor(private http: Http) { }

  ngOnInit() {
    this.getRecruiters();
  }

  getRecruiters() {
    this.http.get('http://localhost:5555/api/recruiters').subscribe(response => {
      this.recruiters = response.json();
    });
  }

}
