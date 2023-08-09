import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-list-all',
  templateUrl: './people-list-all.component.html',
  styleUrls: ['./people-list-all.component.css']
})
export class PeopleListAllComponent implements OnInit {

  people: Array<any> = [];
  pageTitle: string = "Lista de Militares";

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.peopleService.listar().subscribe(dados => this.people = dados);
  }

}
