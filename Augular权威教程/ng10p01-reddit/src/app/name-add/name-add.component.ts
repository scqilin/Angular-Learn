import { Component, Input, OnInit } from '@angular/core';
import { BigHexo } from '../namelist.model';
@Component({
  selector: 'app-name-add',
  templateUrl: './name-add.component.html',
  styleUrls: ['./name-add.component.css']
})
export class NameAddComponent implements OnInit {

  constructor() { }
  @Input() namelist: any;
  ngOnInit(): void {
  }

  addname(name, ak) {
    if (name.value !== '' && name.value != null) {
      let sak = ak.value;
      if (sak === '' || sak == null || isNaN(sak) === true) {
        sak = 60;
      }
      this.namelist.push(
        new BigHexo(name.value, sak)
      );
      name.value = '';
      ak.value = '';
    }
  }

}
