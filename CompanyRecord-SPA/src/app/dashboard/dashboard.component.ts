import { Component, OnInit } from '@angular/core';
import { Company } from '../_models/company';
import { CompanyService } from '../_services/company.service';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  companies: Company[];

  constructor(private companyService: CompanyService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.companies = data['companies'];
    });
  }
}
