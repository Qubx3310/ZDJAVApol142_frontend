import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-buttons-details',
  standalone: true,
  imports: [],
  templateUrl: './child-buttons-details.component.html',
  styleUrl: './child-buttons-details.component.css'
})
export class ChildButtonsDetailsComponent {
  @Input() btn1Content = "";
  @Input() btn2Content = "";

  @Output() btn1EventEmitter = new EventEmitter();
  @Output() btn2EventEmitter = new EventEmitter();

  btn1Click(){
    console.log("Kliknięto przycisk 1");
    this.btn1EventEmitter.emit();
  }

  btn2Click(){
    console.log("Kliknięto przycisk 2");
    this.btn2EventEmitter.emit();
  }
}
