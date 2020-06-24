import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
