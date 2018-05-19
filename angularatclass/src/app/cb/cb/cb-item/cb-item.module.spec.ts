import { CbItemModule } from './cb-item.module';

describe('CbItemModule', () => {
  let cbItemModule: CbItemModule;

  beforeEach(() => {
    cbItemModule = new CbItemModule();
  });

  it('should create an instance', () => {
    expect(cbItemModule).toBeTruthy();
  });
});
