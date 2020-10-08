import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , BehaviorSubject } from 'rxjs';
import { UserData } from "./userData";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public _HttpClient:HttpClient) { }
  
  userData = new BehaviorSubject(null);

  signUp(data):Observable<any>
  {
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signup', data)

  }
  signIn(data):Observable<any>
  {
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signin', data)
  }

  saveUserData(inUser , token)
  {
    let user = new UserData(inUser.first_name , inUser.last_name , inUser.email , token);
    this.userData.next(user);
  }
}
