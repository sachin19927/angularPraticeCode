import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerListComponent } from './component/server-list/server-list.component';
import { HightlightdirectvieDirective } from './shared/hightlightdirectvie.directive';
import { StrcaseDirective } from './shared/strcase.directive';
import { TableComponent } from './component/table/table.component';
import { AttributeHighlightDirective } from './shared/attribute-highlight.directive';
import { MeterComponent } from './component/meter/meter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormDemoComponent } from './component/form-demo/form-demo.component';
import { MeterPageComponent } from './component/meter-page/meter-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerListComponent,
    HightlightdirectvieDirective,
    StrcaseDirective,
    TableComponent,
    AttributeHighlightDirective,
    MeterComponent,
    FormDemoComponent,
    MeterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
