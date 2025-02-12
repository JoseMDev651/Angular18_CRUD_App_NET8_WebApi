import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Employee } from '../../Models/employee';
import { EmployeeService } from '../../Services/employee.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  @ViewChild('myModal') model: ElementRef | undefined;
  employeeList: Employee[] = [];
  empService = inject(EmployeeService);
  employeeForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.setFormState();
    this.getEmployees();
  }

  openModal() {
    const empModal = document.getElementById('myModal');
    if (empModal != null) {
      empModal.style.display = 'block';
    }
  }

  closeModal() {
    if (this.model != null) {
      this.model.nativeElement.style.display = 'none';
    }
  }

  getEmployees() {
    this.empService.getAllEmployees().subscribe((res) => {
      this.employeeList = res;
    })
  }
  formValues: any;
  onSubmit() {
    console.log(this.employeeForm.value);
    if (this.employeeForm.invalid) {
      alert('Please fill all fields.')
      return;
    }
    this.formValues = this.employeeForm.value;
    this.empService.addEmployee(this.formValues).subscribe((res) => {
      alert('Employee added succesfully.')
      this.getEmployees();
      this.employeeForm.reset();
      this.closeModal();
    })
  }

  onEdit(Employee: Employee) {
    this.openModal();
    this.employeeForm.patchValue(Employee);
  }

  onDelete(id: number) {
    const isConfirm = confirm("Are you sure you want to delete this employee.");
    if (isConfirm) {
      this.empService.deleteEmployee(id).subscribe((res) => {
        alert("Employee deleted succesfully.");
        this.getEmployees();
      });
    }
  }

  setFormState() {
    this.employeeForm = this.fb.group({
      id: [0],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      age: ['', [Validators.required]],
      salary: ['', [Validators.required]],
      status: [false, [Validators.required]]
    });
  }
}
