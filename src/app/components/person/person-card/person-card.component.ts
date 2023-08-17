import { Component, OnInit } from '@angular/core';
import { IPerson } from '../person';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from "../../../services/person.service";

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {

  pageTitle = "Military Detail"
  person = {} as IPerson;
  
  constructor(private route: ActivatedRoute, private router: Router, private personService: PersonService) { }
  
  ngOnInit() {
    const id = String(this.route.snapshot.paramMap.get('id'));    
    this.getPerson(id);
    console.log(this.person.id);
    
  }

  onBack(): void {
    this.router.navigate(['/people']);
  }

  getPerson(id: string){
    this.personService.getPersonById(id).subscribe(dados => this.person = dados);
  }

  /*

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
  */

}
