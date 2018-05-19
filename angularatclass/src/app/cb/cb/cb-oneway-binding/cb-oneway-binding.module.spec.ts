import { CbOnewayBindingModule } from './cb-oneway-binding.module';

describe('CbOnewayBindingModule', () => {
  let cbOnewayBindingModule: CbOnewayBindingModule;

  beforeEach(() => {
    cbOnewayBindingModule = new CbOnewayBindingModule();
  });

  it('should create an instance', () => {
    expect(cbOnewayBindingModule).toBeTruthy();
  });
});
