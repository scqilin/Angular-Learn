import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';

@Component({
  selector: 'app-slide-img',
  templateUrl: './slide-img.component.html',
  styleUrls: ['./slide-img.component.css'] ,
  animations: [
    trigger('carousel', [
      state('stay', style({
        marginLeft: '0px'
      })),
      state('moveLeft', style({
        marginLeft: '0px'
      })),
      transition('* => moveLeft', animate('500ms ease-in-out', style({
        marginLeft: '-800px'
      })))
    ]),
    trigger('clickPoint', [
      state('stay', style({
        backgroundColor: '#FF0000'
      })),
      state('moveLeft', style({
        backgroundColor: '#FFFF00'
      })),
      // transition('* => moveLeft', animate('500ms ease-in-out', style({
      //   marginLeft: '-800px'
      // })))
    ])
  ]
})
export class SlideImgComponent implements OnInit {
  bannerPic: any[] = [
    { img: 'assets/img/lunbo1.jpg', title: 'pic1', tag: true},
    { img: 'assets/img/lunbo2.jpg', title: 'pic2', tag: false},
    { img: 'assets/img/lunbo3.jpg', title: 'pic3', tag: false},
    { img: 'assets/img/lunbo4.jpg', title: 'pic4', tag: false},
    { img: 'assets/img/lunbo5.jpg', title: 'pic5', tag: false}
  ];
  imgtag: any[] = [
    {id: 1, tag: true},
    {id: 2, tag: false},
    {id: 3, tag: false},
    {id: 4, tag: false},
    {id: 5, tag: false},
  ];
  state = 'stay';
  timer: any;
  fontSize = 24;
  width = 800;
  constructor() { }

  ngOnInit(): void {
    // this.autoPlay();
  }
  autoPlay(): void{
      const me = this;
      this.timer = setInterval(() => {
        me.state = me.state === 'stay' ? 'moveLeft' : 'stay';
      }, 6000);
  }

  afterPlay(){
    if (this.state === 'atay' || this.state === 'moveLeft'){
        this.bannerPic.push(this.bannerPic[0]);
        this.bannerPic.shift();
    }
  }
  playClick(k){
    console.log('k :>> ', k);
  }

}
