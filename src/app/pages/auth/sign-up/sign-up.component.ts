import { Component } from '@angular/core';
import { OptionsLogin } from '@auth/login/login.component';
import { ACTIONS } from '@shared/constants/constants';

@Component({
  selector: 'app-sign-up',
  template: `<app-login [options]="options"></app-login>`,
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent  {

  options: OptionsLogin ={
    id: ACTIONS.signUp,
    label: ACTIONS.signUp
  }

}
