import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './_guards/auth.guard';
import { CompanydetailsComponent } from './dashboard/companydetails/companydetails.component';
import { CompanyDetailResolver } from './_resolvers/company-detail.resolver';
import { CompanyResolver } from './_resolvers/company-dashboard.resolver';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], resolve:{companies: CompanyResolver}},
    {path: 'company/:id', component: CompanydetailsComponent, canActivate: [AuthGuard], resolve: {company: CompanyDetailResolver}},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
