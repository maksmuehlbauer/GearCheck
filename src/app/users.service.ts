import { inject, Injectable } from '@angular/core';
import { Firestore, collection, addDoc, onSnapshot, where, query, getDocs, updateDoc } from '@angular/fire/firestore';
import { User } from './models/user.model';
import { OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit {

  firestore: Firestore = inject(Firestore)
  user = new User();
  // allUser: any[] = [];

  constructor() {  }

  ngOnInit(): void {
  }


  async addUser() {
    const docRef = await addDoc(this.getUsers(), this.user.toJSON());
    this.user.id = docRef.id
    // add routerlink to login component
  }

  getUsers() {
    return collection(this.firestore, "users");
  }


  // check Firestore collection "users" for a match of name and Password with a simple "where" query
  // With getDocs we retrieve the results from the query "q"
  // if empty, nothing found, otherwise log in continues
  async login(username: string, password: string): Promise<User | null> {
    const q =  query(this.getUsers(), where('name', '==', username), where('password', '==', password));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      console.log('Benutzername oder Passwort ist falsch');
      return null;
    } else {
      // Wenn der Benutzer gefunden wurde
      const userDoc = querySnapshot.docs[0];
      console.log('Benutzer gefunden:', userDoc.data());
      return userDoc.data() as User; // Gibt den Benutzer als User-Objekt zurück
      
    }
  }

  //   readData() {
  //   onSnapshot(this.getUsers(), (users) => {
  //     this.allUser = users.docs.map((doc) => {
  //       return doc.data();
        
  //     })
  //     // console.log(this.allUser)
  //   })
  // }


  readData() {
    onSnapshot(this.getUsers(), (users) => {
      users.forEach(user => {
        console.log(user.data())
      })
        
      })

    
  }
}
