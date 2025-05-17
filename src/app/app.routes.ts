import { Routes } from '@angular/router';
import { WalkDetailComponent } from './pages/walk-detail/walk-detail.component';
import { SearchComponent } from './pages/search/search.component';
import { Error404Component } from './components/error404/error404.component';
import { Error500Component } from './components/error500/error500.component';
import { HomeComponent } from './pages/home/home.component';
import { PasserSimpleComponent } from './pages/passer-simple/passer-simple.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: "walk/:id", component: WalkDetailComponent},
    {path: "passer-simple", component: PasserSimpleComponent},
    {path: "search", component: SearchComponent},
    {path: '500',component: Error500Component},
    {path: '**' ,component: Error404Component},
];
