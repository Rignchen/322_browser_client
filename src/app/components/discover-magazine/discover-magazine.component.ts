import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-discover-magazine',
  imports: [MatButtonModule, RouterLink],
  templateUrl: './discover-magazine.component.html',
  styleUrl: './discover-magazine.component.scss'
})

export class DiscoverMagazineComponent {
  @Input() public title: string = '';
  @Input() public description: string = '';
}
