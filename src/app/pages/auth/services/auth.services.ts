import { HttpClient} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
        providedIn:'root'
})
export class AuthService {
    urlService = environment.authProvider.url;
    private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
    isLoggedIn$ = this._isLoggedIn$.asObservable();

    constructor( private readonly http: HttpClient){
        this.IsAuth();
    }

   Login(credentials: any){
       try {
            return this.http.post(this.urlService + '/login', credentials).pipe(
                tap((response:any) =>{
                    localStorage.setItem('token', response.token);
                    this._isLoggedIn$.next(true);
                })
            );
       } catch (error) {
           console.log(error);
           return null;
       }
   }

   Logout():void{
       localStorage.clear();
       this._isLoggedIn$.next(false);
   }

   IsAuth(): boolean{
    const token = localStorage.getItem('token');
    let valid = false;
    if(!!token){
        const expiration = this.getExpiration();
        const _now = new Date();
        const _expDate = new Date(expiration*1000) //convert expiration into date

        if (_expDate > _now){
            console.log(_expDate);
            valid = true;
        }
    }
    this._isLoggedIn$.next(valid);
    return valid;
   }

   getUser(): any{
    const token = localStorage.getItem('token');
    if(!!token){
        return JSON.parse(atob(token.split('.')[1]));
    }
    return null
   }

   getExpiration(): any {
    const token = localStorage.getItem('token');
    if(!!token){
        return JSON.parse(atob(token.split('.')[1])).exp;
    }
    return null 
   }

}