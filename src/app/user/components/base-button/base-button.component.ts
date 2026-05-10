import { Component, EventEmitter, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-base-button',
  standalone: true,
  imports: [],
  templateUrl: './base-button.component.html',
  styleUrl: './base-button.component.scss'
})
export class BaseButtonComponent {

  @Input() label: string = "";

  @Output() buttonClick = new EventEmitter<void>();

  onClick() {
    this.buttonClick.emit();
  }

}
