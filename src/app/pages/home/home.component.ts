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
  categories: Category[] = [];
  featuredWalks: Walk[] = [];

  constructor(public router: Router) {
    // Initialize categories with router
    this.categories = [
      new Category('Montagne', 'terrain', '/search', { t: 'Mountain' }),
      new Category('Été', 'wb_sunny', '/search', { s: 'Summer' }),
      new Category('Court (< 2h)', 'schedule', '/search', { max: '2' }),
      new Category('Débutant', 'accessibility_new', '/search', {
        d: 'Beginner',
      }),
    ];

    // Set router for each category
    this.categories.forEach((category) => category.setRouter(this.router));
  }

  ngOnInit(): void {
    Walk.fetchFeatured().then((walks) => {
      this.featuredWalks = walks;
    });
  }

  navigateToWalk(walkId: number): void {
    this.router.navigate(['/walk', walkId]);
  }
}
