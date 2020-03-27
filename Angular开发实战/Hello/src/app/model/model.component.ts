import { Component, OnInit, Input,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  @Input() title: string
  @Input() content: string
  @Input() okText: string
  @Input() cancelText: string
  @Input() isVisible = false
  @Input() isVisableChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  handleOk():void{
    console.log('1 :', 1);
    this.isVisableChange.emit(false)
  }
  handleCancel():void{
    this.isVisableChange.emit(false)
  }

}
