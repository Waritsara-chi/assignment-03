import { Component } from '@angular/core';
import jsonData from '../../../assets/Movie.json';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '../../components/title/title.component';



@Component({
  selector: 'app-actor',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './actor.component.html',
  styleUrl: './actor.component.scss',
})
export class ActorComponent {
  actorID: string | null = null;
  actor: any = {};
  jsonResult = jsonData.name;

  constructor(private activeatedRoute: ActivatedRoute) {
    activeatedRoute.params.subscribe((params) => {
      this.actorID = params['id'];
      console.log(this.actorID);

      this.actor = this.jsonResult.find(
        (actor: any) => actor.id == this.actorID
      );

      console.log(this.actor);
      console.log(this.actor.image)
    });

  }
}
