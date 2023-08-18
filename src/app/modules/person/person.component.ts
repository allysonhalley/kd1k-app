import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { IPerson } from './person';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit{

  pageTitle: string = 'Lista de Militares';
  people: IPerson[] = [];
  person = {} as IPerson;
  filteredPeople: IPerson[] = this.people;
  
  private _filter: string = "";
  
  public get filter() : string {
    return  this._filter;
  }  
  public set filter(v : string) {
    this._filter = v;
    this.filteredPeople = this.performFilter(v)
  }
  

  constructor(private personService: PersonService) { }
  
  ngOnInit() {
    this.getPeople();
    this.people = this.performFilter(" ");
  }

  getPeople(){
    //this.people = this.peopleService.listJSON();
    this.personService.getPeople().subscribe(data => this.people = data);
  }
  
  deletePerson(id: string) {    
    this.personService.deletePerson(id).subscribe(() => {
      this.getPeople();
    })

  }

  // Dynamic filter
  performFilter(filterBy: string): IPerson[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.people.filter((person: IPerson) =>
      person.name.toLocaleLowerCase().includes(filterBy));
  }
  
}
