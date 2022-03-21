import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallContactsComponent } from './getall-contacts.component';

describe('GetallContactsComponent', () => {
  let component: GetallContactsComponent;
  let fixture: ComponentFixture<GetallContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
