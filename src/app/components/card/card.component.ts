import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; // ✅ Importation du module MatCard
import { MatIconModule } from '@angular/material/icon'; // Importation du module MatIcon

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true, // Ajout de cette option pour utiliser les imports dans le composant
  imports: [MatCardModule, MatIconModule] // Ajout des modules ici pour ce composant
  
})
export class CardComponent {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() image: string = '';
  @Input() distance: number = 0;
  @Input() duration: number = 0;


}
