import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-ride-map',
  templateUrl: './ride-map.component.html',
  styleUrls: ['./ride-map.component.scss'],
  standalone: true,
  imports: [MatCardModule, GoogleMapsModule]
})
export class RideMapComponent {
  @Input() center!: google.maps.LatLngLiteral;    // Centre de la carte
  @Input() zoom: number = 14;                      // Zoom (optionnel)
  @Input() path!: google.maps.LatLngLiteral[];
  @Input() mapLink!: string;  // Tracé de la polyline
}
