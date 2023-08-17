import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  pageTitle: string = 'WELCOME!';
  headerText: string = 'KD1K-APP the military register perfil application';
  bodyText: string = 'LOGin to application';
  
  constructor() { }

  ngOnInit(): void {
  }

}
