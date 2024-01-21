import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';
import { HttpStudentsService } from '../http-students.service';

@Component({
  selector: 'app-edit-student',
  standalone: true,
  imports: [],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css'
})
export class EditStudentComponent {
  student : Student = new Student(0,"","");

  constructor(private activatedRoute : ActivatedRoute, private httpStudentService : HttpStudentsService){
    this.getData();
  }

  getData(){
    this.activatedRoute.params.subscribe(param=>{
      let studentId = param["id"];

      this.httpStudentService.getById(studentId).subscribe(data=>{
        this.student = data;   
        alert(this.student.name);
      })
    });
  }
}
