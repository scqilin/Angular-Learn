import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as jquery from 'jquery';

@Component({
  selector: 'app-slide-img',
  templateUrl: './slide-img.component.html',
  styleUrls: ['./slide-img.component.css']
})
export class SlideImgComponent implements OnInit {
  slideImg: any = [
    { img: 'assets/img/lunbo1.jpg' },
    { img: 'assets/img/lunbo2.jpg' },
    { img: 'assets/img/lunbo3.jpg' }
  ];
  time: any;
  nexImg = 0;
  imgLength = 0;
  constructor() {
    this.imgLength = this.slideImg.length;
    console.log('t :>> ', $);
    console.log('t :>> ', jquery);


  }

  ngOnInit(): void {
    this.time = setInterval(this.intervalImg, 3000);
    // 设置底部第一个按钮样式
    $(".c-banner .jumpBtn ul li[jumpImg=" + this.nexImg + "]").css("background-color", "black");

    $(".preImg").click(() => {
      clearInterval(this.time);
      const nowImg = this.nexImg;
      this.nexImg = this.nexImg - 1;
      console.log(this.nexImg);
      if (this.nexImg < 0) {
        this.nexImg = this.imgLength - 1;
      }
      // 底部按钮样式设置
      $(".c-banner .jumpBtn ul li").css("background-color", "red");
      $(".c-banner .jumpBtn ul li[jumpImg=" + this.nexImg + "]").css("background-color", "black");

      // 将当前图片试用绝对定位,下一张图片试用相对定位
      $(".c-banner .banner ul img").eq(nowImg).css("position", "absolute");
      $(".c-banner .banner ul img").eq(this.nexImg).css("position", "relative");

      // 轮播淡入淡出
      $(".c-banner .banner ul li").eq(this.nexImg).css("display", "block");
      $(".c-banner .banner ul li").eq(this.nexImg).stop().animate({ 'opacity': 1 }, 1000);
      $(".c-banner .banner ul li").eq(nowImg).stop().animate({ 'opacity': 0 }, 1000, () => {
        $(".c-banner ul li").eq(nowImg).css("display", "none");
      });

      // 启动定时器,设置时间为3秒一次
      this.time = setInterval(this.intervalImg, 3000);
    });

    // 点击下一张
    $(".nexImg").click(() => {
      clearInterval(this.time);
      this.intervalImg();
      this.time = setInterval(this.intervalImg, 3000);
    });
    const _this = this;
    $(".c-banner .jumpBtn ul li").each(function () {
      // 为每个按钮定义点击事件
      $(this).click(function () {
        clearInterval(_this.time);
        $(".c-banner .jumpBtn ul li").css("background-color", "red");
        const jumpImg = $(this).attr("jumpImg");
        if (jumpImg !== _this.nexImg) {
          const after = $(".c-banner .banner ul li").eq(jumpImg);
          const befor = $(".c-banner .banner ul li").eq(_this.nexImg);

          // 将当前图片试用绝对定位,下一张图片试用相对定位
          $(".c-banner .banner ul img").eq(_this.nexImg).css("position", "absolute");
          $(".c-banner .banner ul img").eq(jumpImg).css("position", "relative");

          after.css("display", "block");
          after.stop().animate({ 'opacity': 1 }, 1000);
          befor.stop().animate({ 'opacity': 0 }, 1000, () => {
            befor.css("display", "none");
          });
          _this.nexImg = jumpImg;
        }
        $(this).css("background-color", "black");
        _this.time = setInterval(_this.intervalImg, 3000);
      });
    });


  }

  // cpreImg() {
  //   console.log('1 :>> ', 1);
  //   console.log('object :>> ', $(".preImg"));

  // }

  intervalImg() {
    console.log('123 :>> ', 123);
    if (this.nexImg < this.imgLength - 1) {
      this.nexImg++;
    } else {
      this.nexImg = 0;
    }

    // 将当前图片试用绝对定位,下一张图片试用相对定位
    $(".c-banner .banner ul img").eq(this.nexImg - 1).css("position", "absolute");
    $(".c-banner .banner ul img").eq(this.nexImg).css("position", "relative");

    $(".c-banner .banner ul li").eq(this.nexImg).css("display", "block");
    $(".c-banner .banner ul li").eq(this.nexImg).stop().animate({ 'opacity': 1 }, 1000);
    $(".c-banner .banner ul li").eq(this.nexImg - 1).stop().animate({ 'opacity': 0 }, 1000,  () => {
      $(".c-banner .banner ul li").eq(this.nexImg - 1).css("display", "none");
    });
    $(".c-banner .jumpBtn ul li").css("background-color", "red");
    $(".c-banner .jumpBtn ul li[jumpImg=" + this.nexImg + "]").css("background-color", "black");
  }


}
