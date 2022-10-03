import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddPostItComponent } from './add-post-it/add-post-it.component';
import { PostItListComponent } from './post-it-list/post-it-list.component';
import { PostItComponent } from './post-it/post-it.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPostItComponent,
    PostItListComponent,
    PostItComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
