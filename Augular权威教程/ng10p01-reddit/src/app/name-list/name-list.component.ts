import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.css']
})
export class NameListComponent implements OnInit {
  namelist = [
    {name: '乔峰', attack: 98},
    {name: '段誉', attack: 97},
    {name: '天山童姥', attack: 105}
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
