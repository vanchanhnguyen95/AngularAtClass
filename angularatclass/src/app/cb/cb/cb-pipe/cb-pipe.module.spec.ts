import { CbPipeModule } from './cb-pipe.module';

describe('CbPipeModule', () => {
  let cbPipeModule: CbPipeModule;

  beforeEach(() => {
    cbPipeModule = new CbPipeModule();
  });

  it('should create an instance', () => {
    expect(cbPipeModule).toBeTruthy();
  });
});
