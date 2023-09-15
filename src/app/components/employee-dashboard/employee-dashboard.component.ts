import { Component } from '@angular/core';
import { IEmployeeDetails } from '../../models/employee';
import { dummyEmployeeData } from 'src/app/employeedata/employedata';
import { MatDialog } from '@angular/material/dialog';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarModule,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
// const ELEMENT_DATA: IEmployeeDetails[] = [
//   {
//     ID: 1,
//     NAME: 'John Doe',
//     EMAIL: 'john.doe@example.com',
//     MOBILE: '555-555-5555',
//     EmployeeActivateDate: new Date(2023, 0, 1),
//     EmployeeDOB: new Date(1990, 5, 15),
//     TaskId: 101,
//     TaskStartDate: new Date(2023, 0, 1),
//     TaskEndDate: new Date(2023, 11, 31),
//   },

// ];

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css'],
})
export class EmployeeDashboardComponent {
  filterValue: any;

  constructor(private dialog: MatDialog, public router: Router,
    private http: HttpClient) { }

  public displayedColumns: string[] = [
    'ID',
    'NAME',
    'EMAIL',
    'MOBILE',
    'EmployeeActivateDate',
    'EmployeeDOB',
    'TaskId',
    'TaskStartDate',
    'TaskEndDate',
    'edit',
  ];
  public employeeDataString = localStorage.getItem('EmpDetails');
  public employeeData = JSON.parse(localStorage.getItem('EmpDetails') || '{}');
  // public dataSource = ELEMENT_DATA;
  dataSource: any[] = [];
  public filterText: string = '';

  ngOnInit() {
    this.candidates();
    console.log("localstoragedata", this.employeeData)
  }
  candidates() {
    this.http.get<any[]>('../../assets/employee.json').subscribe((data: any) => {
      this.dataSource = data;
      localStorage.setItem('IEmployeeDetails', JSON.stringify(data));
    });
  }
  matHeaderCellDef: string[] = ['ID', 'NAME', 'EMAIL', 'MOBILE', 'EmployeeActivateDate', 'EmployeeDOB', 'TaskId', 'TaskStartDate', 'TaskEndDate', 'edit'];

  openDialog() {
    const dialogRef = this.dialog.open(CreateEmployeeComponent, {
      width: '800px',
      height: '840px'
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  onEditButtonClick() {
    this.router.navigate(['/create-employee']);
  }
  applyFilter() {
    const filterValue = this.filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
