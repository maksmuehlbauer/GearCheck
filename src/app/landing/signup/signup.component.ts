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
// import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { UsersService } from '../../users.service';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


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
    MatButtonModule,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  // user = new User();
  pwConfirmation: any = ''
  isDisabled = false;
  mailTest = false

  // firestore: Firestore = inject(Firestore)
  usersService = inject(UsersService)
  uS = this.usersService.user

  constructor() {
  }

  usingFirebaseAuthService() {

  }


  async saveUser(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      // path for Live Services

    } else if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      try {
          this.usersService.addUser()
          ngForm.resetForm();
          console.info('Send Post Complete')
      } catch (error) {
          console.error('Error add user to Firestore', error)
      }
           
    }
  }

}
