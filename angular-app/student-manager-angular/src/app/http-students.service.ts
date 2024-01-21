import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class HttpStudentsService {
  private url : string = "https://jsonplaceholder.typicode.com/users";

  constructor(private httpClient : HttpClient) { }

  get(){
    return this.httpClient.get<any[]>(this.url);
  }

  // https://jsonplaceholder.typicode.com/users/2"
   // https://jsonplaceholder.typicode.com/users/3"
  getById(id : number){
    return this.httpClient.get<Student>(this.url + "/" + id);
  }

  post(student : Student){
    return this.httpClient.post(this.url,student);
  }
}
