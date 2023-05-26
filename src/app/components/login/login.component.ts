import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(public router: Router) {}
  check = true;
  closed = false;

  validation = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$'),
    ]),
    password: new FormControl(null, [Validators.required]),
  });

  // returns true if valid email
  validEmail() {
    return this.validation.controls.email.valid;
  }

  // returns true if valid password
  validPass() {
    return this.validation.controls.password.valid;
  }

  // redirects to home page if valid login
  login() {
    if (this.validation.valid) {
      this.router.navigate(['/users']);
    } else {
      this.check = false;
    }
  }
}
