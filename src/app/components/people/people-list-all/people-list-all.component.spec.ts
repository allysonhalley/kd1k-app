import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleListAllComponent } from './people-list-all.component';

describe('PeopleListAllComponent', () => {
  let component: PeopleListAllComponent;
  let fixture: ComponentFixture<PeopleListAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleListAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleListAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
