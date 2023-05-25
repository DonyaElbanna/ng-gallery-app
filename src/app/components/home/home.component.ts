import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public SService: UsersService) {}

  users: any;
  id: any;

  ngOnInit(): void {
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
  delete(x: any) {
    // console.log(x.target.parentElement.parentElement.getAttribute('id'))
    this.id = x.target.parentElement.parentElement.getAttribute('id');
  }

  confirmDelete() {
    this.users = this.users.filter((u: any) => u.id != this.id);
  }
}
