import { BackButtonComponent } from '#components/back-button/back-button.component.js';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-passer-simple',
  imports: [BackButtonComponent, MatIconModule],
  templateUrl: './passer-simple.component.html',
  styleUrl: './passer-simple.component.scss',
})
export class PasserSimpleComponent {
}
