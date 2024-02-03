import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-titlecard',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, RouterLink],
  templateUrl: './titlecard.component.html',
  styleUrl: './titlecard.component.scss',
})
export class TitlecardComponent {
  @Input() image: any;
  @Input() title: any;
  @Input() rating: any;
}
