import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import jsonData from '../../../assets/Movie.json';
import { TitleComponent } from '../../components/title/title.component';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss',
})
export class MovieComponent {
  titleId: string | null = null;
  title: any = {};
  jsonResult = jsonData.title;

  constructor(private activeatedRoute: ActivatedRoute) {
    activeatedRoute.params.subscribe((params) => {
      this.titleId = params['id'];
      console.log(this.titleId);

      this.title = this.jsonResult.find(
        (title: any) => title.id == this.titleId
      );
    });
  }
}
