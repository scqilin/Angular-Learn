import { Component, OnInit } from '@angular/core';
import {Article} from './article.model'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host:{
    class:'row'
  }
})
export class ArticleComponent implements OnInit {
  article:Article
  constructor() {
    this.article = new Article(
      'Angular 9',
      'http://angular.io',
      10
    )

   }
  
  ngOnInit(): void {

  }
  voteUp(){
    this.article.votes += 1;
    return false
  }
  voteDown(){
    this.article.votes -= 1;
    return false
  }

}
