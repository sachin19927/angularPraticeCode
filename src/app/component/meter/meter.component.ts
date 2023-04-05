import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meter',
  templateUrl: './meter.component.html',
  styleUrls: ['./meter.component.scss']
})
export class MeterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  user!: MeterUser;

  onSubmit(){
    alert(this.user)

  }




}

interface MeterUser {
  name: string; mtr_status: boolean; mtr_type: string; installedDate: Date; city: string;
  state: string; phoneNo: string; pincode: string;
}

