import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.scss']
})
export class ServerListComponent implements OnInit, OnChanges,DoCheck {


 @Input('dataList') meter!:{name:string,city:string,type:string};

 @Input('mtrList') meterDetail!:{name:string,mtr_status:boolean,mtr_type:string,installedDate:Date,city:string,state:string,phoneNo:number,pincode:number};




  ngOnInit(): void {
    console.log('NGonInint Called')
  }



  constructor() {
    console.log('contrustor Called')
   }
  ngDoCheck(): void {
    console.log('do check ')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

}
