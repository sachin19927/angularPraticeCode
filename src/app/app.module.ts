import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerListComponent } from './component/server-list/server-list.component';
import { DatepipePipe } from './shared/datepipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ServerListComponent,
    DatepipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
