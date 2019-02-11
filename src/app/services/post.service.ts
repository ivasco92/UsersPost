import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../models/Post';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPostByUserId(idUser: number): Observable<Post[]> {

    return this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${idUser}`)
      .pipe(
        map((response: any[]) => {
          return response.map( singleJson => Post.fromJson(singleJson));
        })
      );
  }
}
