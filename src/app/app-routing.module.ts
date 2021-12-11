import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDeptDataComponent } from './MyComponents/add-dept-data/add-dept-data.component';
import { AddEmpDataComponent } from './MyComponents/add-emp-data/add-emp-data.component';
import { DepartmentComponent } from './MyComponents/department/department.component';
import { EmployeeComponent } from './MyComponents/employee/employee.component';
import { HomeComponent } from './MyComponents/home/home.component';

const routes: Routes = [
  // { path: '**', redirectTo: '/home'},
  // { path: '', redirectTo:'/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'addEmpData', component: AddEmpDataComponent},
  { path: 'addDeptData', component: AddDeptDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
