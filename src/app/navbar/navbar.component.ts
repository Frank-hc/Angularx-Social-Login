import { Component, OnInit } from '@angular/core';
//Agregado
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //agregado
  private user: SocialUser;
  private loggedIn: boolean;
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
    //Agregado
    this.authService.authState.subscribe((user) => {
    this.user = user;
    this.loggedIn = (user != null);
    });
  }
  //agregado
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  } 
 
  signOut(): void {
    this.authService.signOut();
  }
}
