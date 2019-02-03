import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }

  path: string = "https://jsonplaceholder.typicode.com/";
  posts: Post[];
  users: User[];

  ngOnInit() {
    this.getUsers();
    this.activatedRoute.paramMap.subscribe(params=>{
      console.log(params.get('userid'));
      this.getPosts(params['userid']);
    });  
  }

  getPosts(userid) {
    if (userid) {
      this.http.get<Post[]>(this.path + "posts?userId="+userid).subscribe(response => {
        this.posts = response;
      });
    } else {
      this.http.get<Post[]>(this.path + "posts").subscribe(response => {
        this.posts = response;
      });
    };

  }

  getUsers() {
    this.http.get<User[]>(this.path + "users").subscribe(response => {
      this.users = response;
    })
  }


}
