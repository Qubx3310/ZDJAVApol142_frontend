import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-content-details',
  standalone: true,
  imports: [],
  templateUrl: './child-content-details.component.html',
  styleUrl: './child-content-details.component.css'
})
export class ChildContentDetailsComponent {
  @Input() email = "";
  @Input() name = "";

  @Input() isEmailShown = false;
}
