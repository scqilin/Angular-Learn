import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular9-reddit';
  articles: Article[]
  constructor(){
    this.articles = [
      new Article('天龙八部','http://tianlong.com',10),
      new Article('武林外传','http://wulin.com',11),
      new Article('少年歌行','http://shaonian.com',18),
    ]
  }
  addArticle(title:HTMLInputElement,link:HTMLInputElement){
    if(title.value === ""){
      return false;
    }
    this.articles.push(new Article(title.value,link.value,0));
    title.value = ''
    link.value = ''
    return false
  }
  sorteArticles():Article[]{
    return this.articles.sort((a:Article,b:Article)=>b.votes -a.votes);
  }

}
