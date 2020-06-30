import { Component, OnInit, Input } from '@angular/core';
import { Company } from 'src/app/_models/company';

@Component({
  selector: 'app-companycard',
  templateUrl: './companycard.component.html',
  styleUrls: ['./companycard.component.css']
})
export class CompanycardComponent implements OnInit {
  @Input() company: Company;

  constructor() { }

  ngOnInit() {
  }

}
