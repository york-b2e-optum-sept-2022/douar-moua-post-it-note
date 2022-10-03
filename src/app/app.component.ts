import { Component } from '@angular/core';
import {PostItNotesService} from "./post-it-notes.service";
import {Subscription} from "rxjs";
import {IPostIt} from "./interfaces/IPost-It";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'douar-moua-post-it-notes';

  isAddingNew: boolean = false;

  addNewSub: Subscription;

  constructor(private postItNoteService: PostItNotesService) {
    this.addNewSub = this.postItNoteService.$isAddingNew.subscribe((isAddingNew: boolean) => {
      this.isAddingNew = isAddingNew;
    });
  }

  onAddNewClick(){
    this.postItNoteService.onAddNew();
  }

  ngOnDestroy() {
    this.addNewSub.unsubscribe()
  }

}
