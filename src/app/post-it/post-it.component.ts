import {Component, Input, OnInit} from '@angular/core';
import {IPostIt} from "../interfaces/IPost-It";
import {PostItNotesService} from "../post-it-notes.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-post-it',
  templateUrl: './post-it.component.html',
  styleUrls: ['./post-it.component.css']
})
export class PostItComponent implements OnInit {

  //get the List of Post-Its from post-it-list component
  @Input() postItList!: IPostIt;

  isUpdating: boolean = false;

  updateSub: Subscription;

  constructor(private postItNoteService: PostItNotesService) {
    this.updateSub = this.postItNoteService.$isUpdating.subscribe((isUpdating: boolean) => {
      this.isUpdating = isUpdating
    })
  }

  ngOnInit(): void {
  }

  onUpdatePostIt(){
    this.postItNoteService.onUpdate();
    console.log('update clicked')
  }

  onCancelUpdate(){
    this.postItNoteService.onCancelUpdate();
  }

  ngOnDestroy() {
    this.updateSub.unsubscribe()
  }

}
