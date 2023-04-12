import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeterPageComponent } from './component/meter-page/meter-page.component';
import { AppComponent } from './app.component';

const routes: Routes = [

{path:'meter',component: MeterPageComponent},
{path:'home',component: AppComponent},
{path:'',redirectTo:'home'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
