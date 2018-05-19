import { CbDirectiveModule } from './cb-directive.module';

describe('CbDirectiveModule', () => {
  let cbDirectiveModule: CbDirectiveModule;

  beforeEach(() => {
    cbDirectiveModule = new CbDirectiveModule();
  });

  it('should create an instance', () => {
    expect(cbDirectiveModule).toBeTruthy();
  });
});
