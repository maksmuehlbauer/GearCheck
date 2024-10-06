import { inject, Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  firestore: Firestore = inject(Firestore)
  user = new User()

  constructor() { }


  async addUser() {
    const docRef = await addDoc(this.getUsers(), this.user.toJSON());
  }

  
  getUsers() {
    return collection(this.firestore, "users");
  }

}
