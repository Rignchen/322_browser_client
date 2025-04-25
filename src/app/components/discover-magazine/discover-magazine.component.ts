import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-discover-magazine',
  imports: [MatButtonModule],
  templateUrl: './discover-magazine.component.html',
  styleUrl: './discover-magazine.component.scss'
})

export class DiscoverMagazineComponent {
  @Input() public title: string = '';
  @Input() public description: string = '';
}
