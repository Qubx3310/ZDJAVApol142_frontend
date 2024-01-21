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

  post(student : Student){
    return this.httpClient.post(this.url,student);
  }
}
