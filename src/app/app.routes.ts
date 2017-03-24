import {Routes, RouterModule} from '@angular/router';
import{FormComponent} from './form/form.component';
import{BarComponent} from './bar/bar.component';
import{EmployeeComponent} from './employee/employee.component';
import{NotFoundComponent}    from './not-found/not-found.component';
 const routing: Routes=[
    {path: '', component: BarComponent},
    {path: 'form', component:FormComponent},
    {path: 'employees', component:EmployeeComponent},
    {path: '**', component:NotFoundComponent},
]
export const appRoutes=RouterModule.forRoot(routing);