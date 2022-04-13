import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ReposService } from '../services/repos.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-view-repos',
  templateUrl: './view-repos.component.html',
  styleUrls: ['./view-repos.component.css']
})
export class ViewReposComponent implements OnInit {

  displayedColumns : string[] = ['total_count','node_id','node_id','name','full_name','private'];
  dataSource! :MatTableDataSource<any>;
  results: any = [];

  constructor(private reposervice : ReposService) { }

  ngOnInit(): void {
    this.reposervice.getrepos().subscribe((response : any) =>{
      this.results = response;
      this.dataSource = new MatTableDataSource (response.items);
      console.log('The Response is: ', response);
    })
  }

  filterData($event : any){
    this.dataSource.filter = $event.target.value;
  }

  onChange($event : any){
   let filterData = _.filter(this.results, (item) =>{
     return item.state.toLowerCase() == $event.value.toLowerCase();
   })
   this.dataSource = new MatTableDataSource(filterData);
  }

}
