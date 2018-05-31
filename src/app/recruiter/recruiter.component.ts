import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.css']
})
export class RecruiterComponent implements OnInit {
  recruiter: any;
  constructor(private http: Http) { }

  ngOnInit() {
    this.getRecruiters();
  }

  getRecruiters() {
    this.http.get('http://localhost:5555/api/recruiters').subscribe(response => {
      console.log(response);
    });
  }

}
