import { Routes } from '@angular/router';
import { WalkDetailComponent } from './pages/walk-detail/walk-detail.component';

export const routes: Routes = [
  {path: "walk/:id", component: WalkDetailComponent}
];
