import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-outlined-btn',
  standalone: true,
  imports: [],
  templateUrl: './outlined-btn.component.html',
  styleUrl: './outlined-btn.component.scss'
})
export class OutlinedBtnComponent {

  @Output() notify = new EventEmitter<string>();

  sendMessage() {
    this.notify.emit("coming from child component")
  }

}
