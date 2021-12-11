import { Component, OnInit} from '@angular/core';
import { deptData } from 'src/app/dataUtil';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  sortIcon = faSort
  deptData!: deptData[]
  config: any
  filter: any
  sortOrder : boolean = false
  key : string = 'id'

  constructor(private localStore: LocalStorageService, private sessionStore: SessionStorageService, private router: Router) {
    
  }

  currPage: number = this.sessionStore.retrieve('currPageDept')

  ngOnInit(){
    this.sessionStore.store("fromEditDepartment", false);
    this.deptData = this.localStore.retrieve("deptArray")
    this.sessionStore.store("currPageDept", this.currPage)
    this.config = {
      "itemsPerPage": 5,
      "currentPage": this.sessionStore.retrieve("currPageDept"),
      "totalItems": this.deptData.length
    };
  }


  pageChanged(event: number){
    this.config.currentPage = event;
    this.sessionStore.store("currPageDept", event)
  }

  
  sort(key: string){
    this.key = key
    this.sortOrder = !this.sortOrder
  }

  onDelete(dept: any){
    if(confirm(`Do you want to delete this record of ${dept.name}`))
    {
      const idx = this.deptData.indexOf(dept)
      this.deptData.splice(idx, 1)
      this.localStore.store("deptArray", this.deptData)
      this.ngOnInit()
    }
  }

  onEdit(dept: any){
    const idx = this.deptData.indexOf(dept)
    this.deptData.splice(idx, 1)
    this.sessionStore.store("deptObjectToEdit", dept)
    this.sessionStore.store("fromEditDepartment", true);
    this.router.navigate(['/addDeptData'])
  }

}
