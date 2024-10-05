import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    FormsModule,
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatButtonModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  user = new User();
  pwConfirmation: any = ''
  isDisabled = false;
  mailTest = false

  constructor() {
  }


  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      // console.log(this.user)
      // console.log('pw confirmation', this.pwConfirmation)
      // this.isDisabled = true
      ngForm.resetForm();
    } else if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      console.info('send post TEST')
      ngForm.resetForm();
      // this.isDisabled = true
    }
  }
}
