import { Component } from '@angular/core';
import { ChildButtonsDetailsComponent } from "../child-buttons-details/child-buttons-details.component";
import { ChildHeaderDetailsComponent } from "../child-header-details/child-header-details.component";
import { ChildContentDetailsComponent } from "../child-content-details/child-content-details.component";
import { HttpStudentsService } from '../http-students.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { Location } from '@angular/common';

@Component({
    selector: 'app-parent-details-student',
    standalone: true,
    templateUrl: './parent-details-student.component.html',
    styleUrl: './parent-details-student.component.css',
    imports: [ChildButtonsDetailsComponent, ChildHeaderDetailsComponent, ChildContentDetailsComponent]
})
export class ParentDetailsStudentComponent {
  student : Student = new Student(0,"","");

  constructor(private activatedRoute: ActivatedRoute,
    private httpStudentService: HttpStudentsService, private location : Location,
    private router : Router) {
    this.getData();
  }

  getData() {
    this.activatedRoute.params.subscribe(param => {
      let studentId = param["id"];

      this.httpStudentService.getById(studentId).subscribe(data => {
        this.student = data;
      })
    });
  }

  goEditStudent(){
    this.router.navigate(['/edit-student/', this.student.id]);
  }

  goBack(){
    console.log("Logika po stronie rodzica");
    this.location.back();
  }
}
