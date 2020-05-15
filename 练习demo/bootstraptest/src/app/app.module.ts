import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoetestComponent } from './noetest/noetest.component';
import { TwotestComponent } from './twotest/twotest.component';

@NgModule({
  declarations: [
    AppComponent,
    NoetestComponent,
    TwotestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
