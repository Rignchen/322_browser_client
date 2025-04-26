import { Routes } from '@angular/router';
import { WalkDetailComponent } from './pages/walk-detail/walk-detail.component';
import { PasserSimpleComponent } from './pages/passer-simple/passer-simple.component';

export const routes: Routes = [
  {path: "walk/:id", component: WalkDetailComponent},
  {path: 'passer-simple', component: PasserSimpleComponent},
];
