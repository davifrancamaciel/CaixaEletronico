import { TestBed, inject } from '@angular/core/testing';

import { RetiradaService } from './retirada.service';

describe('RetiradaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetiradaService]
    });
  });

  it('should be created', inject([RetiradaService], (service: RetiradaService) => {
    expect(service).toBeTruthy();
  }));
});
