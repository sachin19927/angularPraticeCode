import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-meter',
  templateUrl: './meter.component.html',
  styleUrls: ['./meter.component.scss']
})
export class MeterComponent implements OnInit {

  @Input('usrDetail') userDetail!:[{name:string,mtr_status:string,mtr_type:string,installedDate:Date,city:string,state:string,phoneNo:number,pincode:number}];

  constructor() { }

  ngOnInit(): void {
  }
  user!: MeterUser;

}

interface MeterUser {
  name: string; mtr_status: boolean; mtr_type: string; installedDate: Date; city: string;
  state: string; phoneNo: string; pincode: string;
}

