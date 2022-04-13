import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Repo } from './models/repo';
import { ReposService } from './services/repos.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'cciAssessment';
  constructor(private reposervice : ReposService){}


  ngOnInit(){

  }

  
}
