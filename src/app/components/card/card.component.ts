import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrl: './card.component.scss',
	standalone: true,
	imports: [ MatCardModule, MatIconModule ]
})
export class CardComponent {
	@Input() title: string = '';
	@Input() content: string = '';
	@Input() image: string = '';
	@Input() distance: number = 0;
	@Input() duration: number = 0;
}
