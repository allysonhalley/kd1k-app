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
  
  private _listFilter: string = "";
  
  public get listFilter() : string {
    return  this._listFilter;
  }  
  public set listFilter(v : string) {
    this._listFilter = v;
    this.filteredPeople = this.performFilter(v)
  }
  
  filteredPeople: IPerson[] = this.people;

  constructor(private personService: PersonService) { }
  
  ngOnInit() {
    this.getPeople();
  }

  getPeople(){
    //this.people = this.peopleService.listJSON();
    this.personService.getPeople().subscribe(dados => this.people = dados);
  }

  getPerson(id: string){
    this.personService.getPersonById(id);
  }

  savePerson(form: NgForm){
    if (this.person.id !== undefined) {
      this.personService.updatePerson(this.person).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.personService.savePerson(this.person).subscribe(() => {
        this.cleanForm(form);
      })
    }
  }

  editPerson(person: IPerson) {
    this.person = {...person};
  }

  deletePerson(person: IPerson) {
    this.personService.deletePerson(person).subscribe(() => {
      this.getPeople();
    })
  }

  // Dynamic filter
  performFilter(filterBy: string): IPerson[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.people.filter((person: IPerson) =>
      person.name.toLocaleLowerCase().includes(filterBy));
  }
  
  cleanForm(form: NgForm) {
    this.getPeople();
    form.resetForm();
    this.person = {} as IPerson;
  }
  
  /*
  listarJSON(){
    this.filteredPeople = this.peopleService.getPeople();
  }
  */
  
}
