import { Component, OnInit, NgModule } from '@angular/core';
import { PeopleService } from '../people.service';
import { IPerson } from '../person';

@Component({
  selector: 'app-people-list-all',
  templateUrl: './people-list-all.component.html',
  styleUrls: ['./people-list-all.component.css']
})
export class PeopleListAllComponent implements OnInit{

  pageTitle: string = 'Lista de Militares';
  people: Array<IPerson> = [];
  
  private _listFilter: string = "";
  
  public get listFilter() : string {
    return  this._listFilter;
  }  
  public set listFilter(v : string) {
    this._listFilter = v;
    this.filteredPeople = this.performFilter(v)
  }
  
  filteredPeople: IPerson[] = [];

  constructor(private peopleService: PeopleService) {
    this.ngOnInit;
   }

  
  performFilter(filterBy: string): IPerson[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.people.filter((person: IPerson) =>
      person.name.toLocaleLowerCase().includes(filterBy));
  }
  
  listar(){
    //this.people = this.peopleService.listJSON();
    this.peopleService.listar().subscribe(dados => this.people = dados);
  }
  

  listarJSON(){
    this.filteredPeople = this.peopleService.listJSON();
  }
  
  ngOnInit() {
    //this.listarJSON();
    this.listar();
  }
}
