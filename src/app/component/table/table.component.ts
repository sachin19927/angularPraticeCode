import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {


  @Input('biodata') personalDetail!:{name:string,DOB:Date,city:string,state:string,contact1:number,contact2:number};	

  constructor() { }

  ngOnInit(): void {
  }

  
  
}
