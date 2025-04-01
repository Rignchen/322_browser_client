import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input';
import { Router} from '@angular/router';

@Component({
	selector: 'app-header',
	imports: [MatIconModule, MatInputModule],
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

	redrectSearch(search: string) {
		if (!search) {
			this.router.navigate([this.lastPath]);
			this.lastPath = '';
		} else {
			if (this.lastPath.length === 0) {
				this.lastPath = this.router.url;
			}
			this.router.navigate(['search'], { queryParams: { s: search } });
		}
	}
}
