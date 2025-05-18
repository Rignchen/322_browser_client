import { Component, OnInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input';
import { RouterLink, Router, ActivatedRoute} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FilterDrawerComponent } from '#components/filter-drawer/filter-drawer.component.js';

@Component({
	selector: 'app-header',
	imports: [RouterLink, MatIconModule, MatInputModule, FilterDrawerComponent, CommonModule],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
	// Properties
	lastPath: string = '';
	params: { [key: string]: string } = {};
	isSearchPage: boolean = false;

	// Reference to the filter drawer component to control it from header
	@ViewChild(FilterDrawerComponent) filterDrawer!: FilterDrawerComponent;
	
	constructor(private router: Router, private route: ActivatedRoute) {}

	// Method to handle search input change
	onKeyUp(event: Event): void {
		const input = event.target as HTMLInputElement;
		this.redrectSearch(input.value);
	}
	onSearchButtonClick(event: Event): void {
		const input = (event.target as HTMLElement).parentElement?.parentElement?.getElementsByTagName('input');
		if (!input) throw new Error('The input element disappeared :(');
		if (this.lastPath.length === 0) return;
		this.redrectSearch(input[0].value, true);
	}
	
	onFilterButtonClick(): void {
		this.filterDrawer.toggleDrawer();
	}

	ngOnInit(): void {
		// Subscribe to query parameters to get the search term
		this.route.queryParams.subscribe(params => this.params = params);
		
		// Check if the current route is the search page
		this.router.events.subscribe(() => {
			this.isSearchPage = this.router.url.includes('/search');
		});
	}

	redrectSearch(search: string, addToHistory: boolean = false): void {
		if (!search) {
			this.router.navigate([this.lastPath]);
			this.lastPath = '';
		} else {
			this.params = { ...this.params, s: search };
			let args = { queryParams: this.params, replaceUrl: !addToHistory };
			if (this.lastPath.length === 0) {
				this.lastPath = this.router.url;
				args.replaceUrl = false;
			}
			this.router.navigate(['search'], args);
		}
	}
}
