import { Component } from '@angular/core';
import { Student } from '../student';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  student : Student = new Student(0,"","");

  setDefaultValues(){
    this.student.name = "Adam Nowak";
    this.student.email = "nowak@gmail.com"
  }

  submit(){
    console.log(this.student);
  }
}
