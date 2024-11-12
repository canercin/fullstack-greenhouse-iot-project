import { Component } from '@angular/core';
import { AlertifyService } from "../service/alertify.service";
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerData = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    role: new FormControl('', Validators.required)
  });

  constructor(private alertify: AlertifyService,
              private authService: AuthService) {}

  register() {
    console.log(this.registerData.value);
    if (this.registerData.valid) {
      this.authService.register(this.registerData.value).subscribe({
        next: (response) => {
          console.log(response);
            this.alertify.success('Üye kaydı başarılı.');

        },
        error: (error) => {
            this.alertify.error('Üye kaydı başarısız.');

        }
      });
    } else {
      this.alertify.error('Please fill in the form correctly');
    }
  }

  getErrorMessage(controlName: string): string {
    const control = this.registerData.get(controlName);
    if (control && control.touched && control.invalid) {
      if (control.errors?.['required']) {
        return `${controlName.charAt(0).toUpperCase() + controlName.slice(1)} is required`;
      }
      if (control.errors?.['email']) {
        return 'Please enter a valid email.';
      }
      if (control.errors?.['minlength']) {
        return `Password must be at least ${control.errors['minlength'].requiredLength} characters long.`;
      }
    }
    return '';
  }
}
