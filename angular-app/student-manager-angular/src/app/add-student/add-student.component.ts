import { Component } from '@angular/core';
import { Student } from '../student';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpStudentsService } from '../http-students.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  student : Student = new Student(0,"","");
  isSubmitting : boolean = false;
  isValidationError = false;
  isSuccessSubmitted = false;

  constructor(private httpStudentService : HttpStudentsService){

  }

  setDefaultValues(){
    this.student.name = "Adam Nowak";
    this.student.email = "nowak@gmail.com";

    this.resetState();
  }

  resetState(){
    this.isValidationError = false;
  }

  submit(form : NgForm){
    this.resetState();

    if (form.invalid){
      this.isValidationError = true;
      return;
    }

    this.isSubmitting = true;

    this.httpStudentService.post(this.student)
    .pipe(delay(2000))
    .subscribe(_=>{
      this.isSuccessSubmitted = true;

      setTimeout(()=>{
        this.isSuccessSubmitted = false;
      },2000);

      this.isSubmitting = false;
      this.student.name = "";
      this.student.email = "";
    });
    
  }
}
