import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular9-reddit';
  addArticle(title:HTMLInputElement,link:HTMLInputElement){
    console.log('title:link :', title.value,link.value);
  }
}
