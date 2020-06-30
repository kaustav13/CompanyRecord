import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { RouterModule } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import {AuthService} from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { appRoutes } from './routes';
import { CompanycardComponent } from './dashboard/companycard/companycard.component';
import { JwtModule } from '@auth0/angular-jwt';
import { CompanydetailsComponent } from './dashboard/companydetails/companydetails.component';
import { ExpenseComponent } from './dashboard/expense/expense.component';
import {CompanyDetailResolver} from './_resolvers/company-detail.resolver';
import { CompanyResolver } from './_resolvers/company-dashboard.resolver';
import { AuthGuard } from './_guards/auth.guard';
import { AlertifyService } from './_services/alertify.service';
import { CompanyService } from './_services/company.service';
import { AddcompanyComponent } from './dashboard/addcompany/addcompany.component';

export function getToken(){
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      DashboardComponent,
      CompanycardComponent,
      CompanydetailsComponent,
      ExpenseComponent,
      AddcompanyComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      JwtModule.forRoot({
         config: {
            tokenGetter: getToken,
            whitelistedDomains:['localhost:5000'],
            blacklistedRoutes:['localhost:5000/api/auth']
         }
      }),
      TabsModule.forRoot()
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      CompanyService,
      CompanyDetailResolver,
      CompanyResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
