import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    {phone: "017171", name: 'Debi', userid: "db1", email: "debi@gmai.com", password: "123"},

  ];

  readonly baseurl = "http://localhost:3000/customer/";

  bookToBeUpdated: User = new User();
  bookToBeUpdatedIndex: number = 0;
  constructor(private http: HttpClient) { }
  currentuser : User = new User();
  // getBooks(): Book[] {
  //   return this.books;
  // }


  public userlogin(newuser: User) {
    console.log("hey");
    console.log(newuser);
    this.setToken(newuser.userid);
    return this.http.put(this.baseurl, newuser);
  }

  public userregistration(newuser: User) {
    console.log("hey");
    console.log(this.baseurl, newuser, this.http);
    return this.http.post(this.baseurl, newuser);
  }
  //aa

  logout(){
    this.deleteToken();
  }
  //token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
    return false;
  }

}
