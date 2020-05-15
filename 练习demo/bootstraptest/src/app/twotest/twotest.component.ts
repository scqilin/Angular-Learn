import { Component, OnInit, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { AsyncLocalStorage } from 'angular-async-local-storage';
// import * as Swiper from 'swiper/js/swiper.js';
declare const Swiper: any;
var token;
token = localStorage.getItem("_token") || "";
if (token) {
  let obj = JSON.parse(token);
  token = obj.token;
}
@Component({
  selector: 'app-twotest',
  templateUrl: './twotest.component.html',
  styleUrls: ['./twotest.component.css']
})
export class TwotestComponent implements OnInit {
  // B: 初始化定义uploader变量,用来配置input中的uploader属性
  @Output() logoPathChange = new EventEmitter();
  @ViewChild('container') container: ElementRef;
  public maxSize: number = 1024 * 1024;
  public root: string = 'root'; //window['context'].senseApi;
  public key: string;
  public url: string;
  public LTotalScale
  public isOver: boolean = false;
  public uploader: FileUploader = new FileUploader({
    url: this.url,
    method: "POST",
    headers: [
      { name: 'X-Requested-With', value: 'XMLHttpRequest' }
      // ,{ name: 'Authorization',value: 'Bearer ' + token}
    ],
    authTokenHeader: 'authorization',
    authToken: 'Bearer ' + token,
  });
  imgArrs: any[] = [
    { src: 'assets/img/lunbo1.jpg', title: 'pic1', tag: true },
    { src: 'assets/img/lunbo2.jpg', title: 'pic2', tag: false },
    { src: 'assets/img/lunbo3.jpg', title: 'pic3', tag: false },
    { src: 'assets/img/lunbo4.jpg', title: 'pic4', tag: false },
    { src: 'assets/img/lunbo5.jpg', title: 'pic5', tag: false }
  ];
  config: any = {};

  @ViewChild("myForm")
  private myForm: ElementRef;
  constructor(protected storage: AsyncLocalStorage) {
  }

  resetFile(file) {
    this.myForm.nativeElement.reset();
    file.remove();
}

  ngOnInit(): void {

    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;

      file.url = this.root + "/sense-api/NBFS/uploadImage";
      if (this.key) {
        file.url = this.root + "/sense-api/NBFS/uploadImage?key=" + this.key;
      }
      /*if(!this.key || this.key == null){
          
      }else{
          console.log(this.key)
          file.url = this.root+"/NBFS/uploadImage?key="+this.key;
      }*/

      let imgtype = ["image/jpg", "image/jpeg", "image/png", "image/pjpeg", "image/gif", "image/bmp", "image/x-png"];
      if (imgtype.indexOf(file.file.type) == -1) {
        alert("只能上传图片!");
        return;
      }
      //大小判断
      if (file.file.size > this.maxSize) {
        this.config.fileName = "";
        this.isOver = true;
        this.resetFile(file);
        alert("logo文件大于1M");
        return;
      } else {
        this.isOver = false;
      }

      file.upload();

    };
    this.uploader.onSuccessItem = (file, response) => {
      let result: ApiResult = JSON.parse(response);
      this.resetFile(file);
      if (result.status > 0) {
        this.storage.removeItem('key').subscribe(() => { });
        let tempRes = JSON.parse(response);
        this.key = tempRes.data.key;
        this.storage.setItem('key', this.key).subscribe(() => { });
        let logoPath = this.root + "/sense-api/NBFS/getImage?key=" + encodeURIComponent(this.key);
        this.logoPathChange.emit(logoPath);
      } else if (result.status == -1 || result.status == -2) {
        alert(result.data.msg || "上传格式不允许!");
      } else {
        console.log("error");
      }
    };
  }

  // C: 定义事件，选择文件
  selectedFileOnChanged(event: any) {
    console.log('1 :>> ', 1);
    let files = event.target.files;
    if (files.length == 0) {
      this.config.fileName = "";
    } else {
      let imgFile = files[0];
      this.config.fileName = imgFile.name;
    }
    //this.uploadFile(this.root, this.logoPathChange)
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit(): void {
    // console.log('1 :>> ', this.container.nativeElement);
    // const dom = this.container.nativeElement;
    // dom.style.widht = '800px';
    // dom.style.height = '400px';
    // dom.style.backgroundColor = '#999';
    // const sw = dom.getElementsByClassName('swiper-container')[0];
    // console.log('sw :>> ', sw);

    const mySwiper = new Swiper('.swiper-container', {
      autoplay: true, // 可选选项，自动滑动
      loop: true,
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
      pagination: {
        el: '.swiper-pagination',
        // clickable: true,
        // renderBullet: function (index, className) {
        //   return '<span class="' + className + '">' + (index + 1) + '</span>';
        // },
      },
    });


  }

}

export interface ApiResult {
  status: number;
  data: { msg?: string; };
}
