import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@auth/services/auth.services';
import { ACTIONS } from '@shared/constants/constants';

export interface OptionsLogin{
  id:string;
  label:string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
authForm !: FormGroup;
IsSignIn : boolean = false;
invalidLogin: boolean = false;
@Input() options !: OptionsLogin;

  constructor(
    private readonly fb:FormBuilder,
    private readonly authSvc: AuthService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.initIsSignIn();
  }

  get f(){
    return this.authForm.controls;
  }
  private initForm(): void{
    this.authForm = this.fb.group({
      Username: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      Password: this.fb.control('', [Validators.required, Validators.minLength(3)])
    });
  }

  private initIsSignIn(): void {
    this.IsSignIn = this.options.label === ACTIONS.signIn;
  }

  onSubmit(): void{
    if (this.authForm.invalid){
      return;
    }
    const credentials = this.authForm.value;
    if (this.IsSignIn){

      this.authSvc.Login(credentials)?.subscribe(
        (res:any) =>{
          if (this.authSvc.isLoggedIn$){
            this.router.navigate(['/home']);
          }     
        },
        (error:any) =>{
          this.invalidLogin = true;
          if(error.status !== 404){
            console.log(error);
          }
        }
      )

    }
  
  }

}
