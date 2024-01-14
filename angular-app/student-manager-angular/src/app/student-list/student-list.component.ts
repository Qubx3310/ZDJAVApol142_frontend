import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  isTableVisible = true;
  students : any[] =[
    { id : 1, name: 'Jan Kowalski', email: 'jan@gmail.com'},
    { id : 2, name: 'Anna Kowalska', email: 'anna@gmail.com'},
    { id : 3, name: 'Anna Kowalska', email: 'anna@gmail.com'},
    { id : 4, name: 'Anna Kowalska', email: 'anna@gmail.com'}
  ];

  toggleDisplay(){
    this.isTableVisible = !this.isTableVisible;
  }
}
