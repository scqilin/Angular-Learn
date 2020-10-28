import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  name = 'qilin';
  binfo: string;
  constructor() { }

  ngOnInit(): void {
  }
  giveme(message: string){
    console.log(message);
    this.binfo = message;
  }

}
