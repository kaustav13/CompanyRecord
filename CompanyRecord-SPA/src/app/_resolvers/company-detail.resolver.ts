import {Injectable} from '@angular/core';
import {Company} from '../_models/company';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { CompanyService } from '../_services/company.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class CompanyDetailResolver implements Resolve<Company>{
    constructor(private companyService: CompanyService,
                private router: Router, private alertify: AlertifyService){}

    resolve(route: ActivatedRouteSnapshot): Observable<Company> {
        return this.companyService.getCompany(route.params['id']).pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/dashboard']);
                return of(null);
            })
        );
    }
}
