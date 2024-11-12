import { Component } from '@angular/core';
import { AuthService} from "../service/auth.service";
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import { JwtdecodeService} from "../service/jwtdecode.service";
import { NgIf } from '@angular/common';
import { AlertifyService} from "../service/alertify.service";
import { Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService,
              private jwtService: JwtdecodeService,
              private alertify: AlertifyService,
              private router: Router) { }

  login() {
    this.authService.login(this.loginData.value)
      .subscribe(
        (response) => {
          const token = response.token;
          localStorage.setItem('token', token);
          this.jwtService.decodeAndStoreToken(token);
          this.alertify.success('Login successful');
        },
        (error) => {
          this.alertify.error('Invalid username or password');
        },
        () => {
          this.router.navigate(['/main']);
        }
      );
  }
}

