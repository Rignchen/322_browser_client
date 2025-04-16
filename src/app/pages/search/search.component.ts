import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})

export class SearchComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  searchTerm: string = '';

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const searchTerm = params['s'] || '';
      this.searchTerm = searchTerm;
    });
  }
}
