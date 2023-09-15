import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { ViewEmployeeComponent } from './components/view-employee/view-employee.component';

const routes: Routes = [
  { path: '',component: EmployeeDashboardComponent },
  
  // { path: 'view-employee', component: ViewEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
