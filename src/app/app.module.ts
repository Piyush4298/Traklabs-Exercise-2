import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './MyComponents/employee/employee.component';
import { DepartmentComponent } from './MyComponents/department/department.component';
import { AddEmpDataComponent } from './MyComponents/add-emp-data/add-emp-data.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OrderModule } from 'ngx-order-pipe';
import { AddDeptDataComponent } from './MyComponents/add-dept-data/add-dept-data.component';
import { OAuthModule, OAuthModuleConfig } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DepartmentComponent,
    AddEmpDataComponent,
    HomeComponent,
    AddDeptDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule,
    NgxWebstorageModule.forRoot(),
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FontAwesomeModule,
    OrderModule,
    OAuthModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
