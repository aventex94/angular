import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertasCustomComponent } from './alertas-custom.component';

describe('AlertasCustomComponent', () => {
  let component: AlertasCustomComponent;
  let fixture: ComponentFixture<AlertasCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertasCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertasCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
