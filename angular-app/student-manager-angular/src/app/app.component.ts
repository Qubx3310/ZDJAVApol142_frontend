import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StudentListComponent } from "./student-list/student-list.component";
import { AddStudentComponent } from "./add-student/add-student.component";
import { NavigationComponent } from "./navigation/navigation.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, StudentListComponent, AddStudentComponent, NavigationComponent]
})
export class AppComponent {
  title = 'student-manager-angular';
  new_title = 'Zmieniona nazwa';

  onClick(){
    alert('Alert testowy!');
    this.new_title = "Nazwa po kliknieciu";

  }

}
