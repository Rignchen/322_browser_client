import { Routes } from '@angular/router';
import { WalkDetailComponent } from './pages/walk-detail/walk-detail.component';
import { Error404Component } from './components/error404/error404.component';
import { Error500Component } from './components/error500/error500.component';

export const routes: Routes = [
    {path: "walk/:id", component: WalkDetailComponent},
    {path: '500', component: Error500Component},
    {path: '**' , component: Error404Component},
];
