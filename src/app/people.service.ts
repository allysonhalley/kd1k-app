import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PeopleService {

  peopleUrl = 'web-production-9e97.up.railway.app/people';

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.peopleUrl}`);
  }
}
