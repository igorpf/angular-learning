import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  async handleLogin(event) {
    const a = await this.authService.login({username: event.email, password: event.password});
    debugger;
  }

}
