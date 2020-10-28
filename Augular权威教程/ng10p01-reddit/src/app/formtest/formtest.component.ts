import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-formtest',
  templateUrl: './formtest.component.html',
  styleUrls: ['./formtest.component.css']
})
export class FormtestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(v){
    console.log(v);
  }

}
