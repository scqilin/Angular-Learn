import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-outtest',
  templateUrl: './outtest.component.html',
  styleUrls: ['./outtest.component.css'],
})
export class OuttestComponent implements OnInit {
  constructor() { }
  @Output() ondisme = new EventEmitter<string>();
  ngOnInit(): void {
  }
  disme(){
    this.ondisme.emit('  好强的内力!');
  }

}
