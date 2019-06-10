import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { User } from './user';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { PostService } from "./post.service";



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [PostService] //post service buraya eklediğimiz için bu component her çalıştığında bu service örneği belleğe atılıcak. Buna local service deniyor. 
})
export class PostComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private alertifyService: AlertifyService,
    private postService: PostService
  ) { }

  path: string = "https://jsonplaceholder.typicode.com/";
  posts: Post[];
  users: User[];
  filterText: string;
  today = new Date(2019, 2, 21);

  ngOnInit() {
    this.getUsers();
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      console.log(params["userid"]);
      this.getPosts(params["userid"]);
    });
  }

  getPosts(userid) {
    this.postService.getPosts(userid).subscribe(data => {
      this.posts = data;
    });
  }

  getUsers() {
    this.postService.getUsers().subscribe(data => {
      this.users = data;
    })
  }

  addToFavorites(post) {
    this.alertifyService.success("Adding succes" + post.title);
  }

}
