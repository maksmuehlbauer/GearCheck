import { inject, Injectable } from '@angular/core';
import { Firestore, collection, addDoc, onSnapshot, where, query, getDocs, updateDoc, doc, setDoc } from '@angular/fire/firestore';
import { User } from './models/user.model';
import { OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit {

  firestore: Firestore = inject(Firestore)
  user = new User();

  loggedInUser: User[] = [];

  constructor(private router: Router) {  }

  ngOnInit(): void { }


  async addUser() {
    const userDocRef = doc(this.getUsers());  // generate a new unique ID
    this.user.id = userDocRef.id;  // place the unqiue id in the user modell
    await setDoc(userDocRef, this.user.toJSON());
  }


  getUsers() {
    return collection(this.firestore, "users");
  }


  addCategory() {
    const categoryRef = doc(this.firestore, 'users', 'x')
  }


  // check Firestore collection "users" for a match of name and Password with a simple "where" query
  // With getDocs we retrieve the results from the query "q"
  // if empty, nothing found, otherwise log in continues
  async login(username: string, password: string): Promise<User | null> {
    const q =  query(this.getUsers(), where('name', '==', username), where('password', '==', password));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      console.log('username and password dont match');
      return null;
    } else {
      const userDoc = querySnapshot.docs[0];
      const userData = querySnapshot.docs[0].data() as User;
      console.log('user found:', userDoc.data());
      this.loggedInUser.push(userData)
      this.router.navigate(['/maincontainer']);
      return userData
      // return userDoc.data() as User;
            
    }
  }

  getLoggedInUser(): User[] {
    return this.loggedInUsers;
  }

}


  // readData() {
  //   onSnapshot(this.getUsers(), (users) => {
  //     users.forEach(user => {
  //       console.log(user.data())
  //       })
  //     })
  // }

  //   readData() {
  //   onSnapshot(this.getUsers(), (users) => {
  //     this.allUser = users.docs.map((doc) => {
  //       return doc.data();
        
  //     })
  //     // console.log(this.allUser)
  //   })
  // }