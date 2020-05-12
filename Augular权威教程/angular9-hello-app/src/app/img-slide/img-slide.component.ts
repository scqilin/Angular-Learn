import { Component, OnInit, NgModule } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';

@Component({
  selector: 'app-img-slide',
  templateUrl: './img-slide.component.html',
  styleUrls: ['./img-slide.component.css'],
  animations: [
    trigger('carousel', [
      state('stay', style({
        marginLeft: '-600px'
      })),
      state('stayR', style({
        marginLeft: '-600px'
      })),
      state('moveLeft', style({
        marginLeft: '-600px'
      })),
      state('moveRight', style({
        marginLeft: '-600px'
      })),
      transition('* => moveLeft', animate('500ms ease-in-out', style({
        marginLeft: '-1200px'
      }))),
      transition('* => stay', animate('500ms ease-in-out', style({
        marginLeft: '-1200px'
      }))),
      transition('* => moveRight', animate('500ms ease-in-out', style({
        marginLeft: '0vw'
      })))
    ])
  ]
})
export class ImgSlideComponent implements OnInit {

  bannerPic: any[] = [
    { img: 'assets/img/lunbo1.jpg' },
    { img: 'assets/img/lunbo2.jpg' },
    { img: 'assets/img/lunbo3.jpg' }
  ];
  state = 'stay';
  timer: any;
  autoPlay(): void {
    const me = this;
    this.timer = setInterval(() => {
      me.state = me.state === 'stay' ? 'moveLeft' : 'stay';
    }, 3000);
  }
  afterPlay(): void {
    if (this.state === 'stay' || this.state === 'moveLeft') {
      this.bannerPic.push(this.bannerPic[0]);
      this.bannerPic.shift();
    } else if (this.state === 'moveRight') {
      const last = this.bannerPic.length - 1;
      this.bannerPic.unshift(this.bannerPic[last]);
      this.bannerPic.pop();
      this.state = 'stayR';
    }
  }
  stopPlay(): void {
    clearInterval(this.timer);
  }

  playPre(): void {
    this.state = 'moveRight';
  }

  playNext(): void {
    this.state = this.state === 'stay' ? 'moveLeft' : 'stay';
  }
  constructor() { }

  ngOnInit(): void {
    this.autoPlay();
  }

}
