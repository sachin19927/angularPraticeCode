import { formatDate } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demoAngular';
  myDate = Date;

  // meterDetailLt=[{"name":"Bindisha","city":"RAJ" , "type":"LT"},
  //               {"name":"China","city":"RAJ" , "type":"LT"}]

  //               meterDetailHt=[{"name":"Bindisha","city":"RAJ" , "type":"HT"},
  //               {"name":"China","city":"RAJ" , "type":"HT"}]

  // {name:string,mtr_status:boolean,mtr_type:string,installedDate:Date,
  //   city:string,state:string,phoneNo:number,pincode:number};	

  meterDetailLt = [{"name":"METER1", "mtr_status":true ,"mtr_type":"LT","installedDate":new Date(),"city":"Mumbai",
                  "state":"Maharashtra", "phoneNo":9632189577, "pincode":400078}]

  meterDetailHt = [{"name":"METER2", "mtr_status":false ,"mtr_type":"HT","installedDate":new Date(),"city":"Mumbai",
                  "state":"Maharashtra", "phoneNo":9632189577, "pincode":400078}]


}
