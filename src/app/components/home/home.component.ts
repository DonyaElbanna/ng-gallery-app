import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.services';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public SService: UsersService) {}

  users: any;
  id: any;
  newUser: any;
  check = false;

  // validating inputs
  validation = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[a-zA-Z ]*$'),
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$'),
    ]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[0-9]+$'),
    ]),
    street: new FormControl(null, [Validators.required]),
    city: new FormControl(null, [Validators.required]),
  });

  ngOnInit(): void {
    // getting all users' data
    this.SService.getAllUsers().subscribe({
      next: (data) => {
        // console.log(data);
        this.users = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  addUser() {
    if (this.validation.valid) {
      console.log('add user', this.validation.value, this.validation.valid);
      this.newUser = {
        id: this.users.length + 1,
        name: this.validation.value.name,
        email: this.validation.value.email,
        phone: this.validation.value.phone,
        address: {
          street: this.validation.value.street,
          city: this.validation.value.city,
        },
      };
      // console.log(this.newUser);
      // this.check = true;
      this.users.push(this.newUser);
    }
  }

  // delete a user from the array
  delete(x: any) {
    // console.log(x.target.parentElement.parentElement.getAttribute('id'))
    this.id = x.target.parentElement.parentElement.getAttribute('id');
  }

  // confirming user's delete
  confirmDelete() {
    this.users = this.users.filter((u: any) => u.id != this.id);
  }

  // validating input for ngClass
  validName() {
    return this.validation.controls.name.valid;
  }

  validEmail() {
    return this.validation.controls.email.valid;
  }

  validPhone() {
    return this.validation.controls.phone.valid;
  }

  validStreet() {
    return this.validation.controls.street.valid;
  }

  validCity() {
    return this.validation.controls.city.valid;
  }
}
