import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfffersComponent } from './offfers.component';

describe('OfffersComponent', () => {
  let component: OfffersComponent;
  let fixture: ComponentFixture<OfffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
