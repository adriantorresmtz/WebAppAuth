import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth/services/auth.services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private authSvc: AuthService, private readonly router: Router) { }

  userModel !: any;

  ngOnInit(): void {
    this.getUser();
  }

  onLogout(): void {
    this.authSvc.Logout();
    this.router.navigate(['/sign-in']);
  }

  private getUser():void{
    const user = this.authSvc.getUser();
    try {
      if(!!user){
        this.userModel = user;
      }
    } catch (error) {
      console.log(error); 
    }    
  }

}
