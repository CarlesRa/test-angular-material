import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content/content.service';
import { Content } from '../../models/content.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contents: Content[];

  constructor(
    private contentService: ContentService
  ) { }

  ngOnInit(): void {
  }

  showMusicContents(): void {

    this.contents = this.contentService.getMusicContents();
  }

  showTrainContens(): void {

    this.contents = this.contentService.getTrainContents();
  }

  showPersonContents(): void {

    this.contents = this.contentService.getPersonContents();
  }

}
