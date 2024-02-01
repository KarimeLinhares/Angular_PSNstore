import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-photo',
  templateUrl: './card-photo.component.html',
  styleUrls: ['./card-photo.component.css'],
})
export class CardPhotoComponent implements OnInit {
  @Input()
  gameCover: string = '';

  constructor() {}
  ngOnInit(): void {}
}
