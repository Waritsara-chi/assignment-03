import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterLink],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent {
  @Input() title: any;
  @Input() image: any;
  @Input() description: any;
  @Input() rating: any;
  @Input() genre: string[] = [];
  @Input() trailer: any;
  @Input() thumbnail: any;
  @Input() dateCreated: any[] = [];
  @Input() director: any[] = [];
  @Input() creator: any[] = [];
  @Input() actor: any[] = [];
  @Input() birthDate: any;

  // Add a property to store the id
  id: string | null = null;
  titleid: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');

      if (this.id && this.id.startsWith('tt')) {
        this.titleid = this.id;
        console.log('This is a titleid:', this.id);
      } else if (this.id && this.id.startsWith('nm')) {
        console.log('This is an actorid:', this.id);
      }
    });
  }

  ngOnInit(): void {}
}
