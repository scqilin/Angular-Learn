import { Component, Input, OnInit } from '@angular/core';
import { BigHexo } from '../namelist.model';
@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.css']
})



export class NameListComponent implements OnInit {
  // @Input() bighexo: BigHexo;
  namelist = [
    new BigHexo('乔峰', 98),
    new BigHexo('段誉', 97),
    new BigHexo('天山童姥', 105),
    new BigHexo('虚竹', 97)
  ];
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  sortNamelist(){
    this.namelist.sort((a, b) => b.attack - a.attack);
    return this.namelist;
  }

}
