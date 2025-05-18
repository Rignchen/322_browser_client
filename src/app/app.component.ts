import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '#components/header/header.component.js'
import env from '#types/env.js';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, HeaderComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
	constructor(@Inject(DOCUMENT) private document: Document) {}

	ngOnInit() {
		const script: HTMLScriptElement = this.document.createElement('script');
		script.src = `https://maps.googleapis.com/maps/api/js?key=${env.GMAP_API_KEY}`;
		this.document.body.appendChild(script);
	}

	title = 'ps';
}
