import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCarteleraComponent } from './view-cartelera.component';

describe('ViewCarteleraComponent', () => {
  let component: ViewCarteleraComponent;
  let fixture: ComponentFixture<ViewCarteleraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCarteleraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCarteleraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
