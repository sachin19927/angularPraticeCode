import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demoAngular';
  env = environment.title;

  getColor(){
    if(this.env==='DEV')
    return 'blue'
    else
    return 'yellow';
  }


  personalDetail = [
    {"name":"A", "DOB": new Date(), "city":"Mumbai", "state":"MH", "contact1":9632189577,"contact2":9632189532},
    {"name":"B", "DOB": new Date(), "city":"Mumbai", "state":"MH", "contact1":9632189577,"contact2":9632189532},
    {"name":"C", "DOB": new Date(), "city":"Mumbai", "state":"MH", "contact1":9632189577,"contact2":9632189532}

  ]
}
