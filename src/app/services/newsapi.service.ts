import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {
  api_key = 'f6ec9224239a44d9b1c3de45f129f27b';

  constructor(private http: HttpClient) { }

  getArticlesTechnology(): Observable<any> {
    return this.http.get(`https://newsapi.org/v2/top-headlines?category=technology&language=en&country=us&apiKey=${this.api_key}`)
      .pipe(map((data: any) => data.articles));
  }

  getArticlesJavaScript(): Observable<any> {
    return this.http.get(`https://newsapi.org/v2/everything?q=javascript&sortBy=latest&apiKey=${this.api_key}`)
    .pipe(map((data: any) => data.articles));
  }
}
