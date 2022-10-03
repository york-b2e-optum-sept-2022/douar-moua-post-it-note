import { Component, OnInit } from '@angular/core';
import {IPostIt} from "../interfaces/IPost-It";
import {PostItNotesService} from "../post-it-notes.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-post-it',
  templateUrl: './add-post-it.component.html',
  styleUrls: ['./add-post-it.component.css']
})
export class AddPostItComponent implements OnInit {

  //stores user input (which will then be sent to service)
  postIt: IPostIt = {
    date: new Date(),
    input: '',
    id: ''
  }

  constructor(private postItNoteService: PostItNotesService) {
  }

  ngOnInit(): void {
  }

  //sends user input (this.postIt) to service onSubmitNew() function
  onSubmitNew(){
    this.postItNoteService.onSubmitNew(this.postIt);
    console.log(this.postIt)
  }

  onCancelAddNew(){
    this.postItNoteService.onCancelNew();
  }

}
