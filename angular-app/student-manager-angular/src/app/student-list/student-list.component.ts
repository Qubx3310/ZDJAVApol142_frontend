import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpStudentsService } from '../http-students.service';
import { ReplaceValuePipe } from '../replace-value.pipe';
import { HighlightPhrasePipe } from '../highlight-phrase.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, ReplaceValuePipe, HighlightPhrasePipe, RouterModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  isTableVisible : boolean = true;
  variable = "123";
  students : any[] =[];
  copyStudents : any[] = [];
  isSearchingError = false;
  isStudentRemoved = false;
  removedId : number = 0;

  constructor(private httpStudentService : HttpStudentsService){
    
    // Obsługuje tylko happy-path
    // this.httpStudentService.get().subscribe(results=>{
    //   this.students = results;
    // });

    this.httpStudentService.get().subscribe({
      next: data =>{
        this.students = data;
        this.copyStudents = data;
      },
      error : _ =>{
        console.error("Wystąpił błąd");
        this.isSearchingError = true;
      }
    })
  }

  toggleDisplay(){
    this.isTableVisible = !this.isTableVisible;
  }

  search(phrase : string){
    this.students = this.copyStudents.filter(x=>x.name.toLowerCase().includes(phrase.toLowerCase()) || 
      x.email.toLowerCase().includes(phrase.toLowerCase()));
  }

  delete(id : number){

    this.httpStudentService.delete(id).subscribe(()=>{
      this.isStudentRemoved = true;
      this.removedId = id;
      this.students = this.students.filter(x=>x.id !== id);
      this.copyStudents = this.copyStudents.filter(x=> x.id !== id);
    });
  }
}
