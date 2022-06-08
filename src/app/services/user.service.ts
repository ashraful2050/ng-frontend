import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(
    private http: HttpClient
  ) { }

  apiUrl = "http://localhost:8080/api";

  public addUser(formData: any) {
    return this.http.post(`${this.apiUrl}/user/add`, formData);
  }

  public getDataForEdit(paramId : number) {
    return this.http.get(`${this.apiUrl}/user/fetch/${paramId}`);
  }

  public updateData(formData: any) {
    return this.http.put(`${this.apiUrl}/user/update`, formData);
  }

  public viewUser() {
    return this.http.get(`${this.apiUrl}/user/view`);
  }

  public deleteuser(paramId: number) {
    return this.http.delete(`${this.apiUrl}/user/delete/${paramId}`);
  }

}
