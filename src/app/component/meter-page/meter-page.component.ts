import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meter-page',
  templateUrl: './meter-page.component.html',
  styleUrls: ['./meter-page.component.scss']
})
export class MeterPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userDetail:any=[]

  oddNumbers =[1,3,5,7,9]
  evenNumbers =[2,4,6,8,10]

  odd=false;
  cond=false;


  meterDetailLt = [{"name":"METER1", "mtr_status":true ,"mtr_type":"LT","installedDate":new Date(),"city":"Mumbai",
                  "state":"Maharashtra", "phoneNo":9632189577, "pincode":400078}]

  meterDetailHt = [{"name":"METER2", "mtr_status":false ,"mtr_type":"HT","installedDate":new Date(),"city":"Mumbai",
                  "state":"Maharashtra", "phoneNo":9632189577, "pincode":400078}]





  personalDetail = [
    {"name":"A", "DOB": new Date(), "city":"Mumbai", "state":"MH", "contact1":9632189577,"contact2":9632189532},
    {"name":"B", "DOB": new Date(), "city":"Mumbai", "state":"MH", "contact1":9632189577,"contact2":9632189532},
    {"name":"C", "DOB": new Date(), "city":"Mumbai", "state":"MH", "contact1":9632189577,"contact2":9632189532}

  ]

  getDetail(){
    alert("INSIDE");
  }

onclick(){
  this.meterDetailLt.push({"name":"METER1", "mtr_status":true ,"mtr_type":"LT","installedDate":new Date(),"city":"Mumbai",
  "state":"Maharashtra", "phoneNo":9632189577, "pincode":400078})
}


onSubmitParentFromChild(data:any)
  {
    console.log(data);
    this.userDetail.push(data);
  }


}
