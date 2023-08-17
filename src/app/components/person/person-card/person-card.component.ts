import { Component, OnInit } from '@angular/core';
import { PersonService } from "../../../services/person.service";
import { IPerson } from '../person';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {

  pageTitle = "Militar"
  person = {} as IPerson;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getPerson   
  }

  getPerson(person: IPerson){
    this.personService.getPersonById(this.person.id).subscribe(() => {

    })
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

  cleanForm(form: NgForm) {
    form.resetForm();
    this.person = {} as IPerson;
  }

}
