import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input';
import { RouterLink, Router, ActivatedRoute} from '@angular/router';

@Component({
	selector: 'app-header',
	imports: [RouterLink, MatIconModule, MatInputModule],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
	// Properties
	lastPath: string = '';
	params: { [key: string]: string } = {};
	constructor(private router: Router, private route: ActivatedRoute) {}

	// Method to handle search input change
	onKeyUp(event: Event): void {
		const input = event.target as HTMLInputElement;
		this.redirectSearch(input.value);
	}
	onSearchButtonClick(event: Event): void {
		const input = (event.target as HTMLElement).parentElement?.parentElement?.getElementsByTagName('input');
		if (!input) throw new Error('Input not found');
		if (this.lastPath.length === 0) return;
		this.redirectSearch(input[0].value, true);
	}

	ngOnInit(): void {
		this.route.queryParams.subscribe(params => this.params = params);
	}

	redirectSearch(search: string, addToHistory: boolean = false): void {
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
