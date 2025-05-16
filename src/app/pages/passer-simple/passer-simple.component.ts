import { BackButtonComponent } from '#components/back-button/back-button.component.js';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-passer-simple',
  imports: [BackButtonComponent, MatIconModule],
  templateUrl: './passer-simple.component.html',
  styleUrls: ['./passer-simple.component.scss'],
})
export class PasserSimpleComponent {
  title = 'Passé simple';
  description =
    "Le magazine Passé Simple vous plonge chaque mois au cœur de l'histoire romande. À travers des balades enrichies de cartes, d'itinéraires et d'anecdotes captivantes, partez à la découverte des trésors et secrets de la Suisse romande.";
}
