import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.scss']
})
export class ServerListComponent implements OnInit {


 @Input('dataList') meter!:{name:string,city:string,type:string};

  constructor() { }

  ngOnInit(): void {
  }

}
