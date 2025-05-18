import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FiltersComponent } from '../filters/filters.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-filter-drawer',
  imports: [MatIconModule, FiltersComponent, CommonModule, MatButtonModule],
  templateUrl: './filter-drawer.component.html',
  styleUrl: './filter-drawer.component.scss',
})
export class FilterDrawerComponent {
  isOpen = false;

  toggleDrawer() {
    this.isOpen = !this.isOpen;
  }

  closeDrawer() {
    this.isOpen = false;
  }
}
