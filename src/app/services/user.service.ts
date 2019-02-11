import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/User';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {

    return this.http.get(`https://jsonplaceholder.typicode.com/users`)
      .pipe(
        map((response: any[]) => {
          console.log(response);
          return response.map(singleJson => User.fromJson(singleJson));
        })
      );
  }
}
