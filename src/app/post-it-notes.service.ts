import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {IPostIt} from "./interfaces/IPost-It";
import {v4 as uuidv4} from "uuid";


@Injectable({
  providedIn: 'root'
})
export class PostItNotesService {

  private isAddingNew: boolean = false;
  $isAddingNew = new Subject<boolean>();
  private isUpdating: boolean = false;
  $isUpdating = new Subject<boolean>();


  private postItList: IPostIt[] = [
    {
      date: new Date(),
      input: 'testing',
      id: '1'
    }
  ]
  $postItList = new Subject<IPostIt[]>();

  constructor() { }

  //toggles Add New Post-It to allow Input
  onAddNew(){
    this.$isAddingNew.next(!this.isAddingNew);
  }

  //toggles Add New Post-It to cancel Input
  onCancelNew(){
    this.$isAddingNew.next(this.isAddingNew)
  }

  //Receives data from add-post-it component & stores it in newPostIT property
  onSubmitNew(newPostIt: IPostIt){
    //gives the newPostIT an ID
    if (newPostIt.id === ''){
      newPostIt.id = uuidv4();
    }

    //adds updates the newPostIT to the array of Post-It Objects / Updates the postItList with newPostIT
    this.postItList.push(newPostIt)
    //closes the Add New Post-It input feature
    this.$isAddingNew.next(this.isAddingNew)
    //sends the newly updated postItList to post-it-list component
    this.$postItList.next(this.postItList)
  }

  //
  onUpdate(){
    this.$isUpdating.next(!this.isUpdating);
  }

  //toggles Update to cancel update input
  onCancelUpdate(){
    this.$isUpdating.next(this.isUpdating)
  }

}
