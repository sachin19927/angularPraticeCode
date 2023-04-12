import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeterPageComponent } from './component/meter-page/meter-page.component';
import { AppComponent } from './app.component';
import { TableComponent } from './component/table/table.component';

const routes: Routes = [

{path:'meter',component: MeterPageComponent},
{path:'home',component: AppComponent},
{path:'table',component: TableComponent},
{path:'',redirectTo:'home'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
