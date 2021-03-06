import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.services";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate{

    constructor(private auth: AuthService, private router:Router){}

    canActivate(){
        if (this.auth.IsAuth() && this.auth.isLoggedIn$){
            return true;
        }
        this.router.navigate(['sign-in']);
        return false;
    }

}