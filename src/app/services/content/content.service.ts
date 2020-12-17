import { Injectable } from '@angular/core';
import { Content } from '../../models/content.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

 
  musicContents: Content[] = [
    new Content('Music Title', 'Music Subitle', 'body del content 1'),
    new Content('Music Title', 'Music Subitle', 'body del content 2'),
    new Content('Music Title', 'Music Subitle', 'body del content 3'),
    new Content('Music Title', 'Music Subitle', 'body del content 4'),
    new Content('Music Title', 'Music Subitle', 'body del content 5'),
  ];

  personContents: Content[] = [
    new Content('Person Title', 'Person Subitle', 'body del content 1'),
    new Content('Person Title', 'Person Subitle', 'body del content 2'),
    new Content('Person Title', 'Person Subitle', 'body del content 3'),
    new Content('Person Title', 'Person Subitle', 'body del content 4'),
    new Content('Person Title', 'Person Subitle', 'body del content 5'),
  ];

  trainContents: Content[] = [
    new Content('Train Title', 'Train Subitle', 'body del content 1'),
    new Content('Train Title', 'Train Subitle', 'body del content 2'),
    new Content('Train Title', 'Train Subitle', 'body del content 3'),
    new Content('Train Title', 'Train Subitle', 'body del content 4'),
    new Content('Train Title', 'Train Subitle', 'body del content 5'),
  ]

  getMusicContents() {
    return this.musicContents;
  }

  getPersonContents() {
    return this.personContents;
  }

  getTrainContents() {
    return this.trainContents;
  }
}
