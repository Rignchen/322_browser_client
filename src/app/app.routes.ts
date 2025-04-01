import { Routes } from '@angular/router';
import { WalkDetailComponent } from './pages/walk-detail/walk-detail.component';
import { SearchComponent } from './pages/search/search.component';

export const routes: Routes = [
  {path: "walk/:id", component: WalkDetailComponent},
  {path: "search", component: SearchComponent}
];
