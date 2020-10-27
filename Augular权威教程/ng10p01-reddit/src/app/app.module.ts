import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { NameListComponent } from './name-list/name-list.component';
import { NameInfoComponent } from './name-info/name-info.component';
import { NameAddComponent } from './name-add/name-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    NameListComponent,
    NameInfoComponent,
    NameAddComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
