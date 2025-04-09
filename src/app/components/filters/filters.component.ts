import env from '#types/env.js';
import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-filters',
	imports: [ NgFor ],
	templateUrl: './filters.component.html',
	styleUrl: './filters.component.scss'
})
export class FiltersComponent implements OnInit {
	accessibilities = [
		"Children",
		"Dog-friendly",
		"Cycling",
		"Wealchair",
		"Accessible in winter"
	];
	difficulties = [
		"Beginner",
		"Intermediate",
		"Advanced"
	];
	terrains = [
		"Forest",
		"Mountain",
		"Lake"
	];

	ngOnInit(): void {
		fetch(`${env.API_URL}/filters`)
			.then(response => response.json())
			.then(data => {
        if (!data) {
          throw new Error('No data received');
        }
				this.accessibilities = data.accessibilities;
				this.difficulties = data.difficulties;
				this.terrains = data.terrains;
			})
	}
}
