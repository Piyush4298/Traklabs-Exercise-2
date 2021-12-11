import { Component, OnInit} from '@angular/core';
import { empData } from 'src/app/dataUtil';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  sortIcon = faSort
  empData!: empData[]
  config: any
  filter: any
  sortOrder : boolean = false
  key : string = 'id'

  constructor(private localStore: LocalStorageService, private sessionStore: SessionStorageService, private router: Router) {
    
  }

  currPage: number = this.sessionStore.retrieve('currPageEmp')

  ngOnInit(){
    this.sessionStore.store("fromEditEmployee", false);
    this.empData = this.localStore.retrieve("empArray")
    this.sessionStore.store("currPageEmp", this.currPage)
    this.config = {
      "itemsPerPage": 5,
      "currentPage": this.sessionStore.retrieve("currPageEmp"),
      "totalItems": this.empData.length
    };
  }


  pageChanged(event: number){
    this.config.currentPage = event;
    this.sessionStore.store("currPageEmp", event)
  }

  
  sort(key: string){
    this.key = key
    this.sortOrder = !this.sortOrder
  }

  onDelete(emp: any){
    if(confirm(`Do you want to delete this record of Mr./Mrs. ${emp.name}`))
    {
      const idx = this.empData.indexOf(emp)
      this.empData.splice(idx, 1)
      this.localStore.store("empArray", this.empData)
      this.ngOnInit()
    }
  }

  onEdit(emp: any){
    //console.log(emp)
    const idx = this.empData.indexOf(emp)
    this.empData.splice(idx, 1)
    this.sessionStore.store("empObjectToEdit", emp)
    this.sessionStore.store("fromEditEmployee", true);
    this.router.navigate(['/addEmpData'])
  }

}
