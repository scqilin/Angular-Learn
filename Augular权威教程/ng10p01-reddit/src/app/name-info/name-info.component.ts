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

  addAttack(){
    this.name.addAttack();
  }

  subAttack(){
    this.name.subAttack();
  }

}
