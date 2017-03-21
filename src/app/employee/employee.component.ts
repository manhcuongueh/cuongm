import { Component, OnInit } from '@angular/core';
import {EmployeeServices} from '../services/employee.services';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeServices],
})
export class EmployeeComponent implements OnInit {
  public employees:any[];
  constructor(private emser: EmployeeServices) {

   }

  ngOnInit() {
    this.emser.GetList().subscribe((res:any)=>{
      this.employees=res;
    }, error =>{
      console.log(error);
    });
  }

}
