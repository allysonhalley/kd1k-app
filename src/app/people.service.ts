import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PeopleService {

  peopleUrl = 'http://localhost:3000/people';

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.peopleUrl}`);
  }
}
