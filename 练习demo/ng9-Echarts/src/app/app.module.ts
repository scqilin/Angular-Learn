import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EchartsaComponent } from './echartsa/echartsa.component';
import { EchartsbComponent } from './echartsb/echartsb.component';
import { MypipeComponent} from './mypipe/mypipe.component';
import { WelcomePipe } from './common/pipe/comm.pipe';
import { NumberaddPipe } from './numberadd.pipe';
import { HelloPipe } from './common/pipe/hello.pipe';
import { BaybayPipe } from './common/pipe/baybay.pipe';
import { Baybay1Pipe } from './common/pipe/baybay1.pipe';


@NgModule({
  declarations: [
    AppComponent,
    EchartsaComponent,
    EchartsbComponent,
    MypipeComponent,
    WelcomePipe,
    NumberaddPipe,
    HelloPipe,
    BaybayPipe,
    Baybay1Pipe
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    // WelcomePipe
  ]
})
export class AppModule { }
