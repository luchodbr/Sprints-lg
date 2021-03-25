import { Injectable } from '@angular/core';
import {User} from '../Entidades/user';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { merge, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user$:Observable<User>;

  constructor(private afAuth: AngularFireAuth, private afs : AngularFirestore) { 
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user)=>{
        if(user){
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges(); 
        }
        return of(null);
      })
    )
  }
  // mismo del observalbe hecho de otra forma {
  //   // TODO fetch the user from the Firebase backend, then set the user(actioned!)
  //   this.currentUser = this.afAuth.authState
  //     .switchMap((user) => {
  //       if (user) {
  //         return this.db.doc<User>(`users/${user.uid}`).valueChanges();
  //       } else {
  //         return Observable.of(null);
  //       }
  //     });
  // }
  
  async loginGoogle():Promise<User>{
    try {
      const { user} = await this.afAuth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider());
      this.UpdateUserData( user);
      return user;
    } catch (error) {
      console.log('Error->', error);
    }
  }
  async resetPassword(email):Promise<void>{
    try {
      
      return await this.afAuth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log('Error->', error);
    }
  }
  async register(email:string,password:string):Promise<User>{
    try{
      const { user} = await this.afAuth.createUserWithEmailAndPassword(email,password);
      //await this.sendVerification();
      this.UpdateUserData(user);
      return user;
    }
     catch(error){
      console.log('Error->', error);
    }
  }
  async login(email, password):Promise<User>{
    try{
      const {user} = await this.afAuth.signInWithEmailAndPassword(email,password);
      this.UpdateUserData( user);
      return user;
    }
    catch(error){
      console.log('Error->', error);

    }
  }
  async logout():Promise<void>{}
  
  private UpdateUserData(user:User){
    const userRef:AngularFirestoreDocument<User>= this.afs.doc(`users/${user.uid}`);
    const data:User = {
      uid : user.uid,
      email : user.email,
      emailVerified : user.emailVerified,
      displayName : user.displayName
    };
    return userRef.set(data,{merge:true});
  }
  // async sendVerification():Promise<void>{
  //   try {
  //     await this.afAuth.signOut();
      
  //   } catch (error) {
  //     console.log('Error->', error);
  //   }
  // }
}
