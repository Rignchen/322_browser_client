import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-ride-map',
  templateUrl: './ride-map.component.html',
  styleUrls: ['./ride-map.component.scss'],
  imports: [MatCardModule,]
})
export class RideMapComponent {
  @Input() imageSrc!: string;
  @Input() mapLink!: string;
}
