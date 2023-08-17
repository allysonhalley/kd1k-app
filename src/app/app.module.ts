import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonService } from "./services/person.service";
import { PersonComponent } from "./components/person/person.component";
import { PersonCardComponent } from "./components/person/person-card/person-card.component";
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonCardComponent,
    WelcomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'people', component: PersonComponent },
      //{ path: 'people/:id', component: PersonComponent },
      { path: 'people/:id', component: PersonCardComponent }
    ])
  ],
  providers: [ PersonService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
