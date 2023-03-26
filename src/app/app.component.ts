import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demoAngular';


  meterDetailLt=[{"name":"Bindisha","city":"RAJ" , "type":"LT"},
                {"name":"China","city":"RAJ" , "type":"LT"}]

                meterDetailHt=[{"name":"Bindisha","city":"RAJ" , "type":"HT"},
                {"name":"China","city":"RAJ" , "type":"HT"}]
}
