import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CompanyService } from 'src/app/_services/company.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css']
})
export class AddcompanyComponent implements OnInit {
  @Output() cancelAdd = new EventEmitter();
  model: any = {};

  constructor(private companyService: CompanyService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  register(){
    this.companyService.add(this.model).subscribe(() => {
      this.alertify.success('Successfully added the company');
    }, error => {
      this.alertify.error(error);
    }, () => {
      this.router.navigate(['/dashboard']);
    });
  }

  cancel(){
    this.cancelAdd.emit(false);
    console.log('cancelled');
  }
}
