import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.scss']
})
export class ServerListComponent implements OnInit {


 @Input('dataList') meter!:{name:string,city:string,type:string};

 @Input('mtrList') meterDetail!:{name:string,mtr_status:boolean,mtr_type:string,installedDate:Date,city:string,state:string,phoneNo:number,pincode:number};	


  constructor() { }

  ngOnInit(): void {
  }

}
