import { Component } from '@angular/core';
import { AuthService } from '@auth/services/auth.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WebAppAuth';
  constructor(public authSrv: AuthService){}
}
