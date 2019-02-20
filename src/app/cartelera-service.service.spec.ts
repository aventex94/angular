import { TestBed } from '@angular/core/testing';

import { CarteleraServiceService } from './cartelera-service.service';

describe('CarteleraServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarteleraServiceService = TestBed.get(CarteleraServiceService);
    expect(service).toBeTruthy();
  });
});
