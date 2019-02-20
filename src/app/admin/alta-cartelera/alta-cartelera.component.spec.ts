import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaCarteleraComponent } from './alta-cartelera.component';

describe('AltaCarteleraComponent', () => {
  let component: AltaCarteleraComponent;
  let fixture: ComponentFixture<AltaCarteleraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaCarteleraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaCarteleraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
