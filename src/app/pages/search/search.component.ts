import { CardComponent } from '#components/card/card.component.js';
import { FiltersComponent } from '#components/filters/filters.component.js';
import Walk from '#types/walk.js';
import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-search',
	imports: [ NgFor, FiltersComponent, CardComponent ],
	templateUrl: './search.component.html',
	styleUrl: './search.component.scss'
})

export class SearchComponent implements OnInit {
	constructor(private route: ActivatedRoute, public router: Router) {}

	searchTerm: string = '';
	data: Walk[] = [];

	ngOnInit(): void {
		this.route.queryParams.subscribe(params => {
			const search: string|null = params['s'] || null;
			const difficulty: string[] = params['d']?.split(',') || [];
			const terrain: string[] = params['t']?.split(',') || [];
			const accessibility: string[] = params['a']?.split(',') || [];
			const duration: [number|null, number|null] = [Number(params['min']) || null, Number(params['max']) || null];

			this.searchTerm = JSON.stringify({
				search: search,
				difficulty: difficulty,
				terrain: terrain,
				accessibility: accessibility,
				duration: duration
			}, null, 1);

			Walk.fetchFilter(search, difficulty, terrain, accessibility, duration).then(walks => {this.data = walks});
		})
	}
}
