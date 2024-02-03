import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { TitlecardComponent } from '../../components/titlecard/titlecard.component';
import jsonData from '../../../assets/Movie.json';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ActorcardComponent } from '../../components/actorcard/actorcard.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    TitlecardComponent,
    RouterLink,
    ActorcardComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  titles = jsonData;
  titlesResult: any = jsonData;

  currentIndex: number = 0;
  actorIndex: number = 0;

  constructor() {
    // console.log(this.titlesResult.title);
    console.log(this.titlesResult.name);
    
  }
  Rightslice() {
    if (this.currentIndex + 6 < this.titlesResult.title.length) {
      this.currentIndex += 1;
      console.log('right');
    }
  }

  LeftSlice() {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
      console.log('left');
    }
  }

  RightActorslice() {
    if (this.actorIndex + 6 < this.titlesResult.name.length) {
      this.actorIndex += 1;
      console.log('right');
    }
  }
  LeftActorSlice() {
    if (this.actorIndex > 0) {
      this.actorIndex -= 1;
      console.log('left');
    }
  }

  ngOnInit(): void {}

  onInputChange($event: Event) {
    let target = $event.target as HTMLInputElement;
    console.log(target.value);
  }
}
