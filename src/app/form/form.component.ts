import { Component, OnInit } from '@angular/core';
import{EmployeeServices} from '../services/employee.services';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [EmployeeServices],
})
export class FormComponent implements OnInit {
  public cities:any=[];
  constructor(private es:EmployeeServices) { }

  ngOnInit() {
    this.es.GetCity().subscribe((res:any)=>{
      this.cities=res;
    })
  }
  onSubmit(value){
    console.log(value);
  }

}
