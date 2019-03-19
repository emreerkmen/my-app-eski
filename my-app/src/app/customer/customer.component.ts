import { Component, OnInit, Input } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customers: Customer[] = [];
  selectedCustomer: Customer;
  @Input() city: string="İstanbul";

  constructor() { }

  ngOnInit() {
    this.customers = [
      { id: 1, firstName: 'Adam', lastName: 'SIMITH', age: 10 },
      { id: 2, firstName: 'Alex', lastName: 'SIMITH', age: 20 },
      { id: 3, firstName: 'Jon', lastName: 'SIMITH', age: 30 },
    ]
  }

  selectCustomer(customer: Customer) {
    alert(customer.firstName + " selected.");
    this.selectedCustomer = customer;
  }

}/**/
