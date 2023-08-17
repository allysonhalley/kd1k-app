import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { IPerson } from '../components/person/person';
import * as peopleList from '../components/person/people.json';
@Injectable({
  providedIn: 'root'
})
export class PersonService {

  peopleUrl = 'https://web-production-9e97.up.railway.app/people';
  //peopleUrl = 'http://localhost:3000/people';
  //people: IPerson[] = peopleList;

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  
  
  //REST METHODS

  getPeople(){
    return this.httpClient.get<any[]>(`${this.peopleUrl}`);
  }

  getPersonById(id: string): Observable<IPerson>{
    console.log(id);
    return this.httpClient.get<IPerson>(this.peopleUrl + '/' + id)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  savePerson(person: IPerson): Observable<IPerson> {
    return this.httpClient.post<IPerson>(this.peopleUrl, JSON.stringify(person), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  updatePerson(person:IPerson): Observable<IPerson>{
    return this.httpClient.put<IPerson>(this.peopleUrl + '/' + person.id, JSON.stringify(person), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  deletePerson(person: IPerson) {
    return this.httpClient.delete<IPerson>(this.peopleUrl + '/' + person.id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error
  handleError(error: HttpErrorResponse){
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {      
      errorMessage = error.error.message;      
    } else {
      errorMessage = `Codigo do erro: ${error.status}, `+`mensagem: ${error.message}`;      
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  
  /* 
  listJSON(){
      return peopleList; 
  }

  showPerson(id: string){
    return this.httpClient.get<IPerson>(`${this.peopleUrl}${id}`);
  }
  */
}
