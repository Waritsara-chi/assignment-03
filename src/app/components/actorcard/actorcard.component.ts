import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-actorcard',
  standalone: true,
  imports: [],
  templateUrl: './actorcard.component.html',
  styleUrl: './actorcard.component.scss',
})
export class ActorcardComponent {

  constructor(){
    console.log(this.actorname);
  }
  @Input() actorname: any;
  @Input() image: any;
  @Input() age:number | undefined;
}
