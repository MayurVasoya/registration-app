import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_BASE_PATH : string = "http://localhost:4200/api/";

  constructor(private _httpClient : HttpClient) { }
  
  // All User API For Get
  getAllUsers() {
    return this._httpClient.get(this.API_BASE_PATH+'users');
  }
  // All User Id API For Get
  getAllUsersId(id: number) {
    return this._httpClient.get(`${this.API_BASE_PATH}users/$(id)`);
  }

  // Add User
  addUser(user: User) {
    return this._httpClient.post(`${this.API_BASE_PATH}users`,user);
  }

  // Add User
  updateUser(user: User) {
    return this._httpClient.put(`${this.API_BASE_PATH}users/${user.id}`,user);
  }

  // Delete User
  deleteUser(userId : number) {
    return this._httpClient.delete(`${this.API_BASE_PATH}users/${userId}`);
  }
}
