import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Student } from '../student';
import { HttpStudentsService } from '../http-students.service';
import { Location } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-student',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css'
})
export class EditStudentComponent {
  student: Student = new Student(0, "", "");
  isErrorValidation = false;
  isUpdateSucccessful = false;
  isUpdateError = false;
  isSubmitting = false;
  initialStudentName = "";
  initialStudentEmail = "";

  constructor(private activatedRoute: ActivatedRoute,
    private httpStudentService: HttpStudentsService, private location: Location) {
    this.getData();
  }

  getData() {
    this.activatedRoute.params.subscribe(param => {
      let studentId = param["id"];

      this.httpStudentService.getById(studentId).subscribe(data => {
        this.student = data;
        this.initialStudentName = this.student.name;
        this.initialStudentEmail = this.student.email;
      })
    });
  }

  getBack() {
    this.location.back();
  }

  setInitialValues(){
    this.student.name = this.initialStudentName;
    this.student.email = this.initialStudentEmail;
  }

  submit(form: NgForm) {
    this.isErrorValidation = false;

    if (form.invalid) {
      this.isErrorValidation = true;
      return;
    }

    this.isSubmitting = true;
    this.httpStudentService.put(this.student).subscribe({
      next : _ =>{
        this.isUpdateSucccessful = true;
        this.isSubmitting = false;

        setTimeout(()=>{
          this.isUpdateSucccessful = false;
        },3000)
      },
      error : _ =>{
        this.isUpdateError = true;
        this.isSubmitting = false;

        setTimeout(()=>{
          this.isUpdateError = false;
        },10000)
      }
    })
  }
}
