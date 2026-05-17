import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-ratings-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ratings-form.component.html',
  styleUrl: './ratings-form.component.scss'
})
export class RatingsFormComponent {

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  })


  submit() {
    console.log(this.form.value)
  }
}
