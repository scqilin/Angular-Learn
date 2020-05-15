import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noetest',
  templateUrl: './noetest.component.html',
  styleUrls: ['./noetest.component.css']
})
export class NoetestComponent implements OnInit {
  imgArrs: any[] = [
    { src: 'assets/img/lunbo1.jpg', title: 'pic1', tag: true},
    { src: 'assets/img/lunbo2.jpg', title: 'pic2', tag: false},
    { src: 'assets/img/lunbo3.jpg', title: 'pic3', tag: false},
    { src: 'assets/img/lunbo4.jpg', title: 'pic4', tag: false},
    { src: 'assets/img/lunbo5.jpg', title: 'pic5', tag: false}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
