import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(
    private http: HttpClient,
  ) { }

  path: string = "https://jsonplaceholder.typicode.com/";
  posts: Post[];
  users: User[];

  getPosts(userid):Observable<Post[]> {
    if (userid) {
      return this.http.get<Post[]>(this.path + "posts?userId=" + userid);
    } else {
      return this.http.get<Post[]>(this.path + "posts");

    };

  }

  getUsers():Observable<User[]> {
    return this.http.get<User[]>(this.path + "users")
  }
}
