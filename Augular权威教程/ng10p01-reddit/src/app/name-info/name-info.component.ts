import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-name-info',
  templateUrl: './name-info.component.html',
  styleUrls: ['./name-info.component.css']
})
export class NameInfoComponent implements OnInit {
  @Input() name: any;
  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  addAttack(){
    this.name.attack ++ ;
  }
  // tslint:disable-next-line: typedef
  subAttack(){
    this.name.attack -- ;
  }

}
