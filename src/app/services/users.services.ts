import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(public client: HttpClient) {}

  public url = 'https://jsonplaceholder.typicode.com/users';

  getAllUsers() {
    return this.client.get(this.url);
  }

  deleteStudent(id:any){
    return this.client.delete(`${this.url}/${id}`)
  }
}
