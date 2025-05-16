import fetcher from '#types/fetch.js';
import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSliderModule} from '@angular/material/slider';

@Component({
	selector: 'app-filters',
	imports: [ NgFor, MatSliderModule ],
	templateUrl: './filters.component.html',
	styleUrl: './filters.component.scss'
})
export class FiltersComponent implements OnInit {
	constructor(private route: ActivatedRoute, private router: Router) {}

	activeFilters: { [key: string]: string[] } = {};
	params: { [key: string]: string } = {};

	accessibilities = [
		"Children",
		"Dog-friendly",
		"Cycling",
		"Weelchair",
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
	durations: [number, number] = [1, 6];
	durationsFilter: [number, number] = [
		this.params['min'] ? Number(this.params['min']) : this.durations[0],
		this.params['max'] ? Number(this.params['max']) : this.durations[1],
	];

	ngOnInit(): void {
		this.route.queryParams.subscribe(params => this.params = params);
		this.activeFilters = {
			a: this.params['a'] ? this.params['a'].split(',') : [],
			d: this.params['d'] ? this.params['d'].split(',') : [],
			t: this.params['t'] ? this.params['t'].split(',') : []
		};

		fetcher.getFilters()
			.then((data) => {
				this.accessibilities = data.accessibilities;
				this.difficulties = data.difficulties;
				this.terrains = data.terrains;
				this.durations = [data.durations['min'], data.durations['max']];
				this.durationsFilter = [
					this.params['min'] ? Number(this.params['min']) : this.durations[0],
					this.params['max'] ? Number(this.params['max']) : this.durations[1],
				];
			})
	}

	onDurationChange(event: Event, index: number) {
		const slider = event.target as HTMLInputElement;
		this.durationsFilter[index] = Number(slider.value);

		this.updateParamsDuration(index);
		this.router.navigate(['search'], { queryParams: this.params, replaceUrl: true });
	}

	onCheckboxChange(event: Event, filterCategory: string, filterName: string) {
		console.log("Checkbox changed:", event, filterCategory, filterName);
		const checkbox = event.target as HTMLInputElement;
		const isChecked = checkbox.checked;

		// Update the active filters based on the checkbox state
		const filterValues = this.activeFilters[filterCategory] || [];
		if (isChecked) {
			filterValues.push(filterName);
		} else {
			const index = filterValues.indexOf(filterName);
			if (index > -1) {
				filterValues.splice(index, 1);
			}
		}

		// Update the active filters map
		this.activeFilters[filterCategory] = filterValues;

		// Log the active filters
		this.updateParamsFilters()
		this.router.navigate(['search'], { queryParams: this.params, replaceUrl: true });
	}

	updateParamsFilters() {
		console.log("Updating params with active filters:", this.activeFilters);
		let filters = new Map<string, string>();
		for (const [key, values] of Object.entries(this.activeFilters)) {
			filters.set(key, values.join(','));
		}
		this.params = {
			...this.params,
			...Object.fromEntries(filters)
		};
		for (const key in this.params) {
			if (this.params[key] === '') {
				delete this.params[key];
			}
		}
	}

	updateParamsDuration(index: number) {
		console.log("Updating params with duration:", this.durationsFilter);
		const key = ['min', 'max'][index];
		const temp: { [key: string]: string } = {};
		temp[key] = this.durationsFilter[index].toString();
		this.params = {
			...this.params,
			...temp
		};
	}
}
