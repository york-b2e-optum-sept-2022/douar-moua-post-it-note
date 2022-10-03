import {Component, Input, OnInit} from '@angular/core';
import {IPostIt} from "../interfaces/IPost-It";
import {PostItNotesService} from "../post-it-notes.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-post-it-list',
  templateUrl: './post-it-list.component.html',
  styleUrls: ['./post-it-list.component.css']
})
export class PostItListComponent implements OnInit {

  //contains List of Post It data (and is Output to post-it component)
  postItList: IPostIt[] = [
    {
      date: new Date(),
      input: 'testing',
      id: '1'
    }
  ]

  postItListSub: Subscription;

  constructor(private postItService: PostItNotesService) {
    //updates the postItList
    this.postItListSub = this.postItService.$postItList.subscribe((postItList: IPostIt[]) =>  {
      this.postItList = postItList
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.postItListSub.unsubscribe()
  }

}
