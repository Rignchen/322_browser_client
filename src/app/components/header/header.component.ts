import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input';
import { RouterLink, Router} from '@angular/router';

@Component({
	selector: 'app-header',
	imports: [RouterLink, MatIconModule, MatInputModule],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss'
})
export class HeaderComponent {
	// Properties
	lastPath: string = '';
	constructor(private router: Router) {}

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

	redrectSearch(search: string, addToHistory: boolean = false): void {
		if (!search) {
			this.router.navigate([this.lastPath]);
			this.lastPath = '';
		} else {
			let args = { queryParams: { s: search }, replaceUrl: !addToHistory };
			if (this.lastPath.length === 0) {
				this.lastPath = this.router.url;
				args.replaceUrl = false;
			}
			this.router.navigate(['search'], args);
		}
	}
}
