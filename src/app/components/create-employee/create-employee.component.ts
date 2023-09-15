import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  constructor( private http: HttpClient){}

  public EmployeeForm!: FormGroup;

  ngOnInit() {
    
    this.EmployeeForm = new FormGroup({
      ID: new FormControl('', [Validators.required, Validators.minLength(3)]), 
      NAME: new FormControl('', Validators.required),
      EMAIL: new FormControl('', [Validators.required, Validators.email]),
      MOBILE: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]), 
      EmployeeActivateDate: new FormControl(''),
      EmployeeDOB: new FormControl(''),
      TaskId: new FormControl(''),
      TaskStartDate: new FormControl(''),
      TaskEndDate: new FormControl(''),
    });
  }

  onSubmit(form: FormGroup) {
    console.log(form.value);
    if (form.valid) {
      localStorage.setItem("EmpDetails", JSON.stringify(form.value));
    }
  }
  // onSubmit(form: FormGroup) {
  //   if (form.valid) {
  //     this.http.post('YOUR_SERVER_ENDPOINT', form.value).subscribe(
  //       (response) => {
  //         console.log('Form data sent successfully', response);
  //       },
  //       (error) => {
  //         console.error('Error while sending form data', error);
  //       }
  //     );
  //   }
  // }
}
