import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonComponent } from "./person.component";
import { PersonCardComponent } from "./person-card/person-card.component";
import { PersonCardGuard } from "./person-card/person-card.guard";
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PersonComponent,
    PersonCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'people', component: PersonComponent },
      { 
        path: 'people/:id',
        canActivate: [PersonCardGuard],
        component: PersonCardComponent
        }
    ])

  ]
})
export class PersonModule { }
