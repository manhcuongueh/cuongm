import {Routes, RouterModule} from '@angular/router';
import{BarComponent} from './bar/bar.component';
import{EmployeeComponent} from './employee/employee.component';
 const routing: Routes=[
    {path: '', component:BarComponent},
    {path: 'employees', component:EmployeeComponent},
]
export const appRoutes=RouterModule.forRoot(routing);