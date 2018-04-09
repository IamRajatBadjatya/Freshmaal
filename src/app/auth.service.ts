import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class AuthService {
  //to unsubscribe firebase observable
  user$: Observable<firebase.User>;
  returnUrl: string;
  constructor(private afAuth:  AngularFireAuth, private activatedRoute: ActivatedRoute, private router: Router) { 
    this.user$  = afAuth.authState;
  }
  login(){
    this.returnUrl = this.activatedRoute.snapshot.queryParamMap.get('retrunUrl');
    localStorage.setItem('returnUrl', this.returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
      
  }
  logout(){
    this.afAuth.auth.signOut();
  }

}
