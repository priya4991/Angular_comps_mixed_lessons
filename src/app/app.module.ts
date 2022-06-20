import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ElementsModule } from './elements/elements.module';  //commenting out this module for lazy loading as opposed to traditional Eager Loading
// import { CollectionsModule } from './collections/collections.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [    //shows components/pipes/directives created within this module
    AppComponent, HomeComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,   
    // for eager loading or traditional loading, rearranging this array to push AppRoutingModule at the end so that all the routes get checked before ** (Not found) route
    // but for lazy loading, the sequence of paths is defined in the app-routing file, so we dont need to rearrage the array here in this file
    // ElementsModule,   //importing ElementsModule to get access to all the components exported in it
    // CollectionsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]   //only ever used in AppModule, shows the component that needs to load first in the app
})
export class AppModule { }
