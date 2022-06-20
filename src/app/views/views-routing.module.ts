import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewsHomeComponent } from './views-home/views-home.component';

const routes: Routes = [
  //because we are lazy loading the component, so the path is relative 
  //to the path defined in app-routing file
  { path: '', component: ViewsHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
