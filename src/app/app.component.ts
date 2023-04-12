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


}
