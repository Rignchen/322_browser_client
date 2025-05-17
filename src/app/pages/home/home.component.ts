import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CardComponent } from '#components/card/card.component.js';
import { MatButtonModule } from '@angular/material/button';
import Walk from '#types/walk.js';
import Category from '#types/category.js';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatIconModule, CardComponent, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  categories: Category[] = [
    {
      name: 'Montagne',
      icon: 'terrain',
      route: '/search',
      params: { t: 'Mountain' },
    },
    {
      name: 'Été',
      icon: 'wb_sunny',
      route: '/search',
      params: { s: 'Summer' },
    },
    {
      name: 'Court (< 2h)',
      icon: 'schedule',
      route: '/search',
      params: { max: '2' },
    },
    {
      name: 'Débutant',
      icon: 'accessibility_new',
      route: '/search',
      params: { d: 'Beginner' },
    },
  ];

  featuredWalks: Walk[] = [];

  constructor(public router: Router) {}

  ngOnInit(): void {
    Walk.fetchFeatured().then((walks) => {
      this.featuredWalks = walks;
    });
  }

  navigateToCategory(category: Category): void {
    this.router.navigate([category.route], { queryParams: category.params });
  }

  navigateToWalk(walkId: number): void {
    this.router.navigate(['/walk', walkId]);
  }
}
