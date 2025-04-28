import { Routes } from '@angular/router';
import { WalkDetailComponent } from './pages/walk-detail/walk-detail.component';
import { SearchComponent } from './pages/search/search.component';
import { TempComponent } from './temp/temp.component';

export const routes: Routes = [
  {path: "temp", component: TempComponent},
  {path: "walk/:id n   v       ", component: WalkDetailComponent},
  {path: "search", component: SearchComponent}
];
