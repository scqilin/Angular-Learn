import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { NameListComponent } from './name-list/name-list.component';
import { NameInfoComponent } from './name-info/name-info.component';
import { NameAddComponent } from './name-add/name-add.component';
import { OuttestComponent } from './outtest/outtest.component';
import { FormtestComponent } from './formtest/formtest.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    NameListComponent,
    NameInfoComponent,
    NameAddComponent,
    OuttestComponent,
    FormtestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
