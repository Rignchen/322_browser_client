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

	activeFilters = new Map<string, string[]>();

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

	onCheckboxChange(event: Event, filterCategory: string, filterName: string) {
		console.log("Checkbox changed:", event, filterCategory, filterName);
		const checkbox = event.target as HTMLInputElement;
		const isChecked = checkbox.checked;

		// Update the active filters based on the checkbox state
		const filterValues = this.activeFilters.get(filterCategory) || [];
		if (isChecked) {
			filterValues.push(filterName);
		} else {
			const index = filterValues.indexOf(filterName);
			if (index > -1) {
				filterValues.splice(index, 1);
			}
		}

		// Update the active filters map
		if (filterValues.length > 0) {
			this.activeFilters.set(filterCategory, filterValues);
		} else {
			this.activeFilters.delete(filterCategory);
		}

		// Log the active filters
		console.log("Active filters:", this.getActiveFilters());
	}

	getActiveFilters() {
		const filterStrings: string[] = [];
		this.activeFilters.forEach((values, key) => {
			filterStrings.push(`${key}=${values.join(',')}`);
		});
		return filterStrings.join('&');
	}
}
