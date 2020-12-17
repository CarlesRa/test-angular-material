import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../../../models/content.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()cardContents: Content[];

  constructor() { }

  ngOnInit(): void {
  }

}
