import { RetiradaModule } from './retirada.module';

describe('RetiradaModule', () => {
  let retiradaModule: RetiradaModule;

  beforeEach(() => {
    retiradaModule = new RetiradaModule();
  });

  it('should create an instance', () => {
    expect(retiradaModule).toBeTruthy();
  });
});
