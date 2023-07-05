import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { 
    
  }

  getUsers() {
    return this.http.get<Users>(`https://randomuser.me/api/?seed=angel?&results=100`);
  }
}


