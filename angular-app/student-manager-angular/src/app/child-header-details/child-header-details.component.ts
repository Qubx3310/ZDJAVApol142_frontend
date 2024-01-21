import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-header-details',
  standalone: true,
  imports: [],
  templateUrl: './child-header-details.component.html',
  styleUrl: './child-header-details.component.css'
})
export class ChildHeaderDetailsComponent {
  @Input() studentId = 0;
}
