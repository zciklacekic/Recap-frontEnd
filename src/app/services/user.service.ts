import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { User } from '../models/user';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl='https://localhost:44311/api/';
  constructor(private httpClient: HttpClient) { }
  getUsers():Observable<ListResponseModel<User>>{
    let newApiUrl= this.apiUrl + "users/getall"
    return this.httpClient.get<ListResponseModel<User>>(newApiUrl);
  }
}
