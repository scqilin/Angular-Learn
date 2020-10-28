import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css']
})
export class SimpleHttpComponent implements OnInit {
  loading = true;
  // tslint:disable-next-line: ban-types
  data: Object;

  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
  }
// https://www.fastmock.site/mock/dacb635b4a66a9120a02ca4a92cb28b4/scene/thinpie
// http://jsonplaceholder.typicode.com/posts/1

  makeRequest() {
    this.http.get('http://jsonplaceholder.typicode.com/posts/1')
    .subscribe((res: Response) => {
      console.log('res :>> ', res);
      this.data = res;
      this.loading = false;
    });
  }
}
