import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IPerson } from './person';
import * as peopleList from './people.json';

@Injectable()
export class PeopleService {

  peopleUrl = 'https://web-production-9e97.up.railway.app/people';
  people: IPerson[] = peopleList;

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.peopleUrl}`);
  }
  listJSON(){
    return peopleList; 
  }
}
