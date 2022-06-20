import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementsHomeComponent } from './elements-home/elements-home.component';

const routes: Routes = [
  // { path: 'elements', component: ElementsHomeComponent }  // this is for traditional eager loading

  // for lazy loading a module, the path in the module routing file needs to be relative
  // to the path provided in the app routing file
  // for eg, since in the app routing file we specify the path 'elements',
  // here we just provide an empty string '' because the path gets added to
  // the path specified in the app module router path
  { path: '', component: ElementsHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
