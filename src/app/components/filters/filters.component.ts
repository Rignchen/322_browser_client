import env from '#types/env.js';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-filters',
	imports: [],
	templateUrl: './filters.component.html',
	styleUrl: './filters.component.scss'
})
export class FiltersComponent implements OnInit {
	json = JSON;
	filters = {
		accessibilities: [
			"Children",
			"Dog-friendly",
			"Cycling",
			"Wealchair",
			"Accessible in winter"
		],
		difficulties: [
			"Beginner",
			"Intermediate",
			"Advanced"
		],
		terrains: [
			"Forest",
			"Mountain",
			"Lake"
		]
	}

	ngOnInit(): void {
		fetch(`${env.API_URL}/filters`)
			.then(response => response.json())
			.then(data => this.filters = data);
	}
}
