import { Component } from '@angular/core';
import { OptionsLogin } from '@auth/login/login.component';
import { ACTIONS } from '@shared/constants/constants';

@Component({
  selector: 'app-sign-in',
  template: `<app-login [options]="options"></app-login>`,
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  options: OptionsLogin ={
    id: ACTIONS.signIn,
    label: ACTIONS.signIn
  }
 
}
